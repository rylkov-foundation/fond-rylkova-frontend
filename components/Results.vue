<template>
  <section class="results">
    <div class="results__crystal" />
    <h2 class="results__title">
      Итоги нашей работы в 2020
    </h2>
    <div class="results__slider">
      <button class="results__arrow results__arrow-direction_back" />
      <ul class="results__slider-list">
        <li v-for="result of 7" :key="result" class="results__slider-list-item" />
      </ul>
      <button class="results__arrow results__arrow-direction_forward" />
    </div>
    <Result />
    <a class="link" href="#">Получить помощь
      <span class="link__arrow">&gt;</span>
    </a>
    <img src="~/assets/images/logo.svg" alt="Логотип ФАР" class="logo ">
  </section>
</template>

<script>
export default {
  name: 'Results'
}
</script>

<style scoped>
  .results {
    background-color: #cbcbcb;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 504px;
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
    margin: 22px 0 25px 13px;
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

  .results__arrow-direction_back {
    margin-right: 30px;
  }

  .results__arrow-direction_forward {
    margin-left: 32px;
    transform: rotate(180deg);
  }

  .results__slider-list {
    display: flex;
    padding: 0;
  }

  .results__slider-list-item {
    display: block;
    background-color: #fff;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-left: 10px;
  }

  .logo {
    width: 137px;
    position: absolute;
    right: 5px;
    bottom: 28px;
  }

  .link {
    font-family: 'Vollkorn', 'Times New Roman', serif;
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
      margin: 65px 0 33px 48px;
    }

    .results__slider {
      margin-bottom: 46px;
    }

    .results__arrow {
      background-size: cover;
      width: 44px;
      height: 44px;
    }

    .results__arrow-direction_back {
      margin-right: 50px;
    }

    .results__arrow-direction_forward {
      margin-left: 50px;
    }

    .results__slider-list-item {
      width: 20px;
      height: 20px;
      margin-left: 25px;
    }

    .logo {
      width: 231px;
      right: 50px;
      bottom: 59px;
    }

    /*
    TODO change the font to css-lock
     */
    .link {
      font-size: 34px;
      line-height: 45px;
      margin-left: 45px;
    }
  }

  @media screen and (min-width: 1280px) {
    .results {
      grid-area: results;
      width: 569px;
    }

    .results__crystal {
      display: block;
      background-color: white;
      background-image: url("~/assets/images/crystal.svg");
      background-position: center;
      background-repeat: repeat-x;
      background-size: 20%;
      height: 128px;
    }

    .results__title {
      font-size: 60px;
      line-height: 45px;
      margin: 34px 0 26px 37px;
    }

    .results__slider {
      margin-left: 20px;
      margin-bottom: 23px;
    }

    .results__arrow {
      width: 35px;
      height: 35px;
    }

    .results__slider-list-item {
      width: 14px;
      height: 14px;
      margin-left: 18px;
    }

    .results__arrow-direction_back {
      margin-right: 30px;
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
