import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchValue:"",
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});
export const selectFilter = (state) => state.filter;

export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
