import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Check if token exists in cookies
  const token = req.cookies.get('token')?.value;

  if (!token) {
    // Redirect to login if no token
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Continue if token exists
  return NextResponse.next();
}

// Apply middleware only to certain routes (dashboard, profile, etc.)
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};
