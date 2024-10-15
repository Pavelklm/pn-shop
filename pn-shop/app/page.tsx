'use client'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'
import './globalStyles/globals.css'
import './globalStyles/header-profile.css'
import './globalStyles/top-board.css'

export default function Home() {
  const isMedia1250 = useMediaQuery(1250)
  const { lang, translations } = useLang()

  return (
    <section className='top__board'>
      <Image
        className='top__board__background'
        src={'/img/background__Top.svg'}
        alt={'background'}
        quality={100}
        objectFit='cover'
        layout='fill'
        draggable={false}
      />
      <div className='top__board__content'>
        <Image
          className='top__board__content__fruitBasket'
          src={'/img/fruitBasket.svg'}
          alt={'fruitBasket'}
          height={!isMedia1250 ? 400 : 300}
          width={!isMedia1250 ? 640 : 480}
          quality={100}
          draggable={false}
        />
        <div className='top__board__content__text'>
          <h5 className='top__board__content__text__welcome'>
            {translations[lang].top_board.welcome}
          </h5>
          <h1 className='top__board__content__text__title'>
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
          <button className='btn-reset top__board__content__text__button'>
            {translations[lang].top_board.buy_now}
          </button>
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
