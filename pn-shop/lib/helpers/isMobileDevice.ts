'use server'

import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'

export const isMobileDevice = () => {
  const { get } = headers()
  const ua = get('user-agent')

  console.log('isMobileDevice server', ua)

  const device = new UAParser(ua || '').getDevice()

  console.log('isMobileDevice device', device.type)

  if (device.type === 'mobile') return true

  if (device.type === undefined) return false

  return false
}
