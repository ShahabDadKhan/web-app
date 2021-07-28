<template>
  <v-container fluid>
    <v-snackbar v-model="updatedSuccess" :timeout="timeout" top right>
      {{ updatedText }}

      <v-btn color="pink" text @click="updatedSuccess = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-row>
      <v-col md="5" xs="12" offset-sm="1">
        <h1>Current Bagels in Menu items</h1>
        <div class="pa-2" id="info">
          <v-simple-table id="menu-table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" style="width:70%;">
                    Name
                    <v-btn color="orange" small text to="/addNew"
                      ><v-icon>mdi-plus</v-icon
                      ><span class="px-0 py-2">Add Item</span></v-btn
                    >
                  </th>
                  <th class="text-center" style="width:70%;">
                    Name of items
                  </th>
                  <th class="text-center" style="width:100px;">
                    Edit
                  </th>
                  <th class="text-left" style="width:100px;">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in menuItems" :key="item.name">
                  <td>
                    <span id="td_name">{{ item.name }}</span
                    ><br />
                    <span id="menu_item_description">{{
                      item.description
                    }}</span>
                  </td>
                  <td class="text-center">&#8377; {{ item.price }}</td>
                  <td>
                    <v-btn
                      small
                      text
                      @click.stop="dialog = !dialog"
                      @click="editItem(item)"
                    >
                      <v-icon color="orange" title>mdi-pencil</v-icon>
                    </v-btn>
                  </td>
                  <td>
                    <v-btn small text @click="deleteItem(item.id)">
                      <v-icon color="orange" title>mdi-delete</v-icon>
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
            <v-btn color="orange">Checkout</v-btn>
            <!-- </v-col> -->
          </v-row>
        </div>
      </v-col>
    </v-row>

    <!-- Dialog to edit the existing product -->
    <v-row>
      <v-dialog v-model="dialog" width="400">
        <v-card>
          <h1 class="px-5 pt-5">Edit items</h1>
          <div class="pa-5" id="info">
            <v-form ref="form" lazy-validation>
              <v-text-field v-model="item.name"></v-text-field>
              <v-text-field v-model="item.description"></v-text-field>
              <v-text-field v-model="item.price"></v-text-field>
              <v-row class="ma-0">
                <v-btn
                  @click="updateItem()"
                  @click.stop="dialog = !dialog"
                  color="complete"
                  >Edit Item</v-btn
                >
                <!-- <v-btn color="white ml-3" tile @click="reset">Clear</v-btn> -->
                <v-spacer></v-spacer>
                <v-btn color="incomplete" @click.stop="dialog = !dialog"
                  >Close</v-btn
                >
              </v-row>
            </v-form>
          </div>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { dbMenuAdd } from "../../firebase";

export default {
  data() {
    return {
      basket: [],
      dialog: false,
      item: [],
      activeEditItem: null,
      updatedSuccess: false,
      updatedText: "Menu Item has been updated",
      timeout: 2500,
    };
  },

  beforeCreate() {
    return this.$store.dispatch("setMenuItems");
  },

  methods: {
    editItem(item) {
      this.item = item;
      this.activeEditItem = item.id;
    },
    updateItem() {
      dbMenuAdd
        .doc(this.activeEditItem)
        .update(this.item)
        .then(() => {
          console.log("Document successfully updated!");
          // this.updatedSuccess = true;
          this.updatedSuccess = true;
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
    deleteItem(id) {
      dbMenuAdd
        .doc(id)
        .delete()
        .then(() => {
          // console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    addToBasket(item) {
      if (this.basket.find((itemArray) => item.name === itemArray.name)) {
        item = this.basket.find((itemArray) => item.name === itemArray.name);
        this.increaseQtn(item);
      } else {
        this.basket.push({
          name: item.name,
          price: item.price,
          quantity: 1,
        });
      }
    },
    increaseQtn(item) {
      item.quantity++;
      // item.price = item.quantity * item.price;
    },
    decreaseQtn(item) {
      item.quantity--;
      console.log(item.price);
      // item.price = this.price - item.price;
      if (item.quantity === 0) {
        this.basket.splice(this.basket.indexOf(item), 1);
      }
    },
  },

  computed: {
    menuItems() {
      return this.$store.getters.getMenuItems;
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
.col h1 {
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
