<template>
  <section class="donation">
    <div class="donation__container">
      <h2 class="donation__title">
        Поддер&shy;жать <span class="donation__title-mark">фар</span>
      </h2>
      <div class="donation__image-container">
        <img src="~/assets/images/smile.svg" alt="Смайл" class="donation__smile">
      </div>
      <form action="" class="form">
        <div class="form__slider-container">
          <button class="form__slider-button">
            Регулярно
          </button>
          <label class="switch">
            <input class="switch__input" type="checkbox">
            <span class="switch__slider" />
          </label>
          <button class="form__slider-button">
            Однократно
          </button>
        </div>
        <div class="form__payment-options-container">
          <button class="form__payment-options-button">
            Карта
          </button>
          <button class="form__payment-options-button">
            ЮMoney
          </button>
          <button class="form__payment-options-button">
            Терминал
          </button>
        </div>
        <div class="form__amount-container">
          <button class="form__amount-options-button form__amount-options-button_thousand">
            1000<span class="form__money-sign">&#8381;</span>
          </button>
          <button class="form__amount-options-button form__amount-options-button_light form__amount-options-button_five-hundred">
            500<span class="form__money-sign form__money-sign_light">&#8381;</span>
          </button>
          <button class="form__amount-options-button form__amount-options-button_light form__amount-options-button_two-hundred">
            200<span class="form__money-sign form__money-sign_light">&#8381;</span>
          </button>
          <div class="form__text-amount-container">
            <input type="number" min="1" class="form__input" placeholder="Другая сумма">
            <label class="form__label-agree">
              <input type="checkbox" class="form__agree">
              <span class="form__checkbox-agree" />
              <img src="~/assets/images/check-mark.svg" alt="Галочка" class="form__checkbox-agree-mark">
              <span class="form__text-agree">Согласен с <a href="#" class="form__link-offer">офертой</a></span>
            </label>
          </div>
        </div>
        <input type="text" class="form__input form__input_personal" placeholder="Имя">
        <input type="email" class="form__input form__input_personal" placeholder="Email">
        <button type="submit" class="form__submit">
          Перейти к оплате
        </button>
      </form>
      <a href="#" class="donation__privacy-policy">Политика конфеденциальности</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Donation'
}
</script>

<style scoped>
  .donation__image-container {
    position: absolute;
    overflow: hidden;
    width: 140px;
    height: 147px;
    right: 0;
    top: -29px;
  }

  .switch {
    position: relative;
    left: 3px;
    top: 13px;
    display: inline-block;
    width: 58px;
    height: 32px;
    border: 2px solid black;
    border-radius: 16px;
    overflow: hidden;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    margin: 0 4px;
  }

  .switch .switch__input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switch__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: transform 0.4s;
    border-radius: 34px;
  }

  .switch__slider::before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    left: -1px;
    bottom: -1px;
    background-color: #b23438;
    transition: transform 0.4s;
    border-radius: 50%;
  }

  .switch__input:checked + .switch__slider::before {
    transform: translateX(26px);
  }

  .donation {
    background-color: black;
  }

  .donation__container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: #cbcbcb;
    position: relative;
    padding-bottom: 12px;
    margin-left: auto;
  }

  .donation__title {
    color: #cbcbcb;
    font-size: 38px;
    line-height: 30px;
    font-family: Vollkorn, Times, serif;
    letter-spacing: 3px;
    word-spacing: 0;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
    margin: 24px 0 0 18px;
    width: 54vw;
    z-index: 1;
  }

  .donation__title-mark {
    text-transform: uppercase;
    color: black;
    position: relative;
    top: 9px;
    right: 2px;
    font-weight: 900;
    font-size: 42px;
    letter-spacing: 0;
    font-family: Vollkorn, Times, serif;
    text-shadow: none;
  }

  .donation__smile {
    width: 149px;
    position: absolute;
    right: -9px;
  }

  .donation__privacy-policy {
    font-family: Roboto, Arial, sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 19px;
    color: #727272;
    text-align: center;
  }

  .donation__privacy-policy:hover {
    opacity: 0.7;
  }

  .form {
    margin: 30px auto 0;
    width: fit-content;
  }

  .form__slider-container {
    width: fit-content;
    text-align: center;
    margin: 0 auto;
  }

  .form__slider-button {
    font-size: 14px;
    line-height: 14px;
    color: #b23438;
    border: none;
    border-bottom: 1px solid #b23438;
    background-color: rgba(255, 255, 255, 0);
    padding: 0;
    margin-left: 6px;
  }

  .form__payment-options-container {
    display: flex;
    justify-content: center;
    margin: 26px auto 0;
    width: fit-content;
  }

  .form__payment-options-button {
    font-family: Roboto, Arial, sans-serif;
    font-size: 15px;
    line-height: 19px;
    background-color: white;
    border: none;
    border-radius: 18px;
    padding: 8px 0;
    color: #313131;
    width: 92px;
    margin: 0 3px;
  }

  .form__payment-options-button:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  .form__amount-container {
    width: fit-content;
    margin: 11px auto 0;
    display: grid;
    grid-template-areas:
      "thousand five-hundred"
      "two-hundred custom-amount";
    grid-template-rows: repeat(2, 84px);
    grid-template-columns: repeat(2, 137px);
    gap: 9px 16px;
  }

  .form__amount-options-button {
    font-family: 'Tomorrow', 'Times New Roman', fantasy;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    color: #000;
    font-size: 109px;
    border: 2px solid #000;
    border-radius: 20px;
    padding: 6px 0 0 5px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
  }

  .form__amount-options-button:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  .form__amount-options-button_light {
    background-color: white;
    color: #cbcbcb;
    border-color: #cbcbcb;
  }

  .form__money-sign {
    font-family: 'DrukCyr', 'Times New Roman', serif;
    font-size: 82px;
    line-height: 77px;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px black;
    position: relative;
    top: -7px;
    left: -5px;
  }

  .form__money-sign_light {
    -webkit-text-stroke: 1px #cbcbcb;
  }

  .form__text-amount-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    left: -5px;
  }

  .form__input {
    font-family: Roboto, Arial, sans-serif;
    font-size: 15px;
    line-height: 19px;
    border: none;
    color: #727272;
    border-radius: unset;
    border-bottom: 1px solid #727272;
    background-color: #cbcbcb;
    padding: 0;
  }

  .form__input::-webkit-outer-spin-button,
  .form__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .form__input[type='number'] {
    -moz-appearance: textfield;
  }

  .form__input:focus {
    outline: none;
  }

  .form__input::placeholder {
    font-family: Roboto, Arial, sans-serif;
    font-size: 15px;
    line-height: 19px;
    color: #727272;
  }

  .form__label-agree {
    margin: 17px 0 9px;
    font-size: 11px;
    position: relative;
  }

  .form__agree {
    appearance: none;
  }

  .form__checkbox-agree {
    background-color: #cbcbcb;
    border: 1px solid #727272;
    border-radius: 4px;
    position: absolute;
    top: -5px;
    left: 0;
    width: 15px;
    height: 15px;
  }

  .form__checkbox-agree-mark {
    position: absolute;
    left: 2px;
    top: -7px;
    width: 17px;
    height: 17px;
    object-fit: cover;
    display: none;
  }

  .form__agree:checked ~ .form__checkbox-agree-mark {
    display: inline;
  }

  .form__text-agree {
    font-family: Roboto, Arial, sans-serif;
    margin-top: 1px;
    position: relative;
    bottom: 2px;
    left: 17px;
    color: #727272;
  }

  .form__input_personal {
    color: #b23438;
    width: 287px;
    margin: 11px auto;
    padding-left: 11px;
    font-size: 18px;
    display: block;
    font-family: Vollkorn, Times, serif;
  }

  .form__input_personal:last-of-type {
    margin-top: 20px;
  }

  .form__input_personal::placeholder {
    font-family: Vollkorn, Times, serif;
    color: #b23438;
    font-size: 19px;
    line-height: 14px;
  }

  .form__submit {
    background-color: #b23438;
    padding: 0;
    border: none;
    margin: 23px auto 9px;
    width: 218px;
    height: 58px;
    border-radius: 50%;
    display: block;
    color: white;
  }

  .form__submit:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  .form__link-offer {
    color: #727272;
  }

  .form__link-offer:hover {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    .donation__title {
      font-size: 87px;
      line-height: 77px;
      text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
      margin: 25px 0 0 51px;
      width: 60vw;
    }

    .donation__title-mark {
      top: 1px;
      right: 8px;
      font-size: 90px;
    }

    .donation__image-container {
      width: 263px;
      overflow: unset;
      top: -52px;
      right: 14px;
    }

    .donation__smile {
      width: 100%;
      position: unset;
    }

    .form {
      margin: 12px auto 0;
    }

    .switch {
      left: -6px;
      top: 21px;
      width: 121px;
      height: 61px;
      border: 4px solid black;
      border-radius: 30px;
      margin-left: 22px;
      margin-right: 22px;
    }

    .form__slider-button {
      font-size: 29px;
      line-height: 34px;
      border-bottom: 2px solid #b23438;
      margin-left: 0;
      margin-right: 10px;
    }

    .form__slider-button:hover {
      opacity: 0.7;
      cursor: pointer;
    }

    .switch__slider::before {
      height: 55px;
      width: 55px;
    }

    .switch__input:checked + .switch__slider::before {
      transform: translateX(60px);
    }

    .form__payment-options-container {
      margin: 37px auto 0;
    }

    .form__payment-options-button {
      font-size: 30px;
      line-height: 35px;
      padding: 18px 0;
      width: 189px;
    }

    .form__amount-container {
      margin: 27px auto 0;
      grid-template-rows: repeat(2, 168px);
      grid-template-columns: repeat(2, 273px);
      gap: 18px 30px;
    }

    .form__amount-options-button {
      font-size: 218px;
      padding: 11px 0 0 7px;
    }

    .form__amount-options-button_light {
      padding-left: 20px;
    }

    .form__money-sign {
      font-size: 166px;
      top: -13px;
      left: -6px;
    }

    .form__money-sign_light {
      left: -12px;
    }

    .form__text-amount-container {
      left: -13px;
    }

    .form__input {
      font-size: 30px;
      line-height: 40px;
      border-bottom: 2px solid #727272;
    }

    .form__input::placeholder {
      font-size: 30px;
      line-height: 40px;
    }

    .form__label-agree {
      font-size: 22px;
      line-height: 25px;
      margin: 41px 0 21px;
      padding-left: 18px;
    }

    .form__checkbox-agree {
      width: 30px;
      height: 30px;
    }

    .form__checkbox-agree-mark {
      left: 4px;
      top: -9px;
      width: 33px;
      height: 33px;
    }

    .form__input_personal {
      width: 572px;
      margin-top: 21px;
      padding-left: 20px;
      font-size: 38px;
      line-height: 41px;
    }

    .form__input_personal:last-of-type {
      margin-top: 36px;
    }

    .form__submit {
      font-size: 32px;
      width: 431px;
      height: 112px;
      margin-top: 46px;
      margin-bottom: 28px;
    }

    .donation__privacy-policy {
      font-size: 22px;
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: 1280px) {
    .donation {
      grid-area: donation;
      padding: 0;
    }

    .donation__container {
      width: 615px;
      min-height: 716px;
      margin-left: auto;
      padding: 0;
    }

    .donation__title {
      font-size: 56px;
      line-height: 64px;
      letter-spacing: 6px;
      width: auto;
      margin: 3px 68px 0 124px;
    }

    .donation__title-mark {
      font-size: 63px;
    }

    .donation__image-container {
      top: -58px;
      left: -123px;
      width: 235px;
    }

    .form {
      margin-top: 0;
    }

    .form__slider-container {
      position: relative;
      top: -19px;
      left: 7px;
    }

    .form__slider-button {
      font-size: 24px;
      line-height: 22px;
      margin: 0;
    }

    .switch {
      left: -12px;
      top: 17px;
      width: 97px;
      height: 49px;
      margin-right: 0;
      margin-left: 24px;
    }

    .switch__slider::before {
      height: 43px;
      width: 43px;
    }

    .switch__input:checked + .switch__slider::before {
      transform: translateX(47px);
    }

    .form__payment-options-container {
      margin-top: 13px;
    }

    .form__payment-options-button {
      font-size: 23px;
      line-height: 39px;
      padding: 7px 0;
      width: 146px;
    }

    .form__amount-container {
      grid-template-areas:
        "two-hundred thousand five-hundred"
        "custom-amount custom-amount custom-amount";
      grid-template-rows: repeat(2, auto);
      grid-template-columns: repeat(3, 144px);
      gap: 8px 9px;
    }

    .form__amount-options-button {
      font-size: 115px;
      line-height: 105px;
      width: 100%;
      height: 90px;
      padding: 6px 0 0 6px;
    }

    .form__amount-options-button_thousand {
      grid-area: thousand;
    }

    .form__amount-options-button_five-hundred {
      grid-area: five-hundred;
    }

    .form__amount-options-button_two-hundred {
      grid-area: two-hundred;
    }

    .form__amount-options-button_light {
      padding: 6px 0 0 12px;
    }

    .form__money-sign {
      font-size: 88px;
      line-height: 81px;
      top: -7px;
      left: -3px;
    }

    .form__money-sign_light {
      left: -5px;
    }

    .form__text-amount-container {
      flex-direction: row;
      width: 450px;
      justify-content: space-between;
      margin-top: 26px;
    }

    .form__input {
      width: 228px;
      font-size: 24px;
      line-height: 31px;
      margin-left: 16px;
    }

    .form__input::placeholder {
      font-size: 24px;
      line-height: 31px;
    }

    .form__label-agree {
      margin: 0;
      top: 13px;
    }

    .form__checkbox-agree {
      width: 24px;
      height: 24px;
      top: -3px;
      left: 8px;
    }

    .form__text-agree {
      font-size: 18px;
      line-height: 31px;
      bottom: 4px;
    }

    .form__input_personal {
      margin: 22px 0 0 5px;
      width: 447px;
      font-size: 29px;
    }

    .form__input_personal:last-of-type {
      margin-top: 18px;
    }

    .form__submit {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100px;
      margin-bottom: 0;
    }

    .donation__privacy-policy {
      margin: 26px 0 63px 98px;
      font-size: 18px;
      line-height: 31px;
      text-align: left;
    }
  }
</style>
