'use client'

import StoreProvider from '@/app/StoreProvider'
import { EarthoOneProvider } from '@eartho/one-client-react'
import { useEffect, useState } from 'react'
import Layout from './Layout'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? (
    <StoreProvider>
      <EarthoOneProvider
        domain={'localhost:3000'}
        clientId={`${process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}`}
      >
        <Layout>{children}</Layout>
      </EarthoOneProvider>
    </StoreProvider>
  ) : (
    <html lang='en'>
      <body>
        <></>
      </body>
    </html>
  )
}

export default PagesLayout
