import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedCards: []
};
const addItemToArray = (state:any, action:any) => {
//   ...state,
  // const { cards } = 
  return {
   ...state,
    selectedCards: [...state.selectedCards, action.payload]
  };
};

//     state.push(action.payload)
// }
const arrSlice: any = createSlice({
  name: "array",
  initialState,
  reducers: {
    setArrayValue: addItemToArray
  },
});
export const selectArr = (state: any) => state.array;

export const { setArrayValue } = arrSlice.actions;

export default arrSlice.reducer;
