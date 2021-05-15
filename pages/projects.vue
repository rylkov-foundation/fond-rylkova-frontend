<template>
  <div class="container">
    <LanguageButton :is-additional-page="true" />
    <Projects />
  </div>
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
