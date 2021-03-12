import { configureStore } from '@reduxjs/toolkit'

import dogReducer from '../features/Dogs/dogSlice'

export default configureStore({
  reducer: {
    dogs:dogReducer
  }
})