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
      pageData: {}
    }
  }
}
</script>
