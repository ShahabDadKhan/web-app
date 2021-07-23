<template>
  <v-container fluid>
    <v-row>
      <v-col md="5" xs="12" offset-sm="1">
        <h1>Add New items</h1>
        <div class="pa-2" id="info">
          <v-form ref="form" lazy-validation>
            <v-text-field
              required
              label="Name of Begal"
              :rules="nameRules"
              v-model="name"
            ></v-text-field>
            <v-text-field
              required
              label="Description "
              :rules="descriptionRules"
              v-model="description"
            ></v-text-field>
            <v-text-field
              required
              label="Price"
              :rules="priceRules"
              v-model="price"
            ></v-text-field>
            <v-row class="ma-0">
              <v-btn @click="addNewMenuItem()" color="complete">Add Item</v-btn>
              <v-btn color="white ml-3" tile @click="reset">Clear</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="incomplete" to="/admin">Back</v-btn>
            </v-row>
          </v-form>
        </div>
      </v-col>
      <v-col md="4" xs="6" offset-sm="1">
        <h1>Current Basket</h1>
        <div class="pa-2" id="info">
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left" style="width:70%;">
                  Name
                </th>
                <th class="text-left" style="width:100px;">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="td_name">{{ name }}</span
                  ><br />
                  <span class="menu_item_description">{{ description }}</span>
                </td>
                <td class="preview_menuitem_price text-left">
                  {{ price.length > 0 ? "&#8377;" : "" }}
                  {{ price }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { dbMenuAdd } from "../../../firebase";
export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
      valid: false,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      descriptionRules: [
        (v) => !!v || "Description is required",
        (v) =>
          (v && v.length <= 10) ||
          "Description must be less than 10 characters",
      ],
      priceRules: [(v) => !!v || "Price is required"],
    };
  },
  methods: {
    addNewMenuItem() {
      dbMenuAdd.add({
        name: this.name,
        description: this.description,
        price: this.price,
      });
    },
    reset() {
      this.$refs.form.reset();
    },
  },

  computed: {
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
