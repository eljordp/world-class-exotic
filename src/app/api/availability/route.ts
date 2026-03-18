import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { eachDayOfInterval, parseISO, format } from "date-fns";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const vehicleId = searchParams.get("vehicleId");

  if (!vehicleId) {
    return NextResponse.json({ blockedDates: [] });
  }

  try {
    const ranges = await kv.get<{ pickupDate: string; returnDate: string }[]>(
      `availability:${vehicleId}`
    ) ?? [];

    // Expand all booked ranges into individual blocked dates
    const blockedDates: string[] = [];
    for (const { pickupDate, returnDate } of ranges) {
      const days = eachDayOfInterval({
        start: parseISO(pickupDate),
        end: parseISO(returnDate),
      });
      days.forEach((d) => blockedDates.push(format(d, "yyyy-MM-dd")));
    }

    return NextResponse.json({ blockedDates: [...new Set(blockedDates)] });
  } catch {
    // KV not configured — return empty (all dates available)
    return NextResponse.json({ blockedDates: [] });
  }
}
