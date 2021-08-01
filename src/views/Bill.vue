<template>
  <v-container fluid style="max-width: 98%;" class="ma-3">
    <v-row align-content="center" class="info_box">
      <v-col sm="6" md="4" xs="12" offset-sm="4">
        <h1 class="py-6" style="text-align: center;">
          <span class="font-weight-bold black mt-5">Pay vie online mode</span>
        </h1>
      </v-col>
    </v-row>
    <v-row align-content="center" row wrap class="info_box">
      <v-col sm="6" md="4" xs="12" offset-sm="4"
        ><v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header class="text-left"
              >Your Bill is : {{ total }}</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <div>Happy Enjoying Our Tasty Bagels 🍩😋</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      basketDump: [],
    };
  },

  beforeCreate() {
    return this.$store.dispatch("setOrderItems");
  },

  computed: {
    basket() {
      // return this.$store.state.basketItems;
      return this.$store.getters.getBasketItems;
    },
    orderItems() {
      return this.$store.getters.getOrderItems;
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
.info_box:first-child .col .h1 {
  font-size: 150%;
  padding: 50px;
}

.row:first-child {
  height: 40vh;
}
</style>
