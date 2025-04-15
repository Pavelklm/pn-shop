import Footer__link_account from './FooterLinkAccount'
import Footer__link_help from './FooterLinkHelp'
import Footer__link_klm from './FooterLinkKlm'
import {
  Footer__link__title_account,
  Footer__link__title_help,
  Footer__link__title_klm,
} from './FooterLinksTitles'

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
