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
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req)
    const user = await findUserByEmail(db, reqBody.email)

    if (!user) {
      const tokens = await createUserAndGenerateTokens(db, reqBody)
      return NextResponse.json(tokens)
    }

    const tokens = generateTokens(user.name, reqBody.email)
    const image = reqBody.image
    await db
      .collection('users')
      .updateOne({ email: reqBody.email }, { $set: { image } })
    return NextResponse.json(tokens)
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
