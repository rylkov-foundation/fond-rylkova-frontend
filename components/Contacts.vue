<template>
  <section class="contacts">
    <Support />
    <div class="contacts__colour-container contacts__colour-container_position_left-top" />
    <div class="contacts__colour-container contacts__colour-container_position_right-top" />
    <div class="contacts__colour-container contacts__colour-container_position_left-bottom" />
    <div class="contacts__colour-container contacts__colour-container_position_right-bottom">
      <Drop class="contacts__drop" />
    </div>
    <LogoWhite />
    <div class="contacts__grid-title-container">
      <div class="contacts__container">
        <h2 ref="titleContainer" class="contacts__title">
          <span v-for="line in splitTitle" :key="line" class="contacts__title-text">{{ line }}</span>
        </h2>
        <div v-show="sent" class="email-result">
          <span class="email-result_text">
            {{ sendingError ? $t('emailForm.fail') : $t('emailForm.success') }}
          </span>
          <div class="email-result__container">
            <p class="email-result__arrows">
              &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
            </p>
            <button
              type="button"
              class="email-result__more-button"
              @click="onMore"
            >
              {{ $t('emailForm.moreButtonText') }}
            </button>
          </div>
        </div>
        <EmailForm v-show="!sent" class="contacts__form" @sent="onSent" />
      </div>
      <div class="contacts__black-container">
        <div class="contacts__image" />
        <div class="contacts__text" v-html="pageData[`description_${$i18n.locale}`]" />
        <div class="contacts__telephone-block">
          <a class="contacts__telephone-number" :href="`tel:${pageData.phone_number}`">
            {{ pageData.phone_number }}
          </a>
        </div>
        <div class="contacts__email-block">
          <a class="contacts__email" :href="`mailto:${pageData.email}`" target="_blank">
            {{ pageData.email }}
          </a>
        </div>
      </div>
    </div>
    <div class="contacts__grid-list-container">
      <ul class="contacts__list">
        <Contact
          v-for="(contact,index) in pageData.contacts_items"
          :key="contact._id"
          :contact="contact"
          :index="index"
        />
      </ul>
      <p class="contacts__info">
        {{ pageData[`text_${$i18n.locale}`] }}
      </p>
    </div>
  </section>
</template>

<script>
import Drop from '@/components/Drop'
import splitLine from '@/utilites/splitLine'

export default {
  name: 'Contacts',
  components: {
    Drop
  },
  props: {
    pageData: {
      default: () => {},
      type: Object
    }
  },
  data () {
    return {
      splitTitle: [],
      resizeTimeout: null,
      sent: false,
      sendingError: false
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale
    }
  },
  watch: {
    lang() {
      this.handleSplitTitle()
    }
  },
  beforeMount () {
    this.handleSplitTitle()
  },
  mounted () {
    window.addEventListener('resize', this.handleSplitTitle)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleSplitTitle)
  },
  methods: {
    handleSplitTitle () {
      if (!this.resizeTimeout) {
        this.resizeTimeout = setTimeout(() => {
          this.resizeTimeout = null
          this.splitTitle = splitLine(
            this.pageData[`title_${this.$i18n.locale}`],
            this.$refs.titleContainer,
            true,
            95
          )
        }, 40)
      }
    },
    onSent (res) {
      this.sent = res.sent
      this.sendingError = res.sendingError
    },
    onMore () {
      this.sent = false
      this.sendingError = false
    }
  }
}
</script>

<style scoped>
.contacts {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.contacts__grid-title-container {
  background-color: #cbcbcb;
}

.contacts__container {
  background-color: #cbcbcb;
}

.contacts__title {
  font-family: Vollkorn, Times, serif;
  font-size: 50px;
  line-height: 56px;
  font-style: italic;
  word-break: break-all;
  color: #fff;
  margin: 26px 0 23px 8px;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.email-result {
  min-height: 528px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.email-result__container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0 50px 0;
}

.email-result__more-button {
  background-color: #b23438;
  color: #fff;
  font-family: Roboto, Times, serif;
  font-size: 16px;
  line-height: 14px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  border-radius: 20px;
  border-color: transparent;
  outline: none;
  min-width: 100px;
  height: 40px;
}

.email-result__more-button:hover {
  opacity: 0.7;
  cursor: pointer;
}

.email-result__arrows {
  font-family: Roboto, Times, serif;
  font-size: 26px;
  line-height: 8px;
  font-style: normal;
  font-weight: 400;
  color: #fff;
}

.email-result_text {
  display: block;
  margin: auto;
  font-family: Vollkorn, Times, serif;
  font-size: 36px;
  font-weight: bold;
  color: #7f7f7f;
}

.contacts__title-text {
  font-family: Vollkorn, Times, serif;
  font-size: 50px;
  line-height: 56px;
  font-style: italic;
  word-break: normal;
  position: relative;
}

.contacts__title-text::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 18px;
  background-color: #b23438;
}

.contacts__form {
  margin: 0 auto;
}

.contacts__black-container {
  background-color: #000;
  display: flex;
  flex-direction: column;
}

.contacts__image {
  display: none;
  position: absolute;
}

.contacts__text {
  font-family: Vollkorn, Times, serif;
  font-size: 18px;
  line-height: 16px;
  font-style: italic;
  font-weight: 400;
  color: #fff;
  margin: 21px auto 0;
  max-width: 89%;
}

.contacts__telephone-block {
  background-color: #cbcbcb;
  border-radius: 50%;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto 0;
}

.contacts__telephone-number {
  padding: 5% 0;
  text-align: center;
  font-family: Tomorrow, Times, fantasy, serif;
  font-size: 44px;
  line-height: 33px;
  color: #000;
  text-decoration: none;
}

.contacts__telephone-number:hover {
  opacity: 0.7;
}

.contacts__email-block {
  background-color: #b23438;
  border-radius: 50%;
  width: 95%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.contacts__email {
  color: #fff;
  font-family: Vollkorn, Times, serif;
  font-weight: bold;
  font-size: 15px;
  line-height: 28px;
  padding: 5% 0;
  text-align: center;
  text-decoration: none;
}

.contacts__email:hover {
  opacity: 0.7;
}

.contacts__list {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px 0 24px;
}

.contacts__info {
  font-family: Vollkorn, Times, serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  max-width: 85%;
  margin: 0 auto;
  padding-bottom: 27px;
}

.contacts__drop {
  display: none;
}

@media screen and (min-width: 768px) {
  .contacts__title {
    font-size: 120px;
    line-height: 122px;
    margin: 88px 0 41px 43px;
  }

  .contacts__title-text {
    font-size: 120px;
    line-height: 122px;
  }

  .contacts__title-text::after {
    height: 20px;
  }

  .contacts__text {
    font-family: Vollkorn, Times, serif;
    font-size: 36px;
    line-height: 32px;
    font-style: normal;
    margin: 51px auto 0;
    max-width: 85%;
  }

  .contacts__telephone-block {
    width: 84%;
    margin: 5px auto 0;
  }

  .contacts__telephone-number {
    font-size: 95px;
    line-height: 69px;
  }

  .contacts__email-block {
    width: 84%;
  }

  .contacts__email {
    font-size: 32px;
    line-height: 59px;
    padding: 6% 0;
  }

  .contacts__list {
    flex-direction: row;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
    margin: 48px 0 69px;
  }

  .contacts__info {
    font-size: 33px;
    line-height: 34px;
    border-bottom: none;
  }

  .email-result_text {
    font-size: 84px;
  }

  .email-result__more-button {
    font-size: 16px;
    min-width: 200px;
    height: 40px;
  }

  .email-result__arrows {
    font-size: 30px;
  }
}

@media screen and (min-width: 1098px) {
  .contacts {
    display: grid;
    grid-template-columns: auto 1098px auto;
    grid-template-areas:
      "left-top title right-top"
      "left-bottom list right-bottom";
    border-bottom: 1px solid #737373;
    max-width: 100%;
    overflow: hidden;
  }

  .contacts__colour-container {
    width: calc((100vw - 1098px) / 2);
    height: auto;
  }

  .contacts__colour-container_position_left-top {
    grid-area: left-top;
    background-color: #000;
  }

  .contacts__colour-container_position_right-top {
    grid-area: right-top;
    background-color: #fff;
  }

  .contacts__colour-container_position_left-bottom {
    grid-area: left-bottom;
    background-color: #cbcbcb;
  }

  .contacts__colour-container_position_right-bottom {
    grid-area: right-bottom;
    background-color: #b23438;
    position: relative;
  }

  .contacts__grid-title-container {
    grid-area: title;
    display: flex;
  }

  .contacts__grid-list-container {
    grid-area: list;
  }

  .contacts__container {
    width: 572px;
  }

  .contacts__title {
    font-size: 175px;
    line-height: 104px;
    margin: 55px 0 23px -527px;
    width: 894px;
    z-index: 5;
  }

  .contacts__title-text {
    font-size: 90px;
    line-height: 94px;
    z-index: 5;
    left: 60%;
  }

  .contacts__title-text::after {
    height: 20px;
  }

  .contacts__form {
    margin: 57px auto 0 32px;
  }

  .email-result_text {
    font-size: 80px;
  }

  .contacts__black-container {
    order: -1;
    justify-content: flex-end;
    align-items: flex-end;
    width: 525px;
    position: relative;
  }

  .contacts__image {
    background-image: url("./assets/images/road-add.png");
    background-size: cover;
    display: block;
    width: 346px;
    height: 262px;
    top: 194px;
    left: -138px;
  }

  .contacts__text {
    font-size: 16px;
    line-height: 19px;
    margin: 0 26px 134px 0;
    max-width: 305px;
  }

  .contacts__telephone-block {
    width: 100%;
    margin: 15px auto 0;
    z-index: 1;
  }

  .contacts__telephone-number {
    font-size: 75px;
    line-height: 54px;
  }

  .contacts__email-block {
    width: 100%;
    margin: 0 auto;
  }

  .contacts__email {
    font-size: 25px;
    line-height: 46px;
  }

  .contacts__list {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 34px 0 21px;
  }

  .contacts__info {
    font-size: 22px;
    line-height: 29px;
  }
}

@media screen and (min-width: 1280px) {
  .contacts__drop {
    display: block;
    width: 36px;
    height: 62px;
  }
}
</style>
