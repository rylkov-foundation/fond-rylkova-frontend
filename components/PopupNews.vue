<template>
  <div
    v-if="PopupNewsVisible"
    class="popup__content popup__content_news"
  >
    <h3 class="popup__title popup__title_news">
      Срочная новость
    </h3>
    <p class="popup__text popup__text_news">
      В Никола-Ленивце на Масленицу устроили «Великое лежание» и сожгли «Замок корона-людоеда».
    </p>
    <NuxtLink
      to="/some_meta_page"
      class="popup__link"
      @click="hidePopup"
    >
      {{ $t('popups.goTo') }} &gt;
    </NuxtLink>
    <button type="button" class="popup__close-button" @click="hidePopup" />
  </div>
</template>

<script>
export default {
  name: 'PopupNews',
  data () {
    return {
      PopupNewsVisible: false
    }
  },
  methods: {
    hidePopup () {
      this.PopupNewsVisible = !this.PopupNewsVisible
    }
  }
}
</script>

<style>
  .popup__title {
    font-family: 'Vollkorn', Times, serif;
    font-size: 17px;
    font-weight: bold;
    font-style: normal;
    letter-spacing: normal;
    line-height: 13px;
    margin-bottom: 12px;
  }

  .popup__text {
    color: #666;
    font-family: Roboto, serif;
    font-size: 11px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 15px;
    margin-bottom: 10px;
  }

  .popup__link {
    font-family: 'Vollkorn', 'Times', serif;
    font-size: 17px;
    line-height: 24px;
    font-weight: bold;
    color: #b23438;
    text-decoration: none;
    border-bottom: 2px solid #b23438;
    cursor: pointer;
  }

  .popup__content {
    background-color: #fff;
    padding: 17px 0 16px 20px;
    border-radius: 20px;
    width: 229px;
    min-height: 100px;
    box-shadow: 0 9px 13px 1px rgba(0, 0, 0, 0.29);
    box-sizing: border-box;
    position: relative;
  }

  .popup__close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: none;
  }

  .popup__close-button::before {
    position: absolute;
    content: '';
    top: 3px;
    left: 0;
    background-color: #fff;
    height: 3px;
    width: 20px;
    transform: rotate(45deg);
  }

  .popup__close-button::after {
    position: absolute;
    content: '';
    top: 3px;
    left: 0;
    background-color: #fff;
    height: 3px;
    width: 20px;
    transform: rotate(135deg);
  }

  .popup__close-button:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    .popup__content {
      width: 470px;
      min-height: 204px;
      padding: 35px 0 32px 41px;
    }

    .popup__title {
      font-size: 40px;
      line-height: 26px;
      margin-bottom: 28px;
    }

    .popup__text {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 21px;
    }

    .popup__link {
      font-size: 34px;
      line-height: 50px;
    }

    .popup__close-button {
      top: 40px;
      right: 40px;
      height: 35px;
      width: 35px;
    }

    .popup__close-button::before {
      top: 10px;
      height: 7px;
      width: 35px;
    }

    .popup__close-button::after {
      top: 10px;
      height: 7px;
      width: 35px;
    }
  }

  @media screen and (min-width: 1280px) {
    .popup__content {
      width: 295px;
      min-height: 128px;
      padding: 22px 0 19px 25px;
    }

    .popup__title {
      font-size: 25px;
      line-height: 16px;
      margin-bottom: 17px;
    }

    .popup__text {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 12px;
    }

    .popup__link {
      font-size: 22px;
      line-height: 31px;
    }

    .popup__close-button {
      top: 15px;
      right: 15px;
      height: 20px;
      width: 20px;
    }

    .popup__close-button::before {
      top: 5px;
      height: 5px;
      width: 20px;
    }

    .popup__close-button::after {
      top: 5px;
      height: 5px;
      width: 20px;
    }
  }

  .popup__title.popup__title_news {
    font-size: 17px;
    color: #fff;
    line-height: 18px;
  }

  .popup__content.popup__content_news {
    background-color: #000;
  }

  @media screen and (min-width: 768px) {
    .popup__title.popup__title_news {
      font-size: 34px;
      line-height: 38px;
    }
  }

  @media screen and (min-width: 1280px) {
    .popup__title.popup__title_news {
      font-size: 24px;
      line-height: 24px;
    }
  }
</style>
