<template>
  <v-container fluid>
    <v-snackbar v-model="updated" :timeout="timeout" top right>
      {{ addedItem }}

      <v-btn color="pink" text @click="updated = false">
        Close
      </v-btn>
    </v-snackbar>

    <v-row>
      <v-col md="5" sm="6" cols="12" offset-sm="1">
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
            <v-file-input
              show-size
              @change="uploadImage"
              label="File input"
            ></v-file-input>
            <v-row class="ma-0">
              <v-btn
                @click="addNewMenuItem()"
                color="complete"
                :disabled="btnDisabled"
                >Add Item</v-btn
              >
              <v-btn color="white ml-3" tile @click="reset">Clear</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="incomplete" to="/admin">Back</v-btn>
            </v-row>
          </v-form>
        </div>
      </v-col>

      <v-col md="4" sm="4" cols="12" offset-sm="1">
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
import { dbMenuAdd, fb } from "../../../firebase";
export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
      image: null,
      btnDisabled: true,
      updated: false,
      deleted: false,
      timeout: 2500,
      addedItem: "Menu Item has been added",
      deleteItem: "Menu Item has been deleted successfully",

      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 40) || "Name must be less than 40 characters",
      ],
      descriptionRules: [
        (v) => !!v || "Description is required",
        (v) =>
          (v && v.length <= 30) ||
          "Description must be less than 30 characters",
      ],
      priceRules: [(v) => !!v || "Price is required"],
    };
  },

  methods: {
    uploadImage(e) {
      let file = e;
      console.log(e);
      var storageRef = fb.storage().ref("products/" + file.name);

      // eslint-disable-next-line no-unused-vars
      let uploadTask = storageRef.put(file);

      uploadTask.on(
        "state_changed",
        // eslint-disable-next-line no-unused-vars
        (snapshot) => {},
        // eslint-disable-next-line no-unused-vars
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.image = downloadURL;
            this.btnDisabled = false;
            console.log("File available at", downloadURL);
          });
        }
      );
    },
    addNewMenuItem() {
      dbMenuAdd.add({
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image,
      });
      this.updated = true;
    },
    reset() {
      this.$refs.form.reset();
    },
    validate() {
      this.$refs.form.validate();
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

.row:last-child {
  height: 5vh;
}
</style>
