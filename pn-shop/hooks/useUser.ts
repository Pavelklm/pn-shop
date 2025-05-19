import { useAppSelector } from '@/context/hooks'

export const useUser = () => {
  const user = useAppSelector((state) => state.user.user)
  const isAdmin = user?.role === 'admin'
  const isAuth = useAppSelector((state) => state.auth.isAuth)

  if (!isAuth) {
    return { user: null, isAdmin: false }
  }

  return { user, isAdmin }
}
