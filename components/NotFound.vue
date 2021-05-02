<template>
  <div class="not-found">
    <div class="not-found__grey" />
    <div class="not-found__container">
      <h3 class="not-found__title">
        НЕНАХОД(
      </h3>
      <p class="not-found__text">
        ошибка
      </p>
    </div>
    <LogoWhite />
    <div class="not-found__black" />
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  display: flex;
  position: relative;
  width: 100%;
  border-bottom: solid 1px #434343;
}

.not-found__container {
  background-image: url(~/assets/images/404_logo.png);
  width: 100%;
  height: 246px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 159px 0;
  padding-top: 165px;
}

.not-found__title {
  font-family: 'Vollkorn', 'Times', serif;
  font-size: 55px;
  font-weight: 500;
  line-height: 0.73;
  letter-spacing: -1.65px;
  color: #b23438;
  text-align: center;
}

.not-found__text {
  font-family: 'Vollkorn', 'Times', serif;
  font-size: 34.5px;
  font-weight: 500;
  font-style: italic;
  line-height: 0.72;
  letter-spacing: -1.04px;
  color: #606060;
  margin-top: 10px;
  text-align: center;
}

.logo {
  width: 82px;
  position: absolute;
  bottom: 18px;
  right: 15px;
}

.not-found__grey {
  display: none;
}

.not-found__black {
  display: none;
}

@media screen and (min-width: 768px) {
  .not-found__container {
    height: 330px;
    margin-top: 78px;
    margin-bottom: 113px;
    padding-top: 224px;
  }

  .not-found__title {
    font-size: 74px;
    line-height: 0.72;
    letter-spacing: -2.22px;
  }

  .not-found__text {
    font-size: 46.5px;
    line-height: 0.72;
    letter-spacing: -1.4px;
    margin-top: 13px;
  }

  .logo {
    bottom: 15px;
    right: 26px;
  }
}

@media screen and (min-width: 1280px) {
  .not-found__container {
    height: 472px;
    margin-top: 111px;
    margin-bottom: 162px;
    padding-top: 318px;
  }

  .not-found__title {
    font-size: 106px;
    line-height: 0.72;
    letter-spacing: -3.18px;
  }

  .not-found__text {
    font-size: 66.5px;
    line-height: 0.72;
    letter-spacing: -2px;
    margin-top: 19px;
  }

  .logo {
    width: 117px;
    bottom: 107px;
    right: 43px;
  }

  .not-found__grey {
    display: block;
    width: 92px;
    height: 747px;
    background-color: #cbcbcb;
  }

  .not-found__black {
    display: block;
    width: 95px;
    height: 747px;
    background-color: #000;
  }
}
</style>
