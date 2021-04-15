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
    <a
      href="#"
      class="popup__link"
      @click="hidePopup"
    >Перейти &gt;</a>
  </div>
</template>

<script>
export default {
  name: 'PopupNews',
  data () {
    return {
      PopupNewsVisible: true
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
  .popup__title.popup__title_news {
    font-size: 17px;
    color: #fff;
    line-height: 18.48px;
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
      line-height: 23.81px;
    }
  }
</style>
