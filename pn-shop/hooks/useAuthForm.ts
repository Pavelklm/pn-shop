/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppSelector } from '@/context/hooks'
import { RootState } from '@/context/store'
import { IInputs } from '@/types/IAuthPopup'
import { useEarthoOne } from '@eartho/one-client-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const useAuthForm = (
  initialSpinner: boolean,
  isSideActive: boolean,
  event: (userData: {
    name: string
    email: string
    password: string
    isOAuth: boolean
  }) => void
) => {
  const spinner = useAppSelector((state: RootState) => state.auth.isLoading)

  const { isConnected, user, connectWithPopup } = useEarthoOne()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IInputs>()

  useEffect(() => {
    if (isSideActive) {
      if (isConnected) {
        event({
          name: (user?.displayName || '').trim(),
          email: user?.email || '',
          password: user?.uid || '',
          isOAuth: true,
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected])

  const handleSignUpWithOAuth = () => {
    connectWithPopup({
      accessId: `${process.env.NEXT_PUBLIC_OAUTH_ACCESS_ID}`,
    })
  }

  return {
    spinner,
    register,
    errors,
    handleSubmit,
    handleSignUpWithOAuth,
  }
}
