<template>
  <button
    type="button"
    class="button-language"
    @click="changeLanguage"
  >
    {{ nextLanguage }}
  </button>
</template>

<script>
export default {
  name: 'LanguageButton',
  computed: {
    nextLanguage () {
      return this.$i18n.locale === 'ru' ? 'en' : 'ru'
    }
  },
  methods: {
    changeLanguage () {
      this.$i18n.setLocale(this.$i18n.locale === 'ru' ? 'en' : 'ru')
    }
  }
}
</script>

<style scoped>
.button-language {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  font-family: 'Roboto', 'Times', serif;
  font-size: 17px;
  line-height: 17px;
  background-color: #000;
  font-weight: 400;
  font-style: italic;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  padding: 0;
  text-transform: lowercase;
  text-align: center;
}

.button-language:hover {
  opacity: 0.7;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .button-language {
    font-size: 30px;
    line-height: 30px;
    width: 50px;
    height: 50px;
  }
}
</style>
