/* eslint-disable @typescript-eslint/no-explicit-any */
import { setIsAuth } from '@/context/auth'
import { AppDispatch } from '@/context/store'
import { onAuthSuccess } from '@/lib/utils/auth'
import { handleJWTError } from '@/lib/utils/errors'
import { ISignUpFx } from '@/types/IAuthPopup'
import { Tokens } from '@/types/ITokens'
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
        try {
          const { data } = await api.post('/api/users/oauth', {
            name,
            email,
            password,
          })
          const userData = data.user ? data.user : data
          onAuthSuccess('Authorization successful', userData, dispatch)
          return userData
        } catch (error) {
          toast.error((error as Error).message)
        }
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
        if (data.error) {
          return Promise.reject(data.error)
        }
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

export const loginCheckFx = createAsyncThunk(
  'auth/loginCheck',
  async ({ jwt }: { jwt: string }, thunkAPI: any) => {
    const { dispatch } = thunkAPI
    try {
      const { data } = await api.get('/api/users/login-check', {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      if (data?.error) {
        handleJWTError(data.error.name, dispatch, {
          repeatRequestMethodName: 'loginCheckFx',
        })
        return
      }

      dispatch(setIsAuth(true))
      return data.user
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)

export const refreshTokenFx = createAsyncThunk<Tokens, { jwt: string }>(
  'auth/refreshToken',
  async ({ jwt }) => {
    const { data } = await api.post('/api/users/refresh', { jwt })

    localStorage.setItem('auth', JSON.stringify(data))

    return data
  }
)
