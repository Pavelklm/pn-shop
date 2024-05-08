import { setIsAuth } from '@/context/auth'
import { useRouter } from 'next/navigation'

export const useUserLogout = () => {
  const router = useRouter()

  return () => {
    router.push('/')
    localStorage.removeItem('auth')
    localStorage.removeItem('@@oneclientjs@@::jo3z0HE080apSUHIQG5x::@@user@@')
    localStorage.removeItem(
      '@@oneclientjs@@::jo3z0HE080apSUHIQG5x::jo3z0HE080apSUHIQG5x::openid profile email offline_access'
    )
    setIsAuth(false)
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }
}
