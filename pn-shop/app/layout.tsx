import type { Metadata } from 'next'
import StoreProvider from './StoreProvider'
import './globalStyles/auth-popup.css'
import './globalStyles/globals.css'

export const metadata: Metadata = {
  title: 'pn-shop',
  description: 'test shop',
  icons: {
    icon: 'img/logoKLM.svg',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang='en'>
        <>{children}</>
      </html>
    </StoreProvider>
  )
}
