export const selectDataUser = state => state.statistics.user;

export const selectRecommendedCalories = state =>
  state.statistics.recommendedCalories;
export const selectRecommendedWater = state =>
  state.statistics.recommendedWater;
export const selectRecommendedFood = state => state.statistics.recommendedFood;

export const selectCaloriesToday = state => state.statistics.caloriesToday;
export const selectWaterToday = state => state.statistics.waterToday;

export const selectSnackSumNutrientsToday = state =>
  state.statistics.snackSumNutrientsToday;
export const selectLunchSumNutrientsToday = state =>
  state.statistics.lunchSumNutrientsToday;
export const selectDinnerSumNutrientsToday = state =>
  state.statistics.dinnerSumNutrientsToday;
export const selectBreakfastSumNutrientsToday = state =>
  state.statistics.breakfastSumNutrientsToday;

export const selectisRefreshing = state => state.isRefreshing;
