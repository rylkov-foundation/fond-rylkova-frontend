<template>
  <section class="main">
    <div class="main__red-block" />
    <div class="main__grey-block">
      <div class="main__money-block">
        <p class="main__number main__number_size_big">
          1000
          <span class="main__money-sign">&#8381;</span>
        </p>
        <p class="main__number main__number_size_small">
          200
        </p>
        <p class="main__number main__number_size_medium">
          500
        </p>
        <a class="main__text main__text_position_top" href="#">
          Поддержать
          <span class="main__arrow">&gt;</span>
        </a>
      </div>
      <div class="main__image-block">
        <img src="~/assets/images/eye.png" alt="Глаз" class="main__eye">
      </div>
      <a class="main__text main__text_position_bottom" href="#">
        Получить помощь
        <span class="main__arrow">&gt;</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
  .main__red-block {
    background-color: #b23438;
    height: 51px;
    width: 100vw;
  }

  .main__grey-block {
    background-color: #cbcbcb;
    display: flex;
    flex-direction: column;
    padding-bottom: 17px;
  }

  .main__money-block {
    display: flex;
    justify-content: space-between;
    margin: 0 17px 0 15px;
    position: relative;
    top: -33px;
    max-width: 320px;
  }

  .main__number {
    font-family: 'Tomorrow', 'Times New Roman', fantasy;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    padding: 0;
  }

  .main__money-sign {
    font-family: 'DrukCyr', 'Times New Roman', serif;
    font-size: 94px;
    line-height: 86px;
    font-weight: 500;
    font-style: normal;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px black;
    margin-left: -9px;
  }

  .main__number_size_big {
    color: #000;
    font-size: 122px;
    line-height: 70px;
    position: relative;
    border: 2px solid #000;
    border-radius: 15%;
    padding: 0 7px 0 5px;
  }

  .main__number_size_medium {
    color: #fff;
    font-size: 101px;
    line-height: 93px;
  }

  .main__number_size_small {
    color: #727272;
    font-size: 80px;
    line-height: 73px;
    position: relative;
    padding-left: 5px;
  }

  .main__text {
    font-family: 'Vollkorn', 'Times New Roman', serif;
    font-size: 17px;
    line-height: 20px;
    font-weight: bold;
    color: #b23438;
    text-decoration: none;
    border-bottom: 2px solid #b23438;
    padding: 0;
  }

  .main__text:hover {
    opacity: 0.7;
  }

  .main__text_position_top {
    position: absolute;
    bottom: -4px;
    right: -3px;
    letter-spacing: 2px;
    font-size: 16px;
    word-spacing: -3px;
  }

  .main__image-block {
    background-color: #000;
    width: 100%;
    border-radius: 60%;
    position: relative;
    top: -10px;
    align-self: center;
    display: flex;
  }

  .main__eye {
    width: 94%;
    padding: 30px 0 25px 14px;
    margin: auto;
  }

  .main__arrow {
    position: relative;
    left: -3px;
  }

  .main__text_position_bottom {
    align-self: center;
    position: relative;
    top: 1px;
    left: 2px;
    letter-spacing: 1px;
  }

  @media screen and (min-width: 768px) {
    .main__red-block {
      height: 78px;
    }

    .main__grey-block {
      height: 550px;
    }

    .main__money-block {
      margin: 0 0 0 55px;
      max-width: 490px;
      top: -62px;
    }

    .main__money-sign {
      font-size: 153px;
      line-height: 139px;
      margin-left: -15px;
    }

    .main__number_size_big {
      font-size: 200px;
      line-height: 112px;
      padding: 0 7px 20px 13px;
      border-radius: 15px;
      letter-spacing: 3px;
    }

    .main__number_size_medium {
      font-size: 156px;
      line-height: 143px;
    }

    .main__number_size_small {
      font-size: 123px;
      line-height: 112px;
    }

    .main__text {
      font-size: 35px;
      line-height: 34px;
      letter-spacing: 2px;
    }

    .main__text_position_top {
      bottom: 3px;
      right: -175px;
      font-size: 34px;
      letter-spacing: 3px;
    }

    .main__image-block {
      background-color: #000;
      min-height: 379px;
      max-width: 768px;
      top: -50px;
    }

    .main__image-block::before {
      top: 10px;
      left: 20px;
      background-size: 80%;
    }

    .main__eye {
      width: 79%;
      padding: 5% 0 6% 14px;
    }

    .main__text_position_bottom {
      position: relative;
      left: 11px;
      top: -43px;
      font-size: 32px;
      letter-spacing: 3px;
      word-spacing: -2px;
    }
  }

  @media screen and (min-width: 1280px) {
    .main__red-block {
      height: 93px;
    }

    .main__grey-block {
      background-color: #cbcbcb;
      height: 315px;
      display: grid;
      grid-template-columns: 816px 385px;
      grid-template-rows: 314px auto;
      grid-template-areas:
        "eye money"
        "eye help";
      grid-column-gap: 20px;
    }

    .main__money-block {
      grid-area: money;
      display: grid;
      grid-template-columns: 274px auto;
      grid-template-rows: 70px 152px;
      grid-template-areas:
        "big small"
        "big medium";
      grid-column-gap: 21px;
      grid-row-gap: 15px;
      top: -35px;
      margin: 0;
    }

    .main__money-sign {
      font-size: 153px;
      line-height: 123px;
    }

    .main__number_size_big {
      grid-area: big;
      align-self: start;
      font-size: 218px;
      line-height: 168px;
      padding: 0 0 0 13px;
      border-radius: 20px;
    }

    .main__number_size_medium {
      grid-area: medium;
      align-self: start;
      font-size: 145px;
      line-height: 90px;
    }

    .main__number_size_small {
      align-self: start;
      grid-area: small;
      font-size: 123px;
      line-height: 70px;
    }

    .main__text {
      font-size: 22px;
      line-height: 20px;
    }

    .main__text_position_top {
      right: 219px;
      bottom: 65px;
      letter-spacing: 1px;
      word-spacing: 3px;
    }

    .main__arrow {
      position: relative;
      left: 1px;
    }

    .main__image-block {
      grid-area: eye;
      width: 816px;
      max-width: 816px;
      height: 413px;
      position: relative;
      top: -95px;
    }

    .main__text_position_bottom {
      grid-area: help;
      align-self: start;
      justify-self: start;
      position: relative;
      top: -68px;
      left: 9px;
      letter-spacing: 1px;
      word-spacing: 1px;
    }
  }
</style>
