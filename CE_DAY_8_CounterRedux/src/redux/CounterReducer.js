import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = 0

// Create the slice
const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    Increment: (state) => {
      state += 1;
      console.log(state)
      return state
    },
    Decrement: (state) => {
      state -= 1;
      return state
    },
  },
});

// Export the reducer
export const counterReducer = counterSlice.reducer;

// Export the actions
export const { Increment, Decrement } = counterSlice.actions;