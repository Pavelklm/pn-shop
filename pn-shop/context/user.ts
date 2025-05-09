import { loginCheckFx } from '@/lib/utils/api/auth'
import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      image: '',
      _id: '',
      role: '',
      subscribed: false,
      subEmail: '',
    },
    isLoadingUser: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setLoadingUserTrue: (state) => {
      state.isLoadingUser = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginCheckFx.fulfilled, (state, { payload }) => {
        state.user.name = payload?.name
        state.user.lastName = payload?.lastName
        state.user.email = payload?.email
        state.user.phone = payload?.phone
        state.user._id = payload?._id
        state.user.image = payload?.image
        state.user.role = payload?.role
        state.user.subscribed = payload?.subscribed
        state.user.subEmail = payload?.subEmail
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

export const { setUser, setLoadingUserTrue } = userSlice.actions

export const userReducer = userSlice.reducer
