import { NextResponse } from 'next/server'

export async function POST() {
  const response = new NextResponse(JSON.stringify({ message: 'Logged out' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  response.cookies.set('tokenJWT', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: new Date(0),
  })

  return response
}
