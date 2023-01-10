import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isPopupError:false,
};
const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setisError(state, action) {
      state.isPopupError = action.payload;
    },
  },
});
export const setError = (state) => state.error;

export const { setisError } = errorSlice.actions;

export default errorSlice.reducer;
