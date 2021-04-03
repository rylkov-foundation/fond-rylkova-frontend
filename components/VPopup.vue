<template>
  <div class="popup">
    <PopupCookie />
    <PopupAgent />
    <PopupNews />
  </div>
</template>

<script>
export default {
  name: 'VPopup'
}
</script>

<style>
  .popup {
    position: fixed;
    bottom: 50px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .popup:empty {
    display: none;
  }

  .popup__title {
    font-family: 'Vollkorn', Times, serif;
    font-size: 17px;
    font-weight: bold;
    font-style: normal;
    letter-spacing: normal;
    line-height: 12.73px;
    margin-bottom: 12px;
  }

  .popup__text {
    color: #666;
    font-family: Roboto, serif;
    font-size: 11px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 14.71px;
    margin-bottom: 10px;
  }

  .popup__link {
    font-family: 'Vollkorn', 'Times New Roman', serif;
    font-size: 17px;
    line-height: 24.34px;
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
  }

  @media screen and (min-width: 768px) {
    .popup {
      bottom: 50px;
      right: 30px;
    }

    .popup__content {
      width: 470px;
      min-height: 204px;
      padding: 35px 0 32px 41px;
    }

    .popup__title {
      font-size: 40px;
      line-height: 26.18px;
      margin-bottom: 28px;
    }

    .popup__text {
      font-size: 22px;
      line-height: 30.26px;
      margin-bottom: 21px;
    }

    .popup__link {
      font-size: 34px;
      line-height: 50.07px;
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
      line-height: 16.44px;
      margin-bottom: 17px;
    }

    .popup__text {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 12px;
    }

    .popup__link {
      font-size: 22px;
      line-height: 31.44px;
    }
  }
</style>
