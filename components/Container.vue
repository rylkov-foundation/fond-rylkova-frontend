<template>
  <div class="grid-container">
    <OurMission :page-data="pageData" />
    <Results :page-data="pageData" />
    <Help :page-data="pageData" />
    <Donation :page-data="pageData" :top-donation-sum="topDonationSum" :donation-amount="donationAmount" />
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    topDonationSum: {
      type: Number,
      default: 0
    },
    pageData: {
      default: () => {},
      type: Object
    },
    donationAmount: {
      default: () => {},
      type: Object
    }
  }
}
</script>

<style scoped>
  @media screen and (min-width: 1280px) {
    .grid-container {
      width: 100%;
      display: grid;
      grid-template-areas:
        "mission results"
        "donation help";
      grid-template-rows: repeat(2, 50%);
      grid-template-columns: 55% 45%;
      gap: 0;
      overflow: hidden;
    }
  }
</style>
