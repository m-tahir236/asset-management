import { createSlice } from "@reduxjs/toolkit";
// import { useState } from "react";

// const [counter, setCounter] = useState(0);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increaseByPayload: (state, action) => {
      state.value += action.payload;
    },
    decreaseByPayload: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, increaseByPayload, decreaseByPayload } =
  counterSlice.actions;

export default counterSlice.reducer;
