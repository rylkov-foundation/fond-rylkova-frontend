<template>
  <section class="menu">
    <nav class="menu__navigation">
      <ul class="menu__list">
        <li class="menu__list-item">
          о нас
        </li>
        <li class="menu__list-item">
          поддержать ФАР
        </li>
        <li class="menu__list-item">
          получить помощь
        </li>
        <li class="menu__list-item">
          контакты
        </li>
      </ul>
    </nav>
    <div class="menu__block">
      <img class="menu__burger-image" src="~/assets/images/burger.png">
      <p class="menu__text">
        Меню
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
.menu {
  position: fixed;
  top: 4px;
  right: 3px;
  background-color: #000;
  min-height: 149px;
  display: flex;
  z-index: 10;
}

.menu__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 38px;
}

.menu__burger-image {
  height: 22px;
  width: 25px;
  position: relative;
  top: -45px;
}

.menu__text {
  text-transform: uppercase;
  transform: rotate(270deg);
  font-family: 'Vollkorn', 'Times', serif;
  font-size: 29px;
  font-weight: 400;
  line-height: 26px;
  color: #fff;
}

.menu__navigation {
  display: block;
  min-width: 190px;
}

</style>
