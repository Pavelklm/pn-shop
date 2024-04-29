import { loginCheckFx, refreshTokenFx } from '@/api/auth'
import { JWTError } from '@/constants/jwt'
import { AppDispatch } from '@/context/store'
import { Tokens } from '@/types/ITokens'

/* eslint-disable */
export const handleJWTError = async (
  errorName: string,
  dispatch: AppDispatch,
  repeatRequestAfterRefreshData?: {
    repeatRequestMethodName: string
    payload?: unknown
  },
) => {
  console.log(errorName)
  if (errorName === JWTError.EXPIRED_JWT_TOKEN) {
    const auth = JSON.parse(localStorage.getItem('auth') as string)
    console.log('auth', auth)
    console.log(auth.refreshToken)
    const newTokens = await dispatch(
      refreshTokenFx({ jwt: auth.refreshToken })
    )

    console.log(newTokens)

    if (repeatRequestAfterRefreshData) {
      const { repeatRequestMethodName } = repeatRequestAfterRefreshData

      switch (repeatRequestMethodName) {
        case 'loginCheckFx':
          dispatch(
            loginCheckFx({
              jwt: (newTokens.payload as Tokens).accessToken,
            })
          )
          break
      }
    }
  }
}
