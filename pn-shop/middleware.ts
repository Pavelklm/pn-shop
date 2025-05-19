import { jwtVerify } from 'jose'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

const protectedPaths = ['/Profile', '/Wish_List']

const verifyCustomToken = async (token: string | undefined) => {
  if (!token) return null
  try {
    const secret = new TextEncoder().encode(
      process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET
    )
    const { payload } = await jwtVerify(token, secret)
    return payload
  } catch (err) {
    return null
  }
}
console.log(process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET)

export async function middleware(req: NextRequest) {
  const isProtected = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  )

  const tokenNextAuth = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const tokenJWT = req.cookies.get('tokenJWT')?.value
  const customPayload = await verifyCustomToken(tokenJWT)

  const isAuthenticated = Boolean(tokenNextAuth || customPayload)

  if (isProtected && !isAuthenticated) {
    const url = req.nextUrl.clone()
    url.pathname = '/'

    const res = NextResponse.redirect(url)
    res.cookies.set('flash_error', 'unauthorized', {
      path: '/',
      httpOnly: false,
      maxAge: 60,
    })

    return res
  }

  return NextResponse.next()
}
