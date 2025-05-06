import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('next-auth.session-token')?.value
  const isProtectedPath = ['/Profile', '/Wish_List'].some((path) =>
    req.nextUrl.pathname.startsWith(path)
  )

  if (isProtectedPath && !token) {
    const response = NextResponse.redirect(new URL('/', req.url))

    response.cookies.set('flash_error', 'unauthorized', {
      path: '/',
      httpOnly: false,
      maxAge: 60,
    })

    return response
  }

  return NextResponse.next()
}
