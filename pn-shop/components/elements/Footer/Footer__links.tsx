import Footer__link_account from './Footer__link_account'
import Footer__link_help from './Footer__link_help'
import Footer__link_klm from './Footer__link_klm'
import {
  Footer__link__title_account,
  Footer__link__title_help,
  Footer__link__title_klm,
} from './Footer__links__titles'

const FooterLinks = () => (
  <div className='footer__list'>
    <div className='footer__links'>
      <Footer__link__title_account />
      <Footer__link_account />
    </div>
    <div className='footer__links'>
      <Footer__link__title_help />
      <Footer__link_help />
    </div>
    <div className='footer__links'>
      <Footer__link__title_klm />
      <Footer__link_klm />
    </div>
  </div>
)
export default FooterLinks
