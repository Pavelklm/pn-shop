import { loginCheckFx } from '@/api/auth'
import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    isLoadingUser: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginCheckFx.fulfilled, (state, { payload }) => {
        state.user = payload
        state.isLoadingUser = false
      })
      .addCase(loginCheckFx.pending, (state) => {
        state.isLoadingUser = true
      })
      .addCase(loginCheckFx.rejected, (state, { error }) => {
        toast.error(error.message as string)
        state.isLoadingUser = false
      })
  },
})

export const { setUser } = userSlice.actions

export const userReducer = userSlice.reducer
