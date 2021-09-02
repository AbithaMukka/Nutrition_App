import actions from "../../../src/store/actions";
import {
  getFoodItems,
  getNutritionDetails,
} from "../../../src/service/service";

jest.mock("../../../src/service/service", () => ({
  getFoodItems: jest.fn(),
  getNutritionDetails: jest.fn(),
}));

describe("store actions", () => {
  const response = {
    data: {
      hints: [
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
  const error = "Error";
  describe("getFoodItemsAction", () => {
    it("if response is resolved should show response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getFoodItems.mockImplementation(() => Promise.resolve(response));
      await actions.getFoodItemsAction(context);
      expect(context.commit).toHaveBeenCalledWith(
        "setFoodItemsAction",
        response.data
      );
    });

    it("If response is rejected should through error", async () => {
      const context = {
        commit: jest.fn(),
      };
      getFoodItems.mockImplementation(() => Promise.reject(new Error(error)));
      await actions.getFoodItemsAction(context);
      expect(context.commit).toHaveBeenCalledWith("setError", error);
    });
  });

  describe("getNutritionDetailsAction", () => {
    it("if response is resolved should show response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getNutritionDetails.mockImplementation(() => Promise.resolve(response));
      await actions.getNutritionDetailsAction(context, "nut");
      expect(context.commit).toHaveBeenCalledWith(
        "setNutritionDetailsAction",
        response.data
      );
    });

    it("If response is rejected should through error", async () => {
      const context = {
        commit: jest.fn(),
      };
      getNutritionDetails.mockImplementation(() =>
        Promise.reject(new Error(error))
      );
      await actions.getNutritionDetailsAction(context, "nut");
      expect(context.commit).toHaveBeenCalledWith("setError", error);
    });
  });
});
