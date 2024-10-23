import SubscribeSocialMediaFacebook from '@/components/elements/SubscribeSocial_media/SubscribeSocial_media-facebook'
import SubscribeSocialMediaInstagram from '@/components/elements/SubscribeSocial_media/SubscribeSocial_media-instagram'
import SubscribeSocialMediaPinterest from '@/components/elements/SubscribeSocial_media/SubscribeSocial_media-pinterest'
import SubscribeSocialMediaTwitter from '@/components/elements/SubscribeSocial_media/SubscribeSocial_media-twitter'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'
import Link from 'next/link'

const Subscribe = () => {
  const { lang, translations } = useLang()
  const isMedia1200 = useMediaQuery(1200)

  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (!e.target.value) {
      e.target.classList.remove('placeholder')
    }
  }

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (e.target.value) {
      e.target.classList.remove('placeholder')
    }
    if (!e.target.value) {
      e.target.classList.add('placeholder')
    }
  }

  return !isMedia1200 ? (
    <div className='subscribe subscribe__container container'>
      <div className='subscribe__wrapper'>
        <div className='subscribe__information'>
          <Image
            className='subscribe__image'
            src={'/img/mail.svg'}
            alt={'subscribe'}
            height={56}
            width={56}
            quality={100}
            draggable={false}
          />
          <div className='subscribe__text'>
            <h3 className='subscribe__title'>
              {translations[lang].subscribe.title}
            </h3>

            <p className='subscribe__description'>
              {translations[lang].subscribe.description}
            </p>
          </div>
        </div>
        <form className='subscribe__form' action='submit'>
          <label className='subscribe__label'>
            <input
              className='subscribe__input placeholder'
              type='email'
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />

            <span className='subscribe__buttons__search__floating_label'>
              {translations[lang].subscribe.placeholder}
            </span>
            <button className='btn-reset subscribe__btn'>
              {translations[lang].subscribe.button}
            </button>
          </label>
        </form>
        <div className='subscribe__social_media'>
          <Link className='subscribe__social_media__link' href={'#'}>
            <SubscribeSocialMediaFacebook className='subscribe__social_media-facebook' />
          </Link>
          <Link className='subscribe__social_media__link' href={'#'}>
            <SubscribeSocialMediaTwitter className='subscribe__social_media-twitter' />
          </Link>
          <Link className='subscribe__social_media__link' href={'#'}>
            <SubscribeSocialMediaPinterest className='subscribe__social_media-pinterest' />
          </Link>
          <Link className='subscribe__social_media__link' href={'#'}>
            <SubscribeSocialMediaInstagram className='subscribe__social_media-instagram' />
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className='subscribe subscribe__container container'>
      <div className='subscribe__wrapper'>
        <div className='subscribe__information'>
          <Image
            className='subscribe__image'
            src={'/img/mail.svg'}
            alt={'subscribe'}
            height={56}
            width={56}
            quality={100}
            draggable={false}
          />
          <div className='subscribe__text'>
            <h3 className='subscribe__title'>
              {translations[lang].subscribe.title}
            </h3>

            <p className='subscribe__description'>
              {translations[lang].subscribe.description}
            </p>
          </div>
        </div>
        <div className='subscribe__media_wrapper'>
          <form className='subscribe__form' action='submit'>
            <label className='subscribe__label'>
              <input
                className='subscribe__input placeholder'
                type='email'
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />

              <span className='subscribe__buttons__search__floating_label'>
                {translations[lang].subscribe.placeholder}
              </span>
              <button className='btn-reset subscribe__btn'>Subscribe</button>
            </label>
          </form>
          <div className='subscribe__social_media'>
            <Link className='subscribe__social_media__link' href={'#'}>
              <SubscribeSocialMediaFacebook className='subscribe__social_media-facebook' />
            </Link>
            <Link className='subscribe__social_media__link' href={'#'}>
              <SubscribeSocialMediaTwitter className='subscribe__social_media-twitter' />
            </Link>
            <Link className='subscribe__social_media__link' href={'#'}>
              <SubscribeSocialMediaPinterest className='subscribe__social_media-pinterest' />
            </Link>
            <Link className='subscribe__social_media__link' href={'#'}>
              <SubscribeSocialMediaInstagram className='subscribe__social_media-instagram' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
