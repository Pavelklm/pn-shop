import { createSlice } from '@reduxjs/toolkit'

const mobileSlice = createSlice({
  name: 'mobile',
  initialState: { isMobile: false },
  reducers: {
    setMobile: (state, action) => {
      state.isMobile = action.payload
    },
  },
})

export const { setMobile } = mobileSlice.actions

export const mobileReducer = mobileSlice.reducer
