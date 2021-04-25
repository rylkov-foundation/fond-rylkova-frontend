<template>
  <div class="donate-yandex">
    <h3 class="donate-yandex__title">
      Яндекс Деньги
    </h3>
    <p class="donate-yandex__text">
      Также вы можете поддержать нас, сделав перевод на наш счет через
      Яндекс Деньги или оформив платеж по банковским реквизитам фонда, указанным ниже.
    </p>
  </div>
</template>

<script>
export default {
  name: 'DonateYandex'
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
}
</style>
