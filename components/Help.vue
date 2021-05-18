<template>
  <section class="help">
    <div class="help__container">
      <h2 class="help__title">
        {{ pageData.help.title_ru }}
      </h2>
      <p class="help__text">
        {{ pageData.help.description_ru }}
      </p>
      <div class="help__block">
        <img src="~/assets/images/blade.svg" alt="Лезвие" class="help__image">
      </div>
      <NuxtLink class="link" to="/get-help">
        {{ $t('links.moreDetailed') }}
        <span class="link__arrow">&gt;</span>
      </NuxtLink>
      <div class="help__telephone-block">
        <a class="help__telephone-number" :href="'tel:'+pageData.help.phone_number" >{{ pageData.help.phone_number }}</a>
      </div>
      <div class="help__email-block">
        <a class="help__email" :href="'mailto:'+pageData.help.email" target="_blank">
          {{ pageData.help.email }}
        </a>
      </div>
      <p class="help__contacts">
        telegram/whatsapp/mail
      </p>
      <img src="~/assets/images/logo.svg" alt="Логотип ФАР" class="logo">
    </div>
    <div class="help__right-block" />
  </section>
</template>

<script>
export default {
  name: 'Help',
  props: {
    pageData: {
      default: () => {},
      type: Object
    }
  }
}
</script>

<style scoped>
  .help {
    display: flex;
  }

  .help__container {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }

  .help__title {
    background-color: #b23438;
    min-height: 91px;
    color: #b23438;
    text-shadow:
      -1px -1px 0 #fff,
      1px -1px 0 #fff,
      -1px 1px 0 #fff,
      1px 1px 0 #fff;
    font-family: Vollkorn, Times, serif;
    font-size: calc(0.1116 * 100vw + 4.2857px);
    line-height: calc(0.0692 * 100vw + 8.8571px);
    padding: 17px 0 0 13px;
    margin-bottom: 25px;
  }

  .help__block {
    overflow: hidden;
    position: absolute;
    height: 180px;
    top: -13px;
    right: 0;
  }

  .help__image {
    height: 100%;
    position: relative;
    right: -53px;
    z-index: 4;
  }

  .help__text {
    max-width: 71%;
    font-family: Vollkorn, Times, serif;
    font-size: calc(0.0357 * 100vw + 4.5714px);
    line-height: calc(0.0402 * 100vw + 5.1429px);
    margin-left: 17px;
  }

  .link {
    display: block;
    font-family: 'Vollkorn', 'Times', serif;
    font-size: calc(0.037946429 * 100vw + 4.85714272px);
    line-height: calc(0.055803571 * 100vw + 2.14285728px);
    font-weight: bold;
    color: #b23438;
    text-decoration: none;
    border-bottom: 2px solid #b23438;
    padding: 0;
    align-self: start;
    margin: 18px 20px 36px 19px;
  }

  .link:hover {
    opacity: 0.7;
  }

  .help__telephone-block {
    background-color: #000;
    border-radius: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .help__telephone-number {
    padding: 5% 0;
    text-align: center;
    font-family: Tomorrow, Times, fantasy, serif;
    font-size: calc(0.1563 * 100vw + 1px);
    line-height: calc(0.1116 * 100vw + 1.2857px);
    color: #fff;
    text-decoration: none;
  }

  .help__telephone-number:hover {
    opacity: 0.7;
  }

  .help__email-block {
    background-color: #cbcbcb;
    border-radius: 50%;
    width: 100%;
    z-index: 1;
    margin-bottom: 175px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .help__email {
    color: #000;
    font-family: Vollkorn, Times, serif;
    font-weight: bold;
    font-size: calc(0.0513 * 100vw + 0.5714px);
    line-height: calc(0.096 * 100vw + 0.2857px);
    padding: 5% 0;
    text-align: center;
    text-decoration: none;
  }

  .help__email:hover {
    opacity: 0.7;
  }

  .help__contacts {
    transform: rotate(270deg);
    position: absolute;
    top: 54%;
    right: -220px;
    font-family: Vollkorn, Times, serif;
    font-weight: bold;
    font-style: normal;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px #b23438;
    font-size: 34px;
    line-height: 30px;
    text-transform: uppercase;
  }

  .logo {
    width: 137px;
    position: absolute;
    right: 5px;
    bottom: 50px;
  }

  @media screen and (min-width: 370px) {
    .help__title {
      padding-bottom: 2%;
    }
  }

  @media screen and (min-width: 768px) {
    .help__title {
      min-height: 182px;
      font-size: 90px;
      line-height: 62px;
      padding: 38px 0 0 52px;
      margin-bottom: 52px;
    }

    .help__text {
      max-width: 59%;
      font-size: 32px;
      line-height: 36px;
      margin-left: 56px;
    }

    .link {
      font-size: 34px;
      line-height: 45px;
      margin: 35px 20px 18px 53px;
    }

    .help__telephone-number {
      font-size: 121px;
      line-height: 87px;
    }

    .help__email-block {
      margin-bottom: 55px;
    }

    .help__block {
      height: 380px;
      top: -35px;
    }

    .help__image {
      right: -48px;
    }

    .help__email {
      font-size: 41px;
      line-height: 74px;
    }

    .help__contacts {
      top: 61%;
      right: -426px;
      font-size: 68px;
      line-height: 60px;
    }

    .logo {
      display: none;
    }
  }

  @media screen and (min-width: 1280px) {
    .help {
      grid-area: help;
      width: 100%;
      background-color: #cbcbcb;
    }

    .help__container {
      width: 576px;
      min-width: 576px;
    }

    .help__right-block {
      height: 126px;
      width: 100%;
      margin: 0 auto auto;
      background-color: #fff;
    }

    .help__title {
      font-size: 61px;
      line-height: 45px;
      padding: 12px 0 0 42px;
      min-height: 126px;
      margin-bottom: 0;
      z-index: 1;
    }

    .help__text {
      font-size: 22px;
      line-height: 22px;
      margin: 43px 156px 0 139px;
    }

    .help__block {
      top: -77px;
      right: -45px;
      height: 302px;
      overflow: unset;
    }

    .link {
      font-size: 22px;
      line-height: 26px;
      margin-top: 68px;
      margin-left: 143px;
    }

    .help__telephone-block {
      margin-top: auto;
    }

    .help__telephone-number {
      font-size: 75px;
      line-height: 38px;
    }

    .help__email-block {
      margin-top: 2px;
      margin-bottom: 0;
    }

    .help__email {
      font-size: 25px;
      line-height: 46px;
    }

    .help__contacts {
      right: -36px;
      top: 400px;
      letter-spacing: 3px;
    }

    .logo {
      display: block;
      top: 381px;
      right: 41px;
      width: 149px;
    }
  }
</style>
