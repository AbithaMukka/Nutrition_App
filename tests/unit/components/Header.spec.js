import { shallowMount, createLocalVue } from "@vue/test-utils";
import Header from "../../../src/components/Header.vue";
import VueRouter from "vue-router";
import { routes } from "@/router/index";

describe("Header Component", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({ routes });
    wrapper = shallowMount(Header, {
      localVue,
      router,
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="header">');
  });
});
