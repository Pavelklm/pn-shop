import Image from 'next/image'
import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href={'/'}>
    <Image
      className='logo__img'
      src='img/LogoKlm.svg'
      alt='logo-KLM'
      width={60}
      height={32}
      priority
    />
  </Link>
)

export default Logo
