<template>
  <div class="container">
    <MainHeader />
    <Menu />
    <MainAbout />
    <Main />
    <Container />
    <Footer />
    <VPopup />
  </div>
</template>

<script>
export default {

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
