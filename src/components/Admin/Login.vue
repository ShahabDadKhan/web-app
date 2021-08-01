<template>
  <v-container>
    <v-row>
      <v-col offset-md="3" md="6" sm="12">
        <h1>Administrator Login</h1>
        <div class="pa-4" id="info">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              type="email"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :counter="10"
              :rules="passwordRules"
              type="password"
              label="Password"
              required
            ></v-text-field>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="SignIn()"
            >
              Login
            </v-btn>

            <v-btn color="error" class="mr-4" @click="SignOut()">
              SignOut
            </v-btn>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";
export default {
  data: () => ({
    valid: true,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 5) || "Password must be more than 5 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    // checkbox: false,
  }),

  methods: {
    SignIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/admin");
        })
        .catch((error) => {
          console.log("this is error");

          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong Password");
          } else {
            alert(errorMessage);
          }
        });
    },
    SignOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Logged Out");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error);
        });
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style lang="scss" scoped></style>
