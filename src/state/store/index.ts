import { configureStore } from '@reduxjs/toolkit'
import fighterSlice from '../slices/fighters'

export const store = configureStore({
  reducer: {
    fighter: fighterSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
