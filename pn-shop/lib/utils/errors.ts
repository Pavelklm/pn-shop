import { JWTError } from '@/constants/jwt'
import { AppDispatch } from '@/context/store'
import { loginCheckFx, refreshTokenFx } from '@/lib/utils/api/auth'
import { Tokens } from '@/types/ITokens'

/* eslint-disable */
export const handleJWTError = async (
  errorName: string,
  dispatch: AppDispatch,
  repeatRequestAfterRefreshData?: {
    repeatRequestMethodName: string
    payload?: unknown
  }
) => {
  if (errorName === JWTError.EXPIRED_JWT_TOKEN) {
    const auth = JSON.parse(localStorage.getItem('auth') as string)
    const newTokens = await dispatch(refreshTokenFx({ jwt: auth.refreshToken }))

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
