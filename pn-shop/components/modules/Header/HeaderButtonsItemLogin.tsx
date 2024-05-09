import HeaderSvgLogin from '@/components/elements/Header__svg/Header__svg__login'
import { openAuthPopup } from '@/context/auth'
import { useAppDispatch, useAppSelector } from '@/context/hooks'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderProfile from './HeaderProfile'
interface Props {
  className: string
}

const HeaderButtonsItemLogin: React.FC<Props> = ({ className }) => {
  const loginCheckSpinner = useAppSelector((state) => state.user.isLoadingUser)
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector((state) => state.auth.isAuth)

  const handleOpenAuthPopup = () => {
    dispatch(openAuthPopup())
  }

  return (
    <li className={`${className}__buttons__item`}>
      {isAuth ? (
        <HeaderProfile />
      ) : loginCheckSpinner ? (
        <FontAwesomeIcon icon={faSpinner} spin />
      ) : (
        <button
          className={`btn-reset align-items-center ${className}__buttons__item__login`}
          onClick={handleOpenAuthPopup}
        >
          <HeaderSvgLogin className={`${className}__buttons__item__svg`} />
        </button>
      )}
    </li>
  )
}

export default HeaderButtonsItemLogin
