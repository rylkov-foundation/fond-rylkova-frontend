<template>
  <Reports :page-data="pageData" />
</template>

<script>
export default {
  name: 'AnnualReportsPage',
  async asyncData ({ store, error }) {
    try {
      if (!Object.keys(store.getters.annualReports).length) {
        await store.dispatch('annualReportsInit')
      }
    } catch (e) {
      error({ statusCode: 404 })
    }
    return {
      pageData: store.getters.annualReports
    }
  },
  data () {
    return {
      pageData: {},
      meta: {}
    }
  },
  head() {
    return {
      title: `${this.pageData[`title_${this.$i18n.locale}`]}|${this.meta.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.pageData.Description },
        { hid: 'keywords', name: 'keywords', content: this.pageData.Keywords },
        { hid: 'og:title', name: 'og:title', content: this.pageData[`title_${this.$i18n.locale}`] },
        { hid: 'og:description', name: 'og:description', content: this.pageData.og_description },
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
