<template>
  <div class="header">
    <v-toolbar color="brown" dense>
      <v-toolbar-title
        ><router-link to="/"
          ><v-img width="60" src="../assets/download.jpg" /></router-link
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/search">
        <v-btn icon class="button">
          <v-icon color="white">mdi-magnify</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: "Search",
};
</script>
<style scoped>
.v-application--wrap {
  min-height: 0vh !important;
}
.button {
  margin-right: 50px;
}
</style>
