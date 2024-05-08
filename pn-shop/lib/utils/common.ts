import { loginCheckFx } from '@/api/auth'
import { setIsAuth } from '@/context/auth'
import { AppDispatch } from '@/context/store'

export const isUserAuth = (dispatch: AppDispatch) => {
  const auth = JSON.parse(localStorage.getItem('auth') as string)

  if (!auth?.accessToken) {
    dispatch(setIsAuth(false))
    return false
  }

  return true
}
export const triggerLoginCheck = (dispatch: AppDispatch) => {
  if (!isUserAuth(dispatch)) {
    return
  }

  const auth = JSON.parse(localStorage.getItem('auth') as string)

  if (auth) {
    dispatch(loginCheckFx({ jwt: auth.accessToken }))
  } else {
    console.error('Невозможно получить токен доступа')
  }
}

export const getWindowWidth = () => {
  const { innerWidth: windowWidth } =
    typeof window !== 'undefined' ? window : { innerWidth: 0 }

  return { windowWidth }
}
