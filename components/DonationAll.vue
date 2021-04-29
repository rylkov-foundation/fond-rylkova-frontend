<template>
  <section class="donation-page">
    <div class="donation-page__colour-container donation-page__colour-container_colour_black" />
    <div class="donation-page__colour-container donation-page__colour-container_colour_white" />
    <div class="donation-page__colour-container donation-page__colour-container_colour_red-left" />
    <div class="donation-page__colour-container donation-page__colour-container_colour_red-right">
      <Drop class="donation-page__drop" />
    </div>
    <div class="donation-page__grid-container-title">
      <div class="donation-page__container">
        <Smile class="donation-page__image" />
        <h2 class="donation-page__title">
          Сделать пожертвование
        </h2>
        <DonationForm class="donation-page__form" :is-donation-page="true" />
        <a href="#" class="donation-page__privacy-policy">Политика конфеденциальности</a>
      </div>
      <div class="donation-page__container-description">
        <p class="donation-page__how-to-donate">
          Как пожертвовать средства? Программную деятельность ФАР осуществляет
          на средства грантов, но кроме этого мы предоставляем адресную помощь людям,
          затронутым проблемой наркотиков, их родным и близким. На это гранты получить сложно,
          поэтому вся эта деятельность осуществляется из частных пожертвований.
        </p>
      </div>
    </div>
    <div class="donation-page__grid-container-donations">
      <div class="donation-page__container-donations">
        <DonateNeedHelp />
        <DonateYandex />
      </div>
      <div class="donation-page__container-requisites">
        <h3 class="donation-page__requisites-title">
          реквизиты
        </h3>
        <Requisites />
      </div>
      <DonateGlobalGiving class="donation-page__container-global-giving" />
    </div>
  </section>
</template>

<script>
import Drop from '@/components/Drop'

export default {
  name: 'DonationAll',
  components: {
    Drop
  }
}
</script>

<style scoped>
  .donation-page {
    position: relative;
  }

  .donation-page__container {
    background-color: #cbcbcb;
  }

  .donation-page__title {
    font-family: Vollkorn, Times, serif;
    font-size: 46px;
    line-height: 32px;
    font-weight: 600;
    color: #b23438;
    word-break: break-all;
    margin: 0 0 0 14px;
    padding-top: 28px;
    max-width: 64%;
  }

  .donation-page__image {
    position: absolute;
    top: -65px;
    right: -20px;
    width: 155px;
    height: 155px;
  }

  .donation-page__form {
    margin: -8px auto 0;
  }

  .donation-page__privacy-policy {
    display: block;
    font-family: Roboto, Arial, sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 19px;
    color: #727272;
    text-align: center;
    margin: 0 auto;
  }

  .donation-page__how-to-donate {
    font-family: Vollkorn, Times, serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 19px;
    font-style: italic;
    color: #ce565a;
    padding: 21px 8px 24px 23px;
    background-color: #000;
  }

  .donation-page__container-donations {
    margin: 19px auto 0;
    max-width: 91%;
  }

  .donation-page__requisites-title {
    text-transform: uppercase;
    font-family: Vollkorn, Times, serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 47px;
    font-style: normal;
    color: #000;
    padding-top: 8px;
  }

  .donation-page__container-requisites {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #b23438;
    padding-bottom: 12px;
  }

  .donation-page__drop {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .donation-page__title {
      font-size: 91px;
      line-height: 62px;
      margin: 0 0 0 47px;
      padding-top: 54px;
      word-break: break-word;
      letter-spacing: -3px;
      width: 94%;
      max-width: 995px;
    }

    .donation-page__image {
      top: -131px;
      right: -41px;
      width: 270px;
      height: 250px;
    }

    .donation-page__form {
      margin: 9px auto 0;
    }

    .donation-page__privacy-policy {
      font-size: 22px;
      line-height: 39px;
    }

    .donation-page__how-to-donate {
      font-size: 36px;
      line-height: 36px;
      font-style: normal;
      padding: 43px 46px 18px 49px;
    }

    .donation-page__container-donations {
      margin: 44px auto 0;
    }

    .donation-page__requisites-title {
      font-size: 113px;
      line-height: 127px;
      padding-top: 0;
    }

    .donation-page__container-requisites {
      padding-bottom: 50px;
    }
  }

  @media screen and (min-width: 1100px) {
    .donation-page {
      display: grid;
      grid-template-columns: auto 1100px auto;
      grid-template-areas:
        "black title white"
        "red-left donations red-right";
      border-bottom: 1px solid #737373;
    }

    .donation-page__colour-container {
      width: calc((100vw - 1100px) / 2);
      height: auto;
    }

    .donation-page__colour-container_colour_black {
      grid-area: black;
      background-color: #000;
    }

    .donation-page__colour-container_colour_white {
      grid-area: white;
      background-color: #fff;
    }

    .donation-page__colour-container_colour_red-left {
      grid-area: red-left;
      background-color: #b23438;
    }

    .donation-page__colour-container_colour_red-right {
      grid-area: red-right;
      background-color: #b23438;
      position: relative;
    }

    .donation-page__image {
      top: -27px;
      right: -91px;
      width: 218px;
    }

    .donation-page__grid-container-title {
      grid-area: title;
      display: flex;
      position: relative;
      padding-bottom: 46px;
      background-color: #cbcbcb;
    }

    .donation-page__container {
      width: 554px;
    }

    .donation-page__container-description {
      order: -1;
      background-color: #cbcbcb;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      width: 515px;
    }

    .donation-page__how-to-donate {
      font-size: 16px;
      line-height: 19px;
      color: #353535;
      padding: 0;
      background-color: #cbcbcb;
      width: 326px;
      margin: 173px 90px 0 0;
    }

    .donation-page__title {
      position: absolute;
      top: 0;
      left: -18px;
      font-size: 112px;
      line-height: 71px;
      width: 758px;
      word-break: break-all;
    }

    .donation-page__form {
      width: 554px;
      margin-top: 162px;
    }

    .donation-page__grid-container-donations {
      grid-area: donations;
      display: grid;
      grid-template-columns: 507px auto;
      grid-template-areas:
        "needhelp-yandex global-giving"
        "requsites global-giving";
    }

    .donation-page__container-donations {
      grid-area: needhelp-yandex;
    }

    .donation-page__container-requisites {
      grid-area: requsites;
      position: relative;
    }

    .donation-page__requisites-title {
      font-size: 61px;
      line-height: 76px;
      position: absolute;
      transform: rotate(270deg);
      left: -53px;
      top: 149px;
    }

    .donation-page__container-global-giving {
      grid-area: global-giving;
    }
  }

  @media screen and (min-width: 1280px) {
    .donation-page__drop {
      display: block;
      width: 36px;
      height: 62px;
    }

    .donation-page__container-description {
      width: 546px;
    }
  }
</style>
