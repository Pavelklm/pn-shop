import PagesLayout from '@/components/elements/Layouts/PagesLayouts'
import type { Metadata } from 'next'
import './globalStyles/auth-popup.css'
import './globalStyles/burger.css'
import './globalStyles/globals.css'
import './globalStyles/header-profile.css'
import './globalStyles/header.scss'
import './globalStyles/search.css'

export const metadata: Metadata = {
  title: 'pn-shop',
  description: 'pn-shop',
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
