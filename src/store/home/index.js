import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount } = homeSlice.actions;

export default homeSlice.reducer;
