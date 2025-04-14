'use server'

import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'

export const isMobileDevice = async () => {
  const allHeaders = headers()
  const ua = (await allHeaders).get('user-agent')

  const device = new UAParser(ua || '').getDevice()
  return device.type === 'mobile'
}
