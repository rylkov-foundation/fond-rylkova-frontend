<template>
  <div class="main-page">
    <MainAbout />
    <Main @clickSetTopDonationSum="setTopDonationSum" />
    <Container :top-donation-sum="topDonationSum" />
  </div>
</template>

<script>
export default {
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
