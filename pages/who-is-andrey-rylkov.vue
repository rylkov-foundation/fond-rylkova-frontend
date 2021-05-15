<template>
  <div class="rylkov">
    <Rylkov />
  </div>
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

<style scoped>
.rylkov {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  max-width: 100%;
  overflow: hidden;
}
</style>
