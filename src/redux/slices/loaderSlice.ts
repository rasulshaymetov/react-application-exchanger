import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoader:true,
};
const loaderSlice: any = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setIsLoader(state, action: any) {
      state.isLoader = action.payload;
    },
  },
});
export const setLoader = (state: any) => state.loader;

export const { setIsLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
