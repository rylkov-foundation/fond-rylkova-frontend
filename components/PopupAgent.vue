<template>
  <div
    v-if="PopupAgentVisible"
    class="popup popup_agent"
  >
    <h3 class="popup__title popup__title_agent">
      {{ popupDownloadData[`title_${$i18n.locale}`] }}
    </h3>
    <div class="popup__text" v-html="popupDownloadData[`description_${$i18n.locale}`]" />
    <a
      href="#"
      class="popup__link"
      download=""
      @click="hidePopup"
    >
      {{ $t('popups.download') }}
    </a>
    <button type="button" class="popup__button-close" @click="hidePopup" />
  </div>
</template>

<script>
export default {
  name: 'PopupAgent',
  props: {
    popupDownloadData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      PopupAgentVisible: false
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

  .popup {
    background-color: #fff;
    padding: 17px 10px 16px 20px;
    border-radius: 20px;
    width: 229px;
    min-height: 100px;
    box-shadow: 0 9px 13px 1px rgba(0, 0, 0, 0.29);
    box-sizing: border-box;
  }

  .popup__button-close {
    position: absolute;
    top: 15px;
    right: 15px;
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: none;
  }

  .popup__button-close::before {
    position: absolute;
    content: '';
    top: 3px;
    left: 0;
    background-color: #434343;
    height: 3px;
    width: 20px;
    transform: rotate(45deg);
  }

  .popup__button-close::after {
    position: absolute;
    content: '';
    top: 3px;
    left: 0;
    background-color: #434343;
    height: 3px;
    width: 20px;
    transform: rotate(135deg);
  }

  .popup__button-close:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    .popup {
      width: 470px;
      min-height: 204px;
      padding: 35px 20px 32px 41px;
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

    .popup__button-close {
      top: 40px;
      right: 40px;
      height: 35px;
      width: 35px;
    }

    .popup__button-close::before {
      top: 10px;
      height: 7px;
      width: 35px;
    }

    .popup__button-close::after {
      top: 10px;
      height: 7px;
      width: 35px;
    }
  }

  @media screen and (min-width: 1280px) {
    .popup {
      width: 295px;
      min-height: 128px;
      padding: 22px 20px 19px 25px;
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

    .popup__button-close {
      top: 15px;
      right: 15px;
      height: 20px;
      width: 20px;
    }

    .popup__button-close::before {
      top: 5px;
      height: 5px;
      width: 20px;
    }

    .popup__button-close::after {
      top: 5px;
      height: 5px;
      width: 20px;
    }
  }

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
      line-height: 16px;
      margin-bottom: 10px;
    }
  }
</style>
