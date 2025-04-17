'use client'

import DashboardSvg from '@/components/elements/Profile__svg/Dashboard_svg'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Logout_svg from '../Profile__svg/Logout_svg'
import OrderHistorySvg from '../Profile__svg/OrderHistory_svg'
import Settings_svg from '../Profile__svg/Settings_svg'
import ShoppingCartSvg from '../Profile__svg/ShoppingCart'
import WishListSvg from '../Profile__svg/WishList_svg'

export default function ProfileNavigation() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname === '/Profile') {
      router.replace('/Profile/Dashboard')
    }
  }, [pathname, router])

  return (
    <div className='profile__navigation'>
      <div className='profile__navigation__container'>
        <nav className='profile__navigation__list'>
          <div className='profile__navigation__list__title'>Navigation</div>
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
                Dashboard
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
                Order History
              </Link>
            </li>
            <li
              className={`profile__navigation__list_item  ${
                pathname === '/Profile/Wishlist' ? 'active' : ''
              }`}
            >
              <WishListSvg className='profile__navigation__list_item_icon_2' />
              <Link
                className='profile__navigation__list_item_link link-reset'
                href='/Profile/Wishlist'
              >
                Wishlist
              </Link>
            </li>
            <li
              className={`profile__navigation__list_item  ${
                pathname === '/Profile/Shopping_Cart' ? 'active' : ''
              }`}
            >
              <ShoppingCartSvg className='profile__navigation__list_item_icon_2' />
              <Link
                className='profile__navigation__list_item_link link-reset'
                href='/Profile/Shopping_Cart'
              >
                Shopping Cart
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
                Settings
              </Link>
            </li>
            <li
              className={`profile__navigation__list_item ${pathname === '/Profile/log-out' ? 'active' : ''}`}
            >
              <Logout_svg className='profile__navigation__list_item_icon' />
              <Link
                className='profile__navigation__list_item_link link-reset'
                href='/Profile/log-out'
              >
                Log out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
