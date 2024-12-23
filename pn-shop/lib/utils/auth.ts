import { loginCheckFx, singInFx, singUpFx } from '@/api/auth'
import { AllowedLangs } from '@/constants/lang'
import { closeAuthPopup, setIsAuth } from '@/context/auth'
import { AppDispatch } from '@/context/store'
import { signOut } from 'next-auth/react'
import toast from 'react-hot-toast'

export const closePopup = (dispatch: AppDispatch) => {
  dispatch(closeAuthPopup())
}

export const onAuthSuccess = <T>(
  message: string,
  data: T,
  dispatch: AppDispatch
) => {
  localStorage.setItem('auth', JSON.stringify(data))
  toast.success(message)
  closePopup(dispatch)
  dispatch(setIsAuth(true))

  const token = (data as { accessToken: string }).accessToken
  dispatch(loginCheckFx({ jwt: token }))
}

export const handleSignUp = (
  name: string,
  email: string,
  password: string,
  isOAuth: boolean,
  dispatch: AppDispatch
) => {
  dispatch(singUpFx({ name, email, password, isOAuth, dispatch }))
}
export const handleSignIn = (
  email: string,
  password: string,
  isOAuth: boolean,
  dispatch: AppDispatch,
  image?: string,
  name?: string,
  currentLang: AllowedLangs = AllowedLangs.EN
) => {
  dispatch(
    singInFx({
      email,
      password,
      isOAuth,
      dispatch,
      image,
      name,
      currentLang,
    })
  )
}
export const handleLogout = async () => {
  await signOut({ callbackUrl: '/' })
}

export const nameValidationRules = (
  message: string,
  requireMessage?: string
) => ({
  ...(requireMessage && { required: requireMessage }),
  pattern: {
    value: /^[а-яА-Яa-zA-ZёЁ]*$/,
    message,
  },
  minLength: 2,
  maxLength: 15,
})

export const emailValidationRules = (
  message: string,
  requireMessage?: string
) => ({
  ...(requireMessage && { required: requireMessage }),
  pattern: {
    value: /\S+@\S+\.\S+/,
    message,
  },
})

export const generateRandomPassword = (length: number) =>
  Array.from(
    { length },
    () =>
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'[
        Math.floor(Math.random() * 62)
      ]
  ).join('')
