import { useLang } from '@/hooks/useLang'
import Link from 'next/link'

const Footer__link_klm = () => {
  const { lang, translations } = useLang()

  return (
    <ul className='list-reset footer__links__list'>
      <li>
        <Link href='/About' className='footer__links__list_link link-reset'>
          {translations[lang].footer.about}
        </Link>
      </li>
      <li>
        <Link href='/Shop' className='footer__links__list_link link-reset'>
          {translations[lang].footer.shop}
        </Link>
      </li>
    </ul>
  )
}

export default Footer__link_klm
