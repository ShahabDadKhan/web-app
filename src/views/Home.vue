<template>
  <v-container fluid style="max-width: 98%;" class="ma-3">
    <v-row align-content-md="center" justify="center" class="info_box mt-16">
      <v-col sm="8" xs="12">
        <h1>
          Too many people look at the holes in their life and miss the glorious
          bagel right in front of them.
        </h1>
        <div>
          <p>
            There's no denying that the best day of the week is
            <span
              class="font-weight-bold black--text"
              style="background-color:orange;"
            >
              Friday </span
            >. Sorry, Monday through Thursday — you're just the hurdles we have
            to get through to reach the weekend, and it really does start with
            Friyay. As exciting as it is to reach the end of the work week, the
            best part is when your office has
            <span
              class="font-weight-bold black--text"
              style="background-color:orange;"
            >
              Bagel Fridays </span
            >. It's that little tasty incentive that makes your morning so much
            brighter, and when you're too hyped to handle it all, you'll need
            some Instagram captions for bagel Friday pics.
            <br />
            <span class="font-weight-bold">*</span>Bored of eating boring foods
            regularly? Try the tasty bagels. Where taste meets perfection.
            <br />
            <span class="font-weight-bold">*</span>Now a variety of bagels are
            here to provide you Joy and Happiness.
            <br />
            <span class="font-weight-bold">*</span> Where taste meets
            perfection. Try the tasty bagels.
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
