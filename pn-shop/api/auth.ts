import { AppDispatch } from '@/context/store'
import { onAuthSuccess } from '@/lib/utils/auth'
import { ISignUpFx } from '@/types/IAuthPopup'
import { createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import api from './apiInstance'

export const singUpFx = createAsyncThunk(
  'auth/singUp',
  async ({
    name,
    email,
    password,
    dispatch,
    isOAuth,
  }: ISignUpFx & {
    dispatch: AppDispatch
  }) => {
    try {
      if (isOAuth) {
        const { data } = await api.post('/api/users/oauth', {
          name,
          email,
          password,
        })
        const userData = data.user ? data.user : data
        onAuthSuccess('Authorization successful', userData, dispatch)
        return userData
      }
      const { data } = await api.post('/api/users/signup', {
        name,
        email,
        password,
      })
      if (data.warningMessage) {
        return Promise.reject(data.warningMessage)
      }
      onAuthSuccess('Registration successful', data, dispatch)
      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)

export const singInFx = createAsyncThunk(
  'auth/singIn',
  async ({
    email,
    password,
    dispatch,
    isOAuth,
  }: ISignUpFx & { dispatch: AppDispatch }) => {
    try {
      if (isOAuth) {
        const { data } = await api.post('/api/users/oauth', {
          email,
          password,
        })
        const userData = data.user ? data.user : data
        onAuthSuccess('Authorization successful', userData, dispatch)
        return userData
      }

      const { data } = await api.post('/api/users/login', { email, password })

      if (data.warningMessage) {
        return Promise.reject(data.warningMessage)
      }

      onAuthSuccess('Login successful', data, dispatch)

      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)
