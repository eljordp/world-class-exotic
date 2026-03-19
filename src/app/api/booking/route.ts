import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { getResend } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const age = formData.get("age") as string;
    const vehicle = formData.get("vehicle") as string;
    const pickupDate = formData.get("pickupDate") as string;
    const returnDate = formData.get("returnDate") as string;
    const delivery = formData.get("delivery") === "true";
    const deliveryAddress = formData.get("deliveryAddress") as string;
    const serviceType = formData.get("serviceType") as string;
    const needsInsurance = formData.get("needsInsurance") === "true";
    const notes = formData.get("notes") as string;
    const license = formData.get("license") as File | null;
    const insurance = formData.get("insurance") as File | null;

    if (!name || !phone || !email || !vehicle || !pickupDate || !returnDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const booking = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name,
      phone,
      email,
      age,
      vehicle,
      pickupDate,
      returnDate,
      delivery,
      deliveryAddress: delivery ? deliveryAddress : null,
      serviceType: serviceType || "Personal Rental",
      needsInsurance,
      notes: notes || null,
      licenseUploaded: license instanceof File && license.size > 0 ? license.name : null,
      insuranceUploaded: insurance instanceof File && insurance.size > 0 ? insurance.name : null,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    // Save to Vercel KV
    try {
      // Push to vehicle-specific list of booked ranges
      const rangeKey = `availability:${vehicle}`;
      const existing = await kv.get<{ pickupDate: string; returnDate: string }[]>(rangeKey) ?? [];
      await kv.set(rangeKey, [...existing, { pickupDate, returnDate }]);

      // Save full booking record
      await kv.set(`booking:${booking.id}`, booking);

      // Add to bookings index
      await kv.lpush("bookings:index", booking.id);
    } catch (kvErr) {
      // KV not configured yet — log and continue (site still works)
      console.warn("⚠️ KV not configured — booking not persisted:", kvErr);
    }

    console.log("📋 NEW BOOKING REQUEST:", booking);

    // Send email notifications — wrapped in try/catch so failure never blocks the booking response
    try {
      const deliveryLine = delivery
        ? `Yes (+$150) — ${deliveryAddress || "address not provided"}`
        : "No";

      // Rough estimate: $500/day placeholder — real pricing logic can be added later
      const estimatedTotal = delivery ? "Includes $150 delivery fee" : "Contact us for pricing";

      // Email A — Customer confirmation
      await getResend().emails.send({
        from: "World Class Exotic <onboarding@resend.dev>",
        to: email,
        subject: "Your World Class Exotic Booking Request — We Got It",
        html: `
          <div style="background:#0A0A0A;color:#FFFFFF;font-family:Arial,sans-serif;padding:40px;max-width:600px;margin:0 auto;border-radius:8px;">
            <h1 style="color:#C9A84C;margin-bottom:8px;">World Class Exotic</h1>
            <p style="color:#888;margin-top:0;font-size:14px;">Los Angeles &amp; Bay Area</p>

            <p style="font-size:18px;margin-top:32px;">Hi ${name},</p>
            <p style="font-size:16px;color:#CCCCCC;">Your booking request has been received! Here's your summary:</p>

            <table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
              <tr style="border-bottom:1px solid #222;">
                <td style="padding:10px 0;color:#888;width:40%;">Vehicle</td>
                <td style="padding:10px 0;color:#FFFFFF;font-weight:bold;">${vehicle}</td>
              </tr>
              <tr style="border-bottom:1px solid #222;">
                <td style="padding:10px 0;color:#888;">Pickup Date</td>
                <td style="padding:10px 0;color:#FFFFFF;">${pickupDate}</td>
              </tr>
              <tr style="border-bottom:1px solid #222;">
                <td style="padding:10px 0;color:#888;">Return Date</td>
                <td style="padding:10px 0;color:#FFFFFF;">${returnDate}</td>
              </tr>
              <tr style="border-bottom:1px solid #222;">
                <td style="padding:10px 0;color:#888;">Service Type</td>
                <td style="padding:10px 0;color:#FFFFFF;">${booking.serviceType}</td>
              </tr>
              <tr style="border-bottom:1px solid #222;">
                <td style="padding:10px 0;color:#888;">Delivery</td>
                <td style="padding:10px 0;color:#FFFFFF;">${deliveryLine}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#888;">Estimated Total</td>
                <td style="padding:10px 0;color:#C9A84C;font-weight:bold;">${estimatedTotal}</td>
              </tr>
            </table>

            <div style="background:#111;border-left:3px solid #C9A84C;padding:16px;border-radius:4px;margin:24px 0;">
              <p style="margin:0;color:#CCCCCC;">We'll confirm your booking within <strong style="color:#C9A84C;">1 hour</strong> via phone or email.</p>
            </div>

            <p style="color:#CCCCCC;">Questions? Call or text us anytime — we're here to make your experience seamless.</p>

            <hr style="border:none;border-top:1px solid #222;margin:32px 0;" />
            <p style="color:#555;font-size:13px;margin:0;">World Class Exotic &nbsp;|&nbsp; Los Angeles &amp; Bay Area</p>
          </div>
        `,
      });

      // Email B — Owner notification
      const ownerEmail = process.env.OWNER_EMAIL ?? "bookings@worldclassexotic.com";
      await getResend().emails.send({
        from: "World Class Exotic <onboarding@resend.dev>",
        to: ownerEmail,
        subject: `🚗 New Booking — ${vehicle} | ${pickupDate} | ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;color:#111;">
            <h2 style="margin-top:0;">New Booking Request</h2>
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr><td style="padding:8px 0;width:40%;color:#555;">Name</td><td style="padding:8px 0;"><strong>${name}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#555;">Phone</td><td style="padding:8px 0;"><strong>${phone}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#555;">Email</td><td style="padding:8px 0;">${email}</td></tr>
              <tr><td style="padding:8px 0;color:#555;">Age</td><td style="padding:8px 0;">${age || "Not provided"}</td></tr>
              <tr><td style="padding:8px 0;color:#555;">Vehicle</td><td style="padding:8px 0;"><strong>${vehicle}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#555;">Pickup Date</td><td style="padding:8px 0;"><strong>${pickupDate}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#555;">Return Date</td><td style="padding:8px 0;"><strong>${returnDate}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#555;">Service Type</td><td style="padding:8px 0;">${booking.serviceType}</td></tr>
              <tr><td style="padding:8px 0;color:#555;">Delivery</td><td style="padding:8px 0;">${deliveryLine}</td></tr>
              <tr><td style="padding:8px 0;color:#555;">Insurance Needed</td><td style="padding:8px 0;">${needsInsurance ? "Yes" : "No"}</td></tr>
              <tr><td style="padding:8px 0;color:#555;">Estimated Total</td><td style="padding:8px 0;"><strong>${estimatedTotal}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#555;">Notes</td><td style="padding:8px 0;">${booking.notes || "None"}</td></tr>
              <tr><td style="padding:8px 0;color:#555;">Booking ID</td><td style="padding:8px 0;font-size:12px;color:#888;">${booking.id}</td></tr>
            </table>
          </div>
        `,
      });
    } catch (emailErr) {
      console.warn("⚠️ Email notification failed:", emailErr);
    }

    return NextResponse.json({ success: true, bookingId: booking.id });
  } catch {
    return NextResponse.json({ error: "Failed to process booking" }, { status: 500 });
  }
}
