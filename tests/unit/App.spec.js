import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "../../src/App.vue";

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(App, {
      localVue,
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain("<v-app>");
  });
});
