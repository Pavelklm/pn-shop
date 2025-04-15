import HeaderButtonsItemLogin from './HeaderButtonsItemLogin'
import HeaderButtonsItemSearch from './HeaderButtonsItemSearch'
import HeaderButtonsItemShoppingCart from './HeaderButtonsItemShoppingCart'
import HeaderButtonsItemWishList from './HeaderButtonsItemWishList'

export const HeaderButtons = ({ className }: { className: string }) => (
  <ul className='list-reset header__buttons'>
    <HeaderButtonsItemSearch />
    <HeaderButtonsItemWishList className={className} />
    <HeaderButtonsItemShoppingCart className={className} />
    <HeaderButtonsItemLogin className={className} />
  </ul>
)
