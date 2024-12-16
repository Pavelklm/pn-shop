import Footer__svg_apple from '../Footer__svg/Footer__svg_apple'
import Footer__svg_discover from '../Footer__svg/Footer__svg_discover'
import Footer__svg_masterCard from '../Footer__svg/Footer__svg_masterCard'
import Footer__svg_secure from '../Footer__svg/Footer__svg_secure'
import Footer__svg_visa from '../Footer__svg/Footer__svg_visa'

const FooterBottom = () => (
  <div className='footer__bottom'>
    <div className='all__rights'>
      <p>KLM eCommerce © 2025. All Rights Reserved</p>
    </div>
    <div className='footer__bottom__partners'>
      <Footer__svg_apple className='footer__bottom__partners_pay' />
      <Footer__svg_visa className='footer__bottom__partners_pay' />
      <Footer__svg_discover className='footer__bottom__partners_pay' />
      <Footer__svg_masterCard className='footer__bottom__partners_pay' />
      <Footer__svg_secure className='footer__bottom__partners_pay' />
    </div>
  </div>
)

export default FooterBottom
