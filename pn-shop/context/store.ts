import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth'
import { burgerReducer } from './burger'
import { langReducer } from './lang'
import { userReducer } from './user'

export const makeStore = () =>
  configureStore({
    reducer: {
      lang: langReducer,
      auth: authReducer,
      user: userReducer,
      burger: burgerReducer,
    },
  })

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
