import { getFoodItems, getNutritionDetails } from "@/service/service.js";

export default {
  async getFoodItemsAction(context, label) {
    try {
      const response = await getFoodItems(label);
      context.commit("setFoodItemsAction", response.data);
    } catch (error) {
      context.commit("setError", error.message);
    }
  },

  async getNutritionDetailsAction(context, ingr) {
    try {
      const response = await getNutritionDetails(ingr);
      context.commit("setNutritionDetailsAction", response.data);
    } catch (error) {
      context.commit("setError", error.message);
    }
  },
};
