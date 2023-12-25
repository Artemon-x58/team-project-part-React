import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllStatistics,
  updateGoal,
  updateWeight,
  addWaterIntake,
  removeWaterIntake,
  addFoodIntake,
  removeFoodIntake,
  updateUser,
  updateAvatar,
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
  lunchSumNutrientsToday: {
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
  state.recommendedFood = action.payload.recommendedFoodForMainPage;
  state.snackSumNutrientsToday = action.payload.snackSumNutrientsToday;
  state.lunchSumNutrientsToday = action.payload.lunchSumNutrientsToday;
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
  const {
    breakfast,
    lunch,
    dinner,
    snack,
    newSumNutrientsPerDay,
    newCaloriesAndDate,
  } = action.payload;

  if (breakfast) {
    state.breakfastSumNutrientsToday = newSumNutrientsPerDay;
  }
  if (lunch) {
    state.lunchSumNutrientsToday = newSumNutrientsPerDay;
  }
  if (dinner) {
    state.dinnerSumNutrientsToday = newSumNutrientsPerDay;
  }
  if (snack) {
    state.snackSumNutrientsToday = newSumNutrientsPerDay;
  }

  state.caloriesToday = newCaloriesAndDate.newCaloriesAndDate;
  state.isRefreshing = false;
};

const handleRemoveFoodIntakeFulfilled = (state, action) => {
  const {
    breakfast,
    lunch,
    dinner,
    snack,

    newCaloriesAndDate,
  } = action.payload;

  if (breakfast) {
    state.breakfastSumNutrientsToday = breakfast;
  }
  if (lunch) {
    state.lunchSumNutrientsToday = lunch;
  }
  if (dinner) {
    state.dinnerSumNutrientsToday = dinner;
  }
  if (snack) {
    state.snackSumNutrientsToday = snack;
  }

  state.caloriesToday = newCaloriesAndDate;
  state.isRefreshing = false;
};
const fetchStatisticsFulfild = (state, action) => {
  state.isRefreshing = false;
};
const updateAvatarPending = (state, action) => {
  state.isRefreshing = true;
};
const updateAvatarFulfilled = (state, action) => {
  state.user.avatarURL = action.payload.avatarURL;
};

const statisticsSlice = createSlice({
  name: 'statistics',
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
      .addCase(removeFoodIntake.fulfilled, handleRemoveFoodIntakeFulfilled)
      .addCase(updateUser.pending, fetchStatisticsPending)
      .addCase(updateUser.fulfilled, fetchStatisticsFulfild)
      .addCase(updateAvatar.pending, updateAvatarPending)
      .addCase(updateAvatar.fulfilled, updateAvatarFulfilled);
  },
});

export const statisticsReducer = statisticsSlice.reducer;
