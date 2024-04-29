import { useAppSelector } from '@/context/hooks'
import { useEffect, useState } from 'react'

export const useUserAvatar = () => {
  const user = useAppSelector((state) => state.user)

  const [src, setSrc] = useState('')

  useEffect(() => {
    if (user.user?.image) {
      setSrc(user.user?.image)
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
  }, [user.user?.image])

  return { src, alt: user.user?.name }
}
