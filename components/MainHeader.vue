<template>
  <header class="header">
    <div class="header__text" />
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style scoped>
  .header {
    background-color: #b23438;
    overflow: hidden;
    height: 40px;
    max-width: 100%;
  }

  .header__text {
    color: #b23438;
    background-image: url("./assets/images/title.svg");
    background-repeat: repeat-x;
    width: 100vw;
    height: 100%;
    background-position: -133% -215%;
  }

  @media screen and (min-width: 768px) {
    .header {
      height: 66px;
    }

    .header__text {
      background-size: 926px;
      background-position: -150px 28px;
    }
  }

  @media screen and (min-width: 1280px) {
    .header {
      height: 53px;
    }

    .header__text {
      background-size: 900px;
      background-position: -250px 12px;
    }
  }
</style>
