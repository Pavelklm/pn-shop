import { loginCheckFx } from '@/api/auth'
import { subscribeFx } from '@/api/subscribe'
import { setIsAuth } from '@/context/auth'
import { AppDispatch } from '@/context/store'
import toast from 'react-hot-toast'

export const isUserAuth = (dispatch: AppDispatch) => {
  const auth = JSON.parse(localStorage.getItem('auth') as string) ?? {}

  if (!auth.accessToken) {
    dispatch(setIsAuth(false))
    return false
  }

  return true
}

export const triggerLoginCheck = (dispatch: AppDispatch) => {
  if (!isUserAuth(dispatch)) {
    return
  }

  const auth = JSON.parse(localStorage.getItem('auth') as string) ?? {}

  if (auth.accessToken) {
    dispatch(loginCheckFx({ jwt: auth.accessToken }))
  } else {
    console.error('Невозможно получить токен доступа')
  }
}

export const triggerSubscribe = (dispatch: AppDispatch, email: string) => {
  const auth = JSON.parse(localStorage.getItem('auth') as string) ?? {}

  if (!isUserAuth(dispatch)) {
    toast.error('you are not authorized')
    return
  }

  if (auth.accessToken) {
    dispatch(
      subscribeFx({
        jwt: auth.accessToken,
        email,
      })
    )
  } else {
    console.error('Невозможно получить токен доступа')
  }
}

export const getWindowWidth = () => {
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0
  return { windowWidth }
}
