import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllStatistics,
  updateGoal,
  updateWeight,
  addWaterIntake,
  removeWaterIntake,
} from './statisticsOperations';

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
  breakfastSumNutrientsToday: {
    calories: '',
    carbohydrates: '',
    protein: '',
    fat: '',
  },
  dinnerSumNutrientsToday: {
    calories: '',
    carbohydrates: '',
    protein: '',
    fat: '',
  },
  lunchtSumNutrientsToday: {
    calories: '',
    carbohydrates: '',
    protein: '',
    fat: '',
  },
  snackSumNutrientsToday: {
    calories: '',
    carbohydrates: '',
    protein: '',
    fat: '',
  },
  recommendedCalories: {
    calories: '',
    protein: '',
    fat: '',
    carbohydrates: '',
  },
  recommendedWater: '',
  recommendedFood: [],
  caloriesToday: {},
  waterToday: {},

  isRefreshing: false,
};

const fetchStatisticsPending = (state, action) => {
  state.isRefreshing = true;
};

const handleLogInFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.recommendedCalories = action.payload.recommendedCalories;
  state.caloriesToday = action.payload.caloriesToday;
  state.recommendedWater = action.payload.recommendedWater;
  state.waterToday = action.payload.waterToday;
  state.recommendedFood = action.payload.recommendedFood;
  state.snackSumNutrientsToday = action.payload.snackSumNutrientsToday;
  state.lunchtSumNutrientsToday = action.payload.lunchtSumNutrientsToday;
  state.dinnerSumNutrientsToday = action.payload.dinnerSumNutrientsToday;
  state.breakfastSumNutrientsToday = action.payload.breakfastSumNutrientsToday;
};

const handleAddWaterIntakeFulfilled = (state, action) => {
  const { water, date } = action.payload.data;
  state.waterToday = { water, date };
  state.isRefreshing = false;
};

const handleRemoveWaterIntakeFulfilled = (state, action) => {
  const responseData = action.payload;

  if (responseData) {
    const { water } = responseData;
    state.waterToday = { water };
  }

  state.isRefreshing = false;
};
const handleUpdateGoalFulfilled = (state, action) => {
  state.user.yourGoal = action.payload.yourGoal;
  state.recommendedCalories = action.payload.newRecommended;
  state.isRefreshing = false;
};
const handleUpdateWeightFulfilled = (state, action) => {
  state.user.weight = action.payload.data;
  state.recommendedCalories = action.payload.recommendedCalories;
  state.recommendedWater = action.payload.recommendedWater;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllStatistics.pending, fetchStatisticsPending)
      .addCase(fetchAllStatistics.fulfilled, handleLogInFulfilled)
      .addCase(addWaterIntake.pending, fetchStatisticsPending)
      .addCase(addWaterIntake.fulfilled, handleAddWaterIntakeFulfilled)
      .addCase(updateGoal.pending, fetchStatisticsPending)
      .addCase(updateGoal.fulfilled, handleUpdateGoalFulfilled)
      .addCase(updateWeight.pending, fetchStatisticsPending)
      .addCase(updateWeight.fulfilled, handleUpdateWeightFulfilled)
      .addCase(removeWaterIntake.pending, fetchStatisticsPending)
      .addCase(removeWaterIntake.fulfilled, handleRemoveWaterIntakeFulfilled);
  },
});

export const statisticsReducer = authSlice.reducer;
