<template>
  <v-container fluid>
    <v-snackbar v-model="updatedSuccess" :timeout="timeout" top right>
      {{ updatedText }}

      <v-btn color="pink" text @click="updatedSuccess = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="deleted" :timeout="timeout" top right>
      {{ deleteItemSuccessfully }}

      <v-btn color="pink" text @click="deleted = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-row>
      <v-col md="10" xs="12" offset-sm="1">
        <h1>Current Bagels in Menu Items</h1>
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
                      @click.stop="dialog = true"
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
      updated: false,
      updatedText: "Menu Item has been updated",
      timeout: 2500,
      deleted: false,
      deleteItemSuccessfully: "Menu Item has been deleted successfully",
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
          this.updatedSuccess = true;
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    },
    deleteItem(id) {
      dbMenuAdd
        .doc(id)
        .delete()
        .then(() => {})
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
      this.deleted = true;
    },
  },

  computed: {
    menuItems() {
      return this.$store.getters.getMenuItems;
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

#menu_item_description {
  font-style: italic;
  font-weight: 300;
  color: darkgray;
  font-size: 13px;
}
</style>
