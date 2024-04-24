import { singInFx, singUpFx } from '@/api/auth'
import { closeAuthPopup, setIsAuth } from '@/context/auth'
import { AppDispatch } from '@/context/store'
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
  dispatch: AppDispatch
) => {
  dispatch(singInFx({ email, password, isOAuth, dispatch }))
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
