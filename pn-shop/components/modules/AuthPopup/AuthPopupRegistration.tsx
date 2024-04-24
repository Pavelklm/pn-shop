import { useAppDispatch } from '@/context/hooks'
import { RootState } from '@/context/store'
import { useAuthForm } from '@/hooks/useAuthForm'
import { useLang } from '@/hooks/useLang'
import { closePopup, handleSignUp } from '@/lib/utils/auth'
import { IAuthSideProps, IInputs } from '@/types/IAuthPopup'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import AuthPopupSocials from './AuthPopupSocial'
import EmailInput from './EmailInput'
import NameInput from './NameInput'
import PasswordInput from './PasswordInput'

const AuthPopupRegistration = ({
  toggleAuth,
  isSideActive,
}: IAuthSideProps) => {
  const { lang, translations } = useLang()
  const dispatch = useAppDispatch()
  const { isLoading } = useSelector((state: RootState) => state.auth)
  const { spinner, register, errors, handleSubmit, handleSignUpWithOAuth } =
    useAuthForm(isLoading, isSideActive, (userData) =>
      handleSignUp(
        userData.name,
        userData.email,
        userData.password,
        userData.isOAuth,
        dispatch
      )
    )

  const submitForm = (data: IInputs) =>
    handleSignUp(data.name, data.email, data.password, false, dispatch)

  return (
    <div className='card-front'>
      <button
        className='btn-reset auth-popup__close'
        onClick={() => closePopup(dispatch)}
      />
      <div className='card-body wow-bg'>
        <h3 className='card-body__title'>
          {translations[lang].auth_popup.registration_title}
        </h3>
        <p className='card-body__description'>
          {translations[lang].auth_popup.registration_description}
        </p>
        <form onSubmit={handleSubmit(submitForm)}>
          <NameInput register={register} errors={errors} />
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />
          <div className='card-body__inner'>
            <div className='inner__top'>
              <button className='inner__btn' type='submit' disabled={spinner}>
                {spinner ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  translations[lang].auth_popup.registration_text
                )}
              </button>
            </div>
            <div className='inner__bottom'>
              <span className='inner__bottom__text'>
                {translations[lang].auth_popup.registration_question}
              </span>
              <button
                type='button'
                className='btn-reset inner__switch'
                onClick={toggleAuth}
              >
                {translations[lang].auth_popup.login_text}!
              </button>
            </div>
          </div>
        </form>
        <AuthPopupSocials handleSignUpWithOAuth={handleSignUpWithOAuth} />
      </div>
    </div>
  )
}

export default AuthPopupRegistration
