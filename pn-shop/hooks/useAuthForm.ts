/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppSelector } from '@/context/hooks'
import { RootState } from '@/context/store'
import { IInputs } from '@/types/IAuthPopup'
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

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IInputs>()

  return {
    spinner,
    register,
    errors,
    handleSubmit,
  }
}
