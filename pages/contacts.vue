<template>
  <Contacts />
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
