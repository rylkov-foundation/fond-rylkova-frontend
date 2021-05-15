<template>
  <div v-if="error.statusCode === 404" class="container">
    <MainHeader />
    <Menu />
    <NotFound />
    <Footer />
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default () { return {} }
    }
  }
}
</script>

<style>
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
