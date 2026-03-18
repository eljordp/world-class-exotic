import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, vehicle } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    // Log the lead (visible in server console / Vercel logs)
    console.log("🚗 NEW LEAD:", {
      name,
      phone,
      vehicle: vehicle || "Not specified",
      timestamp: new Date().toISOString(),
    });

    // TODO: Connect to your preferred service:
    // - Resend / SendGrid for email notifications
    // - Twilio for SMS notifications
    // - Google Sheets API for lead tracking
    // - CRM webhook (HubSpot, etc.)
    //
    // Example with a webhook:
    // await fetch(process.env.LEAD_WEBHOOK_URL!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, phone, vehicle, source: "hero-form" }),
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
