<template>
  <DonationAll :page-data="pageData" :donation-amount="donationAmount" />
</template>

<script>
export default {
  name: 'DonationPage',
  async asyncData ({ store, error }) {
    if (!Object.keys(store.getters.donation).length) {
      await store.dispatch('donationInit')
    }
    if (!Object.keys(store.getters.donationAmount).length) {
      await store.dispatch('donationAmountInit')
    }
    if (Object.values(store.getters.donation).includes(null)) {
      error({ statusCode: 404 })
    }
    return {
      pageData: store.getters.donation,
      donationAmount: store.getters.donationAmount
    }
  },
  data () {
    return {
      pageData: {},
      donationAmount: {},
      meta: {}
    }
  },
  head() {
    return {
      title: `${this.pageData.donation[`title_${this.$i18n.locale}`]}|${this.meta.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.pageData.donation.Description },
        { hid: 'keywords', name: 'keywords', content: this.pageData.donation.Keywords },
        { hid: 'og:title', name: 'og:title', content: this.pageData.donation[`title_${this.$i18n.locale}`] },
        { hid: 'og:description', name: 'og:description', content: this.pageData.donation.og_description },
        { hid: 'og:image', name: 'og:image', content: `${this.$config.constants.serverUrl}${this.meta.logo.url}` },
        { hid: 'twitter:title', name: 'twitter:title', content: this.pageData[`title_${this.$i18n.locale}`] },
        { hid: 'twitter:description', name: 'twitter:description', content: this.pageData.og_description },
        { hid: 'twitter:image', name: 'twitter:image', content: `${this.$config.constants.serverUrl}${this.meta.logo.url}` }

      ]
    }
  },
  created() {
    this.meta = this.$store.getters.globalMeta
  }
}
</script>
