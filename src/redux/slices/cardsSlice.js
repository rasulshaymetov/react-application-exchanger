import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isCards:[],
};
const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setIsCards(state, action) {
      state.isCards.push(action.payload)
    },
  },
});
export const { setIsCards } = cardsSlice.actions;

export default cardsSlice.reducer;
