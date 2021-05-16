<template>
  <Team :page-data="pageData" />
</template>

<script>
export default {
  async asyncData ({ store }) {
    if (!Object.keys(store.getters.team).length) {
      await store.dispatch('teamInit')
    }
    return {
      pageData: store.getters.team
    }
  },
  data () {
    return {
      pageData: {}
    }
  }
}
</script>
