export default {
  setFoodItemsAction(state, fooditems) {
    state.foodItems = fooditems;
  },
  setNutritionDetailsAction(state, details) {
    state.nutritionDetails = details;
  },
  setError(state, error) {
    state.error = error;
  },
};
