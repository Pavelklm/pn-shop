import { singInFx, singUpFx } from '@/api/auth'
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    isAuthPopupOpen: false,
    isLoading: false,
  },
  reducers: {
    openAuthPopup: (state) => {
      state.isAuthPopupOpen = true
    },
    closeAuthPopup: (state) => {
      state.isAuthPopupOpen = false
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(singUpFx.pending, (state) => {
        state.isLoading = true
      })
      .addCase(singUpFx.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(singUpFx.rejected, (state, { error }) => {
        toast.error(error.message as string)
        state.isLoading = false
      })
      .addCase(singInFx.pending, (state) => {
        state.isLoading = true
      })
      .addCase(singInFx.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(singInFx.rejected, (state, { error }) => {
        toast.error(error.message as string)
        state.isLoading = false
      })
  },
})
export const { openAuthPopup, closeAuthPopup, setIsAuth } = authSlice.actions

export const selectIsAuthPopupOpen = (state: {
  auth: { isAuthPopupOpen: boolean }
}) => state.auth.isAuthPopupOpen

export const authReducer = authSlice.reducer
