<template>
  <v-app id="app">
    <navigation />
    <v-main>
      <!-- <v-container class="fill-height" fluid> -->
      <router-view />
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: { Navigation },
  name: "app",
  data: () => ({ drawer: false }),
};
</script>

<style lang="scss">
main {
  background-image: url("./Img/bg.jpg");
  background-size: cover;
}
</style>
