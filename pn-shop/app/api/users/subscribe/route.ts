import { getFullDateAndTime } from '@/lib/helpers/getFullDateAndTime'
import clientPromise from '@/lib/mongodb'
import {
  findUserByEmail,
  findUserBySubEmail,
  getAuthRouteData,
  parseJwt,
  updateSubscribeUser,
} from '@/lib/utils/api-routes'
import { IUser } from '@/types/IUser'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { db, token } = await getAuthRouteData(clientPromise, req, false)

    const userEmail = parseJwt(token as string).email

    const user = (await findUserByEmail(
      db,
      userEmail
    )) as unknown as IUser | null

    const { subEmail } = await req.json()
    const foundUserSubEmail = await findUserBySubEmail(db, subEmail)

    if (user && foundUserSubEmail === null) {
      await updateSubscribeUser(db, user.email, subEmail, getFullDateAndTime)
      return NextResponse.json({ status: 200, message: 'Subscription updated' })
    }

    if (!user) {
      return NextResponse.json({
        status: 404,
        warningMessage: 'User with this email not found',
      })
    }

    if (foundUserSubEmail) {
      return NextResponse.json({
        status: 404,
        warningMessage: 'User with this email already subscribed',
      })
    }

    return NextResponse.json({
      status: 500,
      errorMessage: 'Something went wrong',
    })
  } catch (error) {
    return NextResponse.json({
      status: 500,
      errorMessage: (error as Error).message,
    })
  }
}