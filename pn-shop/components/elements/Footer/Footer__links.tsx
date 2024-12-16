import { useLang } from '@/hooks/useLang'
import Link from 'next/link'

const FooterLinks = () => {
  const { lang, translations } = useLang()

  return (
    <div className='footer__list'>
      <div className='footer__links'>
        <ul className='list-reset footer__links__list'>
          <h4 className='footer__links__list__title'>
            {translations[lang].footer.title}
          </h4>
          <li>
            <Link
              href='/Profile'
              className='footer__links__list_link link-reset'
            >
              {translations[lang].footer.profile}
            </Link>
          </li>
          <li>
            <Link
              href='/Order_History'
              className='footer__links__list_link link-reset'
            >
              {translations[lang].footer.order_history}
            </Link>
          </li>
          <li>
            <Link
              href='/Shopping_Cart'
              className='footer__links__list_link link-reset'
            >
              {translations[lang].footer.shopping_cart}
            </Link>
          </li>
          <li>
            <Link
              href='/Wishlist'
              className='footer__links__list_link link-reset'
            >
              {translations[lang].footer.wishlist}
            </Link>
          </li>
        </ul>
      </div>
      <div className='footer__links'>
        <ul className='list-reset footer__links__list'>
          <h4 className='footer__links__list__title'>
            {translations[lang].footer.helps}
          </h4>
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
      </div>
      <div className='footer__links'>
        <ul className='list-reset footer__links__list'>
          <h4 className='footer__links__list__title'>KLM</h4>
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
      </div>
    </div>
  )
}
export default FooterLinks
