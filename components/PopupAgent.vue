<template>
  <div
    v-if="PopupAgentVisible"
    class="popup__content popup__content_agent"
  >
    <h3 class="popup__title popup__title_agent">
      Подтвердите действие на странице rylkov-fond.org.
    </h3>
    <p class="popup__text">
      Данные материалы изданы и (или) распространяются некоммерческой организацией, выполняющей функции иностранного агента.
    </p>
    <a
      href="#"
      class="popup__link"
      @click="hidePopup"
    >Скачать материал</a>
  </div>
</template>

<script>
export default {
  name: 'PopupAgent',
  data () {
    return {
      PopupAgentVisible: true
    }
  },
  methods: {
    hidePopup () {
      this.PopupAgentVisible = !this.PopupAgentVisible
    }
  }
}
</script>

<style>
  .popup__title.popup__title_agent {
    font-size: 13px;
  }

  @media screen and (min-width: 768px) {
    .popup__title.popup__title_agent {
      font-size: 26px;
    }
  }

  @media screen and (min-width: 1280px) {
    .popup__title.popup__title_agent {
      font-size: 16px;
      line-height: 16.44px;
      margin-bottom: 10px;
    }
  }
</style>
