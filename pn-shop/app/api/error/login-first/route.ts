import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const response = NextResponse.redirect(new URL('/', req.url))

  response.cookies.set('flash_error', 'unauthorized', {
    path: '/',
    httpOnly: false,
    maxAge: 60 * 60 * 24,
  })

  return response
}
