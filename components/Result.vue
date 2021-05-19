<template>
  <article class="result results__result">
    <div class="result__frame">
      <p class="result__number">
        {{ result.quantity }}
      </p>
    </div>
    <div class="result__block">
      <h3 class="result__title">
        {{ result['title_' + $i18n.locale] }}
      </h3>
      <p class="result__text">
        {{ result['description_' + $i18n.locale] }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Result',
  props: {
    result: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .results__result {
    margin-bottom: 20px;
  }

  .result {
    display: grid;
    grid-template-areas: "image text";
    grid-template-columns: 142px auto;
    position: relative;
    width: 100vw;
  }

  .result__frame {
    grid-area: image;
    height: 197px;
    width: 197px;
    position: relative;
    background-image: url("~/assets/images/stamp.svg");
    background-size: 100%;
    background-position: -55px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .result__number {
    font-family: Tomorrow, Times, fantasy, serif;
    font-size: 115px;
    line-height: 83px;
    color: #fff;
    margin-left: -97px;
    text-align: center;
  }

  .result__block {
    grid-area: text;
    width: calc(100vw - 142px);
    z-index: 1;
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
    align-self: start;
    word-wrap: break-word;
    word-break: break-word;
  }

  .result__text {
    align-self: start;
    font-family: Vollkorn, Times, serif;
    font-size: calc(0.035714286 * 100vw + 2.57142848px);
    font-weight: 400;
    line-height: calc(0.033482143 * 100vw + 4.28571424px);
    margin: 12px 0 0 5px;
    min-width: 173px;
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

    .result__frame {
      height: 416px;
      width: 416px;
    }

    .result__block {
      width: calc(100vw - 379px);
    }

    .result__number {
      font-size: 279px;
      line-height: 200px;
      margin-left: 0;
      position: relative;
      left: -55px;
    }

    .result__title {
      text-align: left;
      font-size: 64px;
      line-height: 60px;
      border-bottom: 2px solid #fff;
      padding-bottom: 25px;
      margin: 0 0 0 3px;
      max-width: 360px;
    }

    .result__text {
      font-size: 30px;
      line-height: 30px;
      margin-left: 5px;
    }
  }

  @media screen and (min-width: 1280px) {
    .result {
      grid-template-columns: 292px 358px;
    }

    .result__frame {
      width: 292px;
      height: 292px;
      background-position: 0;
      z-index: 1;
    }

    .result__number {
      font-size: 169px;
      line-height: 140px;
      position: unset;
    }

    .result__block {
      width: 330px;
    }

    .result__title {
      text-align: left;
      margin: 10px 0 0 14px;
      padding-bottom: 13px;
      font-size: 39px;
      line-height: 39px;
    }

    .result__text {
      margin-left: 17px;
      line-height: 21px;
      margin-top: 22px;
      font-size: 21px;
    }
  }
</style>
