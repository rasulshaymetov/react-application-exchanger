import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isPopupError:false,
};
const errorSlice: any = createSlice({
  name: "error",
  initialState,
  reducers: {
    setisError(state, action: any) {
      state.isPopupError = action.payload;
    },
  },
});
export const setError = (state: any) => state.error;

export const { setisError } = errorSlice.actions;

export default errorSlice.reducer;
