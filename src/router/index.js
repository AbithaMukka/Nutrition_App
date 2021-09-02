import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../components/PageNotFound.vue";
import FoodNutritionDetails from "../components/FoodNutritionDetails.vue";
import Search from "../components/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/NutritionDetails/:label",
    name: "FoodNutritionDetails",
    component: FoodNutritionDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
