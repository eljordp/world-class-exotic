import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const auth = request.cookies.get("admin_auth")?.value;
  if (auth === process.env.ADMIN_PASSWORD) {
    return NextResponse.next();
  }

  // Not authed — redirect to login
  if (request.nextUrl.pathname === "/admin/login") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/admin/login", request.url));
}

export const config = {
  matcher: ["/admin/:path*"],
};
