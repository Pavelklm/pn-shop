import { createAsyncThunk } from '@reduxjs/toolkit'
import api from './apiInstance'

export const isMobileFx = createAsyncThunk('device/isMobile', async () => {
  const { data } = await api.post('/api/isMobile')
  console.log('is', data)
  return data.isMobile
})
