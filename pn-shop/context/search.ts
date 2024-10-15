import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isSearchOpen: false,
  },
  reducers: {
    openSearch: (state) => {
      state.isSearchOpen = true
    },
    closeSearch: (state) => {
      state.isSearchOpen = false
    },

    toggleSearch: (state) => {
      state.isSearchOpen = !state.isSearchOpen
    },
  },
})

export const { openSearch, closeSearch, toggleSearch } = searchSlice.actions

export const searchReducer = searchSlice.reducer
