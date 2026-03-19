import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { put } from "@vercel/blob";
import { getResend } from "@/lib/email";
import { cars } from "@/data/cars";
import { differenceInDays, parseISO } from "date-fns";

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

    // --- Real pricing calculation ---
    const car = cars.find((c) => c.id === vehicle);
    const carName = car ? car.name : vehicle;
    const dailyRate = car ? car.dailyRate : 0;

    const rawDays = differenceInDays(parseISO(returnDate), parseISO(pickupDate));
    const days = rawDays < 1 ? 1 : rawDays;

    const subtotal = dailyRate * days;
    const deliveryFee = delivery ? 150 : 0;
    const insuranceFee = needsInsurance ? 75 * days : 0;
    const total = subtotal + deliveryFee + insuranceFee;

    // --- Generate booking ID early (needed for blob paths) ---
    const bookingId = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

    // --- Upload files to Vercel Blob ---
    let licenseUrl: string | null = null;
    let insuranceUrl: string | null = null;

    try {
      if (license instanceof File && license.size > 0) {
        const blob = await put(`bookings/${bookingId}/license-${license.name}`, license, { access: "public" });
        licenseUrl = blob.url;
      }
      if (insurance instanceof File && insurance.size > 0) {
        const blob = await put(`bookings/${bookingId}/insurance-${insurance.name}`, insurance, { access: "public" });
        insuranceUrl = blob.url;
      }
    } catch (blobErr) {
      console.warn("⚠️ Blob upload failed:", blobErr);
      // continue — don't block booking if blob fails
    }

    const booking = {
      id: bookingId,
      name,
      phone,
      email,
      age,
      vehicle,
      carName,
      dailyRate,
      days,
      subtotal,
      deliveryFee,
      insuranceFee,
      total,
      pickupDate,
      returnDate,
      delivery,
      deliveryAddress: delivery ? deliveryAddress : null,
      serviceType: serviceType || "Personal Rental",
      needsInsurance,
      notes: notes || null,
      licenseUrl,
      insuranceUrl,
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

    // --- Helper: format dollar amounts ---
    const fmt = (n: number) => `$${n.toLocaleString("en-US")}`;

    // Send email notifications — wrapped in try/catch so failure never blocks the booking response
    try {
      const deliveryLine = delivery
        ? `Yes (+$150) — ${deliveryAddress || "address not provided"}`
        : "No";

      // Build pricing breakdown rows (shared between both emails)
      const pricingRowsHtml = `
        <tr style="border-bottom:1px solid #222;">
          <td style="padding:10px 0;color:#888;">Rate</td>
          <td style="padding:10px 0;color:#FFFFFF;">${fmt(dailyRate)}/day &times; ${days} day${days !== 1 ? "s" : ""} = ${fmt(subtotal)}</td>
        </tr>
        ${deliveryFee > 0 ? `
        <tr style="border-bottom:1px solid #222;">
          <td style="padding:10px 0;color:#888;">Delivery Fee</td>
          <td style="padding:10px 0;color:#FFFFFF;">${fmt(deliveryFee)}</td>
        </tr>` : ""}
        ${insuranceFee > 0 ? `
        <tr style="border-bottom:1px solid #222;">
          <td style="padding:10px 0;color:#888;">Insurance</td>
          <td style="padding:10px 0;color:#FFFFFF;">$75/day &times; ${days} day${days !== 1 ? "s" : ""} = ${fmt(insuranceFee)}</td>
        </tr>` : ""}
        <tr>
          <td style="padding:10px 0;color:#888;font-weight:bold;">Total</td>
          <td style="padding:10px 0;color:#C9A84C;font-size:18px;font-weight:bold;">${fmt(total)}</td>
        </tr>
      `;

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
                <td style="padding:10px 0;color:#FFFFFF;font-weight:bold;">${carName}</td>
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
              ${pricingRowsHtml}
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

      // Build owner pricing breakdown (plain table style)
      const ownerPricingRows = `
        <tr><td style="padding:8px 0;color:#555;">Rate</td><td style="padding:8px 0;">${fmt(dailyRate)}/day &times; ${days} day${days !== 1 ? "s" : ""} = ${fmt(subtotal)}</td></tr>
        ${deliveryFee > 0 ? `<tr><td style="padding:8px 0;color:#555;">Delivery Fee</td><td style="padding:8px 0;">${fmt(deliveryFee)}</td></tr>` : ""}
        ${insuranceFee > 0 ? `<tr><td style="padding:8px 0;color:#555;">Insurance</td><td style="padding:8px 0;">$75/day &times; ${days} day${days !== 1 ? "s" : ""} = ${fmt(insuranceFee)}</td></tr>` : ""}
        <tr><td style="padding:8px 0;color:#555;font-weight:bold;">Total</td><td style="padding:8px 0;"><strong style="font-size:16px;">${fmt(total)}</strong></td></tr>
      `;

      // Build document links for owner
      const docLinks = [
        licenseUrl ? `<tr><td style="padding:8px 0;color:#555;">Driver's License</td><td style="padding:8px 0;"><a href="${licenseUrl}" style="color:#1a73e8;">View File</a></td></tr>` : "",
        insuranceUrl ? `<tr><td style="padding:8px 0;color:#555;">Insurance Card</td><td style="padding:8px 0;"><a href="${insuranceUrl}" style="color:#1a73e8;">View File</a></td></tr>` : "",
      ].join("");

      // Email B — Owner notification
      const ownerEmail = process.env.OWNER_EMAIL ?? "bookings@worldclassexotic.com";
      await getResend().emails.send({
        from: "World Class Exotic <onboarding@resend.dev>",
        to: ownerEmail,
        subject: `New Booking — ${carName} | ${pickupDate} | ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;color:#111;">
            <h2 style="margin-top:0;">New Booking Request</h2>
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr><td style="padding:8px 0;width:40%;color:#555;">Name</td><td style="padding:8px 0;"><strong>${name}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#555;">Phone</td><td style="padding:8px 0;"><strong>${phone}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#555;">Email</td><td style="padding:8px 0;">${email}</td></tr>
              <tr><td style="padding:8px 0;color:#555;">Age</td><td style="padding:8px 0;">${age || "Not provided"}</td></tr>
              <tr><td style="padding:8px 0;color:#555;">Vehicle</td><td style="padding:8px 0;"><strong>${carName}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#555;">Pickup Date</td><td style="padding:8px 0;"><strong>${pickupDate}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#555;">Return Date</td><td style="padding:8px 0;"><strong>${returnDate}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#555;">Service Type</td><td style="padding:8px 0;">${booking.serviceType}</td></tr>
              <tr><td style="padding:8px 0;color:#555;">Delivery</td><td style="padding:8px 0;">${deliveryLine}</td></tr>
              <tr><td style="padding:8px 0;color:#555;">Insurance Needed</td><td style="padding:8px 0;">${needsInsurance ? "Yes" : "No"}</td></tr>
              ${ownerPricingRows}
              ${docLinks}
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
