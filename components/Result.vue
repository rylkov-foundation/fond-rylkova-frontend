<template>
  <article class="result results__result">
    <div class="result__frame">
      <span class="result__number">758</span>
    </div>
    <div class="result__content">
      <h3 class="result__title">
        Спасено жизней
      </h3>
      <p class="result__text">
        при помощи выданного нами Налоксона (средство от передозировок опиатами),
        консультации, обучение по вопросам профилактики передозировок
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Result'
}
</script>

<style scoped>
  .results__result {
    margin-bottom: 20px;
  }

  .result {
    display: grid;
    grid-template-areas:
      "image title"
      "image text";
    grid-template-columns: 38% auto;
    overflow: hidden;
    position: relative;
  }

  .result__frame {
    background-image: url("~/assets/images/stamp.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    grid-area: image;
    height: 197px;
    position: relative;
    left: -55px;
    display: flex;
  }

  /*
  .result__content {

  }
  */

  .result__number {
    font-family: Tomorrow, Times, fantasy;
    font-size: 115px;
    line-height: 83px;
    margin: auto;
    color: #fff;
    text-align: center;
  }

  .result__title {
    grid-area: title;
    color: #b23438;
    font-family: Vollkorn, Times, serif;
    font-size: 28px;
    line-height: 25px;
    text-transform: uppercase;
    border-bottom: 2px solid #fff;
    margin: 12px 0 0 3px;
    max-width: 91%;
    align-self: start;
  }

  .result__text {
    grid-area: text;
    align-self: start;
    font-family: Vollkorn, Times, serif;
    font-size: calc(0.035714286 * 100vw + 2.57142848px);
    font-weight: 400;
    line-height: calc(0.033482143 * 100vw + 4.28571424px);
    margin-left: 5px;
  }

  @media screen and (min-width: 440px) {
    .result__title {
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) {
    .results__result {
      margin-bottom: 15px;
    }

    /*
    .result {
      grid-template-columns: 379px auto;
    }
    */

    .result__frame {
      height: 416px;
      left: -60px;
    }

    .result__number {
      font-size: 279px;
      line-height: 200px;
      top: 27%;
      left: 55px;
    }

    .result__title {
      font-size: 64px;
      line-height: 60px;
      border-bottom: 2px solid #fff;
      padding-bottom: 25px;
      margin: 0 0 0 3px;
      max-width: 360px;
    }

    /*
    TODO change the font to css-lock
     */
    .result__text {
      font-size: 30px;
      line-height: 30px;
      margin-left: 5px;
    }
  }

  @media screen and (min-width: 768px) {
    .result {
      overflow: unset;
    }

    .result__title {
      font-size: 39px;
      line-height: 38px;
    }

    .result__text {
      font-size: 21px;
    }

    .result__frame {
      height: 292px;
    }
  }

  @media screen and (min-width: 1280px) {
    .result__frame {
      width: 292px;
      height: 292px;
      left: -82px;
    }

    .result__number {
      font-size: 169px;
      line-height: 140px;
    }

    .result__title {
      text-align: left;
      margin: 10px 102px 0 14px;
      padding-bottom: 13px;
    }

    .result__text {
      margin-left: 17px;
      line-height: 21px;
      margin-top: 22px;
    }
  }
</style>
