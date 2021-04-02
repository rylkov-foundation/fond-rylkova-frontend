<template>
  <header class="header">
    <p class="header__text">
      Фонд имени Андрея Рылькова Фонд имени Андрея Рылькова
    </p>
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
    text-shadow:
      -1px -1px 0 white,
      1px -1px 0 white,
      -1px 1px 0 white,
      1px 1px 0 white;
    font-family: Vollkorn, serif;
    font-size: 39px;
    word-spacing: -4px;
    transform: scaleX(1.2);
    text-align: center;
    white-space: nowrap;
    position: relative;
    left: -181px;
    top: 12px;
  }

  @media screen and (min-width: 768px) {
    .header {
      height: 66px;
    }

    .header__text {
      font-size: 60px;
      left: -88px;
      top: 22px;
    }
  }

  @media screen and (min-width: 1280px) {
    .header {
      height: 53px;
    }

    .header__text {
      font-size: 56px;
      letter-spacing: 0.5px;
      left: -141px;
      top: 11px;
    }
  }
</style>
