/* eslint-disable vue/no-use-v-if-with-v-for */
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
                <v-chip color="complete my-2">COMPLETED</v-chip>
                <v-chip color="inprogress mx-3 my-2">IN-PROGRESS</v-chip>
                <v-chip color="incomplete my-2">NOT STARTED</v-chip>
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
          <v-simple-table id="menu-table" v-if="orderItems.length">
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
                <tr
                  v-for="item in orderItems"
                  :key="item.name"
                  v-if="item.storeOrder === false"
                >
                  <td>{{ item.orderNumber }}</td>
                  <td class="py-3">
                    <p
                      class="ma-0"
                      v-for="subitem in item.orderLines"
                      :key="subitem.id"
                    >
                      {{ subitem.quantity }}
                    </p>
                  </td>
                  <td class="py-3">
                    <p
                      class="ma-0"
                      v-for="subitem in item.orderLines"
                      :key="subitem.id"
                    >
                      {{ subitem.name }}
                    </p>
                  </td>
                  <td class="py-3">
                    <p
                      class="ma-0"
                      v-for="subitem in item.orderLines"
                      :key="subitem.id"
                    >
                      {{ subitem.price }}
                    </p>
                  </td>
                  <td>
                    <v-chip
                      :color="item.status"
                      @click="switchStage(item.id)"
                      >{{ item.status }}</v-chip
                    >
                  </td>
                  <td>
                    <v-btn text @click="archiveOrderItems(item.id)">
                      <v-icon color="darkgrey" title>mdi-package-down</v-icon>
                    </v-btn>
                  </td>
                  <td>
                    <v-btn text @click="deletOrderItems(item.id)">
                      <v-icon color="incomplete" title>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-simple-table class="pa-2" v-else>
            <div>
              <p class="red--text">
                No Orders for today 😏
              </p>
            </div>
          </v-simple-table>
        </div>
      </v-col>
      <v-col md="4" xs="6">
        <h1>Revenue</h1>
        <div class="pa-2" id="info">
          <p class="font-weight-1 body-1 darkgrey--text">Completed Orders:</p>
          <div>
            <p id="totalOrders">
              Total orders:
              <span class="incomplete--text font-weight-bold">{{
                orderItems.length
              }}</span>
            </p>
          </div>
          <div id="revenueList" v-for="item in orderItems" :key="item.name">
            <p v-if="item.archive">
              <span style="text-decoration: underline">
                Order No:
                {{ item.orderNumber }}
              </span>

              <v-btn small text @click="deletOrderItems(item.id)">
                <v-icon color="incomplete">mdi-delete</v-icon>
              </v-btn>
            </p>
          </div>
        </div>
        <div class="pa-2 mt-1" id="info">
          <div id="totalRevenue">
            <p id="totalRevenueText">
              Total Revenue:
              <span id="totalRevenueTextTotal">{{ revenueTotal }}</span>
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { dbOrders } from "../../firebase";

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
    switchStage(id) {
      let selectedOrderItem = this.orderItems.filter(
        (item) => item.id === id
      )[0];

      if (selectedOrderItem.status === "inprogress") {
        dbOrders
          .doc(id)
          .update({
            status: "complete",
          })
          .then(() => {});
      } else if (selectedOrderItem.status === "incomplete") {
        dbOrders
          .doc(id)
          .update({
            status: "inprogress",
          })
          .then(() => {});
      } else if (selectedOrderItem.status === "complete") {
        dbOrders
          .doc(id)
          .update({
            status: "incomplete",
          })
          .then(() => {});
      }
    },

    archiveOrderItems(id) {
      dbOrders
        .doc(id)
        .update({
          archive: true,
          storeOrder: true,
        })
        .then(() => {});
    },
    deletOrderItems(id) {
      dbOrders
        .doc(id)
        .delete()
        .then(() => {
          console.log("item deleted successfully");
        })
        .catch((error) => {
          console.log(error);
        });
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
    revenueTotal() {
      var revenueIncome = 0;

      this.orderItems.forEach((element) => {
        if (element.archive === true) {
          element.orderLines.forEach((el) => {
            revenueIncome += el.price * el.quantity;
          });
        }
      });
      return revenueIncome;
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin: 0px;
}

#totalRevenue {
  padding: 20px 10px 20px 0px;
  display: flex;
}
#totalRevenueText {
  display: flex;
  margin: 0px;
  justify-content: space-between;
  font-style: italic;
  width: 100%;
}

#totalRevenueTextTotal {
  text-decoration: underline;
  border-bottom: 1px solid #000;
  font-weight: bold;
  font-style: normal;
}
</style>
