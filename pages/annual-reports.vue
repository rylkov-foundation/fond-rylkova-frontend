<template>
  <Reports :page-data="pageData" />
</template>

<script>
export default {
  async asyncData ({ store }) {
    if (!Object.keys(store.getters.annualReports).length) {
      await store.dispatch('annualReportsInit')
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
      title: this.pageData.title_ru + '|' + this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.pageData.Description },
        { hid: 'keywords', name: 'keywords', content: this.pageData.Keywords },
        { hid: 'og:title', name: 'og:title', content: this.pageData.title_ru },
        { hid: 'og:description', name: 'og:description', content: this.pageData.og_description },
        { hid: 'og:image', name: 'og:image', content: this.$config.constants.serverUrl + this.meta.logo.url }
      ]
    }
  },
  created() {
    this.meta = this.$store.getters.globalMeta
  }
}
</script>
