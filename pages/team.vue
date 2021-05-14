<template>
  <div class="container">
    <MainHeader />
    <LanguageButton :is-additional-page="true" />
    <Menu />
    <Team />
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData ({ store }) {
    if (!Object.keys(store.getters.team).length) {
      await store.dispatch('teamInit')
    }
    if (!Object.keys(store.getters.footer).length) {
      await store.dispatch('footerInit')
    }
    if (!store.getters.menu.length) {
      await store.dispatch('menuInit')
    }
    return {
      menu: store.getters.menu,
      pageData: store.getters.team,
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
  .container {
    margin: 0 auto;
    min-height: 100vh;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
  }
</style>
