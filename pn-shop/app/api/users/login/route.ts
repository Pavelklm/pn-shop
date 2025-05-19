import clientPromise from '@/lib/mongodb'
import {
  findUserByEmail,
  generateTokens,
  getDbAndReqBody,
} from '@/lib/utils/api-routes'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { db, reqBody } = await getDbAndReqBody(clientPromise, req)

  const user = await findUserByEmail(db, reqBody.email)

  if (!user) {
    return NextResponse.json({
      warningMessage: 'User with this Email not found',
    })
  }

  if (!bcrypt.compareSync(reqBody.password, user.password)) {
    return NextResponse.json({
      warningMessage: 'Wrong password',
    })
  }

  const tokens = generateTokens(user.name, reqBody.email)

  const response = NextResponse.json(tokens)

  response.cookies.set('tokenJWT', tokens.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24,
  })

  return response
}
