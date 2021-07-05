<template>
  <section class="results">
    <div class="results__container">
      <div class="results__crystal" />
      <h2 class="results__title">
        {{ pageData.results[`title_${$i18n.locale}`] }}
      </h2>
      <div class="results__slider">
        <button class="results__arrow results__arrow_direction_back" @click="prevSlide" />
        <ul class="results__slider-list">
          <li
            v-for="(item, index) of pageData.results.main_results"
            :key="item._id"
            class="results__bullet"
            :class="{ results__bullet_active: index === currentSlide}"
          />
        </ul>
        <button class="results__arrow results__arrow_direction_forward" @click="nextSlide" />
      </div>
      <div class="results__carousel">
        <div
          class="results__carousel-wrapper"
          :style="{ 'margin-left':'-' + (100 * currentSlide) + '%' }"
        >
          <Result
            v-for="result in pageData.results.main_results"
            :key="result.id"
            :result="result"
            additional-class="results__result"
          />
        </div>
      </div>
      <a class="link" :href="pageData.results.link">
        {{ $t('links.getHelp') }}
        <span class="link__arrow">&gt;</span>
      </a>
      <Logo />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Results',
  props: {
    pageData: {
      default: () => {},
      type: Object
    }
  },
  data () {
    return {
      currentSlide: 0
    }
  },
  methods: {
    prevSlide () {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    },
    nextSlide () {
      if (this.currentSlide === (this.pageData.results.main_results.length - 1)) {
        this.currentSlide = 0
      } else {
        this.currentSlide++
      }
    }
  }
}
</script>

<style scoped>
  .results {
    background-color: #cbcbcb;
    position: relative;
    min-height: 502px;
  }

  .results__crystal {
    display: none;
  }

  .results__title {
    color: #cbcbcb;
    font-size: 40px;
    line-height: 28px;
    font-family: Vollkorn, Times, serif;
    letter-spacing: 1px;
    word-spacing: 0;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
    padding: 22px 0 25px 13px;
  }

  .results__slider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 23px;
  }

  .results__arrow {
    background-image: url("./assets/images/swiper-arrow.svg");
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    outline: none;
    border: none;
    width: 24px;
    height: 24px;
  }

  .results__arrow:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  .results__arrow_direction_back {
    margin-right: 30px;
  }

  .results__arrow_direction_forward {
    margin-left: 32px;
    transform: rotate(180deg);
  }

  .results__slider-list {
    display: flex;
    padding: 0;
  }

  .results__bullet {
    display: block;
    background-color: #fff;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-left: 10px;
  }

  .results__bullet_active {
    background-color: #b23438;
  }

  .results__carousel {
    overflow: hidden;
    max-width: 100vw;
    margin: 0 auto 0 0;
  }

  .results__carousel-wrapper {
    display: flex;
    margin-left: auto;
    transition: margin 500ms linear;
  }

  .logo {
    bottom: 28px;
  }

  .link {
    font-family: 'Vollkorn', 'Times', serif;
    font-size: calc(0.037946429 * 100vw + 4.85714272px);
    line-height: calc(0.055803571 * 100vw + 2.14285728px);
    font-weight: bold;
    color: #b23438;
    text-decoration: none;
    border-bottom: 2px solid #b23438;
    padding: 0;
    align-self: start;
    margin-left: 13px;
  }

  .link:hover {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    .results {
      min-height: 961px;
    }

    .results__title {
      font-size: 90px;
      line-height: 63px;
      padding: 65px 0 33px 48px;
    }

    .results__slider {
      margin-bottom: 46px;
    }

    .results__arrow {
      background-size: cover;
      width: 44px;
      height: 44px;
    }

    .results__arrow_direction_back {
      margin-right: 50px;
    }

    .results__arrow_direction_forward {
      margin-left: 50px;
    }

    .results__bullet {
      width: 20px;
      height: 20px;
      margin-left: 25px;
    }

    .logo {
      right: 50px;
      bottom: 59px;
    }

    .link {
      font-size: 34px;
      line-height: 45px;
      margin-left: 45px;
    }
  }

  @media screen and (min-width: 1280px) {
    .results {
      grid-area: results;
      width: 100%;
      z-index: 3;
      min-height: unset;
      overflow: visible;
      margin-right: auto;
      background-color: #b23438;
    }

    .results__container {
      background-color: #cbcbcb;
      display: flex;
      flex-direction: column;
      position: relative;
      min-height: 731px;
      max-width: 576px;
      z-index: 2;
    }

    .results__crystal {
      display: block;
      background-color: #fff;
      background-image: url("~/assets/images/crystal.svg");
      background-position: center;
      background-repeat: repeat-x;
      background-size: 20%;
      height: 128px;
    }

    .results__title {
      font-size: 60px;
      line-height: 45px;
      padding: 34px 0 26px 37px;
    }

    .results__slider {
      margin-left: 20px;
      margin-bottom: 29px;
    }

    .results__arrow {
      width: 35px;
      height: 35px;
    }

    .results__bullet {
      width: 15px;
      height: 15px;
      margin-left: 15px;
    }

    .results__slider-list-item {
      width: 14px;
      height: 14px;
      margin-left: 18px;
    }

    .results__carousel {
      left: -82px;
      position: relative;
      max-width: 650px;
    }

    .results__carousel-wrapper {
      max-width: 650px;
    }

    .results__arrow_direction_back {
      margin-right: 40px;
    }

    .link {
      font-size: 22px;
      margin-top: 10px;
      margin-left: 142px;
      line-height: 25px;
    }

    .logo {
      display: none;
    }
  }
</style>
