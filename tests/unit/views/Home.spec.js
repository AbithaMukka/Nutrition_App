import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Vuex from "vuex";

describe("Home view ", () => {
  let wrapper;
  const state = {
    foodItems: {
      hints: [
        {
          food: {
            label: "Nuts1",
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
    wrapper = shallowMount(Home, {
      localVue,
      store,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="home">');
  });

  it("getFoodItemsAction should call", () => {
    wrapper.vm.getFoodItems();
    expect(actions.getFoodItemsAction).toHaveBeenCalled();
  });
});
