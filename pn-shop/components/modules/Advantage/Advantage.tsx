import Advantage__svg__car from '@/components/elements/Advantage__svg/Advantage__svg__car'
import { useLang } from '@/hooks/useLang'
import Image from 'next/image'

const Advantage = () => {
  const { lang, translations } = useLang()

  return (
    <section className='advantage'>
      <div className='advantage__container container'>
        <div className='advantage__wrapper'>
          <Advantage__svg__car className='advantage__image' />
          <h3 className='advantage__title'>
            {translations[lang].advantage.title1}
          </h3>
          <p className='advantage__description'>
            {translations[lang].advantage.description1}
          </p>
        </div>
        <div className='advantage__wrapper'>
          <Image
            className='advantage__image'
            width={36}
            height={36}
            src={'/img/headphones.svg'}
            alt={'headphones'}
            quality={100}
            draggable={false}
          />

          <h3 className='advantage__title'>
            {translations[lang].advantage.title2}
          </h3>
          <p className='advantage__description'>
            {translations[lang].advantage.description2}
          </p>
        </div>
        <div className='advantage__wrapper'>
          <Image
            className='advantage__image'
            width={36}
            height={36}
            src={'/img/shopping-bag.svg'}
            alt={'shopping-bag'}
            quality={100}
            draggable={false}
          />

          <h3 className='advantage__title'>
            {translations[lang].advantage.title3}
          </h3>
          <p className='advantage__description'>
            {translations[lang].advantage.description3}
          </p>
        </div>
        <div className='advantage__wrapper'>
          <Image
            className='advantage__image'
            width={36}
            height={36}
            src={'/img/box.svg'}
            alt={'box'}
            quality={100}
            draggable={false}
          />

          <h3 className='advantage__title'>
            {translations[lang].advantage.title4}
          </h3>
          <p className='advantage__description'>
            {translations[lang].advantage.description4}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Advantage
