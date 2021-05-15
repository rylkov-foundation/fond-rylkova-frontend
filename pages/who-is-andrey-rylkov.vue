<template>
  <div class="rylkov">
    <LanguageButton :is-additional-page="true" />
    <Rylkov />
  </div>
</template>

<script>
export default {
  async asyncData ({ store }) {
    if (!Object.keys(store.getters.whoIsAndreiRylkov).length) {
      await store.dispatch('whoIsAndreiRylkovInit')
    }
    if (!Object.keys(store.getters.footer).length) {
      await store.dispatch('footerInit')
    }
    if (!store.getters.menu.length) {
      await store.dispatch('menuInit')
    }
    return {
      menu: store.getters.menu,
      pageData: store.getters.whoIsAndreiRylkov,
      footerData: store.getters.footer
    }
  },
  data () {
    return {
      menu: [],
      pageData: {},
      footerData: {}
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
