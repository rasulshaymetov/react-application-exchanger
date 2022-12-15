import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import array from "./slices/arrSlice"
export const store = configureStore({
  reducer: {
    filter,
    array
  },
});