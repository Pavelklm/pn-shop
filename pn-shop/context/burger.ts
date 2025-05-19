import { createSlice } from '@reduxjs/toolkit'

const burgerSlice = createSlice({
  name: 'burger',
  initialState: {
    isBurgerOpen: false,
  },
  reducers: {
    openBurger: (state) => {
      state.isBurgerOpen = true
    },
    closeBurger: (state) => {
      state.isBurgerOpen = false
    },
  },
})

export const { openBurger, closeBurger } = burgerSlice.actions

export const burgerReducer = burgerSlice.reducer
