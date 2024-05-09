import clientPromise from '@/lib/mongodb'
import {
  createUserAndGenerateTokens,
  findUserByEmail,
  generateTokens,
  getDbAndReqBody,
} from '@/lib/utils/api-routes'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    console.log('oauth')
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req)
    const user = await findUserByEmail(db, reqBody.email)

    if (!user) {
      const tokens = await createUserAndGenerateTokens(db, reqBody)
      return NextResponse.json(tokens)
    }

    const tokens = generateTokens(user.name, reqBody.email)
    console.log(tokens)
    return NextResponse.json(tokens)
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
