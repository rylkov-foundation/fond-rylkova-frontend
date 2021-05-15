<template>
  <div class="container">
    <LanguageButton :is-additional-page="true" />
    <Contacts />
  </div>
</template>

<script>
export default {
  async asyncData ({ store }) {
    if (!Object.keys(store.getters.contacts).length) {
      await store.dispatch('contactsInit')
    }
    return {
      pageData: store.getters.contacts
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
}
</style>
