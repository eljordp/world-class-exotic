import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, age, vehicle, pickupDate, returnDate, pickupLocation, serviceType, notes } = body;

    if (!name || !phone || !email || !vehicle || !pickupDate || !returnDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the booking (visible in server console / Vercel logs)
    console.log("📋 NEW BOOKING REQUEST:", {
      name,
      phone,
      email,
      age,
      vehicle,
      pickupDate,
      returnDate,
      pickupLocation: pickupLocation || "TBD",
      serviceType: serviceType || "Self-Drive",
      notes: notes || "None",
      timestamp: new Date().toISOString(),
    });

    // TODO: Connect to your preferred service:
    // - Resend / SendGrid for email confirmation to customer + notification to you
    // - Google Sheets API for booking tracking
    // - Calendly / Cal.com for calendar integration
    // - Stripe for deposit collection
    // - DocuSign API for contract sending
    //
    // Example with a webhook:
    // await fetch(process.env.BOOKING_WEBHOOK_URL!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ ...body, source: "booking-form" }),
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 }
    );
  }
}
