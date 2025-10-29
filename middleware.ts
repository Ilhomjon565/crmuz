import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl
  
  // Development va production hostname'larni tekshirish
  const isLocalhost = hostname.includes('localhost')
  const mainDomain = isLocalhost ? 'localhost:3000' : 'educrm.uz'
  
  // Subdomain'ni aniqlash
  let subdomain = ''
  
  if (isLocalhost) {
    // Localhost uchun: teacher.localhost:3000
    const parts = hostname.split('.')
    if (parts.length >= 2 && parts[0] !== 'localhost') {
      subdomain = parts[0]
    }
  } else {
    // Production uchun: teacher.educrm.uz
    const parts = hostname.split('.')
    if (parts.length >= 3) {
      subdomain = parts[0]
    }
  }
  
  // Subdomain'ga qarab yo'naltirish
  if (subdomain === 'teacher') {
    // teacher.educrm.uz -> /teacher
    if (!url.pathname.startsWith('/teacher')) {
      return NextResponse.rewrite(new URL(`/teacher${url.pathname}`, request.url))
    }
  } else if (subdomain === 'manager') {
    // manager.educrm.uz -> /manager
    if (!url.pathname.startsWith('/manager')) {
      return NextResponse.rewrite(new URL(`/manager${url.pathname}`, request.url))
    }
  } else if (subdomain === 'director') {
    // director.educrm.uz -> /director
    if (!url.pathname.startsWith('/director')) {
      return NextResponse.rewrite(new URL(`/director${url.pathname}`, request.url))
    }
  }
  
  // Path-based routing'ni ham qo'llab-quvvatlash (backward compatibility)
  // educrm.uz/teacher, educrm.uz/manager, educrm.uz/director
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|sw.js).*)',
  ],
}

