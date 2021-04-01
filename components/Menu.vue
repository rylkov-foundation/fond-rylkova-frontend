<template>
  <section class="menu">
    <nav class="menu__navigation">
      <ul class="menu__list">
        <li class="menu__list-item">
          <p class="menu__list-text">
            о нас
            <span>&#8594;</span>
          </p>
          <ul class="menu__sublist">
            <li class="menu__sublist-item">
              <a class="menu__sublist-link" href="#">кто такой Андрей Рыльков</a>
            </li>
            <li class="menu__sublist-item">
              <a class="menu__sublist-link" href="#">миссия и стратегии</a>
            </li>
            <li class="menu__sublist-item">
              <a class="menu__sublist-link" href="#">команда ФАР</a>
            </li>
            <li class="menu__sublist-item">
              <a class="menu__sublist-link" href="#">проекты и отчёты</a>
            </li>
            <li class="menu__sublist-item">
              <a class="menu__sublist-link" href="#">годовые отчёты</a>
            </li>
            <li class="menu__sublist-item">
              <a class="menu__sublist-link" href="#">учредительные документы</a>
            </li>
          </ul>
        </li>
        <li class="menu__list-item">
          <p class="menu__list-text">
            поддержать ФАР
            <span>&#8594;</span>
          </p>
          <ul class="menu__sublist">
            <li class="menu__sublist-item">
              <a class="menu__sublist-link" href="#">сделать пожертвование</a>
            </li>
            <li class="menu__sublist-item">
              <a class="menu__sublist-link" href="#">волонтёрство в ФАР</a>
            </li>
            <li class="menu__sublist-item">
              <a class="menu__sublist-link" href="#">стажировка в ФАР</a>
            </li>
            <li class="menu__sublist-item">
              <a class="menu__sublist-link" href="#">партнёрство с ФАР</a>
            </li>
          </ul>
        </li>
        <li class="menu__list-item">
          <a class="menu__link" href="#">получить помощь</a>
        </li>
        <li class="menu__list-item">
          <a class="menu__link" href="#">контакты</a>
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
  position: relative;
  top: -107px;
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

.menu__list {
  list-style: none;
  padding: 5px 7px 0 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.menu__list-item {
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', 'Times', serif;
  font-size: 16px;
  line-height: 30px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
}

.menu__list-text {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
}

.menu__list-item:nth-child(3n) {
  border-bottom: 1px solid #fff;
}

.menu__list-item:hover {
  cursor: pointer;
}

.menu__link {
  color: #fff;
  text-decoration: none;
}

.menu__sublist {
  list-style: none;
  padding: 0;
  margin: 7px -17px 8px 0;
}

.menu__sublist-item {
  display: flex;
}

.menu__sublist-link {
  font-family: 'Roboto', 'Times', serif;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  line-height: 21px;
  text-transform: none;
}

.menu__sublist-link:hover {
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .menu {
    right: 10px;
    min-height: 231px;
  }

  .menu__block {
    max-width: 59px;
    top: -166px;
  }

  .menu__burger-image {
    height: 34px;
    width: 39px;
    top: -73px;
  }

  .menu__text {
    font-size: 45px;
    line-height: 41px;
  }

  .menu__navigation {
    min-width: 297px;
  }

  .menu__list {
    padding: 11px 7px 0 22px;
  }

  .menu__list-item {
    font-size: 25px;
    line-height: 46px;
  }

  .menu__sublist {
    list-style: none;
    padding: 0;
    margin: 11px -18px 14px 0;
  }

  .menu__sublist-link {
    font-size: 22px;
    line-height: 33px;
  }
}

@media screen and (min-width: 1280px) {
  .menu {
    top: 15px;
    min-height: 188px;
  }

  .menu__block {
    max-width: 53px;
    top: -139px;
  }

  .menu__burger-image {
    height: 28px;
    width: 31px;
    top: -59px;
  }

  .menu__text {
    font-size: 36px;
    line-height: 33px;
  }

  .menu__navigation {
    min-width: 189px;
  }

  .menu__list {
    padding: 4px 13px 0 13px;
  }

  .menu__list-item {
    font-size: 20px;
    line-height: 42px;
  }

  .menu__sublist {
    list-style: none;
    padding: 0;
    margin: 11px -18px 10px 0;
  }

  .menu__sublist-link {
    font-size: 17px;
    line-height: 26px;
  }
}

</style>
