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
      clearIsCards(state) {
        return (state = [])
      }
  },
});
export const { setIsCards, clearIsCards } = cardsSlice.actions;

export default cardsSlice.reducer;
