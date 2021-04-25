<template>
  <div class="donate-need-help">
    <h3 class="donate-need-help__title">
      БФ “Нужна помощь"
    </h3>
    <div class="donate-need-help__wrapper">
      <img class="donate-need-help__qr" src="~/assets/images/qr.gif">
    </div>
    <p class="donate-need-help__text">
      Пожертвовать через сайт Фонда “Нужна помощь”:
      наш фонд вошел в пул проверенных проектов ресурса «Нужна помощь».
      Теперь на сайте ресурса можно перевести пожертвование в адрес организации или оформить
      ежемесячную подписку от 1 рубля — это поможет нам планировать долгосрочные программы по
      профилактике ВИЧ и передозировок среди уличных потребителей наркотиков.
    </p>
  </div>
</template>

<script>
export default {
  name: 'DonateNeedHelp'
}
</script>

<style scoped>
.donate-need-help__title {
  text-transform: uppercase;
  color: #b23438;
  font-family: Vollkorn, Times, serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 34px;
  font-style: normal;
  padding-left: 15px;
  margin-bottom: 10px;
}

.donate-need-help__text {
  font-family: Vollkorn, Times, serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  font-style: normal;
  margin-bottom: 5px;
}

.donate-need-help__wrapper {
  float: right;
  background-color: #b23438;
  width: 135px;
  height: 135px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.donate-need-help__qr {
  width: 100px;
  height: 100px;
}

@media screen and (min-width: 768px) {
  .donate-need-help__title {
    font-size: 54px;
    line-height: 68px;
  }

  .donate-need-help__text {
    font-size: 33px;
    line-height: 34px;
    margin-bottom: 54px;
    color: #353535;
  }

  .donate-need-help__wrapper {
    width: 300px;
    height: 300px;
  }

  .donate-need-help__qr {
    width: 225px;
    height: 225px;
  }
}
</style>
