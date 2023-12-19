import { createSlice } from '@reduxjs/toolkit';
import { fetchAllStatistics } from './statisticsOperations';

const initialState = {
  user: {
    name: '',
    avatarURL: '',
    age: '',
    weight: '',
    height: '',
    kef: '',
    gender: '',
    yourGoal: '',
  },
  recommendedCalories: {
    calories: '',
    protein: '',
    fat: '',
    carbohydrates: '',
  },
  caloriesToday: {},
  recommendedWater: '',
  waterToday: {},
  recommendedFood: [],
  breakfast: [],
  lunch: [],
  dinner: [],
  snack: [],
  isRefreshing: false,
};

const fetchStatisticsPending = (state, action) => {};

const handleLogInFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.recommendedCalories = action.payload.recommendedCalories;
  state.caloriesToday = action.payload.caloriesToday;
  state.recommendedWater = action.payload.recommendedWater;
  state.waterToday = action.payload.waterToday;
  state.recommendedFood = action.payload.recommendedFood;
  state.breakfast = action.payload.breakfast;
  state.lunch = action.payload.lunch;
  state.dinner = action.payload.dinner;
  state.snack = action.payload.snack;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchAllStatistics.pending, fetchStatisticsPending);
    builder.addCase(fetchAllStatistics.fulfilled, handleLogInFulfilled);
  },
});

export const statisticsReducer = authSlice.reducer;
