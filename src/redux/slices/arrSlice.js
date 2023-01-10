import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedCards:[],
};
const arrSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    setSelectedCards(state, action) {
      state.selectedCards.push(action.payload)
    },
  },
});
export const selectArray = (state) => state.select;

export const { setSelectedCards } = arrSlice.actions;

export default arrSlice.reducer;
