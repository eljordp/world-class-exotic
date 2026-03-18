import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

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

    return NextResponse.json({ success: true, bookingId: booking.id });
  } catch {
    return NextResponse.json({ error: "Failed to process booking" }, { status: 500 });
  }
}
