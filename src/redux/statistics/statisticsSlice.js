import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllStatistics,
  updateGoal,
  updateWeight,
  addWaterIntake,
  removeWaterIntake,
  addFoodIntake,
  removeFoodIntake,
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
  const { water, date } = action.payload.addedWater;
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
  state.user.weight = action.payload.weight;
  state.recommendedCalories = action.payload.recommendedCalories;
  state.recommendedWater = action.payload.recommendedWater;
  state.isRefreshing = false;
};

const handleAddFoodIntakeFulfilled = (state, action) => {
  const { mealType, newCaloriesAndDate, newSumNutrientsPerDay } =
    action.payload;

  switch (mealType) {
    case 'breakfast':
      state.breakfastSumNutrientsToday = newSumNutrientsPerDay;
      break;
    case 'lunch':
      state.lunchtSumNutrientsToday = newSumNutrientsPerDay;
      break;
    case 'dinner':
      state.dinnerSumNutrientsToday = newSumNutrientsPerDay;
      break;
    case 'snack':
      state.snackSumNutrientsToday = newSumNutrientsPerDay;
      break;
    default:
      break;
  }

  state.caloriesToday = newCaloriesAndDate;
  state.isRefreshing = false;
};

const handleRemoveFoodIntakeFulfilled = (state, action) => {
  const {
    newCaloriesAndDate: { newCaloriesAndDate },
    mealType,
  } = action.payload;

  switch (mealType) {
    case 'breakfast':
      state.breakfastSumNutrientsToday = newCaloriesAndDate;
      break;
    case 'lunch':
      state.lunchtSumNutrientsToday = newCaloriesAndDate;
      break;
    case 'dinner':
      state.dinnerSumNutrientsToday = newCaloriesAndDate;
      break;
    case 'snack':
      state.snackSumNutrientsToday = newCaloriesAndDate;
      break;
    default:
      break;
  }

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
      .addCase(removeWaterIntake.fulfilled, handleRemoveWaterIntakeFulfilled)
      .addCase(addFoodIntake.pending, fetchStatisticsPending)
      .addCase(addFoodIntake.fulfilled, handleAddFoodIntakeFulfilled)
      .addCase(removeFoodIntake.pending, fetchStatisticsPending)
      .addCase(removeFoodIntake.fulfilled, handleRemoveFoodIntakeFulfilled);
  },
});

export const statisticsReducer = authSlice.reducer;
