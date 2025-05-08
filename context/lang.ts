import { AllowedLangs } from '@/constants/lang'
import { createSlice } from '@reduxjs/toolkit'

const langSlice = createSlice({
  name: 'lang',
  initialState: AllowedLangs.EN,
  reducers: {
    setLang: (state, action) => action.payload,
  },
})

export const { setLang } = langSlice.actions

export const selectLang = (state: { lang: AllowedLangs }) => state.lang

export const langReducer = langSlice.reducer
