<template>
  <div class="popup popup__content_cookie">
    <h3 class="popup__title">
      {{ popupCookiesData[`title_${$i18n.locale}`] }}
    </h3>
    <p class="popup__text">
      {{ popupCookiesData[`description_${$i18n.locale}`] }}
    </p>
    <button
      type="button"
      class="popup__button"
      @click="handleAcceptCookies"
    >
      {{ $t('popups.ok') }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'PopupCookie',
  props: {
    handleAcceptCookies: {
      type: Function,
      required: true
    },
    popupCookiesData: {
      type: Object,
      default: () => {}
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

  .popup__button {
    font-family: 'Vollkorn', 'Times', serif;
    font-size: 17px;
    line-height: 24px;
    font-weight: bold;
    color: #b23438;
    border: none;
    border-bottom: 2px solid #b23438;
    cursor: pointer;
    background-color: transparent;
  }

  .popup {
    background-color: #fff;
    padding: 17px 0 16px 20px;
    border-radius: 20px;
    width: 229px;
    min-height: 100px;
    box-shadow: 0 9px 13px 1px rgba(0, 0, 0, 0.29);
    box-sizing: border-box;
  }

  @media screen and (min-width: 768px) {
    .popup {
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

    .popup__button {
      font-size: 34px;
      line-height: 50px;
    }
  }

  @media screen and (min-width: 1280px) {
    .popup {
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

    .popup__button {
      font-size: 22px;
      line-height: 31px;
    }
  }
</style>
