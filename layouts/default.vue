<template>
  <div>
    <Menu />
    <Header />
    <div class="container">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData ({ store }) {
    if (!Object.keys(store.getters.footer).length) {
      await store.dispatch('footerInit')
    }
    if (!Object.keys(store.getters.globalMeta).length) {
      await store.dispatch('globalMetaInit')
    }
    if (!store.getters.menu.length) {
      await store.dispatch('menuInit')
    }
    return {
      menu: store.getters.menu,
      meta: store.getters.globalMeta,
      footerData: store.getters.footer
    }
  },
  data () {
    return {
      menu: [],
      meta: {},
      footerData: {}
    }
  }
}
</script>

<style>
  html {
    font-family: Vollkorn, Times, serif;
    font-size: 16px;
    color: #313131;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

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
