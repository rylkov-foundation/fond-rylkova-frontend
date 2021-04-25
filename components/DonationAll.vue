<template>
  <section class="donation-page">
    <div class="donation-page__container">
      <Smile class="donation-page__image" />
      <h2 class="donation-page__title">
        Сделать пожертвование
      </h2>
      <DonationForm class="donation-page__form" />
      <a href="#" class="donation-page__privacy-policy">Политика конфеденциальности</a>
    </div>
    <p class="donation-page__how-to-donate">
      Как пожертвовать средства? Программную деятельность ФАР осуществляет
      на средства грантов, но кроме этого мы предоставляем адресную помощь людям,
      затронутым проблемой наркотиков, их родным и близким. На это гранты получить сложно,
      поэтому вся эта деятельность осуществляется из частных пожертвований.
    </p>
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
    <DonateGlobalGiving />
  </section>
</template>

<script>
export default {
  name: 'DonationAll'
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
</style>
