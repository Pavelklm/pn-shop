import { useLang } from '@/hooks/useLang'

export const Footer__link__title_account = () => {
  const { lang, translations } = useLang()
  return (
    <h4 className='footer__links__list__title'>
      {translations[lang].footer.title}
    </h4>
  )
}

export const Footer__link__title_help = () => {
  const { lang, translations } = useLang()

  return (
    <h4 className='footer__links__list__title'>
      {translations[lang].footer.helps}
    </h4>
  )
}

export const Footer__link__title_klm = () => (
  <h4 className='footer__links__list__title'>KLM</h4>
)
