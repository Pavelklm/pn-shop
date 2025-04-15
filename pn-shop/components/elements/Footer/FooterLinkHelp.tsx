import { useLang } from '@/hooks/useLang'
import Link from 'next/link'

const Footer__link_help = () => {
  const { lang, translations } = useLang()

  return (
    <ul className='list-reset footer__links__list'>
      <li>
        <Link href='/Faqs' className='footer__links__list_link link-reset'>
          {translations[lang].footer.faqs}
        </Link>
      </li>
      <li>
        <Link
          href='/Terms_Condition'
          className='footer__links__list_link link-reset'
        >
          {translations[lang].footer.terms_condition}
        </Link>
      </li>
      <li>
        <Link
          href='/Privacy_Policy'
          className='footer__links__list_link link-reset'
        >
          {translations[lang].footer.privacy_policy}
        </Link>
      </li>
    </ul>
  )
}

export default Footer__link_help
