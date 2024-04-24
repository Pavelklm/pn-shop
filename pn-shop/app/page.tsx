'use client'
import { Header } from '@/components/modules/Header/Header'
import { useAppDispatch, useAppSelector } from '@/context/hooks'
import { closePopup } from '@/lib/utils/auth'
import { EarthoOneProvider } from '@eartho/one-client-react'
import { Toaster } from 'react-hot-toast'
import './globalStyles/globals.css'
import './globalStyles/header-profile.css'

export default function Home() {
  const isAuthPopup = useAppSelector((state) => state.auth.isAuthPopupOpen)
  const dispatch = useAppDispatch()

  return (
    <>
      <EarthoOneProvider
        domain={'https://pn-shop-er19ejh29-pavelklms-projects.vercel.app/'}
        clientId={`${process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}`}
      >
        <body className={`${isAuthPopup ? 'overflow-hidden' : ''}`}>
          <main>
            <div
              className={`overlay ${isAuthPopup ? 'overlay-active' : ''}`}
              onClick={() => closePopup(dispatch)}
            />
            <Toaster position='top-center' reverseOrder={false} />
            <Header />
          </main>
        </body>
      </EarthoOneProvider>
    </>
  )
}
