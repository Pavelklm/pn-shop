import { Footer } from '@/components/modules/Footer/Footer'
import { Header } from '@/components/modules/Header/Header'
import { closeBurger } from '@/context/burger'
import { useAppDispatch, useAppSelector } from '@/context/hooks'
import { setMobile } from '@/context/mobile'
import { isMobileFx } from '@/lib/utils/api/isMobile'
import { closePopup } from '@/lib/utils/auth'
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isAuthPopup = useAppSelector((state) => state.auth.isAuthPopupOpen)
  const dispatch = useAppDispatch()
  const isBurgerOpen = useAppSelector((state) => state.burger.isBurgerOpen)
  const handleCloseBurger = () => {
    dispatch(closeBurger())
  }

  const isMobile = useAppSelector((state) => state.mobile.isMobile)

  useEffect(() => {
    const checkIsMobile = async () => {
      const result = await dispatch(isMobileFx()).unwrap()
      dispatch(setMobile(result))
    }

    checkIsMobile()
  }, [dispatch])

  return (
    <html
      className={
        `${(!isMobile && isAuthPopup) || isBurgerOpen ? 'overflow-hidden' : ''}` ||
        `${(isMobile && isAuthPopup) || isBurgerOpen ? 'overflow-mobile-hidden' : ''}`
      }
      lang='en'
    >
      <body>
        <div className={`${isBurgerOpen ? 'burger__overlay' : ''}`} />
        <div
          className={`${isBurgerOpen ? 'burger__outside' : ''}`}
          onClick={handleCloseBurger}
        />
        <div
          className={`overlay ${isAuthPopup ? 'overlay-active' : ''}`}
          onClick={() => closePopup(dispatch)}
        />
        <Toaster position='top-center' reverseOrder={false} />
        <Header />
        <main className='main'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
