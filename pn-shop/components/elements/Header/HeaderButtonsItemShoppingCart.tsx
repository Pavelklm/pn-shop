import HeaderSvgShopingCart from '@/components/elements/Header__svg/Header__svg__shopping__cart'
import { openAuthPopup } from '@/context/auth'
import { closeBurger } from '@/context/burger'
import { useAppDispatch } from '@/context/hooks'
import { useLang } from '@/hooks/useLang'
import { useUser } from '@/hooks/useUser'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'

interface Props {
  className: string
  children?: React.ReactNode
}

const HeaderButtonsItemShoppingCart: React.FC<Props> = ({
  className,
  children,
}) => {
  const { user } = useUser()
  const dispatch = useAppDispatch()
  const { translations, lang } = useLang()

  const handleOpenAuthPopup = () => {
    dispatch(openAuthPopup())
    toast.error(translations[lang].errors.register_first)
  }

  const handleCloseBurger = () => {
    dispatch(closeBurger())
  }

  return (
    <li className={`${className}__buttons__item`} onClick={handleCloseBurger}>
      {user ? (
        <Link
          className={`btn-reset align-items-center ${className}__buttons__item__shopping_cart`}
          href={'/Profile/Shopping-Cart'}
        >
          <HeaderSvgShopingCart
            className={`align-items-center ${className}__buttons__item__svg`}
          />
          {children}
        </Link>
      ) : (
        <button
          className={`btn-reset align-items-center ${className}__buttons__item__shopping_cart`}
          onClick={handleOpenAuthPopup}
        >
          <HeaderSvgShopingCart
            className={`align-items-center ${className}__buttons__item__svg`}
          />
          {children}
        </button>
      )}
    </li>
  )
}

export default HeaderButtonsItemShoppingCart
