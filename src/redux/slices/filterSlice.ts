import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchValue: "",
};
const filterSlice: any = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action: any) {
      state.searchValue = action.payload;
    },
  },
});
export const selectFilter = (state: any) => state.filter;

export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
