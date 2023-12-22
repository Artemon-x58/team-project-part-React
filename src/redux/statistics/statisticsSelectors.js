export const selectDataUser = state => state.statistics.user;

export const selectRecommendedCalories = state =>
  state.statistics.recommendedCalories;
export const selectRecommendedWater = state =>
  state.statistics.recommendedWater;
export const selectRecommendedFood = state =>
  state.statistics.recommendedFoodMain;

export const selectCaloriesToday = state => state.statistics.caloriesToday;
export const selectWaterToday = state => state.statistics.waterToday;

export const selectSnackSumNutrientsToday = state =>
  state.statistics.snackSumNutrientsToday;
export const selectLunchtSumNutrientsToday = state =>
  state.statistics.lunchtSumNutrientsToday;
export const selectDinnerSumNutrientsToday = state =>
  state.statistics.dinnerSumNutrientsToday;
export const selectBreakfastSumNutrientsToday = state =>
  state.statistics.breakfastSumNutrientsToday;
