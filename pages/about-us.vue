<template>
  <AboutUs />
</template>

<script>
export default {
  async asyncData ({ store }) {
    if (!Object.keys(store.getters.mission).length) {
      await store.dispatch('missionInit')
    }
    return {
      pageData: store.getters.mission
    }
  },
  data () {
    return {
      pageData: {}
    }
  }
}
</script>
