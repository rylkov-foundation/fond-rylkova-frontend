<template>
  <article class="result results__result">
    <img class="result__image" src="~/assets/images/stamp.svg" alt="рамка">
    <span class="result__number">758</span>
    <h3 class="result__title">
      Спасено жизней
    </h3>
    <p class="result__text">
      при помощи выданного нами Налоксона (средство от передозировок опиатами),
      консультации, обучение по вопросам профилактики передозировок
    </p>
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
    grid-template-columns: 142px auto;
    overflow: hidden;
    position: relative;
  }

  .result__image {
    grid-area: image;
    height: 197px;
    position: relative;
    left: -55px;
  }

  .result__number {
    font-family: Tomorrow, Times, fantasy;
    font-size: 115px;
    line-height: 83px;
    position: absolute;
    top: 30%;
    left: 15px;
    color: #fff;
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

    .result {
      grid-template-columns: 379px auto;
    }

    .result__image {
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
</style>
