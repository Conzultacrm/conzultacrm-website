import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Google crawled mixed-case variants (/Nosotros, /Servicios) and /index, which
// 404'd or duplicated the home page. Send them to the canonical lowercase URL.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const target =
    pathname === "/index" ? "/" : pathname !== pathname.toLowerCase() ? pathname.toLowerCase() : null;

  if (target === null) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = target;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Skip API routes, Next internals and any path with a file extension (public assets keep their casing).
  matcher: "/((?!api|_next|.*\\..*).*)",
};
