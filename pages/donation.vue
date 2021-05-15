<template>
  <DonationAll />
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
