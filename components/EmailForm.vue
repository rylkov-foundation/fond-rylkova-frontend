<template>
  <form class="email-form">
    <label class="email-form__theme">Тема
      <input class="email-form__input" type="text">
    </label>
    <textarea class="email-form__textarea" placeholder="Письмо..." />
    <label class="email-form__label">Имя
      <input class="email-form__input email-form__input_position_bottom" type="text">
    </label>
    <label class="email-form__label">E-mail
      <input class="email-form__input email-form__input_position_bottom" type="email">
    </label>
    <div class="email-form__container">
      <p class="email-form__arrows">
        &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
      </p>
      <button type="submit" class="email-form__submit-button">
        Отправить
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
    width: 204px;
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
</style>
