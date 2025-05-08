import { useRouter } from 'next/navigation'

import { setIsAuth } from '@/context/auth'
import { handleLogout } from '@/lib/utils/auth'
import api from '../api/apiInstance'

export const useUserLogout = () => {
  const router = useRouter()

  return async () => {
    try {
      const { data } = await api.post(
        '/api/users/delete-cookie',
        {},
        { withCredentials: true }
      )
      await handleLogout()
      localStorage.removeItem('auth')
      localStorage.removeItem('@@oneclientjs@@::jo3z0HE080apSUHIQG5x::@@user@@')
      localStorage.removeItem(
        '@@oneclientjs@@::jo3z0HE080apSUHIQG5x::jo3z0HE080apSUHIQG5x::openid profile email offline_access'
      )
      setIsAuth(false)
      if (data.message === 'Logged out') {
        window.location.reload()
      }
    } catch (error) {
      console.error('Ошибка при выходе из системы:', error)
    }
  }
}
