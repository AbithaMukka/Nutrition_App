import { shallowMount, createLocalVue } from "@vue/test-utils";
import Search from "../../../src/components/Search.vue";
import Vuex from "vuex";

describe("Search Component", () => {
  let wrapper;
  const state = {
    nutritionDetails: {
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 94.64,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 0.3094,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 25.134200000000003,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 4.368,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.4732,
          unit: "g",
        },
        NA: {
          label: "Sodium",
          quantity: 1.82,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 10.92,
          unit: "mg",
        },
      },
    },
  };

  const actions = {
    getNutritionDetailsAction: jest.fn(),
  };

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store({
      state,
      actions,
    });
    wrapper = shallowMount(Search, {
      localVue,
      store,
      data() {
        return {
          select: "1",
          searchInput: "nut",
        };
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
    expect(wrapper.html()).toContain('<div class="search">');
  });

  it("getNutritionDetailsAction action should be called search button clicked", () => {
    wrapper.findAll(".button").trigger("click");
    expect(actions.getNutritionDetailsAction).toHaveBeenCalled();
  });
});
