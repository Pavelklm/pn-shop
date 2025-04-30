// import { NextRequest, NextResponse } from 'next/server'

// export function middleware(req: NextRequest) {
//   const token = req.localStorage.get('token')?.value // или другой способ проверки логина
//   const isProfilePath = req.nextUrl.pathname.startsWith('/Profile')

//   if (isProfilePath && !token) {
//     return NextResponse.redirect(new URL('/login', req.url))
//   }

//   return NextResponse.next()
// }
