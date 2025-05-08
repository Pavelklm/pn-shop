'use client'

import { useFormHandlers } from '@/hooks/useFormHandlers'
import { useLang } from '@/hooks/useLang'
import { useUser } from '@/hooks/useUser'
import { useUserAvatar } from '@/hooks/useUserAvatar'
import { handleInputBlur, handleInputFocus } from '@/lib/helpers/InputFocus'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const ProfileSettings = () => {
  const { src, alt } = useUserAvatar()
  const user = useUser()
  const { lang, translations } = useLang()
  const { formData, errors, handleChange, handleSubmit } = useFormHandlers(user)
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    const hasErrors = Object.values(errors).some(Boolean)
    const isFormIncomplete =
      !formData.name && !formData.lastName && !formData.email && !formData.phone

    if (!hasErrors && !isFormIncomplete) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [formData, errors])

  return (
    <div className='ProfileSettings'>
      <div className='ProfileSettings__container'>
        <div className='ProfileSettings__inner'>
          <div className='ProfileSettings__account'>
            <h3 className='ProfileSettings__account__title'>
              Account Settings
            </h3>
            <div className='ProfileSettings__account__inner'>
              <div className='ProfileSettings__account__form'>
                <div className='ProfileSettings__account__form__input'>
                  <label
                    className='ProfileSettings__account__form__input__title'
                    htmlFor='name'
                  >
                    First Name
                  </label>
                  <input
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className='ProfileSettings__account__form__input__text placeholder'
                    type='text'
                    id='name'
                  />
                  {errors.name && (
                    <div className='ProfileSettings__error'>
                      {errors.name
                        ? translations[lang].errors.invalid_name_profileForm
                        : ''}
                    </div>
                  )}
                  <span className='ProfileSettings__account__form__input__floating_label'>
                    {user?.user?.name || translations[lang].placeholder.name}
                  </span>
                </div>
                <div className='ProfileSettings__account__form__input'>
                  <label
                    className='ProfileSettings__account__form__input__title'
                    htmlFor='lastName'
                  >
                    Last Name
                  </label>
                  <input
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className='ProfileSettings__account__form__input__text placeholder'
                    type='text'
                    id='lastName'
                  />
                  {errors.lastName && (
                    <div className='ProfileSettings__error'>
                      {errors.lastName
                        ? translations[lang].errors.invalid_surname_profileForm
                        : ''}
                    </div>
                  )}
                  <span className='ProfileSettings__account__form__input__floating_label'>
                    {user?.user?.lastName ||
                      translations[lang].placeholder.surname}
                  </span>
                </div>
                <div className='ProfileSettings__account__form__input'>
                  <label
                    className='ProfileSettings__account__form__input__title'
                    htmlFor='email'
                  >
                    Email
                  </label>

                  <input
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className='ProfileSettings__account__form__input__text placeholder'
                    type='text'
                    id='email'
                  />
                  {errors.email && (
                    <div className='ProfileSettings__error'>
                      {errors.email
                        ? translations[lang].errors.invalid_email
                        : ''}
                    </div>
                  )}
                  <span className='ProfileSettings__account__form__input__floating_label'>
                    {user?.user?.email || translations[lang].placeholder.email}
                  </span>
                </div>
                <div className='ProfileSettings__account__form__input'>
                  <label
                    htmlFor='phone'
                    className='ProfileSettings__account__form__input__title'
                  >
                    Phone Number
                  </label>

                  <input
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className='ProfileSettings__account__form__input__text placeholder'
                    type='text'
                    id='phone'
                  />
                  {errors.phone && (
                    <div className='ProfileSettings__error'>
                      {errors.phone
                        ? translations[lang].errors.invalid_phone_profileForm
                        : ''}
                    </div>
                  )}
                  <span className='ProfileSettings__account__form__input__floating_label'>
                    {user?.user?.phone || '+1 234 567 8900'}
                  </span>
                </div>
                <button
                  className={`btn-reset ProfileSettings__account__form__btn ${isDisabled ? 'disabled' : ''}`}
                  type='submit'
                  onClick={handleSubmit}
                  disabled={isDisabled}
                >
                  Save Changes
                </button>
              </div>
              <div className='ProfileSettings__account__avatar'>
                <Image
                  src={src ? src : '/img/profile.png'}
                  alt={alt ? alt : 'profile'}
                  width={224}
                  height={224}
                  draggable={false}
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
                <button className='btn-reset ProfileSettings__account__avatar__btn'>
                  Chose Image
                </button>
              </div>
            </div>
          </div>
          <div className='ProfileSettings__billing-adress'>dsa</div>
          <div className='ProfileSettings__change-password'>sad</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings
