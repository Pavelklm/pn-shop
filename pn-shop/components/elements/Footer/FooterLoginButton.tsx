import { openAuthPopup } from '@/context/auth'
import { useAppDispatch } from '@/context/hooks'
import { useLang } from '@/hooks/useLang'
import toast from 'react-hot-toast'

type FooterLoginButtonProps = {
  name: string
}

const FooterLoginButton = ({ name }: FooterLoginButtonProps) => {
  const dispatch = useAppDispatch()
  const { lang, translations } = useLang()
  const handleOpenAuthPopup = () => {
    dispatch(openAuthPopup())
    toast.error(translations[lang].errors.register_first)
  }
  return (
    <button
      className='footer__links__list_link btn-reset'
      onClick={handleOpenAuthPopup}
    >
      {translations[lang].footer[name]}
    </button>
  )
}

export default FooterLoginButton
