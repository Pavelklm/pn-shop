/* eslint-disable react/no-unescaped-entities */
import Footer__svg_apple from '@/components/elements/Footer__svg/Footer__svg_apple'
import Footer__svg_discover from '@/components/elements/Footer__svg/Footer__svg_discover'
import Footer__svg_masterCard from '@/components/elements/Footer__svg/Footer__svg_masterCard'
import Footer__svg_secure from '@/components/elements/Footer__svg/Footer__svg_secure'
import Footer__svg_visa from '@/components/elements/Footer__svg/Footer__svg_visa'
import Logo from '@/components/elements/Logo/Logo'
import Link from 'next/link'
import Subscribe from '../Subscribe/Subscribe'

export const Footer = () => (
  <>
    <Subscribe />
    <div className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__top'>
          <div className='footer__about'>
            <Logo />
            <p className='footer__about__description'>
              "KLM" — это компания, занимающаяся производством и продажей
              натуральных продуктов, выращенных с заботой о здоровье и экологии.
              Мы гарантируем высокое качество и свежесть, отбирая продукцию у
              проверенных фермеров и минимизируя обработку, чтобы сохранить
              максимальную пользу и вкус. Наша миссия — сделать доступной
              качественную и экологически чистую еду для всех, кто стремится к
              здоровому образу жизни и заботится о будущем планеты.
            </p>
            <div className='footer__about__contacts'>
              <Link
                href='tel:+12195550114'
                className='footer__about__contacts__link link-reset'
              >
                (219) 555-0114
              </Link>
              <p className='footer__about__contacts__text'>or</p>
              <Link
                href='mailto:Proxy@gmail.com'
                className='footer__about__contacts__link link-reset'
              >
                Proxy@gmail.com
              </Link>
            </div>
          </div>
          <div className='footer__links'>
            <ul className='list-reset footer__links__list'>
              <h4 className='footer__links__list__title'>My Account</h4>
              <li>
                <Link href='/Profile' className='footer__links__list_link'>
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href='/Order_History'
                  className='footer__links__list_link'
                >
                  Order history
                </Link>
              </li>
              <li>
                <Link
                  href='/Shopping_Cart'
                  className='footer__links__list_link'
                >
                  Shopping cart
                </Link>
              </li>
              <li>
                <Link href='/Wishlist' className='footer__links__list_link'>
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer__links'>
            <ul className='list-reset footer__links__list'>
              <h4 className='footer__links__list__title'>Helps</h4>
              <li>
                <Link href='/Wishlist' className='footer__links__list_link'>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href='/Faqs' className='footer__links__list_link'>
                  Faqs
                </Link>
              </li>
              <li>
                <Link
                  href='/Terms_Condition'
                  className='footer__links__list_link'
                >
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link
                  href='/Privacy_Policy'
                  className='footer__links__list_link'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer__links'>
            <ul className='list-reset footer__links__list'>
              <h4 className='footer__links__list__title'>KLM</h4>
              <li>
                <Link href='/About' className='footer__links__list_link'>
                  About
                </Link>
              </li>
              <li>
                <Link href='/Shop' className='footer__links__list_link'>
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__bottom'>
          <div className='all__rights'>
            <p>KLM eCommerce © 2025. All Rights Reserved</p>
          </div>
          <div className='footer__bottom__partners'>
            <Footer__svg_apple className='footer__bottom__partners_pay' />
            <Footer__svg_visa className='footer__bottom__partners_pay' />
            <Footer__svg_discover className='footer__bottom__partners_pay' />
            <Footer__svg_masterCard className='footer__bottom__partners_pay' />
            <Footer__svg_secure className='footer__bottom__partners_pay' />
          </div>
        </div>
      </div>
    </div>
  </>
)
