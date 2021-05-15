<template>
  <section class="menu">
    <transition name="show">
      <nav v-if="isShown" class="menu__navigation">
        <ul class="menu__list">
          <li class="menu__list-item" @click="closeMenu">
            <NuxtLink to="/" class="menu__link">
              Главная
            </NuxtLink>
          </li>
          <li class="menu__list-item" @click="isShownAbout = !isShownAbout">
            <p class="menu__list-text">
              о нас
              <span class="menu__arrow" :class="{ menu__arrow_rotated: isShownAbout }">&#8594;</span>
            </p>
            <transition name="show-sublist">
              <ul v-if="isShownAbout" class="menu__sublist">
                <li v-for="aboutItem in aboutList" :key="aboutItem.id" class="menu__sublist-item" @click="closeMenu">
                  <NuxtLink class="menu__sublist-link" :to="aboutItem.url">
                    {{ aboutItem.title }}
                  </NuxtLink>
                </li>
              </ul>
            </transition>
          </li>
          <li class="menu__list-item" @click="isShownSupport = !isShownSupport">
            <p class="menu__list-text">
              поддержать ФАР
              <span class="menu__arrow" :class="{ menu__arrow_rotated: isShownSupport }">&#8594;</span>
            </p>
            <transition name="show-sublist">
              <ul v-if="isShownSupport" class="menu__sublist">
                <li
                  v-for="supportItem in supportList"
                  :key="supportItem.id"
                  class="menu__sublist-item"
                  @click="closeMenu"
                >
                  <NuxtLink class="menu__sublist-link" :to="supportItem.url">
                    {{ supportItem.title }}
                  </NuxtLink>
                </li>
              </ul>
            </transition>
          </li>
          <li class="menu__list-item" @click="closeMenu">
            <NuxtLink class="menu__link" to="#">
              получить помощь
            </NuxtLink>
          </li>
          <li class="menu__list-item" @click="closeMenu">
            <NuxtLink class="menu__link" to="/contacts">
              контакты
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </transition>
    <div class="menu__block">
      <button class="menu__button" :class="{ menu__button_scrolled: isScrollOver230}" @click="show">
        <img class="menu__burger-image" src="~/assets/images/burger.png">
        <p v-show="!isScrollOver230" class="menu__text">
          Меню
        </p>
        <p v-show="isShown && isScrollOver230" class="menu__text menu__text_shown">
          Меню
        </p>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      isShown: false,
      isShownAbout: false,
      isShownSupport: false,
      isScrollOver230: false,
      aboutList: [{ id: 1, title: 'кто такой Андрей Рыльков', url: 'who-is-andrey-rylkov' },
        { id: 2, title: 'миссия и стратегии', url: 'about-us' },
        { id: 3, title: 'команда ФАР', url: 'team' },
        { id: 4, title: 'проекты и отчёты', url: 'projects' },
        { id: 5, title: 'годовые отчёты', url: 'annual-reports' },
        { id: 6, title: 'учредительные документы', url: '/' }],
      supportList: [{ id: 1, title: 'сделать пожертвование', url: 'donation' },
        { id: 2, title: 'волонтёрство в ФАР', url: '/' },
        { id: 3, title: 'стажировка в ФАР', url: '/' },
        { id: 4, title: 'партнёрство с ФАР', url: '/' }]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandler)
    this.scrollHandler()
    document.addEventListener('click', this.onClickOutside)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollHandler)
    document.removeEventListener('click', this.onClickOutside)
  },
  methods: {
    show () {
      this.isShown = !this.isShown
      if (this.isShownAbout) {
        this.isShownAbout = false
      }
      if (this.isShownSupport) {
        this.isShownSupport = false
      }
    },
    scrollHandler (e) {
      this.isScrollOver230 = window.pageYOffset > 230
    },
    onClickOutside (e) {
      this.isShown = this.$el.contains(e.target) && this.isShown
    },
    closeMenu () {
      this.isShown = false
    }
  }
}
</script>

<style scoped>
.menu {
  position: fixed;
  top: 4px;
  right: 3px;
  display: flex;
  z-index: 100;
}

.menu__block {
  width: 38px;
  background-color: #000;
}

.menu__button {
  background-color: transparent;
  height: 149px;
  width: 100%;
  position: relative;
  outline: none;
  border: none;
}

.menu__button:hover {
  cursor: pointer;
}

.menu__button_scrolled {
  height: 37px;
}

.menu__burger-image {
  height: 22px;
  width: 25px;
  position: absolute;
  top: 8px;
  right: 50%;
  transform: translateX(50%);
}

.menu__text {
  text-transform: uppercase;
  transform: rotate(270deg);
  font-family: 'Vollkorn', 'Times', serif;
  font-size: 29px;
  font-weight: 400;
  line-height: 26px;
  color: #fff;
  position: absolute;
  bottom: 49px;
  right: -31px;
}

.menu__text_shown {
  bottom: -63px;
  right: -31px;
}

.menu__arrow {
  transition: transform 200ms linear;
}

.menu__arrow_rotated {
  transform: rotate(90deg);
}

.menu__navigation {
  display: block;
  min-width: 190px;
  min-height: 149px;
  background-color: #000;
  z-index: 1;
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
}

.menu__list-item:hover {
  cursor: pointer;
}

.menu__list-item:not(.menu__list-item:last-child) {
  border-bottom: 1px solid #fff;
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
  }

  .menu__block {
    width: 59px;
  }

  .menu__button {
    height: 231px;
  }

  .menu__button_scrolled {
    height: 58px;
  }

  .menu__burger-image {
    height: 34px;
    width: 39px;
    top: 12px;
  }

  .menu__text {
    font-size: 45px;
    line-height: 41px;
    top: 96px;
    right: -70px;
  }

  .menu__text_shown {
    top: 135px;
    right: -25px;
  }

  .menu__navigation {
    min-width: 297px;
    min-height: 235px;
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
  }

  .menu__block {
    width: 48px;
  }

  .menu__button {
    height: 188px;
  }

  .menu__button_scrolled {
    height: 45px;
  }

  .menu__burger-image {
    height: 28px;
    width: 31px;
    top: 8px;
  }

  .menu__text {
    font-size: 36px;
    line-height: 33px;
    top: 81px;
    right: -52px;
  }

  .menu__text_shown {
    top: 109px;
    right: -24px;
  }

  .menu__navigation {
    min-width: 189px;
    min-height: 188px;
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

.show-enter,
.show-leave-to {
  opacity: 0;
  transform: translateX(60px);
}

.show-enter-active,
.show-leave-active {
  transition: all 700ms;
}

.show-sublist-enter,
.show-sublist-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.show-sublist-enter-active,
.show-sublist-leave-active {
  transition: all 700ms;
}

</style>
