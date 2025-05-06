import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { handleInputBlur, handleInputFocus } from '@/lib/helpers/InputFocus'
import HeaderSvgSearch from '../Header__svg/Header__svg__search'
const HeaderSearch = ({
  className,
  classNameMedia,
  handleToggleSearch,
}: {
  className?: string
  classNameMedia?: string
  handleToggleSearch: () => void
}) => {
  const { lang, translations } = useLang()
  const isMedia1000 = useMediaQuery(1000)

  return (
    <li
      className={`header__buttons__search__${classNameMedia ? classNameMedia : 'main'} list-reset ${className}`}
    >
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
        {!isMedia1000 && (
          <div className='header__buttons__item__search__open'>
            <button
              className='btn-reset align-items-center header__buttons__item__search'
              onClick={handleToggleSearch}
            >
              <HeaderSvgSearch className='header__buttons__item__svg-media' />
            </button>
          </div>
        )}
      </label>
    </li>
  )
}

export default HeaderSearch
