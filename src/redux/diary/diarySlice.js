const { createSlice } = require('@reduxjs/toolkit');
const {
  fetchAllDiaries,
  addDiaries,
  deleteDiaresById,
  updateDiaresById,
} = require('./diaryOperations');

const initialState = {
  breakfast: [],
  lunch: [],
  dinner: [],
  snack: [],
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
  state.isRefreshing = false;
};

const handleAddDiariesFuldilled = (state, action) => {
  const { breakfast, lunch, dinner, snack, newSumNutrientsPerDay } =
    action.payload;

  console.log(lunch);

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

  // state = {
  //   ...state,
  //   ...(breakfast && {
  //     breakfast: [...state.breakfast, ...breakfast],
  //     breakfastSumNutrientsToday: { ...newSumNutrientsPerDay },
  //   }),
  //   ...(lunch && {
  //     lunch: lunch, // Перезаписываем lunch
  //     lunchtSumNutrientsToday: { ...newSumNutrientsPerDay },
  //   }),
  //   ...(dinner && {
  //     dinner: [...state.dinner, ...dinner],
  //     dinnerSumNutrientsToday: { ...newSumNutrientsPerDay },
  //   }),
  //   ...(snack && {
  //     snack: [...state.snack, ...snack],
  //     snackSumNutrientsToday: { ...newSumNutrientsPerDay },
  //   }),
  //   isRefreshing: false,
  // };
};

const handleDeleteDiaresById = (state, action) => {};

const handleupdateDiaresById = (state, action) => {};

const diaresSlice = createSlice({
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
      .addCase(deleteDiaresById.pending, handlePending)
      .addCase(deleteDiaresById.fulfilled, handleDeleteDiaresById)
      .addCase(deleteDiaresById.rejected, handleRejected)
      .addCase(updateDiaresById.pending, handlePending)
      .addCase(updateDiaresById.fulfilled, handleupdateDiaresById)
      .addCase(updateDiaresById.rejected, handleRejected);
  },
});

export const diaresReducer = diaresSlice.reducer;
