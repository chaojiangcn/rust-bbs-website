"use client";

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState = {
  navIndex: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.navIndex += 1;
    },
    decrement: (state) => {
      state.navIndex -= 1;
    },
    // use PayloadAction<X> to define the type of the payload
    changeNav: (state, action) => {
      state.navIndex = action.payload;
    },
  },
});

export const { increment, decrement, changeNav } = counterSlice.actions;

export default counterSlice.reducer;

export const getNav = (state: RootState) => state.counter.navIndex;
