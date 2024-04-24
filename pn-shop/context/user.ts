import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    image: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.image = action.payload.image
    },
  },
})

export const { setUser } = userSlice.actions

export const userReducer = userSlice.reducer
