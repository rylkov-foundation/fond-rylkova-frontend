<template>
  <section class="about-us">
    <div class="about-us__container">
      <img
        :src="`${$config.constants.serverUrl}${pageData.image.url}`"
        :alt="pageData[`title_${$i18n.locale}`]"
        class="about-us__image"
      >
      <h2 ref="titleContainer" class="about-us__title">
        <span v-for="line in splitTitle" :key="line" class="about-us__title-text">{{ line }}</span>
      </h2>
    </div>
    <Support />
    <LogoWhite />
    <p class="about-us__text" v-html="pageData[`content_${$i18n.locale}`]" />
    <div class="about-us__colour-container about-us__colour-container_position_right-top" />
    <div class="about-us__colour-container about-us__colour-container_position_left-bottom" />
    <div class="about-us__colour-container about-us__colour-container_position_right-bottom">
      <Drop class="about-us__drop" />
    </div>
  </section>
</template>

<script>
import Drop from '@/components/Drop'
import splitLine from '@/utilites/splitLine'

export default {
  name: 'AboutUs',
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
      resizeTimeout: null
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
          this.splitTitle = splitLine(this.pageData[`title_${this.$i18n.locale}`], this.$refs.titleContainer)
        }, 40)
      }
    }
  }
}
</script>

<style scoped>
  .about-us {
    position: relative;
    padding-bottom: 56px;
  }

  .about-us__container {
    position: relative;
    height: 337px;
    margin-bottom: 20px;
  }

  .about-us__image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 337px;
  }

  .about-us__title {
    position: absolute;
    top: 100px;
    left: 19px;
    font-family: Vollkorn, Times, serif;
    font-size: 115px;
    font-style: italic;
    font-weight: 400;
    width: 160px;
    line-height: 71px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .about-us__title-text {
    color: #fff;
    font-family: Vollkorn, Times, serif;
    font-size: 115px;
    font-style: italic;
    font-weight: 400;
    line-height: 71px;
    position: relative;
  }

  .about-us__title-text::after {
    content: '';
    position: absolute;
    background-color: #b23438;
    left: 0;
    bottom: 2px;
    width: 100%;
    height: 17px;
  }

  .about-us__text {
    font-family: Vollkorn, Times, serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    width: 88%;
    margin: 0 auto;
  }

  .about-us__drop {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .about-us__container {
      height: 716px;
      margin-bottom: 40px;
    }

    .about-us__image {
      width: 100%;
      height: 716px;
    }

    .about-us__title {
      top: 100px;
      left: 19px;
      font-size: 231px;
      line-height: 144px;
      width: 500px;
      word-break: normal;
    }

    .about-us__title-text {
      font-size: 231px;
      line-height: 144px;
      letter-spacing: -11px;
      width: auto;
    }

    .about-us__title-text::after {
      height: 36px;
    }

    .about-us__text {
      font-size: 33px;
      line-height: 34px;
      width: 87%;
    }
  }

  @media screen and (min-width: 1087px) {
    .about-us {
      display: grid;
      grid-template-columns: auto 1087px auto;
      grid-template-areas:
        "title title right-top"
        "left-bottom text right-bottom";
    }

    .about-us__container {
      grid-area: title;
      height: 418px;
      margin-bottom: 0;
    }

    .about-us__image {
      width: 100%;
      height: 418px;
      object-fit: cover;
    }

    .about-us__title {
      top: 152px;
      left: 18%;
      font-size: 231px;
      line-height: 144px;
      width: 840px;
    }

    .about-us__title-text {
      font-size: 247px;
      line-height: 178px;
      width: auto;
      max-width: none;
    }

    .about-us__title-text::after {
      height: 34px;
    }

    .about-us__text {
      grid-area: text;
      padding-top: 44px;
      font-size: 22px;
      line-height: 29px;
      width: 981px;
    }

    .about-us__colour-container {
      width: calc((100vw - 1087px) / 2);
      height: auto;
    }

    .about-us__colour-container_position_right-top {
      grid-area: right-top;
      background-color: #fff;
    }

    .about-us__colour-container_position_right-bottom {
      grid-area: right-bottom;
      background-color: #cbcbcb;
      position: relative;
    }

    .about-us__colour-container_position_left-bottom {
      grid-area: left-bottom;
      background-color: #b23438;
    }
  }

  @media screen and (min-width: 1280px) {
    .about-us__drop {
      display: block;
      width: 36px;
      height: 62px;
    }
  }
</style>
