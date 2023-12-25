const { createSlice } = require('@reduxjs/toolkit');
const { fetchAllValues } = require('./graphsOperations');

const initialState = {
  averageValueCalories: 0,
  averageValueWater: 0,
  averageValueWeight: 0,
  caloriesPerMonth: [],
  waterPerMonth: [],
  weightPerMonth: [],
  isRefreshing: false,
  isError: null,
};

const handlePending = (state, action) => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.isError = true;
};

const handleFetchAllValuesFulfilled = (state, action) => {
  state.isRefreshing = false;
  state.averageValueCalories = action.payload.averageCalories;
  state.averageValueWater = action.payload.averageWater;
  state.averageValueWeight = action.payload.averageWeight;
  state.caloriesPerMonth = action.payload.caloriesPerDayThisMonth;
  state.waterPerMonth = action.payload.waterPerDayThisMonth;
  state.weightPerMonth = action.payload.weightPerDayThisMonth;
};

const graphsSlice = createSlice({
  name: 'graphs',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllValues.pending, handlePending)
      .addCase(fetchAllValues.fulfilled, handleFetchAllValuesFulfilled)
      .addCase(fetchAllValues.rejected, handleRejected);
  },
});

export const graphsReducer = graphsSlice.reducer;
