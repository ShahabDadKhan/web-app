<template>
  <v-container fluid style="max-width: 98%;" class="ma-3">
    <v-row align-content="center" class="info_box">
      <v-col sm="6" xs="12" offset-sm="1">
        <h1 class="py-6">
          Bagel Shop - About us
        </h1>
      </v-col>
    </v-row>
    <v-row align-content="center" row wrap class="info_box">
      <v-col sm="3" xs="12" offset-sm="1">
        <h1>
          Our Bagels
        </h1>
        <div>
          <p>
            Buy our magnificient bagels so so tasy & yummy offset-sm=1
          </p>
        </div>
      </v-col>

      <v-col sm="3" xs="12">
        <h1>
          Our Bagels
        </h1>
        <div>
          <p>
            Buy our magnificient bagels so so tasy & yummy
          </p>
        </div>
      </v-col>

      <v-col sm="3" xs="12">
        <h1>
          Our Bagels
        </h1>
        <div>
          <p>
            Buy our magnificient bagels so so tasy & yummy
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info_box:first-child .col .h1 {
  font-size: 150%;
  padding: 50px;
}
</style>
