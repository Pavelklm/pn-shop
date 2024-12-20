import { useLang } from '@/hooks/useLang'
import Link from 'next/link'

const Footer__link_account = () => {
  const { lang, translations } = useLang()

  return (
    <ul className='list-reset footer__links__list'>
      <li>
        <Link href='/Profile' className='footer__links__list_link link-reset'>
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
        <Link href='/Wishlist' className='footer__links__list_link link-reset'>
          {translations[lang].footer.wishlist}
        </Link>
      </li>
    </ul>
  )
}

export default Footer__link_account
