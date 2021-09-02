<template>
  <div class="search">
    <h3 class="heading text-center">Search For Nutrition Details</h3>
    <v-container>
      <v-row no-gutters>
        <v-col md="4" offset-md="4">
          <v-select
            v-model="select"
            :items="items"
            label="Select quantity"
          ></v-select>
          <form v-on:submit.prevent>
            <v-text-field label="Search" v-model="searchInput"></v-text-field>
            <v-btn class="button" @click="getNutritionDetails"> Search</v-btn>
          </form>
        </v-col>
      </v-row>
    </v-container>
    <div v-if="details">
      <v-container class="search-details">
        <v-row>
          <v-col>
            Nutrition details for 
            <b>{{this.value}}</b>
            <v-simple-table  v-if="Object.keys(details.totalNutrients).length>0">
              <thead>
                <tr>
                  <th class="text-center">Label</th>
                  <th class="text-center">Quantity</th>
                  <th class="text-center">Unit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ details.totalNutrients.ENERC_KCAL.label }}</td>
                  <td>
                    {{ details.totalNutrients.ENERC_KCAL.quantity | decimal }}
                  </td>
                  <td>{{ details.totalNutrients.ENERC_KCAL.unit }}</td>
                </tr>
                <tr>
                  <td>{{ details.totalNutrients.FAT.label }}</td>
                  <td>{{ details.totalNutrients.FAT.quantity | decimal }}</td>
                  <td>{{ details.totalNutrients.FAT.unit }}</td>
                </tr>
                <tr>
                  <td>{{ details.totalNutrients.CHOCDF.label }}</td>
                  <td>
                    {{ details.totalNutrients.CHOCDF.quantity | decimal }}
                  </td>
                  <td>{{ details.totalNutrients.CHOCDF.unit }}</td>
                </tr>
                <tr>
                  <td>{{ details.totalNutrients.FIBTG.label }}</td>
                  <td>
                    {{ details.totalNutrients.FIBTG.quantity | decimal }}
                  </td>
                  <td>{{ details.totalNutrients.FIBTG.unit }}</td>
                </tr>
                <tr>
                  <td>{{ details.totalNutrients.PROCNT.label }}</td>
                  <td>
                    {{ details.totalNutrients.PROCNT.quantity | decimal }}
                  </td>
                  <td>{{ details.totalNutrients.PROCNT.unit }}</td>
                </tr>
                <tr>
                  <td>{{ details.totalNutrients.CA.label }}</td>
                  <td>{{ details.totalNutrients.CA.quantity | decimal }}</td>
                  <td>{{ details.totalNutrients.CA.unit }}</td>
                </tr>
                <tr>
                  <td>{{ details.totalNutrients.NA.label }}</td>
                  <td>{{ details.totalNutrients.NA.quantity | decimal }}</td>
                  <td>{{ details.totalNutrients.NA.unit }}</td>
                </tr>
              </tbody>
            </v-simple-table>
            <div v-else >
              Try searching with another food item
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    
    <div v-else class="text-center">
      Try searching with format quantity as 1 and search string as apple
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      searchInput: null,
      select: null,
      items: ["1", "2", "3", "4", "5"],
      details: null,
    };
  },
  computed: {
    ...mapState(["nutritionDetails", "error"]),
  },
  filters: {
    decimal: function (value) {
      if (!value) return "";
      return value.toFixed(2);
    },
  },
  methods: {
    async getNutritionDetails() {
      if (this.searchInput.trim() !== "") {
        this.value = this.select + " " + this.searchInput;
        await this.$store.dispatch("getNutritionDetailsAction", this.value);
        this.details = this.nutritionDetails;
        this.select = "",
        this.searchInput = ""
      }
    },
  },
};
</script>

<style scoped>
.search {
  background-color: #ccc6be;
  height: 100vh;
}
.heading {
  padding: 10px;
}
.button {
  margin-left: 5px;
}
.text-center {
  font-size: 20px !important;
}
</style>
