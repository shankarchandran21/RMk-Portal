import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './CounterReducer'; // Path to your slice file

// Create the store
export const Store = configureStore({
  reducer: {
    count: counterReducer,
  },
});

