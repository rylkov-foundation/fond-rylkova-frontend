<template>
  <NotFound v-if="error.statusCode === 404" />
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
