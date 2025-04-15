'use client'

import DashboardSvg from '@/components/elements/Profile__svg/Dashboard_svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ProfileNavigation() {
  const pathname = usePathname()

  return (
    <div className='profile__navigation'>
      <div className='container profile__navigation__container'>
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
