import { useAppSelector } from '@/context/hooks'
import { ITakeUser } from '@/types/IUser'
import { useEffect, useState } from 'react'

export const useUserAvatar = () => {
  const user = useAppSelector((state: { user: ITakeUser }) => state.user)

  const [src, setSrc] = useState('')

  useEffect(() => {
    if (user?.image) {
      setSrc(user?.image)
      return
    }

    const oauthAvatar = JSON.parse(
      localStorage.getItem(
        '@@oneclientjs@@::jo3z0HE080apSUHIQG5x::@@user@@'
      ) as string
    )

    if (!oauthAvatar) {
      return
    }

    setSrc(oauthAvatar?.decodedToken.user.photoURL)
  }, [user?.image])

  return { src, alt: user?.name }
}
