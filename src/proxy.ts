import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Legacy URLs Google still knows about. /zoho and /goto never existed as pages;
// their topics are covered on /servicios.
const LEGACY: Record<string, string> = {
  "/index": "/",
  "/zoho": "/servicios",
  "/goto": "/servicios",
};

// Google also crawled mixed-case variants (/Nosotros, /Servicios), which 404'd.
// Send them to the canonical lowercase URL.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lower = pathname.toLowerCase();

  const target = LEGACY[lower] ?? (pathname !== lower ? lower : null);

  if (target === null) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = target;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Skip API routes, Next internals and any path with a file extension (public assets keep their casing).
  matcher: "/((?!api|_next|.*\\..*).*)",
};
