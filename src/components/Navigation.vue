<template>
  <div>
    <v-navigation-drawer color="primary" v-model="drawer" app>
      <router-link tag="li" to="/">
        <v-icon color="orange">mdi-home</v-icon> Home</router-link
      >
      <router-link tag="li" to="/about"
        ><v-icon color="inprogress">mdi-information</v-icon>About</router-link
      >
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>

      <v-toolbar-title class="headline">
        <span>BAGELS BY </span>
        <span class="font-weight-light">SHAHAB</span>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({ drawer: false }),
};
</script>

<style lang="scss">
nav li:first-child {
  padding: 0;
  margin-top: 40px;
  text-decoration: none;
}

nav li {
  // color: map-get($colorz, orange);
  color: orange;
  margin-left: 15%;
  padding: 5px 20px;
  list-style: none;
  cursor: pointer;
}

nav li i {
  margin-right: 10px;
}

nav li:last-child {
  position: absolute;
  bottom: 40px;
  // color: map-get($colorz, inprogress);
  color: orangered;
}
</style>
