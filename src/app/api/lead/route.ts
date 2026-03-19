import { NextResponse } from "next/server";
import { getResend } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, carInterest } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    // Log the lead (visible in server console / Vercel logs)
    console.log("🚗 NEW LEAD:", {
      name,
      phone,
      carInterest: carInterest || "Not specified",
      timestamp,
    });

    // Send owner notification — wrapped in try/catch so failure never blocks the response
    try {
      const ownerEmail = process.env.OWNER_EMAIL ?? "bookings@worldclassexotic.com";
      await getResend().emails.send({
        from: "World Class Exotic <onboarding@resend.dev>",
        to: ownerEmail,
        subject: `📩 New Lead — ${name} | ${carInterest || "No car specified"}`,
        html: `
          <div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;color:#111;">
            <h2 style="margin-top:0;">New Lead</h2>
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr><td style="padding:8px 0;width:40%;color:#555;">Name</td><td style="padding:8px 0;"><strong>${name}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#555;">Phone</td><td style="padding:8px 0;"><strong>${phone}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#555;">Car Interest</td><td style="padding:8px 0;">${carInterest || "Not specified"}</td></tr>
              <tr><td style="padding:8px 0;color:#555;">Timestamp</td><td style="padding:8px 0;font-size:13px;color:#888;">${timestamp}</td></tr>
            </table>
          </div>
        `,
      });
    } catch (emailErr) {
      console.warn("⚠️ Lead email notification failed:", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
