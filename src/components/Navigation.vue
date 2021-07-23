<template>
  <div>
    <v-navigation-drawer color="primary" v-model="drawer" app>
      <router-link tag="li" to="/">
        <v-icon color="orange">mdi-home</v-icon> Home</router-link
      >
      <router-link tag="li" to="/menu">
        <v-icon color="orange">mdi-silverware</v-icon>
        Menu</router-link
      >
      <router-link tag="li" to="/about"
        ><v-icon color="orange">mdi-information</v-icon>About</router-link
      >
      <router-link tag="li" to="/login"
        ><v-icon color="orange">mdi-account-lock</v-icon>Login</router-link
      >
      <router-link tag="li" to="/admin">
        <v-icon color="inprogress">mdi-lock</v-icon>
        Admin</router-link
      >
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon>
        <v-btn large icon class="" @click="drawer = !drawer">
          <v-icon flat
            >mdi-{{ drawer === false ? "format-list-bulleted" : "close" }}
          </v-icon>
        </v-btn>
      </v-app-bar-nav-icon>

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
  // padding: 0;
  margin-top: 40px;
  text-decoration: none;
}

nav li {
  color: map-get($colors, orange);
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
  color: map-get($colors, inprogress);
  // color: orangered;
}
</style>
