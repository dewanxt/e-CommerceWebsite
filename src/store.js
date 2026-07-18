import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/CounterSlice'

export default configureStore({
  reducer: {
    Counter : counterSlice.reducer
  },
})