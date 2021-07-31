<template>
  <v-container fluid>
    <v-row>
      <v-col md="5" xs="12" offset-sm="1">
        <h1>Menu items</h1>
        <div class="pa-2" id="info">
          <v-simple-table id="menu-table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th></th>
                  <th class="text-left" style="width:70%;">
                    Name of items
                  </th>
                  <th class="text-left" style="width:100px;">
                    Price
                  </th>
                  <th class="text-center" style="width:100px;">
                    Add to basket
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in menuItems" :key="item.name">
                  <td id="td_menuitem_img">
                    <v-img :src="item.image"></v-img>
                  </td>
                  <td>
                    <span id="td_name">{{ item.name }}</span
                    ><br />
                    <span id="menu_item_description">{{
                      item.description
                    }}</span>
                  </td>
                  <td>{{ item.price }}</td>
                  <td>
                    <v-btn text @click="addToBasket(item)">
                      <v-icon color="orange" title>mdi-plus-box</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-col>
      <v-col md="4" xs="6" offset-sm="1">
        <h1>Current Basket</h1>
        <div class="pa-2" id="info">
          <v-simple-table id="menu-table" v-if="basket.length > 0">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" style="width:30%;">
                    Quantity
                  </th>
                  <th class="text-center" style="width:50%;">
                    Name of items
                  </th>
                  <th class="text-end" style="width:20%;">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in basket" :key="item.name">
                  <td>
                    <v-icon color="orange" @click="increaseQtn(item)" title
                      >mdi-plus-box</v-icon
                    >
                    {{ item.quantity }}
                    <v-icon color="orange" @click="decreaseQtn(item)" title
                      >mdi-minus-box</v-icon
                    >
                  </td>
                  <td class="text-center">{{ item.name }}</td>
                  <td>{{ item.price }}</td>
                </tr>
                <v-divider style="color:orange"></v-divider>
              </tbody>
            </template>
          </v-simple-table>

          <v-simple-table class="pa-2" v-else>
            The Basket is empty
          </v-simple-table>
          <v-row id="basket_checkout" class="mt-2 ma-0">
            <v-col>
              <p>Subtotal:</p>
              <p>Delivery:</p>
              <p>Total amount:</p>
            </v-col>
            <v-col class="text-right">
              <p>&#8377; {{ subTotal }}</p>
              <p>&#8377; 10</p>
              <p>
                <b>&#8377; {{ total }} </b>
              </p>
            </v-col>
          </v-row>
          <v-row style="margin:0">
            <v-spacer></v-spacer>
            <!-- <v-col offset-md="9"> -->
            <v-btn color="orange" @click="addCheckoutItem()">Checkout</v-btn>
            <!-- </v-col> -->
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { dbMenuAdd } from "../../firebase";
// eslint-disable-next-line no-unused-vars
import store from "../store";

export default {
  data() {
    return {
      basketDump: [],
      // menuItems: [
      //   // {
      //   //   name: "Frozen Yogurt",
      //   //   description: "Sugar, stuff & more sugar ",
      //   //   price: 159,
      //   // },
      //   // {
      //   //   name: "Cupcake",
      //   //   description: "Sugar, stuff & more sugar ",
      //   //   price: 305,
      //   // },
      //   // {
      //   //   name: "Ice cream sandwich",
      //   //   description: "Sugar, stuff & more sugar ",
      //   //   price: 237,
      //   // },
      //   // {
      //   //   name: "Eclair",
      //   //   description: "Sugar, stuff & more sugar ",
      //   //   price: 262,
      //   // },
      //   // {
      //   //   name: "Gingerbread",
      //   //   description: "Sugar, stuff & more sugar ",
      //   //   price: 356,
      //   // },
      // ],
    };
  },

  beforeCreate() {
    return this.$store.dispatch("setMenuItems");
  },
  methods: {
    addCheckoutItem() {
      this.$store.dispatch("setCheckoutItem");
      console.log("hello", this.$store.state.basketItems);
    },
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
    menuItems() {
      return this.$store.getters.getMenuItems;
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
h1 {
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

tr th {
  font-weight: 300;
}

#td_name {
  font-weight: bold;
}

tr td {
  padding: 10px 10px 10px 16px;
}

tr td:last-child {
  text-align: end;
}

// tr td {
//   text-align: center;
// }

#menu_item_description {
  font-style: italic;
  font-weight: 300;
  color: darkgray;
  font-size: 13px;
}

#td_menuitem_img {
  max-width: 40px;
  max-height: 40px;
  padding: 0px;
}

#basket_checkout {
  font-size: 13px;
}

#basket_checkout p:first-child {
  line-height: 2px;
}

.row:last-child {
  height: 5vh;
}
</style>
