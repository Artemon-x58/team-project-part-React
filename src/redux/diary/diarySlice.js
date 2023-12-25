const { createSlice } = require('@reduxjs/toolkit');
const {
  fetchAllDiaries,
  addDiaries,
  deleteDiariesById,
  updateDiariesById,
} = require('./diaryOperations');

const initialState = {
  breakfast: [],
  lunch: [],
  dinner: [],
  snack: [],
  breakfastSumNutrientsToday: {
    calories: 0,
    carbohydrates: 0,
    protein: 0,
    fat: 0,
  },
  dinnerSumNutrientsToday: {
    calories: 0,
    carbohydrates: 0,
    protein: 0,
    fat: 0,
  },
  lunchSumNutrientsToday: {
    calories: 0,
    carbohydrates: 0,
    protein: 0,
    fat: 0,
  },
  snackSumNutrientsToday: {
    calories: 0,
    carbohydrates: 0,
    protein: 0,
    fat: 0,
  },

  isRefreshing: false,
  error: null,
};

const handlePending = (state, action) => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = action.error.message;
};

const handlefetchAllDiariesFuldilled = (state, action) => {
  state.breakfast = action.payload.breakfast;
  state.lunch = action.payload.lunch;
  state.dinner = action.payload.dinner;
  state.snack = action.payload.snack;
  state.snackSumNutrientsToday = action.payload.snackSumNutrientsToday;
  state.lunchtSumNutrientsToday = action.payload.lunchtSumNutrientsToday;
  state.dinnerSumNutrientsToday = action.payload.dinnerSumNutrientsToday;
  state.breakfastSumNutrientsToday = action.payload.breakfastSumNutrientsToday;
  state.isRefreshing = false;
};

const handleAddDiariesFuldilled = (state, action) => {
  const { breakfast, lunch, dinner, snack, newSumNutrientsPerDay } =
    action.payload;

  if (breakfast) {
    state.breakfastSumNutrientsToday = newSumNutrientsPerDay;
    state.breakfast = breakfast;
  }
  if (lunch) {
    state.lunchSumNutrientsToday = newSumNutrientsPerDay;
    state.lunch = lunch;
  }
  if (dinner) {
    state.dinnerSumNutrientsToday = newSumNutrientsPerDay;
    state.dinner = dinner;
  }
  if (snack) {
    state.snackSumNutrientsToday = newSumNutrientsPerDay;
    state.snack = snack;
  }
};

const handleDeleteDiariesById = (state, action) => {
  const { breakfast, lunch, dinner, snack, newSumNutrientsPerDay } =
    action.payload;

  if (breakfast) {
    state.breakfastSumNutrientsToday = newSumNutrientsPerDay;
    state.breakfast = breakfast;
  }
  if (lunch) {
    state.lunchSumNutrientsToday = newSumNutrientsPerDay;
    state.lunch = lunch;
  }
  if (dinner) {
    state.dinnerSumNutrientsToday = newSumNutrientsPerDay;
    state.dinner = dinner;
  }
  if (snack) {
    state.snackSumNutrientsToday = newSumNutrientsPerDay;
    state.snack = snack;
  }
};

const handleUpdateDiariesById = (state, action) => {
  const { breakfast, lunch, dinner, snack, newSumNutrientsPerDay } =
    action.payload;

  if (breakfast) {
    state.breakfastSumNutrientsToday = newSumNutrientsPerDay;
    state.breakfast = breakfast;
  }
  if (lunch) {
    state.lunchSumNutrientsToday = newSumNutrientsPerDay;
    state.lunch = lunch;
  }
  if (dinner) {
    state.dinnerSumNutrientsToday = newSumNutrientsPerDay;
    state.dinner = dinner;
  }
  if (snack) {
    state.snackSumNutrientsToday = newSumNutrientsPerDay;
    state.snack = snack;
  }
};

const diariesSlice = createSlice({
  name: 'diares',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllDiaries.pending, handlePending)
      .addCase(fetchAllDiaries.fulfilled, handlefetchAllDiariesFuldilled)
      .addCase(fetchAllDiaries.rejected, handleRejected)
      .addCase(addDiaries.pending, handlePending)
      .addCase(addDiaries.fulfilled, handleAddDiariesFuldilled)
      .addCase(addDiaries.rejected, handleRejected)
      .addCase(deleteDiariesById.pending, handlePending)
      .addCase(deleteDiariesById.fulfilled, handleDeleteDiariesById)
      .addCase(deleteDiariesById.rejected, handleRejected)
      .addCase(updateDiariesById.pending, handlePending)
      .addCase(updateDiariesById.fulfilled, handleUpdateDiariesById)
      .addCase(updateDiariesById.rejected, handleRejected);
  },
});

export const diariesReducer = diariesSlice.reducer;
