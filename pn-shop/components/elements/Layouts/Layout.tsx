import { Header } from '@/components/modules/Header/Header'
import { useAppDispatch, useAppSelector } from '@/context/hooks'
import { closePopup } from '@/lib/utils/auth'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isAuthPopup = useAppSelector((state) => state.auth.isAuthPopupOpen)
  const dispatch = useAppDispatch()

  return (
    <html lang='en'>
      <body className={`${isAuthPopup ? 'overflow-hidden' : ''}`}>
        <div
          className={`overlay ${isAuthPopup ? 'overlay-active' : ''}`}
          onClick={() => closePopup(dispatch)}
        />
        <Toaster position='top-center' reverseOrder={false} />
        <Header />
        {children}
      </body>
    </html>
  )
}

export default Layout
