<template>
  <div class="rylkov">
    <MainHeader class="rylkov__header" />
    <LanguageButton class="rylkov__button" />
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

.rylkov__button {
  display: none;
}

@media screen and (min-width: 768px) {
  .rylkov__header {
    display: block;
    height: 40px;
  }

  .rylkov__button {
    display: flex;
    top: 14px;
    left: 13px;
    background-color: #fff;
    color: #000;
    z-index: 5;
    width: 35px;
    height: 35px;
    font-size: 26px;
  }
}
</style>
