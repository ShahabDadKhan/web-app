import Vue from "vue";
import Vuex from "vuex";

import { dbMenuAdd } from "../../firebase";

// eslint-disable-next-line no-unused-vars
import firebase from "firebase";
import "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basketItems: [
      {
        name: "Gingerbread",
        description: "Sugar, stuff & more sugar ",
        price: 356,
        quantity: 1,
      },
    ],
    menuItems: [],
    currentUser: null,
  },
  mutations: {
    addBasketItems: (state, basketItems) => {
      if (basketItems instanceof Array) {
        basketItems.forEach((item) => {
          if (
            state.basketItems.find((itemArray) => item.name === itemArray.name)
          ) {
            item = state.basketItems.find(
              (itemArray) => item.name === itemArray.name
            );
            // this.increaseQtn(item);
            item.quantity++;
          } else {
            state.basketItems.push({
              name: item.name,
              price: item.price,
              quantity: 1,
            });
          }
        });
      }
    },

    userStatus: (state, user) => {
      if (user) {
        state.currentUser = user;
      } else {
        state.currentUser = null;
      }
    },

    setMenuItems: (state) => {
      let menuItems = [];
      dbMenuAdd.onSnapshot((snapshotItems) => {
        (menuItems = []),
          snapshotItems.forEach((doc) => {
            var menuItemData = doc.data();
            menuItems.push({
              ...menuItemData,
              // id: menuItemData.id,
              id: doc.id,
            });
          });
        state.menuItems = menuItems;
      });
    },
  },
  actions: {
    setCheckoutItem(context) {
      context.commit("addCheckoutItem");
    },
    setUser(context, user) {
      context.commit("userStatus", user);
    },
    setMenuItems: (context) => {
      context.commit("setMenuItems");
    },
  },
  getters: {
    getBasketItems: (state) => state.basketItems,
    currentUser: (state) => state.currentUser,
    getMenuItems: (state) => state.menuItems,
    getOrderItems: (state) => state.orderItems,
  },
  modules: {},
});
