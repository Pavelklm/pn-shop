import { useLang } from '@/hooks/useLang'
import Link from 'next/link'

const HeaderLinks = () => {
  const { lang, translations } = useLang()

  return (
    <ul className='list-reset header__links'>
      <li className='header__links__item'>
        <Link className='link-reset header__links__item__text' href='/'>
          {translations[lang].header.Home}
        </Link>
      </li>
      <li className='styles.header__links__item'>
        <Link className='link-reset header__links__item__text' href='/Shop'>
          {translations[lang].header.Shop}
        </Link>
      </li>
      <li className='header__links__item'>
        <Link className='link-reset header__links__item__text' href={'/Blog'}>
          {translations[lang].header.Blog}
        </Link>
      </li>
      <li className='header__links__item'>
        <Link className='link-reset header__links__item__text' href={'/About'}>
          {translations[lang].header.About}
        </Link>
      </li>
      <li className='header__links__item'>
        <Link className='link-reset header__links__item__text' href='/Contacts'>
          {translations[lang].header.Contacts}
        </Link>
      </li>
    </ul>
  )
}

export default HeaderLinks
