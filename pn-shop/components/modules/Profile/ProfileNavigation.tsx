'use client'

import DashboardSvg from '@/components/elements/Profile__svg/Dashboard_svg'
import { useLang } from '@/hooks/useLang'
import { useUserLogout } from '@/hooks/useLogout'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Logout_svg from '../../elements/Profile__svg/Logout_svg'
import OrderHistorySvg from '../../elements/Profile__svg/OrderHistory_svg'
import Settings_svg from '../../elements/Profile__svg/Settings_svg'
import ShoppingCartSvg from '../../elements/Profile__svg/ShoppingCart'
import WishListSvg from '../../elements/Profile__svg/WishList_svg'

export default function ProfileNavigation() {
  const pathname = usePathname()
  const router = useRouter()
  const handleLogout = useUserLogout()
  const { lang, translations } = useLang()

  useEffect(() => {
    if (pathname === '/Profile') {
      router.replace('/Profile/Dashboard')
    }
  }, [pathname, router])

  return (
    <div className='profile__navigation'>
      <div className='profile__navigation__container'>
        <nav className='profile__navigation__list'>
          <div className='profile__navigation__list__title'>
            {translations[lang].ProfileNavigation.navigation}
          </div>
          <ul className='profile__navigation__list__inner list-reset'>
            <li
              className={`profile__navigation__list_item  ${
                pathname === '/Profile' || pathname === '/Profile/Dashboard'
                  ? 'active'
                  : ''
              }`}
            >
              <DashboardSvg className='profile__navigation__list_item_icon' />
              <Link
                className='profile__navigation__list_item_link link-reset'
                href='/Profile/Dashboard'
              >
                {translations[lang].ProfileNavigation.dashboard}
              </Link>
            </li>
            <li
              className={`profile__navigation__list_item  ${
                pathname === '/Profile/Order_History' ? 'active' : ''
              }`}
            >
              <OrderHistorySvg className='profile__navigation__list_item_icon' />
              <Link
                className='profile__navigation__list_item_link link-reset'
                href='/Profile/Order_History'
              >
                {translations[lang].ProfileNavigation.order_history}
              </Link>
            </li>
            <li
              className={`profile__navigation__list_item  ${
                pathname === '/Profile/Wish-List' ? 'active' : ''
              }`}
            >
              <WishListSvg className='profile__navigation__list_item_icon_2' />
              <Link
                className='profile__navigation__list_item_link link-reset'
                href='/Profile/Wish-List'
              >
                {translations[lang].ProfileNavigation.wishlist}
              </Link>
            </li>
            <li
              className={`profile__navigation__list_item  ${
                pathname === '/Profile/Shopping-Cart' ? 'active' : ''
              }`}
            >
              <ShoppingCartSvg className='profile__navigation__list_item_icon_2' />
              <Link
                className='profile__navigation__list_item_link link-reset'
                href='/Profile/Shopping-Cart'
              >
                {translations[lang].ProfileNavigation.shopping_cart}
              </Link>
            </li>
            <li
              className={`profile__navigation__list_item  ${
                pathname === '/Profile/Settings' ? 'active' : ''
              }`}
            >
              <Settings_svg className='profile__navigation__list_item_icon' />
              <Link
                className='profile__navigation__list_item_link link-reset'
                href='/Profile/Settings'
              >
                {translations[lang].ProfileNavigation.settings}
              </Link>
            </li>
            <li
              className={`profile__navigation__list_item ${pathname === '/Profile/log-out' ? 'active' : ''}`}
            >
              <Logout_svg className='profile__navigation__list_item_icon' />
              <button
                className='profile__navigation__list_item_link btn-reset'
                onClick={handleLogout}
              >
                {translations[lang].ProfileNavigation.logout}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
