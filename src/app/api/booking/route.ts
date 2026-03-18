import { NextResponse } from "next/server";

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
    const pickupLocation = formData.get("pickupLocation") as string;
    const serviceType = formData.get("serviceType") as string;
    const notes = formData.get("notes") as string;
    const license = formData.get("license") as File | null;
    const insurance = formData.get("insurance") as File | null;

    if (!name || !phone || !email || !vehicle || !pickupDate || !returnDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the booking (visible in Vercel logs)
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
      licenseUploaded: license ? `${license.name} (${(license.size / 1024).toFixed(1)}KB)` : "Not provided",
      insuranceUploaded: insurance ? `${insurance.name} (${(insurance.size / 1024).toFixed(1)}KB)` : "Not provided",
      timestamp: new Date().toISOString(),
    });

    // TODO: Store license + insurance files in Vercel Blob or S3:
    // import { put } from "@vercel/blob";
    // const { url: licenseUrl } = await put(`licenses/${name}-${Date.now()}.pdf`, license, { access: "private" });
    // const { url: insuranceUrl } = await put(`insurance/${name}-${Date.now()}.pdf`, insurance, { access: "private" });

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
