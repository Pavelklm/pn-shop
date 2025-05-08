import { isMobileDevice } from '@/lib/helpers/isMobileDevice'
import { NextResponse } from 'next/server'

export async function POST() {
  const isMobile = await isMobileDevice()

  return NextResponse.json({ isMobile })
}
