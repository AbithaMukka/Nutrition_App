<template>
  <div class="food-card">
    <div v-if="fooditem">
      <v-container>
        <v-row class="text-center">
          <v-col>
            <v-card
              id="foodcard"
              elevation="12"
              @click="getNutritionDetails(fooditem.food.label)"
            >
              <v-card-text>
                <v-img v-bind:src="fooditem.food.image" />
                {{ fooditem.food.label }}
                <v-divider></v-divider>
                {{ fooditem.food.category }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="loading" v-else>
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <h4>Loading</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "FoodCard",
  props: ["fooditem"],

  methods: {
    getNutritionDetails(label) {
      this.$router.push({ name: "FoodNutritionDetails", params: { label } });
    },
  },
};
</script>
<style scoped>
.food-card {
  height: 100%;
}
.card {
  height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
