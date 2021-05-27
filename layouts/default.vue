<template>
  <div class="container">
    <Menu :menu="menu" />
    <Header />
    <Nuxt />
    <Footer :footer-data="footerData" />
    <div class="popup-container">
      <PopupCookie v-if="!isAcceptedCookies" :popup-cookies-data="popupCookiesData" :handle-accept-cookies="acceptCookies" />
      <PopupAgent :popup-download-data="popupDownloadData" />
      <PopupNews :popup-news-data="popupNewsData" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
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
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.Description },
        { hid: 'keywords', name: 'keywords', content: this.meta.Keywords },
        { hid: 'site_name', name: 'site_name', content: this.meta.site_name },
        { hid: 'og:title', name: 'og:title', content: this.meta.title },
        { hid: 'og:description', name: 'og:description', content: this.meta.og_description },
        { hid: 'og:image', name: 'og:image', content: `${this.$config.constants.serverUrl}${this.meta.logo.url}` },
        { hid: 'twitter:title', name: 'twitter:title', content: this.meta.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.meta.og_description },
        { hid: 'twitter:image', name: 'twitter:image', content: `${this.$config.constants.serverUrl}${this.meta.logo.url}` }

      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'canonical',
          href: `${this.$config.constants.baseUrl}${this.$route.path}`
        }
      ]
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
    min-height: 100vh;
    margin: 0 auto;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
  }

  .popup-container {
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>
