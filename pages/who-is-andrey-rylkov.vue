<template>
  <div class="rylkov">
    <MainHeader class="rylkov__header" />
    <LanguageButton :is-additional-page="true" />
    <Menu />
    <Rylkov />
    <Footer />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.rylkov {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}

.rylkov__header {
  display: none;
}

@media screen and (min-width: 768px) {
  .rylkov__header {
    display: block;
  }
}
</style>
