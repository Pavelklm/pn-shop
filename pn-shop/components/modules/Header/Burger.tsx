import Logo from '@/components/elements/Logo/Logo'
import { closeBurger } from '@/context/burger'
import { useAppDispatch, useAppSelector } from '@/context/hooks'
import { useLang } from '@/hooks/useLang'
import Link from 'next/link'
import HeaderButtonsItemShoppingCart from './HeaderButtonsItemShoppingCart'
import HeaderButtonsItemWishList from './HeaderButtonsItemWishList'
import HeaderSwitch from './HeaderSwitch'

const Burger = ({
  isChecked,
  handleToggle,
}: {
  isChecked: boolean
  handleToggle: () => void
}) => {
  const isBurgerOpen = useAppSelector((state) => state.burger.isBurgerOpen)
  const { lang, translations } = useLang()
  const dispatch = useAppDispatch()
  const handleCloseBurger = () => {
    dispatch(closeBurger())
  }

  return (
    <>
      {isBurgerOpen ? (
        <>
          <div className='container burger__container'>
            <div className='burger__logo'>
              <Logo />
            </div>
            <div className='burger__links'>
              <ul className='list-reset burger__links'>
                <li className='burger__links__item' onClick={handleCloseBurger}>
                  <Link
                    className='link-reset burger__links__item__text'
                    href='/'
                  >
                    {translations[lang].header.Home}
                  </Link>
                </li>
                <li
                  className='styles.burger__links__item'
                  onClick={handleCloseBurger}
                >
                  <Link
                    className='link-reset burger__links__item__text'
                    href='/Shop'
                  >
                    {translations[lang].header.Shop}
                  </Link>
                </li>
                <li className='burger__links__item' onClick={handleCloseBurger}>
                  <Link
                    className='link-reset burger__links__item__text'
                    href={'/Blog'}
                  >
                    {translations[lang].header.Blog}
                  </Link>
                </li>
                <li className='burger__links__item' onClick={handleCloseBurger}>
                  <Link
                    className='link-reset burger__links__item__text'
                    href={'/About'}
                  >
                    {translations[lang].header.About}
                  </Link>
                </li>
                <li className='burger__links__item' onClick={handleCloseBurger}>
                  <Link
                    className='link-reset burger__links__item__text'
                    href='/Contacts'
                  >
                    {translations[lang].header.Contacts}
                  </Link>
                </li>
              </ul>
            </div>
            <div className='burger__buttons'>
              <HeaderButtonsItemWishList className={'burger'}>
                <div className='burger__buttons__item__text'>
                  {translations[lang].burger.wishList}
                </div>
              </HeaderButtonsItemWishList>
              <HeaderButtonsItemShoppingCart className={'burger'}>
                <div className='burger__buttons__item__text'>
                  {translations[lang].burger.ShoppingCart}
                </div>
              </HeaderButtonsItemShoppingCart>
            </div>
            <HeaderSwitch isChecked={isChecked} handleToggle={handleToggle} />
          </div>
        </>
      ) : (
        <>
          <div className='container burger__container__close'>
            <div className='burger__logo'>
              <Logo />
            </div>
            <div className='burger__links'>
              <ul className='list-reset burger__links'>
                <li className='burger__links__item' onClick={handleCloseBurger}>
                  <Link
                    className='link-reset burger__links__item__text'
                    href='/'
                  >
                    {translations[lang].header.Home}
                  </Link>
                </li>
                <li
                  className='styles.burger__links__item'
                  onClick={handleCloseBurger}
                >
                  <Link
                    className='link-reset burger__links__item__text'
                    href='/Shop'
                  >
                    {translations[lang].header.Shop}
                  </Link>
                </li>
                <li className='burger__links__item' onClick={handleCloseBurger}>
                  <Link
                    className='link-reset burger__links__item__text'
                    href={'/Blog'}
                  >
                    {translations[lang].header.Blog}
                  </Link>
                </li>
                <li className='burger__links__item' onClick={handleCloseBurger}>
                  <Link
                    className='link-reset burger__links__item__text'
                    href={'/About'}
                  >
                    {translations[lang].header.About}
                  </Link>
                </li>
                <li className='burger__links__item' onClick={handleCloseBurger}>
                  <Link
                    className='link-reset burger__links__item__text'
                    href='/Contacts'
                  >
                    {translations[lang].header.Contacts}
                  </Link>
                </li>
              </ul>
            </div>
            <div className='burger__buttons'>
              <HeaderButtonsItemWishList className={'burger'}>
                <div className='link-reset burger__buttons__item__text'>
                  {translations[lang].burger.wishList}
                </div>
              </HeaderButtonsItemWishList>
              <HeaderButtonsItemShoppingCart className={'burger'}>
                <div className='link-reset burger__buttons__item__text'>
                  {translations[lang].burger.ShoppingCart}
                </div>
              </HeaderButtonsItemShoppingCart>
            </div>
            <HeaderSwitch isChecked={isChecked} handleToggle={handleToggle} />
          </div>
        </>
      )}
    </>
  )
}

export default Burger
