
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  breakfast: {},
  lunch: {},
  dinner: {},
  snack: {},
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    setBreakfastData: (state, action) => {
      state.breakfast = action.payload;
    },
    setLunchData: (state, action) => {
      state.lunch = action.payload;
    },
    setDinnerData: (state, action) => {
      state.dinner = action.payload;
    },
    setSnackData: (state, action) => {
      state.snack = action.payload;
    },
  },
});

export const { setBreakfastData, setLunchData, setDinnerData, setSnackData } =
  diarySlice.actions;

export default diarySlice.reducer;
