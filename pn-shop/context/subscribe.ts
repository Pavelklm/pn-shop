import { subscribeFx } from '@/lib/utils/api/subscribe'
import { createSlice } from '@reduxjs/toolkit'

const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState: {
    loading: false,
    error: null,
    subscribed: false,
  },
  reducers: {
    setSubscribed: (state) => {
      state.subscribed = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeFx.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(subscribeFx.fulfilled, (state) => {
        state.loading = false
        state.subscribed = true
      })
      .addCase(subscribeFx.rejected, (state) => {
        state.loading = false
      })
  },
})

export const { setSubscribed } = subscribeSlice.actions

export const subscribeReducer = subscribeSlice.reducer
