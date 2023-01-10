import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import select from "./slices/arrSlice"
import loader from "./slices/loaderSlice"
import error from "./slices/errorSlice"
import cards from "./slices/cardsSlice";
export const store = configureStore({
  reducer: {
    filter,
    select,
    loader,
    error,
    cards
  },
});