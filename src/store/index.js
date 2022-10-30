import { configureStore } from '@reduxjs/toolkit'
import chatSlice from  "./reducer"

export const store = configureStore({
  reducer: chatSlice,
})