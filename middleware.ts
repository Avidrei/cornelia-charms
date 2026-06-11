import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // 1. Initialize an immutable blank state response interceptor
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // 2. Instantiate the Supabase Edge Client engine
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Sync cookies straight into the request headers object
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set({ name, value, ...options }));
          
          // Recreate the interceptor instance to lock the values
          response = NextResponse.next({
            request,
          });

          // Write outward cookie strings safely to prevent Vercel 500 errors
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set({ name, value, ...options }));
        },
      },
    }
  );

  // IMPORTANT: Do NOT use auth.getSession() here. getUser() is secure and self-validating.
  const { data: { user } } = await supabase.auth.getUser();

  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');
  const isLoginRoute = request.nextUrl.pathname.startsWith('/login');

  // GATING RULE 1: If an unauthenticated user tries to break into the dashboard, redirect to login
  if (!user && isDashboardRoute) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // GATING RULE 2: If an already logged-in admin hits /login, push them straight to the dashboard
  if (user && isLoginRoute) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  return response;
}

// Ensure the middleware completely skips static project assets
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};