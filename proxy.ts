import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const DISABLED_ROUTES = ['/notebook'];

export function proxy(request: NextRequest) {
  if (DISABLED_ROUTES.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}


export const config = {
    matcher: ['/notebook/:path*'],
};
