import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './ThemeReducer'; // Correct path to your reducer file

// Create the store
export const Store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
