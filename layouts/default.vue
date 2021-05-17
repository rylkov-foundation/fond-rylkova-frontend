<template>
  <div>
    <Menu :menu="menu" />
    <Header />
    <div class="container">
      <Nuxt />
    </div>
    <Footer :footer-data="footerData"/>
    <div class="popup">
      <PopupCookie v-if="!isAcceptedCookies" :handle-accept-cookies="acceptCookies" />
      <PopupAgent />
      <PopupNews />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [],
      meta: {},
      footerData: {},
      popupCookiesData: {},
      popupDownloadData: {},
      popupNewsData: {},
      isAcceptedCookies: true
    }
  },
  created() {
    this.menu = this.$store.getters.menu
    this.meta = this.$store.getters.globalMeta
    this.footerData = this.$store.getters.footer
    this.popupCookiesData = this.$store.getters.popupCookies
    this.popupDownloadData = this.$store.getters.popupDownload
    this.popupNewsData = this.$store.getters.popupNews
  },
  mounted() {
    this.isAcceptedCookies = Boolean(localStorage.isAcceptedCookies)
    console.log(this.footerData)
  },
  methods: {
    acceptCookies () {
      localStorage.isAcceptedCookies = 'true'
      this.isAcceptedCookies = true
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

  .popup {
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>
