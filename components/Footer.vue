<template>
  <footer class="footer">
    <h2 class="footer__title">мы в соцсетях</h2>
    <p class="footer__foreign-agent"></p>
    <p class="footer__license"></p>
    <p class="footer__social-links"></p>
    <p class="footer__copyright"></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer {
    display: flex;
  }

  .footer__title {
    text-transform: uppercase;
    color: #727272;
    font-family: Roboto, sans-serif;
    font-size: 11px;
    line-height: 19px;
  }
</style>
