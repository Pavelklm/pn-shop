import { closeBurger } from '@/context/burger'
import { useAppDispatch, useAppSelector } from '@/context/hooks'
import { useLang } from '@/hooks/useLang'
import Link from 'next/link'
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
            <HeaderSwitch isChecked={isChecked} handleToggle={handleToggle} />
          </div>
        </>
      ) : (
        <>
          <div className='container burger__container__close'>
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
            <HeaderSwitch isChecked={isChecked} handleToggle={handleToggle} />
          </div>
        </>
      )}
    </>
  )
}

export default Burger
