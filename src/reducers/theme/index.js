import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  colorMode: 'dark',
};

const themeSlide = createSlice({
  name: 'themeReducer',
  initialState: INITIAL_STATE,
});

export default themeSlide.reducer;
