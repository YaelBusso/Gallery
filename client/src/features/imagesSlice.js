import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/index.js";


export const imageSlice = createSlice({
  name: "imageList",
  initialState: {
    value: [],
    status: 'idle',
    error: null
  },
  reducers: {
    getImages: (state, action) => {
      state.value = action.payload
    },
    updateImage: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const selectAllImages = state => state.imageList
export const fetchImages = createAsyncThunk('', async () => {
  const response = await api.fetchImages()
  return response.data
})
// Action creators are generated for each case reducer function
export const { updateImage, getImages } = imageSlice.actions;

export default imageSlice.reducer;
