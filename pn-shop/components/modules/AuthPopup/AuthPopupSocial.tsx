import {
  faFacebook,
  faGithub,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AuthPopupSocials = ({
  handleSignUpWithOAuth,
}: {
  handleSignUpWithOAuth: VoidFunction
}) => (
  <div className='cart-body__socials'>
    <button
      className='btn-reset socials__btn gh-color'
      onClick={handleSignUpWithOAuth}
    >
      <FontAwesomeIcon icon={faGithub} beat />
    </button>
    <button
      className='btn-reset socials__btn g-color'
      onClick={handleSignUpWithOAuth}
    >
      <FontAwesomeIcon icon={faGoogle} fade />
    </button>
    <button
      className='btn-reset socials__btn fb-color'
      onClick={handleSignUpWithOAuth}
    >
      <FontAwesomeIcon icon={faFacebook} beatFade />
    </button>
    <button
      className='btn-reset socials__btn tw-color'
      onClick={handleSignUpWithOAuth}
    >
      <FontAwesomeIcon icon={faTwitter} bounce />
    </button>
  </div>
)

export default AuthPopupSocials
