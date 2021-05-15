<template>
  <Rylkov />
</template>

<script>
export default {
  async asyncData ({ store }) {
    if (!Object.keys(store.getters.whoIsAndreiRylkov).length) {
      await store.dispatch('whoIsAndreiRylkovInit')
    }
    return {
      pageData: store.getters.whoIsAndreiRylkov
    }
  },
  data () {
    return {
      pageData: {}
    }
  }
}
</script>
