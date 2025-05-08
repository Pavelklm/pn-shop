/* eslint-disable @typescript-eslint/no-explicit-any */
import { setSubscribed } from '@/context/subscribe'
import { Tokens } from '@/types/ITokens'
import { createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import api from '../lib/utils/apiInstance'

export const subscribeFx = createAsyncThunk<
  Tokens,
  { email: string; jwt: string }
>('subscribe/subscribe', async ({ email, jwt }, thunkAPI) => {
  const { dispatch } = thunkAPI
  try {
    const { data } = await api.post(
      '/api/users/subscribe',
      { subEmail: email },
      {
        headers: { Authorization: `Bearer ${jwt}` },
      }
    )

    if (data.warningMessage) {
      toast.error(data.warningMessage)
      return Promise.reject(data.warningMessage)
    }

    dispatch(setSubscribed())

    return data
  } catch (error) {
    toast.error((error as Error).message)
  }
})
