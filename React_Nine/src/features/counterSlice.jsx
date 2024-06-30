import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
};
export const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action) => {
    //   state.count += 1;
    state.count += action.payload
    },
    decrement: (state,{payload}) => {
       
        if(state.count >0){
            state.count -= payload;
        }
    }
  },
});

export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer