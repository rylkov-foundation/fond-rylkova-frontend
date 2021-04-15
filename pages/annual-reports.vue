<template>
  <div class="container">
    <MainHeader />
    <LanguageButton :is-additional-page="true" />
    <Menu />
    <Reports />
    <Footer />
  </div>
</template>

<script>
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
