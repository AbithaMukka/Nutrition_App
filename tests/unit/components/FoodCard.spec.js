import { shallowMount, createLocalVue } from "@vue/test-utils";
import FoodCard from "../../../src/components/FoodCard.vue";

describe("FoodCard Component", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(FoodCard, {
      localVue,
      propsData: {
        fooditem: {
          food: {
            label: "Nuts",
            category: "Generic foods",
            image:
              "https://www.edamam.com/food-img/e29/e2985d3585a6950c276e204ba7ba9b2e.jpg",
          },
        },
      },
      mocks: {
        $router: {
          push: jest.fn(),
        },
      },
    });
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="food-card">');
  });
  it("should call getNutritionDetails when user clicks on card", () => {
    const expectedRoute = {
      name: "FoodNutritionDetails",
      params: {
        label: "nuts",
      },
    };
    wrapper.vm.getNutritionDetails("nuts");
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith(expectedRoute);
  });
});
