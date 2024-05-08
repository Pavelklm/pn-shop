import HeaderSvgLogin from '@/components/elements/Header__svg/Header__svg__login'
import HeaderSvgSearch from '@/components/elements/Header__svg/Header__svg__search'
import HeaderSvgShopingCart from '@/components/elements/Header__svg/Header__svg__shopping__cart'
import HeaderSvgWishList from '@/components/elements/Header__svg/Header__svg__wishList'
import { openAuthPopup } from '@/context/auth'
import { useAppDispatch, useAppSelector } from '@/context/hooks'
import { useLang } from '@/hooks/useLang'
import { useUser } from '@/hooks/useUser'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toast from 'react-hot-toast'
import HeaderProfile from './HeaderProfile'

export const HeaderButtons = () => {
  const loginCheckSpinner = useAppSelector((state) => state.user.isLoadingUser)
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const { user } = useUser()
  const { translations, lang } = useLang()

  const handleOpenAuthPopup = () => {
    dispatch(openAuthPopup())
  }

  const handleWishListClick = () => {
    if (user) {
      window.location.href = '/Wish_List'
    } else {
      dispatch(openAuthPopup())
      toast.error(translations[lang].errors.register_first)
    }
  }

  return (
    <ul className='list-reset header__buttons'>
      <li className='header__buttons__item'>
        <button className='btn-reset align-items-center $header__buttons__item__search'>
          <HeaderSvgSearch className='header__buttons__item__svg' />
        </button>
      </li>
      <li className='header__buttons__item'>
        <button
          className='btn-reset align-items-center header__buttons__item__wish_list'
          onClick={handleWishListClick}
        >
          <HeaderSvgWishList className='align-items-center header__buttons__item__svg' />
        </button>
      </li>
      <li className='header__buttons__item'>
        <button
          className='btn-reset align-items-center header__buttons__item__shopping_cart'
          onClick={handleWishListClick}
        >
          <HeaderSvgShopingCart className='align-items-center header__buttons__item__svg' />
        </button>
      </li>
      <li className='header__buttons__item'>
        {isAuth ? (
          <HeaderProfile />
        ) : loginCheckSpinner ? (
          <FontAwesomeIcon icon={faSpinner} spin />
        ) : (
          <button
            className='btn-reset align-items-center header__buttons__item__login'
            onClick={handleOpenAuthPopup}
          >
            <HeaderSvgLogin className='header__buttons__item__svg' />
          </button>
        )}
      </li>
    </ul>
  )
}
