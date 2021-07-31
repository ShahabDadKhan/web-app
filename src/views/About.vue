<template>
  <v-container fluid style="max-width: 98%;" class="ma-3">
    <v-row align-content="center" class="info_box">
      <v-col sm="6" xs="12" offset-sm="1">
        <h1 class="py-6">
          About us - Delhi Bagels <br />
          <span class="font-weight-bold black mt-5"> Since 1970's</span>
        </h1>
      </v-col>
    </v-row>
    <v-row align-content="center" row wrap class="info_box">
      <v-col sm="3" xs="12" offset-sm="1">
        <h1>
          Our History
        </h1>
        <div>
          <p>
            Still family owned and operated, Delhi Bagels started 50 years ago,
            when two immigrants took their shot at their Dream and opened The
            Bagel Buffet, on Sixth Avenue. Word spread and the cafe became a
            Greenwich Village icon, serving bagels from early morning into the
            late, late night. You name a famous Delhi from 70s and 80s, and they
            were there. In the early 80's, the shop also became a hangout for
            hip-hop pioneers.
          </p>
        </div>
      </v-col>

      <v-col sm="3" xs="12">
        <h1>
          Our Speciality
        </h1>
        <div>
          <p>
            All our bagels are fresh, never frozen, and use only the finest
            all-natural ingredients with no preservatives and no bromates. Every
            New Yorker Bagel has a crisp shell and a chewy center, just as the
            perfect bagel should. Our bakers are dedicated to sending you the
            most delicious, all-natural bagels in the world. Each bagel we send
            you is hand-rolled, one at a time.
          </p>
        </div>
      </v-col>

      <v-col sm="3" xs="12">
        <h1 style="text-align: right;">
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
