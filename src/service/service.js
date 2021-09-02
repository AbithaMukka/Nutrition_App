import axiosConfig from "./config";

export function getFoodItems(label) {
  let app_id = "843da779";
  let app_key = "d5fa9467c150c91bd959e726d100e215";
  return axiosConfig.get(
    "https://api.edamam.com/api/food-database/v2/parser?app_id=" +
      app_id +
      "&app_key=" +
      app_key +
      "&ingr=" +
      label +
      "&nutrition-type=cooking"
  );
}

export function getNutritionDetails(ingr) {
  let app_id = "df7ba81e";
  let app_key = "ff6bcacde9e9c74ddca7ef0adeab5fd9";
  return axiosConfig.get(
    "/api/nutrition-data?app_id=" +
      app_id +
      "&app_key=" +
      app_key +
      "&nutrition-type=cooking&ingr=" +
      ingr
  );
}
