<template>
  <div class="nutrition-details">
    <div v-if="item">
      <div class="text-left">
        Nutrition Details for : <b>{{ item.food.label }}</b>
      </div>
      <br />
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-center">Label</th>
            <th class="text-center">Quantity</th>
            <th class="text-center">Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Energy</td>
            <td>
              {{ item.food.nutrients.ENERC_KCAL }}
            </td>
            <td>Kcal</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>{{ item.food.nutrients.FAT }}</td>
            <td>g</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>
              {{ item.food.nutrients.CHOCDF }}
            </td>
            <td>g</td>
          </tr>
          <tr>
            <td>Fiber</td>
            <td>
              {{ item.food.nutrients.FIBTG }}
            </td>
            <td>g</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>
              {{ item.food.nutrients.PROCNT }}
            </td>
            <td>g</td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "NutritionDetails",
  components: {},
  data() {
    return {
      isLoading: false,
      item: null,
    };
  },
  computed: {
    ...mapState(["foodItems"]),
  },
  created() {
    this.getNutritionDetails(this.$route.params.label);
  },
  methods: {
    async getNutritionDetails(value) {
      this.isLoading = true;
      await this.$store.dispatch("getFoodItemsAction", value);
      this.isLoading = false;
      this.item = this.foodItems.parsed[0];
    },
  },
};
</script>
<style scoped>
.nutrition-details {
  justify-content: center;
  text-align: center;
  background-color: #ccc6be;
  height: 90vh;
  padding: 100px;
}
.text-center {
  font-size: 20px !important;
}
</style>
