import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("access_token");
  const path = request.nextUrl.pathname;

  if (!cookie && path !== "/login" && path !== "/signup") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if ((cookie && path === "/login") || (cookie && path === "/signup")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return null;
}

export const config = {
  matcher: ["/signup/:path*", "/login", "/"],
};
