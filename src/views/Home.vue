<template>
  <div class="home">
    <v-container>
      <div id="food-items" v-if="!isLoading && !error">
        <v-row>
          <v-col
            cols="12"
            lg="4"
            md="4"
            sm="6"
            xs="12"
            id="item"
            v-for="fooditem in items"
            :key="fooditem.foodId"
          >
            <food-card v-bind:fooditem="fooditem" />
          </v-col>
        </v-row>
      </div>
      <div id="loading" v-else>
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
        <h4>Loading</h4>
      </div>
    </v-container>
  </div>
</template>

<script>
import FoodCard from "../components/FoodCard.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    FoodCard,
  },
  data() {
    return {
      isLoading: false,
      items: [],
      label: "nut",
    };
  },
  computed: {
    ...mapState(["foodItems", "error"]),
  },
  created() {
    this.getFoodItems();
  },
  methods: {
    async getFoodItems() {
      this.isLoading = true;
      await this.$store.dispatch("getFoodItemsAction", this.label);
      this.isLoading = false;
      this.items = this.foodItems.hints.slice(0, 10);
    },
  },
};
</script>

<style>
.home {
  justify-content: center;
  background-color: #ccc6be;
  height: auto;
}

#loading {
  text-align: center;
}
.v-progress-circular {
  margin: 1rem;
}
</style>
