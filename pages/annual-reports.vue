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
      pageData: {}
    }
  }
}
</script>
