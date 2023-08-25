import { configureStore } from '@reduxjs/toolkit'
import modalReducer from "./features/modalSlice"
import userReducer from "./features/authSlice"

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer
  },
})