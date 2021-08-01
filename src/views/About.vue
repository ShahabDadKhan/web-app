<template>
  <v-container fluid style="max-width: 98%;" class="ma-3">
    <v-row align-content="start" class="info_box">
      <v-col sm="8" md="6" xs="12" offset-md="1" offset-sm="2">
        <h1 class="py-6">
          About us - Delhi Bagels <br />
          <span class="font-weight-bold black mt-5"> Since 1970's</span>
        </h1>
      </v-col>
    </v-row>
    <v-row align-content="start" row wrap class="info_box">
      <v-col sm="8" offset-md="1" offset-sm="2">
        <h1 class="text-left">
          Our History
        </h1>
        <div>
          <p>
            Still
            <span
              class="font-weight-bold black--text"
              style="background-color:orange;"
            >
              family owned and operated</span
            >
            , Delhi Bagels
            <span
              class="font-weight-bold black--text"
              style="background-color:orange;"
              >started 50 years ago </span
            >, when two immigrants took their shot at their Dream and opened The
            Bagel Buffet, on Sixth Avenue. Word spread and the cafe became a
            Greenwich Village icon, serving bagels from early morning into the
            late, late night. You name a famous Delhi from 70s and 80s, and they
            were there. In the
            <span
              class="font-weight-bold black--text"
              style="background-color:orange;"
            >
              early 80's,
            </span>
            the shop also became a hangout for hip-hop pioneers.
          </p>
        </div>
      </v-col>

      <v-col sm="8" offset-md="1" offset-sm="2">
        <h1>
          Our Speciality
        </h1>
        <div>
          <p>
            All our bagels are
            <span
              class="font-weight-bold black--text"
              style="background-color:orange;"
              >fresh, never frozen,</span
            >
            and use only the finest all-natural ingredients with no
            preservatives and no bromates. Every Delhi Bagel has a
            <span
              class="font-weight-bold black--text"
              style="background-color:orange;"
            >
              crisp shell and a chewy center,
            </span>
            just as the perfect bagel should. Our bakers are dedicated to
            sending you the most delicious, all-natural bagels in the world.
            Each bagel we send you is hand-rolled, one at a time.
          </p>
        </div>
      </v-col>

      <!-- <v-col sm="8" cols="10" offset-md="1" offset-sm="2">
        <h1>
          Giving Away
        </h1>
        <div>
          <p>
            Since our founding, Delhi Bagels has always prided itself on giving
            back to the community. We’re proud of the fact that we’ve donated
            CityHarvest over two million pounds of bagels and baked goods since
            2001. We have also donated to over 100 local and regional churches
            and not-for-profit organizations.
          </p>
        </div>
      </v-col> -->
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
.info_box .col div {
  background-color: white;
  padding: 20px;
}
// .row:first-child {
//   height: 40vh;
// }
.row:last-child {
  height: 40vh;
}
// .heading {
//   border: 5px solid white;
//   margin-bottom: 10px;
// }
</style>
