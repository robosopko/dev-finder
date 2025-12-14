import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");

  // Redirect unauthenticated users trying to access dashboard
  if (isOnDashboard && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  // Matcher for routes that should run middleware
  matcher: ["/dashboard/:path*"],
};
