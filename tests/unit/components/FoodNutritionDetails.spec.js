import { shallowMount, createLocalVue } from "@vue/test-utils";
import FoodNutritionDetails from "../../../src/components/FoodNutritionDetails.vue";
import Vuex from "vuex";

describe("FoodNutritionDetails Component", () => {
  let wrapper;
  const state = {
    foodItems: {
      parsed: [
        {
          food: {
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
        },
      ],
    },
  };
  const actions = {
    getFoodItemsAction: jest.fn(),
  };
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({
      state,
      actions,
    });
    wrapper = shallowMount(FoodNutritionDetails, {
      localVue,
      store,
      mocks: {
        $route: {
          params: {
            label: "nut",
          },
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="nutrition-details">');
  });
  it("getFoodItemsAction action should be called", () => {
    wrapper.vm.getNutritionDetails("Nuts");
    expect(actions.getFoodItemsAction).toHaveBeenCalled();
  });
});
