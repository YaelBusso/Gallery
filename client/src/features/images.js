import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const imagesSlice = createSlice({
  name: "images",
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = imagesSlice.actions;

export default imagesSlice.reducer;