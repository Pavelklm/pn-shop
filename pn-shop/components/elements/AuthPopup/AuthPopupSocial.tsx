import {
  faDiscord,
  faGithub,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signIn } from 'next-auth/react'

const socials = [
  { id: 'github', icon: faGithub, className: 'gh-color', effect: 'beat' },
  { id: 'google', icon: faGoogle, className: 'g-color', effect: 'fade' },
  // eslint-disable-next-line prettier/prettier
  { id: 'discord', icon: faDiscord, className: 'fb-color', effect: 'beatFade' },
  { id: 'twitter', icon: faTwitter, className: 'tw-color', effect: 'bounce' },
]

const AuthPopupSocials = () => (
  <div className='cart-body__socials'>
    {socials.map(({ id, icon, className, effect }) => (
      <button
        key={id}
        className={`btn-reset socials__btn ${className}`}
        onClick={() => {
          signIn(id)
        }}
      >
        <FontAwesomeIcon icon={icon} {...{ [effect]: true }} />
      </button>
    ))}
  </div>
)

export default AuthPopupSocials
