/* eslint-disable max-len */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
'use client'
import Logo from '@/components/elements/Logo/Logo'
import { AllowedLangs } from '@/constants/lang'
import { closeBurger, openBurger } from '@/context/burger'
import { useAppDispatch, useAppSelector } from '@/context/hooks'
import { setLang } from '@/context/lang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { triggerLoginCheck } from '@/lib/utils/common'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import AuthPopup from '../AuthPopup/AuthPopup'
import Burger from './Burger'
import { HeaderButtons } from './HeaderButtons'
import HeaderLinks from './HeaderLinks'
import HeaderSwitch from './HeaderSwitch'

export const Header = () => {
  const isAuthPopup = useAppSelector ((state) => state.auth.isAuthPopupOpen)
  const dispatch = useAppDispatch()
  const [isChecked, setIsChecked] = useState(true)
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const isMedia900 = useMediaQuery(900)
  const isBurgerOpen = useAppSelector((state) => state.burger.isBurgerOpen)

  const handleToggleBurger = () => {
    dispatch(isBurgerOpen ? closeBurger() : openBurger())
  }

  const handleToggle = () => {
    const newLang = isChecked ? 'ru' : 'en'
    setIsChecked(!isChecked)
    dispatch(setLang(newLang))
    localStorage.setItem('lang', newLang)
  }

  useEffect(() => {
    const langInLocalStorage = localStorage.getItem('lang')
    setIsChecked(langInLocalStorage === 'en')
    if (langInLocalStorage) {
      dispatch(setLang(langInLocalStorage as AllowedLangs))
    }
  }, [dispatch])

  useEffect(() => {
    triggerLoginCheck(dispatch)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth])

  return (
    <header className='header'>
      <div className='container header__container'>
        {!isMedia900 ? (
          <HeaderLinks />
        ) : (
          <div>
            <div className={`${isBurgerOpen ? 'burger active' : 'burger'}`} onClick={handleToggleBurger}>
              <span />
            </div>
            <Burger isChecked={isChecked} handleToggle={handleToggle} />
          </div>
        )}
        <div className='header__logo'>
          <Logo />
        </div>
        <div className='header__right'>
          {!isMedia900 && <HeaderSwitch isChecked={isChecked} handleToggle={handleToggle} />}
          <HeaderButtons />
        </div>
      </div>
      <AnimatePresence>
        {isAuthPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
            className='list-reset header-auth-popup'
          >
            <AuthPopup />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
