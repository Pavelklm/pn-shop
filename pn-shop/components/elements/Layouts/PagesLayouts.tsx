'use client'

import StoreProvider from '@/app/StoreProvider'
import { SessionProvider } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Layout from './Layout'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <html lang='en'>
        <body />
      </html>
    )
  }

  return (
    <StoreProvider>
      <SessionProvider>
        <Layout>{children}</Layout>
      </SessionProvider>
    </StoreProvider>
  )
}

export default PagesLayout
