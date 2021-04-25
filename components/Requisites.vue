<template>
  <div class="requisites">
    <p class="requisites__organization">
      Название организации: <span class="requisites__organization-name">Фонд содействия защите здоровья и социальной справедливости имени Андрея Рылькова</span>
    </p>
    <p class="requisites__organization">
      Сокращенно: <span class="requisites__organization-name">Фонд имени Андрея Рылькова</span>
    </p>
    <h4 class="requisites__title">
      Банковские реквизиты
    </h4>
    <div class="requisites__container">
      <p class="requisites__name">
        ИНН
        <span class="requisites__detail">7734268614</span>
      </p>
      <p class="requisites__name">
        <span class="requisites__detail">Расчетный счет в рублях РФ</span>
      </p>
      <p class="requisites__name">
        КПП
        <span class="requisites__detail">773401001</span>
      </p>
      <p class="requisites__name">
        Наименование банка:
        <span class="requisites__detail">ПАО Сбербанк, г. Москва</span>
      </p>
      <p class="requisites__name">
        ОГРН
        <span class="requisites__detail">1097799015027</span>
      </p>
      <p class="requisites__name">
        БИК
        <span class="requisites__detail">044525225</span>
      </p>
      <p class="requisites__name">
        Кор. счет
        <span class="requisites__detail">30101810400000000225</span>
      </p>
      <p class="requisites__name">
        Назначение платежа:
        <span class="requisites__detail">Пожертвование на уставные цели фонда</span>
      </p>
      <p class="requisites__name">
        Расчетный счет
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
</style>
