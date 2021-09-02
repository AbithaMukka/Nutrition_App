import {
  getFoodItems,
  getNutritionDetails,
} from "../../../src/service/service";
import axiosConfig from "../../../src/service/config";

jest.mock("../../../src/service/config", () => ({
  baseURL: "https://api.edamam.com",
  get: jest.fn(),
}));

describe("service", () => {
  const response = {
    data: {
      foodItems: [
        {
          foodId: "food_amqspy5ap567v6bun60usbgsaor7",
          label: "Nuts",
          nutrients: {
            ENERC_KCAL: 594.0,
            PROCNT: 17.3,
            FAT: 51.45,
            CHOCDF: 25.35,
            FIBTG: 9.0,
          },
        },
      ],
    },
  };

  it("getFoodItems api should call", async () => {
    axiosConfig.get.mockImplementation(() => Promise.resolve(response));
    const foodItem = await getFoodItems("nut");
    expect(axiosConfig.get).toHaveBeenCalledWith(
      "https://api.edamam.com/api/food-database/v2/parser?app_id=843da779&app_key=d5fa9467c150c91bd959e726d100e215&ingr=nut&nutrition-type=cooking"
    );
    expect(foodItem).toEqual(response);
  });

  it("getNutritionDetails api should call", async () => {
    axiosConfig.get.mockImplementation(() => Promise.resolve(response));
    const details = await getNutritionDetails("nuts");
    expect(axiosConfig.get).toHaveBeenCalledWith(
      "/api/nutrition-data?app_id=df7ba81e&app_key=ff6bcacde9e9c74ddca7ef0adeab5fd9&nutrition-type=cooking&ingr=nuts"
    );
    expect(details).toEqual(response);
  });
});
