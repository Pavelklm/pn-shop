import clientPromise from '@/lib/mongodb'
import {
  findUserByEmail,
  getAuthRouteData,
  parseJwt,
} from '@/lib/utils/api-routes'
import { IUser } from '@/types/IUser'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { db, validatedTokenResult, token } = await getAuthRouteData(
      clientPromise,
      req,
      false
    )

    if (validatedTokenResult.status !== 200) {
      return NextResponse.json(validatedTokenResult)
    }

    const user = (await findUserByEmail(
      db,
      parseJwt(token as string).email
    )) as unknown as IUser

    return NextResponse.json({
      status: 200,
      message: 'token is valid',
      user: {
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        phone: user.phone,
        _id: user?._id,
        image: user?.image,
        role: user?.role,
        subscribed: user?.subscribed,
        subEmail: user?.subEmail,
      },
    })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

export const dynamic = 'force-dynamic'
