/* eslint-disable max-len */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
'use client'
import HeaderSvgLogin from '@/components/elements/Header__svg/Header__svg__login'
import HeaderSvgSearch from '@/components/elements/Header__svg/Header__svg__search'
import HeaderSvgShopingCart from '@/components/elements/Header__svg/Header__svg__shopping__cart'
import HeaderSvgWishList from '@/components/elements/Header__svg/Header__svg__wishList'
import Logo from '@/components/elements/Logo/Logo'
import { AllowedLangs } from '@/constants/lang'
import { openAuthPopup } from '@/context/auth'
import { useAppDispatch, useAppSelector } from '@/context/hooks'
import { setLang } from '@/context/lang'
import { useLang } from '@/hooks/useLang'
import stylesSwitch from '@/styles/Switch.module.css'
import styles from '@/styles/header/index.module.scss'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AuthPopup from '../AuthPopup/AuthPopup'
import HeaderProfile from './HeaderProfile'

export const Header = () => {
  const { lang, translations } = useLang()
  const isAuthPopup = useAppSelector ((state) => state.auth.isAuthPopupOpen)
  const dispatch = useAppDispatch()
  const [isChecked, setIsChecked] = useState(true)
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const loginCheckSpinner = false

  const handleToggle = () => {
    const newLang = isChecked ? 'ru' : 'en'
    setIsChecked(!isChecked)
    dispatch(setLang(newLang))
    localStorage.setItem('lang', newLang)
  }

  const handleOpenAuthPopup = () => {
    dispatch(openAuthPopup())
  }

  useEffect(() => {
    const langInLocalStorage = localStorage.getItem('lang')
    setIsChecked(langInLocalStorage === 'en')
    if (langInLocalStorage) {
      dispatch(setLang(langInLocalStorage as AllowedLangs))
    }
  }, [dispatch])

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.header__container}`}>
          <ul className={`list-reset ${styles.header__links}`}>
            <li className={styles.header__links__item}>
              <Link className={`link-reset ${styles.header__links__item__text}`} href='/'>
                {translations[lang].header.Home}
              </Link>
            </li>
            <li className={styles.header__links__item}>
              <Link className={`link-reset ${styles.header__links__item__text}`} href='/Shop'>
                {translations[lang].header.Shop}
              </Link>
            </li>
            <li className={styles.header__links__item}>
              <Link className={`link-reset ${styles.header__links__item__text}`} href='/Pages'>
                {translations[lang].header.Pages}
              </Link>
            </li>
            <li className={styles.header__links__item}>
              <Link className={`link-reset ${styles.header__links__item__text}`} href={'/Blog'}>
                {translations[lang].header.Blog}
              </Link>
            </li>
            <li className={styles.header__links__item}>
              <Link className={`link-reset ${styles.header__links__item__text}`} href={'/About'}>
                {translations[lang].header.About}
              </Link>
            </li>
          </ul>
          <div className={styles.header__logo}>
            <Logo />
          </div>
          <div className={styles.header__right}>
            <div className={stylesSwitch.switch}>
              <label className={stylesSwitch.switch__wrapper}>
                <input
                  type='checkbox'
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <span className={stylesSwitch.switch__slider} />
                <div />
              </label>
            </div>
            <ul className={`list-reset ${styles.header__buttons}`}>
              <li className={styles.header__buttons__item}>
                <button className={`btn-reset align-items-center ${styles.header__buttons__item__search}`}>
                  <HeaderSvgSearch className={styles.header__buttons__item__search__svg} />
                </button>
              </li>
              <li className={styles.header__buttons__item}>
                <Link
                  className={styles.header__buttons__item__wish_list}
                  href={'/wish-list'}
                >
                  <HeaderSvgWishList className={` align-items-center ${styles.header__buttons__item__wish_list__svg}`} />
                </Link>
              </li>
              <li className={styles.header__buttons__item}>
                <Link
                  className={styles.header__buttons__item__shopping_cart}
                  href={'/shopping-cart'}
                >
                  <HeaderSvgShopingCart className={` align-items-center ${styles.header__buttons__item__shopping_cart__svg}`} />
                </Link>
              </li>
              <li className={styles.header__buttons__item}>

                {isAuth ? (
                  <HeaderProfile />
                ) : (
                  loginCheckSpinner ?
                    <FontAwesomeIcon icon={faSpinner} spin /> :
                    (
                      <button
                        className={`btn-reset align-items-center ${styles.header__buttons__item__login}`}
                        onClick={handleOpenAuthPopup}
                      >
                        <HeaderSvgLogin className={styles.header__buttons__item__login__svg} />
                      </button>
                    )
                )}
              </li>
            </ul>
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
    </>
  )
}
