import Link from 'next/link'
import SubscribeSocialMediaFacebook from './SubscribeSocial_media-facebook'
import SubscribeSocialMediaInstagram from './SubscribeSocial_media-instagram'
import SubscribeSocialMediaPinterest from './SubscribeSocial_media-pinterest'
import SubscribeSocialMediaTwitter from './SubscribeSocial_media-twitter'

interface Props {
  className: string
}

const SubscribeSocialLinks: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <Link className='subscribe__social_media__link' href={'#'}>
      <SubscribeSocialMediaFacebook className='subscribe__social_media-facebook' />
    </Link>
    <Link className='subscribe__social_media__link' href={'#'}>
      <SubscribeSocialMediaTwitter className='subscribe__social_media-twitter' />
    </Link>
    <Link className='subscribe__social_media__link' href={'#'}>
      <SubscribeSocialMediaPinterest className='subscribe__social_media-pinterest' />
    </Link>
    <Link className='subscribe__social_media__link' href={'#'}>
      <SubscribeSocialMediaInstagram className='subscribe__social_media-instagram' />
    </Link>
  </div>
)

export default SubscribeSocialLinks
