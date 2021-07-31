<template>
  <v-container fluid style="max-width: 98%;" class="ma-3">
    <v-row align-content="center" class="info_box">
      <v-col sm="6" xs="12" offset-sm="1">
        <h1 class="py-6">
          Fresh Customer Service <br />
          <span class="font-weight-bold black mt-5"> Guid</span>
        </h1>
      </v-col>
    </v-row>
    <v-row align-content="center" row wrap class="info_box">
      <v-col sm="8" md="8" xs="12" offset-sm="1">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="font-weight-bold"> Our Timing </span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <span class="font-weight-bold">1) </span> If you place an order
              before 9 AM IST on Monday, Tuesday, Wednesday or Thursday it will
              ship out the same day. These orders will then arrive via Ronae
              overnight service the following day.
              <br />
              <span class="font-weight-bold">2) </span>
              If you order after 9 AM IST on Thursday, or anytime on a Friday,
              Saturday or Sunday, your order will ship the following Monday and
              arrive on Tuesday, unless you select Saturday Delivery option
              (&#8377; 14 fee).
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="font-weight-bold"
                >Rural Address Service Fee</span
              ></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              Free Overnight Shipping applies to all orders that can be shipped
              via Ronae Standard Overnight Service only. For customers shipping
              to rural locations outside of Ronae's Standard Overnight delivery
              zone, orders must be shipped via Priority Overnight service
              instead. Due to the high cost associated with this shipping
              option, a Rural Service Handling fee will be added to these
              orders.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="font-weight-bold"
                >How long will my bagels stay fresh? How should I store
                them?</span
              ></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              These are fresh-baked bakery products with no preservatives of any
              kind - you cannot leave them out as you would supermarket
              products. Your bagels will remain fresh and delicious for 15 hours
              after delivery.
              <br />
              Any bagels not being enjoyed the day of delivery should be frozen
              and can be thawed sitting out for 2-3 hours Please see our
              Detailed Bagel Handling Instructions for more information
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="font-weight-bold"
                >Do you ship online to wholesale accounts such as cafes and
                shops?
              </span></v-expansion-panel-header
            >
            <v-expansion-panel-content
              >Online wholesale ordering is available select clients throughout
              the India. Please visit our Wholesale Bakery website for more
              information or Contact the Wholesale Team to set up an account.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="font-weight-bold"
                >When will my order arrive?
              </span></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              We cannot guarantee or control any specific arrival time - please
              access your tracking number and call ******* to inquire about an
              order shipped.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="font-weight-bold"
                >Do you offer returns or exchanges?
              </span></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              When you place an order on this website you are ordering
              fresh-baked, perishable goods. Orders cannot be returned or
              refunded. Delhi Bagels Inc. is not responsible for any missing or
              stolen packages, incorrect addresses, Ronae delivery issues, or
              failure to receive or accept your delivery.
              <br />
              Because we offer free overnight shipping at our expense, a refund
              is not available.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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

.row:first-child {
  height: 40vh;
}
</style>
