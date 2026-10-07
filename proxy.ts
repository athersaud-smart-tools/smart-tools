import { NextRequest, NextResponse } from "next/server";

const LEGACY_HOST = "smart-tools-eta.vercel.app";
const PRIMARY_HOST = "smartedgetools.com";

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname !== LEGACY_HOST) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = PRIMARY_HOST;
  url.port = "";

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: "/:path*",
};
