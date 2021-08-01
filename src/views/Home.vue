<template>
  <v-container fluid style="max-width: 98%;" class="ma-3">
    <v-row align-content="center" class="info_box">
      <v-col sm="2" xs="12" offset-sm="9">
        <h1>
          Bagel Shop
        </h1>
        <div>
          <p>
            Buy our magnificient bagels so so tasy & yummy
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row align-content="center" row wrap class="info_box">
      <v-col sm="2" xs="12" offset-sm="1">
        <h1>
          Our Bagels
        </h1>
        <div>
          <p>
            Buy our magnificient bagels so so tasy & yummy
          </p>
        </div>
      </v-col>

      <v-col sm="2" xs="12">
        <h1>
          Our Bagels
        </h1>
        <div>
          <p>
            Buy our magnificient bagels so so tasy & yummy
          </p>
        </div>
      </v-col>

      <v-col sm="2" xs="12">
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
.info_box .col h1 {
  @include infobox_mixin(
    5px,
    map-get($colors, white),
    10px,
    5px,
    map-get($colors, white)
  );
  text-align: center;
}

.info_box:first-child .col .h1 {
  font-size: 150%;
  padding: 50px;
}

.info_box .col div {
  background-color: white;
  padding: 20px;
}

.info_box .col div {
  background-color: white;
  padding: 20px;
}

.row:first-child {
  height: 40vh;
}

.row:last-child {
  height: 40vh;
}
</style>
