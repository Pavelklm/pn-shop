import PagesLayout from '@/components/elements/Layouts/PagesLayouts'
import type { Metadata } from 'next'
// prettier-ignore
import './globalStyles/globals.css'
// prettier-ignore
import './globalStyles/advantage.css'
import './globalStyles/auth-popup.css'
import './globalStyles/burger.css'
import './globalStyles/footer.css'
import './globalStyles/header-profile.css'
import './globalStyles/header.css'
import './globalStyles/profile.css'
import './globalStyles/search.css'
import './globalStyles/spinner.css'
import './globalStyles/subscribe.css'
import './globalStyles/top-board.css'

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
