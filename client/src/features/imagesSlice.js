import { createSlice } from "@reduxjs/toolkit";
// import * as api from "../api/index.js";


export const imageSlice = createSlice({
  name: "imageList",
  initialState: {
    value: [],
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

// Action creators are generated for each case reducer function
export const { updateImage, getImages } = imageSlice.actions;

export default imageSlice.reducer;
