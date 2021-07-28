<template>
  <v-container fluid>
    <v-row class="ma-0">
      <v-col md="6" xs="12" offset-sm="1">
        <h1>Orders</h1>
        <div class="pa-2" id="info">
          <v-row align="start">
            <v-col cols="12" md="1" class="pa-2">
              <p class="font-weight-bold body-1 pl-1 darkgrey--text">
                INFO
              </p>
            </v-col>

            <v-col cols="12" md="5" class="pa-2">
              <v-row align="center">
                <div id="status_box">
                  <v-chip color="complete">COMPLETED</v-chip>
                </div>
                <span class="font-weight-light caption pl-1">Done</span>
              </v-row>

              <v-row class="my-3" align="center">
                <div id="status_box">
                  <v-chip color="inprogress">IN-PROGRESS</v-chip>
                </div>
                <span class="font-weight-light caption pl-1"
                  >Somebod is working on it</span
                >
              </v-row>

              <v-row align="center">
                <div id="status_box">
                  <v-chip color="incomplete">NOT STARTED</v-chip>
                </div>
                <span class="font-weight-light caption pl-1"
                  >Not started yet</span
                >
              </v-row>
            </v-col>

            <v-col cols="12" md="6" class="pa-2">
              <v-row class="mb-2">
                <v-chip color="complete">COMPLETED</v-chip>
                <v-chip color="inprogress mx-3">IN-PROGRESS</v-chip>
                <v-chip color="incomplete">NOT STARTED</v-chip>
              </v-row>
              <v-row>
                <p class="font-weight-bold caption pl-1">
                  <b> Single-click </b> to switch stage: complete => in progress
                  => <b>Double-click</b>the box to reset to "not started"
                </p>
                <span class="font-weight-bold caption pl-1">
                  <v-icon color="grey">mdi-package-down</v-icon>
                  Archive to "hide" it from order list
                </span>
              </v-row>
            </v-col>
          </v-row>
        </div>
        <div class="pa-2 mt-1" id="info">
          <p class="font-weight-bold body-1 pa-3 darkgrey--text">
            Orders
          </p>
          <v-simple-table id="menu-table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" style="width:10%;">
                    Order no.
                  </th>
                  <th class="text-left" style="width:10%;">
                    QTY
                  </th>
                  <th class="text-left" style="width:40%;">
                    Item
                  </th>
                  <th class="text-left" style="width:10%;">
                    Price
                  </th>
                  <th class="text-left" style="width:10%;">
                    Status
                  </th>
                  <th class="text-left" style="width:10%;">
                    Archive Items
                  </th>
                  <th class="text-left" style="width:10%;">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody class="font-weight-light">
                <tr v-for="item in orderItems" :key="item.name">
                  <td>{{ item.orderNumber }}</td>
                  <td class="py-3">
                    <p
                      class="ma-0"
                      v-for="subitem in item.orderLine"
                      :key="subitem.id"
                    >
                      {{ subitem.quantity }}
                    </p>
                  </td>
                  <td class="py-3">
                    <p
                      class="ma-0"
                      v-for="subitem in item.orderLine"
                      :key="subitem.id"
                    >
                      {{ subitem.name }}
                    </p>
                  </td>
                  <td class="py-3">
                    <p
                      class="ma-0"
                      v-for="subitem in item.orderLine"
                      :key="subitem.id"
                    >
                      {{ subitem.price }}
                    </p>
                  </td>
                  <td>
                    <v-chip color="complete">{{ item.status }}</v-chip>
                  </td>
                  <td>
                    <v-btn text @click="addToBasket(item)">
                      <v-icon color="darkgrey" title>mdi-package-down</v-icon>
                    </v-btn>
                  </td>
                  <td>
                    <v-btn text @click="addToBasket(item)">
                      <v-icon color="incomplete" title>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-col>
      <v-col md="4" xs="6">
        <h1>Revenue</h1>
        <div class="pa-2" id="info">
          Revenue
        </div>
        <div class="pa-2" id="info">Completed Order</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { dbMenuAdd } from "../../firebase";

export default {
  data() {
    return {
      basketDump: [],
    };
  },

  beforeCreate() {
    return this.$store.dispatch("setOrderItems");
  },
  methods: {
    addToBasket(item) {
      this.basketDump.push({
        name: item.name,
        price: item.price,
        quantity: 1,
      });
      this.$store.commit("addBasketItems", this.basketDump);
      this.basketDump = [];
      // console.log("what is this", this.basketDump);
    },
    increaseQtn(item) {
      item.quantity++;
      // item.price = item.quantity * item.price;
    },
    decreaseQtn(item) {
      item.quantity--;
      // console.log(item.price);
      if (item.quantity === 0) {
        this.basket.splice(this.basket.indexOf(item), 1);
      }
    },
  },

  computed: {
    orderItems() {
      return this.$store.getters.getOrderItems;
    },
    basket() {
      // return this.$store.state.basketItems;
      return this.$store.getters.getBasketItems;
    },
    subTotal() {
      var subCost = 0;
      for (var item in this.basket) {
        var individualItem = this.basket[item];
        subCost += individualItem.quantity * individualItem.price;
      }
      return subCost;
    },
    total() {
      if (this.subTotal !== 0) {
        var deliverPrice = 10;
        var totalCost = this.subTotal;
        return totalCost + deliverPrice;
      } else {
        return (totalCost = 0);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin: 0px;
}
</style>
