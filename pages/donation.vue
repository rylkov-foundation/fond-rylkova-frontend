<template>
  <div class="container">
    <DonationAll />
  </div>
</template>

<script>
export default {
  async asyncData ({ store }) {
    if (!Object.keys(store.getters.donation).length) {
      await store.dispatch('donationInit')
    }
    if (!Object.keys(store.getters.donationAmount).length) {
      await store.dispatch('donationAmountInit')
    }
    return {
      pageData: store.getters.donation,
      donationAmount: store.getters.donationAmount
    }
  },
  data () {
    return {
      pageData: {},
      donationAmount: {}
    }
  }
}
</script>

<style scoped>
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
</style>
