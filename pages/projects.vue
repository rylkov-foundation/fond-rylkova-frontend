<template>
  <Projects :page-data="pageData" />
</template>

<script>
export default {
  async asyncData ({ store }) {
    if (!Object.keys(store.getters.projects).length) {
      await store.dispatch('projectsInit')
    }
    return {
      pageData: store.getters.projects
    }
  },
  data () {
    return {
      pageData: {},
      meta: {}
    }
  },
  head() {
    return {
      title: this.pageData['title_' + this.$i18n.locale] + '|' + this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.pageData.Description },
        { hid: 'keywords', name: 'keywords', content: this.pageData.Keywords },
        { hid: 'og:title', name: 'og:title', content: this.pageData['title_' + this.$i18n.locale] },
        { hid: 'og:description', name: 'og:description', content: this.pageData.og_description },
        { hid: 'og:image', name: 'og:image', content: this.$config.constants.serverUrl + this.meta.logo.url }
      ]
    }
  },
  created() {
    this.meta = this.$store.getters.globalMeta
  }

}
</script>
