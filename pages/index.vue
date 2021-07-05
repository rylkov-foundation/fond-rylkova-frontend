<template>
  <div class="main-page">
    <MainAbout :page-data="pageData" />
    <Main :donation-amount="donationAmount" :page-data="pageData" @clickSetTopDonationSum="setTopDonationSum" />
    <Container :page-data="pageData" :top-donation-sum="topDonationSum" :donation-amount="donationAmount" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ store }) {
    if (!Object.keys(store.getters.index).length) {
      await store.dispatch('indexInit')
    }
    if (!Object.keys(store.getters.donationAmount).length) {
      await store.dispatch('donationAmountInit')
    }
    return {
      pageData: store.getters.index,
      donationAmount: store.getters.donationAmount
    }
  },
  data () {
    return {
      topDonationSum: 0,
      pageData: {},
      donationAmount: {}
    }
  },
  methods: {
    setTopDonationSum (data) {
      this.topDonationSum = data.topDonationSum
    }
  }
}
</script>

<style>
  .main-page {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
  }
</style>
