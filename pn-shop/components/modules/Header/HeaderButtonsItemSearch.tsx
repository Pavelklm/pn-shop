import HeaderSvgSearch from '@/components/elements/Header__svg/Header__svg__search'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const HeaderButtonsItemSearch = () => {
  const isMedia1000 = useMediaQuery(1000)
  const { lang, translations } = useLang()

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

  return (
    <>
      {!isMedia1000 && (
        <li className='header__buttons__item'>
          <button className='btn-reset align-items-center $header__buttons__item__search'>
            <HeaderSvgSearch className='header__buttons__item__svg' />
          </button>
        </li>
      )}
      {isMedia1000 && (
        <li className='header__buttons__search list-reset'>
          <label className='header__buttons__search__label'>
            <input
              type='text'
              className='header__buttons__search__input placeholder'
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <span className='header__buttons__search__floating_label'>
              {translations[lang].header.search_infos}
            </span>
          </label>
        </li>
      )}
    </>
  )
}

export default HeaderButtonsItemSearch
