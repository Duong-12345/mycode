import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
    price: 6940000,
    total: 8328000,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.price += 6940000;
      state.total += 6940000;
    },
    decrement: (state) => {
      state.value -= 1;
      state.price -= 6940000;
      state.total -= 6940000;
      if (state.value < 0) {
        state.value = 0;
      }
      if (state.price < 0) {
        state.price = 0;
      }
      if (state.total < 1388000) {
        state.total = 1388000;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const Select = (state) => state.counter.price;
export const SelectTotal = (state) => state.counter.total;

export default counterSlice.reducer;
