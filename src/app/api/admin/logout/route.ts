import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect(
    new URL(
      "/admin/login",
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://world-class-exotic.vercel.app"
    )
  );
  response.cookies.delete("admin_auth");
  return response;
}
