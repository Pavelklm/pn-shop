import Advantage__svg__car from '@/components/elements/Advantage__svg/Advantage__svg__car'
import Advantage__svg__headphones from '@/components/elements/Advantage__svg/Adventage__svg__headphones'
import Advantage__svg__shopping_bag from '@/components/elements/Advantage__svg/Adventage__svg__shopping-bag'
import { useLang } from '@/hooks/useLang'

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
          <Advantage__svg__headphones className='advantage__image' />

          <h3 className='advantage__title'>
            {translations[lang].advantage.title2}
          </h3>
          <p className='advantage__description'>
            {translations[lang].advantage.description2}
          </p>
        </div>
        <div className='advantage__wrapper'>
          <Advantage__svg__shopping_bag className='advantage__image' />

          <h3 className='advantage__title'>
            {translations[lang].advantage.title3}
          </h3>
          <p className='advantage__description'>
            {translations[lang].advantage.description3}
          </p>
        </div>
        <div className='advantage__wrapper'>
          <Advantage__svg__car className='advantage__image' />
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
