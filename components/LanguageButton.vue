<template>
  <button
    type="button"
    class="button-language"
    :class="isAdditionalPage && 'button-language_page_additional'"
    @click="changeLanguage"
  >
    {{ languages[languageIndex] }}
  </button>
</template>

<script>
export default {
  name: 'LanguageButton',
  props: {
    isAdditionalPage: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      languages: ['en', 'ру'],
      languageIndex: 0
    }
  },
  methods: {
    changeLanguage () {
      if (this.languageIndex === 0) {
        this.languageIndex = 1
      } else {
        this.languageIndex = 0
      }
    }
  }
}
</script>

<style scoped>
.button-language {
  position: absolute;
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
  width: 30px;
  height: 30px;
  padding: 0;
}

.button-language_page_additional {
  top: 4px;
  left: 5px;
  width: 30px;
  height: 30px;
  font-size: 21px;
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

@media screen and (min-width: 1280px) {
  .button-language_page_additional {
    top: 636px;
    left: 20px;
    z-index: 1;
  }
}
</style>
