const { createSlice } = require('@reduxjs/toolkit');
const { fetchAllRecommendedProduct } = require('./recommendedOperations');

const initialState = {
  recommendedFoodPage: [],
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

const handleFetchRecommendedListFulfilled = (state, action) => {
  state.isRefreshing = false;
  state.recommendedFoodPage = action.payload;
};

const recommendedSlice = createSlice({
  name: 'recommended',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllRecommendedProduct.pending, handlePending)
      .addCase(
        fetchAllRecommendedProduct.fulfilled,
        handleFetchRecommendedListFulfilled
      )
      .addCase(fetchAllRecommendedProduct.rejected, handleRejected);
  },
});

export const recommendedReducer = recommendedSlice.reducer;
