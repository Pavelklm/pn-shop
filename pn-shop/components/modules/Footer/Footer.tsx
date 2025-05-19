/* eslint-disable react/no-unescaped-entities */
import FooterAccordion from '@/components/elements/Footer/FooterAccordion'
import FooterBottom from '@/components/elements/Footer/FooterBottom'
import FooterLinks from '@/components/elements/Footer/FooterLinks'
import Logo from '@/components/elements/Logo/Logo'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Link from 'next/link'
import Subscribe from '../Subscribe/Subscribe'

export const Footer = () => {
  const { lang, translations } = useLang()
  const isMedia1200 = useMediaQuery(1200)
  const isMedia860 = useMediaQuery(860)

  return (
    <>
      {!isMedia1200 ? (
        <>
          <Subscribe />
          <div className='footer'>
            <div className='footer__wrapper'>
              <div className='footer__top'>
                <div className='footer__about'>
                  <Logo className='footer__about__logo' />
                  <p className='footer__about__description'>
                    {translations[lang].footer.description}
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
                      pavelklm.ua@gmail.com
                    </Link>
                  </div>
                </div>
                <FooterLinks />
              </div>
              <FooterBottom />
            </div>
          </div>
        </>
      ) : !isMedia860 ? (
        <>
          <Subscribe />
          <div className='footer'>
            <div className='footer__wrapper'>
              <div className='footer__top'>
                <div className='footer__about'>
                  <Logo className='footer__about__logo' />
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
                      pavelklm.ua@gmail.com
                    </Link>
                  </div>
                </div>
                <div className='footer__about_media'>
                  <FooterLinks />
                </div>
              </div>
              <FooterBottom />
            </div>
          </div>
        </>
      ) : (
        <>
          <Subscribe />
          <div className='footer'>
            <div className='footer__wrapper'>
              <div className='footer__top'>
                <div className='footer__about'>
                  <Logo className='footer__about__logo' />
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
                      pavelklm.ua@gmail.com
                    </Link>
                  </div>
                </div>
                <div className='footer__about_media'>
                  <FooterAccordion />
                </div>
              </div>
              <FooterBottom />
            </div>
          </div>
        </>
      )}
    </>
  )
}
