<template>
  <div class="container">
    <MainAbout />
    <Main @clickSetTopDonationSum="setTopDonationSum" />
    <Container :top-donation-sum="topDonationSum" />
    <div class="popup">
      <PopupCookie />
      <PopupAgent />
      <PopupNews />
    </div>
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
  .container {
    margin: 0 auto;
    min-height: 100vh;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
  }

  .popup {
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>
