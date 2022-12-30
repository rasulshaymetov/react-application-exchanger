import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import array from "./slices/arrSlice"
import loader from "./slices/loaderSlice"
import error from "./slices/errorSlice"
export const store = configureStore({
  reducer: {
    filter,
    array,
    loader,
    error
  },
});