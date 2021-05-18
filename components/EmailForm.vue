<template>
  <form class="email-form">
    <label class="email-form__theme">{{ $t('emailForm.subject') }}
      <input class="email-form__input" type="text">
    </label>
    <textarea class="email-form__textarea" placeholder="Письмо..." />
    <label class="email-form__label">{{ $t('emailForm.name') }}
      <input class="email-form__input email-form__input_position_bottom" type="text">
    </label>
    <label class="email-form__label">{{ $t('emailForm.email') }}
      <input class="email-form__input email-form__input_position_bottom" type="email">
    </label>
    <div class="email-form__container">
      <p class="email-form__arrows">
        &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
      </p>
      <button type="submit" class="email-form__submit-button">
        {{ $t('emailForm.submitButtonText') }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'EmailForm'
}
</script>

<style scoped>
  .email-form {
    max-width: 89%;
    display: flex;
    flex-direction: column;
  }

  .email-form__theme {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #b23438;
    font-family: Vollkorn, Times, serif;
    font-size: 20px;
    line-height: 20px;
    font-style: normal;
    font-weight: 600;
    width: 100%;
    padding-left: 16px;
    margin-bottom: 3px;
  }

  .email-form__input {
    height: 17px;
    border: 1px solid #838383;
    outline: none;
    border-radius: 10px;
    min-width: 204px;
    width: 64%;
    font-family: Vollkorn, Times, serif;
    font-size: 15px;
    line-height: 15px;
    font-style: normal;
    font-weight: 400;
  }

  .email-form__input_position_bottom {
    background-color: transparent;
  }

  .email-form__textarea {
    width: 100%;
    height: 62px;
    resize: none;
    font-family: Vollkorn, Times, serif;
    font-size: 16px;
    line-height: 20px;
    font-style: normal;
    font-weight: 400;
    border: 1px solid #838383;
    outline: none;
    border-radius: 20px;
    padding: 6px 0 0 13px;
    margin-bottom: 4px;
  }

  .email-form__textarea::placeholder {
    color: #cbcbcb;
  }

  .email-form__label {
    font-family: Vollkorn, Times, serif;
    font-size: 13px;
    line-height: 4px;
    font-style: normal;
    font-weight: 400;
    padding-left: 16px;
    margin-bottom: 7px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .email-form__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 11px 0;
  }

  .email-form__arrows {
    font-family: Roboto, Times, serif;
    font-size: 26px;
    line-height: 8px;
    font-style: normal;
    font-weight: 400;
    color: #fff;
  }

  .email-form__submit-button {
    background-color: #b23438;
    color: #fff;
    font-family: Roboto, Times, serif;
    font-size: 13px;
    line-height: 14px;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    border-radius: 10px;
    border-color: transparent;
    outline: none;
    min-width: 105px;
    height: 25px;
  }

  .email-form__submit-button:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    .email-form {
      max-width: 85%;
    }

    .email-form__theme {
      font-size: 47px;
      line-height: 17px;
      padding-left: 25px;
      align-items: flex-end;
      margin-bottom: 18px;
    }

    .email-form__input {
      height: 41px;
      width: 478px;
      font-size: 35px;
      line-height: 35px;
    }

    .email-form__textarea {
      height: 220px;
      font-size: 38px;
      line-height: 48px;
      padding: 17px 0 0 20px;
      margin-bottom: 12px;
    }

    .email-form__label {
      font-size: 31px;
      line-height: 16px;
      padding-left: 29px;
      margin-bottom: 12px;
    }

    .email-form__container {
      margin: 24px 0 39px 0;
    }

    .email-form__arrows {
      font-size: 52px;
      line-height: 15px;
    }

    .email-form__submit-button {
      font-size: 31px;
      line-height: 33px;
      min-width: 245px;
      height: 65px;
    }
  }

  @media screen and (min-width: 1098px) {
    .email-form {
      width: 485px;
    }

    .email-form__theme {
      font-size: 36px;
      line-height: 17px;
      padding-left: 0;
      align-items: flex-end;
      margin: 0 0 14px -27px;
    }

    .email-form__input {
      height: 32px;
      width: 375px;
      font-size: 30px;
      line-height: 30px;
    }

    .email-form__textarea {
      height: 190px;
      width: 463px;
      font-size: 30px;
      line-height: 37px;
      padding: 13px 0 0 12px;
      margin-bottom: 12px;
    }

    .email-form__label {
      font-size: 24px;
      line-height: 8px;
      padding-left: 0;
      margin-bottom: 12px;
      max-width: 462px;
    }

    .email-form__container {
      margin: 24px 0 39px 0;
      width: 497px;
    }

    .email-form__arrows {
      font-size: 48px;
      line-height: 14px;
    }

    .email-form__submit-button {
      font-size: 24px;
      line-height: 26px;
      min-width: 187px;
      height: 49px;
    }
  }
</style>
