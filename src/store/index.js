import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basketItems:[
        {
            name: "Frozen Yogurt",
            description: "Sugar, stuff & more sugar ",
            price: 159,
          },
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters:{
    getBasketItems: state=>state.basketItems
  },
  modules: {
  }
})
