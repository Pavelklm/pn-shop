/* eslint-disable max-len */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
'use client'
import Logo from '@/components/elements/Logo/Logo'
import { AllowedLangs } from '@/constants/lang'
import { closeBurger, openBurger } from '@/context/burger'
import { useAppDispatch, useAppSelector } from '@/context/hooks'
import { setLang } from '@/context/lang'
import { setLoadingUserTrue } from '@/context/user'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { handleSignIn } from '@/lib/utils/auth'
import { triggerLoginCheck } from '@/lib/utils/common'
import { AnimatePresence, motion } from 'framer-motion'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Burger from '../../elements/Header/Burger'
import { HeaderButtons } from '../../elements/Header/HeaderButtons'
import HeaderButtonsItemLogin from '../../elements/Header/HeaderButtonsItemLogin'
import HeaderButtonsItemSearch from '../../elements/Header/HeaderButtonsItemSearch'
import HeaderButtonsItemShoppingCart from '../../elements/Header/HeaderButtonsItemShoppingCart'
import HeaderLinks from '../../elements/Header/HeaderLinks'
import HeaderSwitch from '../../elements/Header/HeaderSwitch'
import AuthPopup from '../AuthPopup/AuthPopup'

export const Header = () => {
  const isAuthPopup = useAppSelector ((state) => state.auth.isAuthPopupOpen)
  const dispatch = useAppDispatch()
  const [isChecked, setIsChecked] = useState(true)
  const isMedia1000 = useMediaQuery(1000)
  const isMedia400 = useMediaQuery(400)
  const isBurgerOpen = useAppSelector((state) => state.burger.isBurgerOpen)
  const isSearchOpen = useAppSelector((state) => state.search.isSearchOpen)
  const handleToggleBurger = () => {
    dispatch(isBurgerOpen ? closeBurger() : openBurger())
  }

  const currentLang = localStorage.getItem('lang') as AllowedLangs

  const handleToggle = () => {
    const newLang = isChecked ? 'en' : 'ru'
    setIsChecked(!isChecked)
    dispatch(setLang(newLang))
    localStorage.setItem('lang', newLang)
  }

  useEffect(() => {
    const langInLocalStorage = localStorage.getItem('lang')
    setIsChecked(langInLocalStorage === 'ru')
    if (langInLocalStorage) {
      dispatch(setLang(langInLocalStorage as AllowedLangs))
    }
  }, [dispatch])

  useEffect(() => {
    triggerLoginCheck(dispatch)
    setLoadingUserTrue()
    getSession().then((session: Session | null) => {
      if (session && session.user && session.user.email && session.user.name) {
        handleSignIn(
          session.user.email,
          '',
          true,
          dispatch,
          session.user.image || '',
          session.user.name,
          currentLang,
        )
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header className='header'>
      <div className='container header__container'>
        {!isMedia1000 ? (
          <HeaderLinks />
        ) : (
          <div className='header__burger'>
            <div className={`${isBurgerOpen ? 'burger active' : 'burger'}`} onClick={handleToggleBurger}>
              <span />
            </div>
            <Burger isChecked={isChecked} handleToggle={handleToggle} />
            <Logo className='logo' />
          </div>
        )}
        {!isMedia1000 &&
          <div className='header__logo'>
            <Logo className='logo' />
          </div>}
        {isMedia1000 && <HeaderButtonsItemSearch />}
        <div className='header__right'>
          {!isMedia1000 &&
            <>
              {!isSearchOpen && <HeaderSwitch isChecked={isChecked} handleToggle={handleToggle} />}
              <HeaderButtons className='header' />
            </>
          }
          {isMedia1000 &&
            <div className='header__buttons'>
              <HeaderButtonsItemLogin className={'header'} />
              { !isMedia400 &&
                <HeaderButtonsItemShoppingCart className={'header'} />
              }</div>}
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
