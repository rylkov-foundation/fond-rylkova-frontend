<template>
  <div>
    <Menu />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData ({ store }) {
    if (!Object.keys(store.getters.footer).length) {
      await store.dispatch('footerInit')
    }
    if (!store.getters.menu.length) {
      await store.dispatch('menuInit')
    }
    return {
      menu: store.getters.menu,
      footerData: store.getters.footer
    }
  },
  data () {
    return {
      menu: [],
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
</style>
