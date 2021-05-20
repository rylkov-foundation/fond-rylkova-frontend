<template>
  <section class="menu">
    <transition name="show">
      <nav v-if="isShown" class="menu__navigation">
        <ul class="menu__list">
          <li class="menu__list-item" @click="closeMenu">
            <NuxtLink to="/" class="menu__link">
              {{ $t('menu.mainPage') }}
            </NuxtLink>
          </li>
          <li v-for="item in menu" :key="item._id" class="menu__list-item">
            <div class="menu__list-item-head-container">
              <p
                v-if="matchUrl(item) || !item.url"
                class="menu__list-text"
                :class="{ 'menu__list-text_active': matchUrl(item) }"
              >
                {{ item['name_' + $i18n.locale] }}
              </p>
              <div v-else @click="closeMenu">
                <NuxtLink class="menu__link" :to="item.url">
                  {{ item['name_' + $i18n.locale] }}
                </NuxtLink>
              </div>
              <span
                class="menu__arrow"
                :class="{ menu__arrow_rotated: openedItem === item._id, menu__arrow_hide: !item.subitems.length }"
                @click="openItem(item)"
              >
                &#8594;
              </span>
            </div>
            <transition name="show-sublist">
              <ul v-if="openedItem === item._id" class="menu__sublist">
                <li v-for="subitem in item.subitems" :key="subitem._id" class="menu__sublist-item">
                  <NuxtLink
                    v-if="!matchUrl(subitem)"
                    class="menu__sublist-link"
                    :to="subitem.url"
                    @click.native="closeMenu"
                  >
                    {{ subitem['name_' + $i18n.locale] }}
                  </NuxtLink>
                  <p
                    v-else
                    class="menu__sublist-text"
                    :class="{ 'menu__sublist-text_active': matchUrl(subitem) }"
                  >
                    {{ subitem['name_' + $i18n.locale] }}
                  </p>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </nav>
    </transition>
    <div class="menu__block">
      <button
        class="menu__button"
        :class="{ menu__button_scrolled: isScrollOver230 }"
        @click="() => isShown ? closeMenu() : openMenu()"
      >
        <span class="menu__burger" :class="{ menu__burger_on: isShown }" />
        <span
          v-show="!isScrollOver230 || isShown"
          class="menu__text"
          :class="{ menu__text_shown: isShown && isScrollOver230, menu__text_en: $i18n.locale === 'en' }"
        >
          {{ $t('menu.menuText') }}
        </span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      openedItem: '',
      isShown: false,
      isScrollOver230: false
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
    openItem (item) {
      if (this.openedItem !== item._id && item.subitems.length) {
        this.openedItem = item._id
      } else {
        this.openedItem = ''
      }
    },
    openMenu () {
      this.isShown = true
    },
    closeMenu () {
      this.isShown = false
      this.openedItem = ''
    },
    onClickOutside (e) {
      this.isShown = this.$el.contains(e.target) && this.isShown
    },
    scrollHandler () {
      this.isScrollOver230 = window.pageYOffset > 230
    },
    matchUrl (item) {
      if (location.pathname !== '/') {
        return item.url === /[^/]+$/.exec(location.pathname)[0]
      } else {
        return false
      }
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu__button:hover {
  cursor: pointer;
  opacity: 0.8;
}

.menu__burger,
.menu__burger::before,
.menu__burger::after {
  display: block;
  position: relative;
  top: 14px;
  width: 100%;
  height: 3px;
  background-color: #fff;
  transition-duration: 0.5s;
}

.menu__burger::before {
  content: '';
  top: -9px;
}

.menu__burger::after {
  content: '';
  top: 6px;
}

.menu__burger_on {
  transform: rotate(45deg);
}

.menu__burger_on::before {
  top: 0;
  transform: rotate(0);
}

.menu__burger_on::after {
  top: -3px;
  transform: rotate(90deg);
}

.menu__button_scrolled {
  height: 33px;
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
  bottom: 42px;
  right: -31px;
}

.menu__text_shown {
  bottom: -74px;
}

.menu__text_en {
  bottom: 46px;
  right: -26px;
}

.menu__arrow {
  margin-left: 15px;
  transition: transform 200ms linear;
}

.menu__arrow:hover {
  cursor: pointer;
  opacity: 0.6;
}

.menu__arrow_hide {
  visibility: hidden;
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

.menu__list-item-head-container {
  display: flex;
  justify-content: space-between;
}

.menu__list-text {
  cursor: default;
  display: flex;
  justify-content: space-between;
}

.menu__list-text_active {
  font-weight: bold;
}

.menu__list-item:not(.menu__list-item:last-child) {
  border-bottom: 1px solid #fff;
}

.menu__link {
  color: #fff;
  text-decoration: none;
}

.menu__link:hover {
  cursor: pointer;
  opacity: 0.7;
}

.menu__sublist {
  list-style: none;
  padding: 0;
  margin: 8px 0 16px;
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
  opacity: 0.7;
}

.menu__sublist-text {
  font-family: 'Roboto', 'Times', serif;
  color: #fff;
  font-size: 14px;
  line-height: 21px;
  text-transform: none;
}

.menu__sublist-text_active {
  font-weight: bold;
  cursor: default;
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
    height: 46px;
  }

  .menu__burger,
  .menu__burger::before,
  .menu__burger::after {
    top: 20px;
    width: 100%;
    height: 4px;
  }

  .menu__burger::before {
    top: -14px;
  }

  .menu__burger::after {
    top: 10px;
  }

  .menu__burger_on::before {
    top: 0;
  }

  .menu__burger_on::after {
    top: -3px;
  }

  .menu__text {
    font-size: 45px;
    line-height: 41px;
    top: 100px;
    right: -73px;
  }

  .menu__text_shown {
    bottom: -143px;
  }

  .menu__text_en {
    right: -62px;
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
    margin: 12px 0 24px;
  }

  .menu__sublist-link {
    font-size: 22px;
    line-height: 33px;
  }

  .menu__sublist-text {
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
    height: 46px;
  }

  .menu__text {
    font-size: 36px;
    line-height: 33px;
    bottom: 45px;
    right: -44px;
  }

  .menu__text_shown {
    bottom: -97px;
  }

  .menu__text_en {
    right: -38px;
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
    margin: 10px 0 20px;
    overflow: hidden;
  }

  .menu__sublist-link {
    font-size: 17px;
    line-height: 26px;
    width: 100%;
  }

  .menu__sublist-text {
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
