<template>
  <div
    v-if="PopupCookieVisible"
    class="popup__content popup__content_cookie"
  >
    <h3 class="popup__title">
      Cookies.
    </h3>
    <p class="popup__text">
      Сайт использует куки-файлы.
    </p>
    <a
      class="popup__link"
      @click="hidePopup"
    >Понятно</a>
  </div>
</template>

<script>
export default {
  name: 'PopupCookie',
  data () {
    return {
      PopupCookieVisible: true
    }
  },
  methods: {
    hidePopup () {
      this.PopupCookieVisible = !this.PopupCookieVisible
    }
  }
}
</script>
