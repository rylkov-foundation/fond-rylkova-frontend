<template>
  <div class="donate-yandex">
    <h3 class="donate-yandex__title">
      {{ pageData['title_' + $i18n.locale] }}
    </h3>
    <p class="donate-yandex__text">
      {{ pageData['description_' + $i18n.locale] }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'DonateYandex',
  props: {
    pageData: {
      default: () => {},
      type: Object
    }
  }
}
</script>

<style scoped>
.donate-yandex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.donate-yandex__title {
  color: #b23438;
  font-family: Vollkorn, Times, serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  font-style: normal;
  margin-bottom: 10px;
  text-align: center;
}

.donate-yandex__text {
  font-family: Vollkorn, Times, serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  font-style: normal;
  margin-bottom: 16px;
  min-height: 64px;
}

@media screen and (min-width: 768px) {
  .donate-yandex__title {
    font-size: 54px;
    line-height: 55px;
    margin-bottom: 25px;
  }

  .donate-yandex__text {
    font-size: 33px;
    line-height: 35px;
    margin-bottom: 49px;
    color: #353535;
  }
}

@media screen and (min-width: 1100px) {
  .donate-yandex__title {
    font-size: 39px;
    line-height: 61px;
    margin-bottom: 2px;
    text-align: left;
  }

  .donate-yandex__text {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 27px;
  }
}
</style>
