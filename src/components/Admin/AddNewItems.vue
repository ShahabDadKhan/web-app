<template>
  <v-container fluid>
    <v-row>
      <v-col md="5" xs="12" offset-sm="1">
        <h1>Add New items</h1>
        <div class="pa-2" id="info">
          <v-text-field
            label="Name of Begal"
            rules
            v-model="name"
          ></v-text-field>
          <v-text-field
            label="Description "
            rules
            v-model="description"
          ></v-text-field>
          <v-text-field label="Price" rules v-model="price"></v-text-field>
          <v-btn color="complete">Add Item</v-btn>
          <v-btn color="incomplete">Cancel</v-btn>
        </div>
      </v-col>
      <v-col md="4" xs="6" offset-sm="1">
        <h1>Current Basket</h1>
        <div class="pa-2" id="info">
          Right
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      basket: [],
      menuItems: [
        {
          name: "Frozen Yogurt",
          description: "Sugar, stuff & more sugar ",
          price: 159,
        },
        {
          name: "Ice cream sandwich",
          description: "Sugar, stuff & more sugar ",
          price: 237,
        },
        {
          name: "Eclair",
          description: "Sugar, stuff & more sugar ",
          price: 262,
        },
        {
          name: "Cupcake",
          description: "Sugar, stuff & more sugar ",
          price: 305,
        },
        {
          name: "Gingerbread",
          description: "Sugar, stuff & more sugar ",
          price: 356,
        },
      ],
    };
  },
  methods: {
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
