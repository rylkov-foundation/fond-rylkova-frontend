<template>
  <div>
    <form class="email-form" @submit.prevent="onSubmit">
      <label class="email-form__theme">{{ $t('emailForm.subject') }}
        <input v-model="subject" class="email-form__input" type="text" required>
      </label>
      <textarea
        v-model="text"
        class="email-form__textarea"
        :placeholder="$t('emailForm.textareaPlaceholder')"
        required
      />
      <label class="email-form__label">{{ $t('emailForm.name') }}
        <input v-model="name" class="email-form__input email-form__input_position_bottom" type="text" required>
      </label>
      <label class="email-form__label">{{ $t('emailForm.email') }}
        <input v-model="email" class="email-form__input email-form__input_position_bottom" type="email" required>
      </label>
      <p
        class="form__error"
        :class="error && 'form__error_visible'"
      >
        {{ error }}
      </p>
      <div class="email-form__container">
        <p class="email-form__arrows">
          &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
        </p>
        <button
          type="submit"
          class="email-form__submit-button"
          :class="{ 'email-form__submit-button_disabled': error !== '' }"
          :disabled="error !== ''"
        >
          {{ $t('emailForm.submitButtonText') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import validator from 'validator'

export default {
  name: 'EmailForm',
  data() {
    return {
      subject: '',
      text: '',
      name: '',
      email: ''
    }
  },
  computed: {
    error () {
      if (!this.subject || !this.text || !this.name || !this.email || !validator.isEmail(this.email)) {
        return this.$t('emailForm.validationMessages.message')
      } else {
        return ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$axios.$post(
        'mail/send',
        {
          subject: this.subject,
          text: this.text,
          name: this.name,
          email: this.email
        }
      )
        .then(() => {
          this.$emit('sent', { sent: true, sendingError: false })
        })
        .catch(() => {
          this.$emit('sent', { sent: true, sendingError: true })
        })
    }
  }
}
</script>

<style scoped>
  .email-form {
    max-width: 89%;
    display: flex;
    flex-direction: column;
    margin-left: 7px;
  }

  .email-form__theme {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #b23438;
    font-family: RussoOne, Times, serif;
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
    min-width: 170px;
    width: 64%;
    font-family: RussoOne, Times, serif;
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
    font-family: RussoOne, Times, serif;
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
    font-family: RussoOne, Times, serif;
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

  .form__error {
    margin-top: 5px;
    visibility: hidden;
    color: #b23438;
    font-size: 12px;
    text-align: right;
    height: 18px;
  }

  .form__error_visible {
    visibility: visible;
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

  .email-form__submit-button_disabled {
    background-color: #7f7f7f;
  }

  .email-form__submit-button_disabled:hover {
    opacity: 1;
    cursor: default;
  }

  @media screen and (min-width: 768px) {
    .email-form {
      max-width: 85%;
      margin-left: 50px;
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

    .form__error {
      margin-top: 5px;
      margin-right: 5px;
      font-size: 20px;
    }

    .form__error_visible {
      visibility: visible;
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
      margin-left: 0;
    }

    .email-form__theme {
      font-size: 36px;
      line-height: 27px;
      padding-left: 0;
      align-items: flex-end;
      margin: 0 0 14px 0;
    }

    .email-form__input {
      height: 32px;
      width: 375px;
      font-size: 30px;
      line-height: 30px;
      margin-left: 5px;
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
      line-height: 23px;
      padding-left: 0;
      margin-bottom: 12px;
      max-width: 462px;
    }

    .form__error {
      margin-top: 5px;
      margin-right: 27px;
      font-size: 20px;
    }

    .form__error_visible {
      visibility: visible;
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
