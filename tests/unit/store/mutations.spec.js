import mutations from "../../../src/store/mutations";
describe("store mutations", () => {
  it("should be able to add food items to state", () => {
    const state = {
      foodItems: [],
    };
    const foodItems = [
      {
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
    ];
    mutations.setFoodItemsAction(state, foodItems);
    expect(state).toEqual({
      foodItems: [
        {
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
      ],
    });
  });

  it("should be able to add nutrition details to state", () => {
    const state = {
      nutritionDetails: {},
    };
    const nutritionDetails = {
      ENERC_KCAL: 594.0,
      PROCNT: 17.3,
      FAT: 51.45,
      CHOCDF: 25.35,
      FIBTG: 9.0,
    };
    mutations.setNutritionDetailsAction(state, nutritionDetails);
    expect(state).toEqual({
      nutritionDetails: {
        ENERC_KCAL: 594.0,
        PROCNT: 17.3,
        FAT: 51.45,
        CHOCDF: 25.35,
        FIBTG: 9.0,
      },
    });
  });

  it("should be able to add error to state", () => {
    const state = {
      error: null,
    };
    const errors = "error";
    mutations.setError(state, errors);
    expect(state).toEqual({
      error: "error",
    });
  });
});
