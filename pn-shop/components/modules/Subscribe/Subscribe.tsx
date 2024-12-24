import SubscribeSocialLinks from '@/components/elements/SubscribeSocial_media/SubscribeSocialLinks'
import { useAppDispatch, useAppSelector } from '@/context/hooks'
import { setSubscribed } from '@/context/subscribe'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { triggerSubscribe } from '@/lib/utils/common'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import validator from 'validator'

const Subscribe = () => {
  const { lang, translations } = useLang()
  const isMedia1200 = useMediaQuery(1200)
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const isSubscribed = useAppSelector((state) => state.subscribe.subscribed)
  const isLoadingSubscribe = useAppSelector((state) => state.subscribe.loading)
  const user = useAppSelector((state) => state.user.user)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    if (user.subscribed) {
      dispatch(setSubscribed())
    }
  }, [dispatch, user.subscribed])

  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!e.target.value) {
      e.target.classList.remove('placeholder')
    }
  }
  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.value) {
      e.target.classList.remove('placeholder')
    }
    if (!e.target.value) {
      e.target.classList.add('placeholder')
    }
  }

  const validateEmail = () => {
    if (!email) {
      const errorMessage =
        translations[lang].errors.email_required || 'Email is required'
      setError(errorMessage)
      toast.error(errorMessage)
      return false
    }
    if (!validator.isEmail(email)) {
      const errorMessage =
        translations[lang].errors.invalid_email || 'Invalid email'
      setError(errorMessage)
      toast.error(errorMessage)
      return false
    }
    setError('')
    return true
  }

  const handleSubscribe = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    setIsClicked(true)
    console.log(isClicked)
    if (!validateEmail()) return
    triggerSubscribe(dispatch, email)
  }

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    console.log(email)
    if (isClicked) {
      setIsClicked(false)
    }
  }

  const renderForm = () => (
    <div className='subscribe__media_wrapper'>
      <form className='subscribe__form'>
        <label className='subscribe__label'>
          <input
            className={`subscribe__input placeholder ${!email ? '' : isClicked && error ? 'input-error' : ''}`}
            type='email'
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={email}
            onChange={emailChange}
            placeholder={translations[lang].subscribe.placeholder}
          />
          <button
            onClick={handleSubscribe}
            className='btn-reset subscribe__btn'
          >
            {isLoadingSubscribe ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              translations[lang].subscribe.button
            )}
          </button>
        </label>
      </form>
      <SubscribeSocialLinks className='subscribe__social_media' />
    </div>
  )

  const renderSuccessMessage = () => (
    <div className='subscribe__media_wrapper__success'>
      <div className='subscribe__success'>
        <div className='subscribe__success__text1'>
          {translations[lang].subscribe.success1}
        </div>
        <div className='subscribe__success__text2'>
          {translations[lang].subscribe.success2}
        </div>
      </div>
      <SubscribeSocialLinks className='subscribe__social_media__success' />
    </div>
  )

  return !isMedia1200 ? (
    <div className='container'>
      <div className='subscribe subscribe__container'>
        <div className='subscribe__wrapper'>
          <div className='subscribe__information'>
            <Image
              className='subscribe__image'
              src={'/img/mail.svg'}
              alt={'subscribe'}
              height={56}
              width={56}
              quality={100}
              draggable={false}
            />
            <div className='subscribe__text'>
              <h3 className='subscribe__title'>
                {translations[lang].subscribe.title}
              </h3>
              <p className='subscribe__description'>
                {translations[lang].subscribe.description}
              </p>
            </div>
          </div>
          {!isSubscribed ? renderForm() : renderSuccessMessage()}
        </div>
      </div>
    </div>
  ) : (
    <div className='subscribe subscribe__container container'>
      <div className='subscribe__wrapper'>
        <div className='subscribe__information'>
          <Image
            className='subscribe__image'
            src={'/img/mail.svg'}
            alt={'subscribe'}
            height={56}
            width={56}
            quality={100}
            draggable={false}
          />
          <div className='subscribe__text'>
            <h3 className='subscribe__title'>
              {translations[lang].subscribe.title}
            </h3>
            <p className='subscribe__description'>
              {translations[lang].subscribe.description}
            </p>
          </div>
        </div>
        {!isSubscribed ? renderForm() : renderSuccessMessage()}
      </div>
    </div>
  )
}

export default Subscribe
