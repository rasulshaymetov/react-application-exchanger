import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoader:true,
};
const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setIsLoader(state, action) {
      state.isLoader = action.payload;
    },
  },
});
export const setLoader = (state) => state.loader;

export const { setIsLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
