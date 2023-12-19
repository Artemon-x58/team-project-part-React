export const selectDataUser = state => state.statistics.user;

export const selectRecommendedCalories = state =>
  state.statistics.recommendedCalories;
export const selectRecommendedWater = state =>
  state.statistics.recommendedWater;
export const selectRecommendedFood = state => state.statistics.recommendedFood;

export const selectCaloriesToday = state => state.statistics.caloriesToday;
export const selectWaterToday = state => state.statistics.waterToday;

export const selectBreakfast = state => state.statistics.breakfast;
export const selectLunch = state => state.statistics.lunch;
export const selectDinner = state => state.statistics.dinner;
export const selectSnack = state => state.statistics.snack;
