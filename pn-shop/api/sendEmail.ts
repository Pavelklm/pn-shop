import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import api from './apiInstance.ts'

export const sendEmailFx = createAsyncThunk(
  'email/send',
  async (
    emailData: {
      name: string
      email: string
      message: string
      postScriptum: string
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await api.post('/api/sendEmail', emailData)
      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || 'Ошибка при отправке email'
        )
      }

      return rejectWithValue('Неизвестная ошибка при отправке email')
    }
  }
)
