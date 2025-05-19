import { getFullDateAndTime } from '@/lib/helpers/getFullDateAndTime'
import clientPromise from '@/lib/mongodb'
import {
  findUserByEmail,
  getDbAndReqBody,
  updateUser,
} from '@/lib/utils/api-routes'
import { NextResponse } from 'next/server'

export async function PATCH(req: Request) {
  const { db, reqBody } = await getDbAndReqBody(clientPromise, req)

  const user = await findUserByEmail(db, reqBody.user.user.email)

  if (!user) {
    return NextResponse.json({
      warningMessage: 'User with this Email not found',
    })
  }

  if (reqBody.name || reqBody.lastName || reqBody.phone || reqBody.email) {
    await updateUser(
      db,
      reqBody.user.user.email,
      reqBody?.name,
      reqBody?.lastName,
      reqBody?.email,
      reqBody?.phone,
      getFullDateAndTime()
    )

    return NextResponse.json({
      status: 200,
      message: 'Subscription updated',
    })
  }
  return NextResponse.json({
    status: 500,
    errorMessage: 'Something went wrong',
  })
}
