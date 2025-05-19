import HeaderSvgSearch from '@/components/elements/Header__svg/Header__svg__search'
import HeaderSearch from '@/components/elements/SearchHeader/HeaderSearch'
import { useAppDispatch, useAppSelector } from '@/context/hooks'
import { toggleSearch } from '@/context/search'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const HeaderButtonsItemSearch = () => {
  const isMedia1000 = useMediaQuery(1000)
  const dispatch = useAppDispatch()
  const isSearchOpen = useAppSelector((state) => state.search.isSearchOpen)

  const handleToggleSearch = () => {
    dispatch(toggleSearch())
  }

  return (
    <>
      {!isMedia1000 && !isSearchOpen && (
        <li className='header__buttons__item'>
          <button
            className='btn-reset align-items-center header__buttons__item__search'
            onClick={handleToggleSearch}
          >
            <HeaderSvgSearch className='header__buttons__item__svg' />
          </button>
        </li>
      )}
      <HeaderSearch
        handleToggleSearch={handleToggleSearch}
        className={isSearchOpen ? 'search' : 'search-close'}
        classNameMedia='main'
      />

      {isMedia1000 && (
        <HeaderSearch
          className=''
          classNameMedia='media'
          handleToggleSearch={handleToggleSearch}
        />
      )}
    </>
  )
}

export default HeaderButtonsItemSearch
