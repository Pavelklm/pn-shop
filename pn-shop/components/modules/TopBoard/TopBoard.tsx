import { openAuthPopup } from '@/context/auth'
import { useAppDispatch } from '@/context/hooks'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useUser } from '@/hooks/useUser'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'

const TopBoard = () => {
  const isMedia1250 = useMediaQuery(1250)
  const isMedia420 = useMediaQuery(420)
  const { lang, translations } = useLang()
  const dispatch = useAppDispatch()
  const { user } = useUser()
  const handleOpenAuthPopup = () => {
    dispatch(openAuthPopup())
    toast.error(translations[lang].errors.register_first)
  }

  return (
    <section className='top__board'>
      <Image
        className='top__board__background'
        src={'/img/background__Top.svg'}
        alt={'background'}
        quality={100}
        priority={true}
        style={{ objectFit: 'cover' }}
        fill={true}
        draggable={false}
      />
      <div className='top__board__content'>
        <Image
          className='top__board__content__fruitBasket'
          src={'/img/fruitBasket.svg'}
          alt={'fruitBasket'}
          height={!isMedia1250 ? 400 : isMedia420 ? 280 : 300}
          width={!isMedia1250 ? 640 : isMedia420 ? 320 : 480}
          quality={100}
          draggable={false}
          priority={true}
          loading='eager'
        />
        <div className='top__board__content__text'>
          <h5 className='top__board__content__text__welcome'>
            {translations[lang].top_board.welcome}
          </h5>
          <h1
            className={`top__board__content__text__title ${lang === 'ru' ? 'ru__title-top' : 'en__title-top'}`}
          >
            {translations[lang].top_board.title1} <br />
            {translations[lang].top_board.title2}
          </h1>
          <div className='top__board__content__text__subtitle__wrapper'>
            <p className='top__board__content__text__subtitle'>
              {translations[lang].top_board.sale1}
            </p>
            <p className='top__board__content__text__subtitle__discount'>
              {translations[lang].top_board.sale2}
            </p>
          </div>
          <p className='top__board__content__text__description'>
            {translations[lang].top_board.free_delivery}
          </p>
          {user ? (
            <Link
              className='btn-reset top__board__content__text__link'
              href={'/Shopping_Cart'}
            >
              <button className='top__board__content__text__button btn-reset'>
                {translations[lang].top_board.buy_now}
              </button>
            </Link>
          ) : (
            <button
              className='top__board__content__text__button btn-reset'
              onClick={handleOpenAuthPopup}
            >
              {translations[lang].top_board.buy_now}
            </button>
          )}
        </div>
      </div>
      <div className='top__board__leaf'>
        <Image
          className='top__board__leaf__image'
          src={'/img/leaf.svg'}
          alt={'leaf'}
          height={100}
          width={100}
          quality={100}
          draggable={false}
        />
      </div>
    </section>
  )
}

export default TopBoard
