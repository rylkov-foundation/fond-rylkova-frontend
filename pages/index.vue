<template>
  <div class="container">
    <MainHeader />
    <Menu />
    <MainAbout />
    <Main />
    <Container />
    <Footer />
    <div class="popup">
      <PopupCookie />
      <PopupAgent />
      <PopupNews />
    </div>
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
    max-width: 100%;
    overflow: hidden;
  }

  .popup {
    position: fixed;
    bottom: 50px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>
