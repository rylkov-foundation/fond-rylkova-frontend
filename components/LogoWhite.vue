<template>
  <router-link to="donation" class="logo">
    <img src="@/assets/images/logo_white.png" alt="Логотип" class="logo__image">
  </router-link>
</template>

<script>
export default {
  name: 'LogoWhite'
}
</script>

<style scoped>
.logo {
  display: none;
}

@media screen and (min-width: 1280px) {
  .logo {
    display: block;
    position: absolute;
    z-index: 13;
    right: 17px;
    width: 117px;
    height: 86px;
    top: 445px;
  }

  .logo:hover {
    opacity: 0.8;
  }
}
</style>
