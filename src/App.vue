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

.col h1 {
  border: 5px solid white;
  margin-bottom: 5px;
  font-weight: bold;
  padding: 10px;
  text-transform: uppercase;
  font-size: 16px;
  color: white;
  text-align: right;
}

.col:last-child h1 {
  text-align: left;
}

#info {
  background: white;
}
</style>
