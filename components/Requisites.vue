<template>
  <div class="requisites">
    <p class="requisites__organization">
      {{ $t('requisites.companyName') }}: <span class="requisites__organization-name">Фонд содействия защите здоровья и социальной справедливости имени Андрея Рылькова</span>
    </p>
    <p class="requisites__organization">
      {{ $t('requisites.companyShortName') }}: <span class="requisites__organization-name">Фонд имени Андрея Рылькова</span>
    </p>
    <h4 class="requisites__title">
      {{ $t('requisites.bankRequisites') }}
    </h4>
    <div class="requisites__container">
      <p class="requisites__name">
        {{ $t('requisites.inn') }}
        <span class="requisites__detail">7734268614</span>
      </p>
      <p class="requisites__name">
        <span class="requisites__detail">{{ $t('requisites.bankAccountRuble') }}</span>
      </p>
      <p class="requisites__name">
        {{ $t('requisites.kpp') }}
        <span class="requisites__detail">773401001</span>
      </p>
      <p class="requisites__name">
        {{ $t('requisites.bankName') }}:
        <span class="requisites__detail">ПАО Сбербанк, г. Москва</span>
      </p>
      <p class="requisites__name">
        {{ $t('requisites.ogrn') }}
        <span class="requisites__detail">1097799015027</span>
      </p>
      <p class="requisites__name">
        {{ $t('requisites.bik') }}
        <span class="requisites__detail">044525225</span>
      </p>
      <p class="requisites__name">
        {{ $t('requisites.correspondentAccount') }}
        <span class="requisites__detail">30101810400000000225</span>
      </p>
      <p class="requisites__name">
        {{ $t('requisites.purpose') }}:
        <span class="requisites__detail">Пожертвование на уставные цели фонда</span>
      </p>
      <p class="requisites__name">
        {{ $t('requisites.bankAccountNumber') }}
        <span class="requisites__detail">40703810938170002103</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Requisites'
}
</script>

<style scoped>
.requisites {
  max-width: 295px;
  background-color: #c8c8c8;
  border-radius: 20px;
  padding: 8px 0 10px 17px;
}

.requisites__organization {
  font-family: Vollkorn, Times, serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 12px;
  font-style: normal;
  color: #808080;
}

.requisites__organization-name {
  color: #b23438;
  text-transform: uppercase;
  font-weight: 700;
}

.requisites__organization:last-of-type {
  margin: 13px 0 15px;
}

.requisites__title {
  font-family: Vollkorn, Times, serif;
  font-size: 19px;
  font-weight: 600;
  line-height: 18px;
  font-style: normal;
  color: #000;
}

.requisites__container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin: 18px 0 28px 0;
}

.requisites__name {
  font-family: Vollkorn, Times, serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 12px;
  font-style: normal;
  color: #808080;
  text-transform: uppercase;
}

.requisites__detail {
  font-family: Vollkorn, Times, serif;
  font-size: 11px;
  font-weight: 800;
  line-height: 12px;
  font-style: normal;
  color: #000;
  text-transform: none;
}

@media screen and (min-width: 768px) {
  .requisites {
    max-width: 663px;
    padding: 25px 0 10px 38px;
  }

  .requisites__organization {
    font-size: 25px;
    line-height: 26px;
  }

  .requisites__organization:last-of-type {
    margin: 35px 0 28px;
  }

  .requisites__title {
    font-size: 43px;
    line-height: 43px;
  }

  .requisites__container {
    margin: 45px 0 83px 0;
  }

  .requisites__name {
    font-size: 25px;
    line-height: 26px;
  }

  .requisites__detail {
    font-size: 22px;
    line-height: 26px;
  }
}

@media screen and (min-width: 1100px) {
  .requisites {
    max-width: 346px;
    padding: 16px 0 10px 20px;
    margin: 5px 0 0 152px;
  }

  .requisites__organization {
    font-size: 12px;
    line-height: 14px;
  }

  .requisites__organization:last-of-type {
    margin: 18px 0 14px;
  }

  .requisites__title {
    font-size: 21px;
    line-height: 25px;
  }

  .requisites__container {
    margin: 21px 0 56px 0;
    row-gap: 5px;
  }

  .requisites__name {
    font-size: 12px;
    line-height: 14px;
  }

  .requisites__detail {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
