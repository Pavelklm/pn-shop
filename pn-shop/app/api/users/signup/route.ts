import clientPromise from '@/lib/mongodb'
import {
  createUserAndGenerateTokens,
  findUserByEmail,
  findUserBySubEmail,
  getDbAndReqBody,
} from '@/lib/utils/api-routes'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req)

    const user = await findUserByEmail(db, reqBody.email)

    const userSubEmail = await findUserBySubEmail(db, reqBody.email)

    if (user || userSubEmail) {
      return NextResponse.json({
        warningMessage: 'User with this Email already exists',
      })
    }

    const tokens = await createUserAndGenerateTokens(db, reqBody)
    return NextResponse.json(tokens)
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
