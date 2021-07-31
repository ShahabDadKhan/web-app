import Vue from "vue";
import Vuex from "vuex";

import { dbMenuAdd, dbOrders } from "../../firebase";

// eslint-disable-next-line no-unused-vars
import firebase from "firebase";
import "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    basketItems: [],
    menuItems: [],
    orderItems: [],
    currentUser: null,
  },
  mutations: {
    // // eslint-disable-next-line no-unused-vars
    // addCheckoutItem: (state, basketItems) => {
    //   dbOrders.add({
    //     archive: false,
    //     storeOrder: false,
    //     orderNumber: state.counter++,
    //     status: "incomplete",
    //     // basketItems: state.basketItems,
    //     orderLines: state.basketItems,
    //   });
    //   console.log(this.orderLines);
    // },

    // eslint-disable-next-line no-unused-vars
    addCheckoutItem: (state, basketItems) => {
      dbOrders.add({
        archive: false,
        storeOrder: false,
        orderNumber: state.counter++,
        status: "incomplete",
        orderLines: state.basketItems,
      });
    },

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

    setOrderItems: (state) => {
      let orderItems = [];
      dbOrders.onSnapshot((snapshotItems) => {
        (orderItems = []),
          snapshotItems.forEach((doc) => {
            var orderItemData = doc.data();
            orderItems.push({
              ...orderItemData,
              // id: menuItemData.id,
              id: doc.id,
            });
          });
        state.orderItems = orderItems;
      });
    },
  },
  actions: {
    setCheckoutItem(context) {
      context.commit("addCheckoutItem");
      console.log("hello this is action");
    },
    setUser(context, user) {
      context.commit("userStatus", user);
    },
    setMenuItems: (context) => {
      context.commit("setMenuItems");
    },
    setOrderItems: (context) => {
      context.commit("setOrderItems");
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
