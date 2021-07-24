import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basketItems: [
      {
        name: "Frozen Yogurt",
        description: "Sugar, stuff & more sugar ",
        price: 159,
        quantity: 1,
      },
    ],
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

    //   addBasketItems:(state, basketItems)=>{
    //     if (basketItems instanceof Array) {
    //       basketItems.forEach(item => {
    //         if (state.basketItems.find((itemInArray) => item.name === itemInArray.name)) {
    //           item = state.basketItems.find((itemInArray) => item.name === itemInArray.name);
    //           item.quantity++;
    //     } else {
    //       state.basketItems.push({
    //         name: item.name,
    //         price: item.price,
    //         quantity: 1,
    //       })
    //     }
    //   })
    // }
    //   }
  },
  actions: {},
  getters: {
    getBasketItems: (state) => state.basketItems,
  },
  modules: {},
});
