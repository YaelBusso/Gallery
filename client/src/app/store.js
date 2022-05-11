import { configureStore } from '@reduxjs/toolkit'
import imageReducer from '../features/imagesSlice'

export default configureStore({
  reducer: {
    imageList: imageReducer,
  },
})