import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  theme: 'black', // Initial theme is 'black'
};

// Create the slice
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Toggle between 'black' and 'white' themes
      state.theme = state.theme === 'black' ? 'white' : 'black';
    },
  },
});

// Export the reducer
export const themeReducer = themeSlice.reducer;

// Export the actions
export const { toggleTheme } = themeSlice.actions;
