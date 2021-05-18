import regularDonationCronTask from './utilites/regularDonationCronTask'
require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fond-rylkova',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    '@assets/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/axios'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
    'nuxt-i18n',
    () => {
      require('node-schedule')
        .scheduleJob('0 0 * * *', regularDonationCronTask)
    }
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },
  serverMiddleware: [
    { path: '/donation-query', handler: '~/server-middleware/donation.js' }
  ],
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000
  },
  publicRuntimeConfig: {
    constants: {
      baseUrl: process.env.DOMEN || 'http://localhost:3000'
    }
  },
  strapi: {
    entities: [
      { name: 'meta', type: 'single' },
      { name: 'index', type: 'single' },
      { name: 'pages', type: 'collection' },
      { name: 'mission', type: 'single' },
      { name: 'annual_reports', type: 'single' },
      { name: 'contacts', type: 'single' },
      { name: 'projects', type: 'single' },
      { name: 'team', type: 'single' },
      { name: 'who_is_andrei_rylkov', type: 'single' },
      { name: 'donation_page', type: 'single' },
      { name: 'donation_amount', type: 'single' },
      { name: 'footer', type: 'single' },
      { name: 'popup_cookies', type: 'single' },
      { name: 'popup_download', type: 'single' },
      { name: 'popup_news', type: 'single' }
    ]
  },
  loading: {
    color: '#000',
    height: '5px'
  },
  i18n: {
    locales: [
      {
        name: 'Russian',
        code: 'ru',
        file: 'ru.js'
      },
      {
        name: 'English',
        code: 'en',
        file: 'en.js'
      }
    ],
    defaultLocale: 'ru',
    detectBrowserLanguage: false,
    strategy: 'no_prefix',
    langDir: 'lang/',
    lazy: true
  }
}
