import PagesLayout from '@/components/elements/Layouts/PagesLayouts'
import type { Metadata } from 'next'
import './globalStyles/auth-popup.css'
import './globalStyles/globals.css'

export const metadata: Metadata = {
  title: 'pn-shop',
  description: 'test shop',
  icons: {
    icon: '/img/LogoKLM.svg',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <PagesLayout>{children}</PagesLayout>
}
