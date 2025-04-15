import { useLang } from '@/hooks/useLang'
import { useUser } from '@/hooks/useUser'
import Link from 'next/link'
import FooterLoginButton from './FooterLoginButton'

const Footer__link_account = () => {
  const { lang, translations } = useLang()
  const { user } = useUser()

  return (
    <ul className='list-reset footer__links__list'>
      <li>
        {user ? (
          <Link href='/Profile' className='footer__links__list_link link-reset'>
            {translations[lang].footer.profile}
          </Link>
        ) : (
          <FooterLoginButton name='profile' />
        )}
      </li>
      <li>
        {user ? (
          <Link
            href='/Order_History'
            className='footer__links__list_link link-reset'
          >
            {translations[lang].footer.order_history}
          </Link>
        ) : (
          <FooterLoginButton name='order_history' />
        )}
      </li>
      <li>
        {user ? (
          <Link
            href='/Shopping_Cart'
            className='footer__links__list_link link-reset'
          >
            {translations[lang].footer.shopping_cart}
          </Link>
        ) : (
          <FooterLoginButton name='shopping_cart' />
        )}
      </li>
      <li>
        {user ? (
          <Link
            href='/Wishlist'
            className='footer__links__list_link link-reset'
          >
            {translations[lang].footer.wishlist}
          </Link>
        ) : (
          <FooterLoginButton name='wishlist' />
        )}
      </li>
    </ul>
  )
}

export default Footer__link_account
