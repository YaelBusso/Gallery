import { configureStore } from '@reduxjs/toolkit'
import imageReducer from '../features/imagesSlice'

// import counterReducer from  '../features/imagesSlice'
export default configureStore({
  reducer: {
    imageList: imageReducer,
    // counter: counterReducer,
  },
})