<template>
  <div class="rylkov">
    <MainHeader />
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
  max-width: 100%;
  overflow: hidden;
}
</style>
