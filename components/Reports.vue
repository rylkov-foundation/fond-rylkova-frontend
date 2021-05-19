<template>
  <section class="reports">
    <div class="reports__colour-container reports__colour-container_colour_black-top" />
    <div class="reports__colour-container reports__colour-container_colour_grey-top" />
    <div class="reports__colour-container reports__colour-container_colour_black-bottom">
      <Drop class="reports__drop" />
    </div>
    <Support />
    <LogoWhite />
    <div class="reports__colour-container reports__colour-container_colour_grey-bottom" />
    <div class="reports__container">
      <h2 ref="titleContainer" class="reports__title">
        <span v-for="line in splitTitle" :key="line" class="reports__title-text">{{ line }}</span>
      </h2>
      <p class="reports__subtitle">
        {{ pageData['description_' + $i18n.locale] }}
      </p>
      <Bolt class="reports__image" />
    </div>
    <ul class="reports__list">
      <Report
        v-for="(report,index) in pageData.reports"
        :key="report._id"
        :report="report"
        :index="index"
      />
    </ul>
  </section>
</template>

<script>
import Drop from '@/components/Drop'
import splitLine from '@/utilites/splitLine'

export default {
  name: 'Reports',
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
  beforeMount () {
    this.handleSplitTitle()
  },
  mounted () {
    window.addEventListener('resize', this.handleSplitTitle)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleSplitTitle)
  },
  updated() {
    this.handleSplitTitle()
  },
  methods: {
    handleSplitTitle () {
      if (!this.resizeTimeout) {
        this.resizeTimeout = setTimeout(() => {
          this.resizeTimeout = null
          this.splitTitle = splitLine(this.pageData['title_' + this.$i18n.locale], this.$refs.titleContainer)
        }, 40)
      }
    }
  }
}
</script>

<style scoped>
  .reports {
    overflow: hidden;
    position: relative;
    width: 100vw;
  }

  .reports__container {
    min-height: 300px;
  }

  .reports__title {
    font-family: Vollkorn, Times, serif;
    font-size: 44px;
    line-height: 36px;
    font-weight: 700;
    width: 80%;
    word-break: break-all;
    margin: 42px 0 24px 10px;
    color: #000;
    letter-spacing: -2px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .reports__title-text {
    font-family: Vollkorn, Times, serif;
    font-size: 44px;
    line-height: 36px;
    font-weight: 700;
    letter-spacing: -2px;
    word-break: normal;
    position: relative;
  }

  .reports__title-text::after {
    content: '';
    height: 12px;
    width: 100%;
    background-color: #b23438;
    bottom: 2px;
    left: 0;
    position: absolute;
  }

  .reports__subtitle {
    font-family: Vollkorn, Times, serif;
    font-size: 19px;
    line-height: 18px;
    font-style: italic;
    font-weight: 400;
    max-width: 80%;
    margin: 0 0 0 18px;
    color: #484848;
  }

  .reports__image {
    width: 273px;
    height: 281px;
    margin: 10px 0 27px 38px;
  }

  .reports__list {
    list-style: none;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    .reports__container {
      min-height: 261px;
      max-height: 897px;
      overflow: hidden;
    }

    .reports__title {
      font-size: 88px;
      line-height: 73px;
      font-weight: 600;
      width: 81%;
      margin: 51px 0 29px 46px;
    }

    .reports__title-text {
      font-size: 88px;
      line-height: 73px;
      font-weight: 600;
    }

    .reports__title-text::after {
      height: 23px;
    }

    .reports__subtitle {
      max-width: 85%;
      font-size: 38px;
      line-height: 36px;
      font-style: normal;
      margin: 0 0 0 47px;
    }

    .reports__image {
      width: 520px;
      height: 520px;
      margin-left: 233px;
    }
  }

  @media screen and (min-width: 1087px) {
    .reports {
      display: grid;
      grid-template-columns: auto 1087px auto;
      grid-template-areas:
        "black-top title grey-top"
        "grey-bottom list black-bottom";
    }

    .reports__colour-container {
      width: calc((100vw - 1087px) / 2);
      height: auto;
    }

    .reports__colour-container_colour_black-top {
      grid-area: black-top;
      background-color: #000;
    }

    .reports__colour-container_colour_grey-top {
      grid-area: grey-top;
      background-color: #c8c8c8;
    }

    .reports__colour-container_colour_black-bottom {
      grid-area: black-bottom;
      background-color: #000;
      position: relative;
    }

    .reports__colour-container_colour_grey-bottom {
      grid-area: grey-bottom;
      background-color: #c8c8c8;
    }

    .reports__container {
      grid-area: title;
      min-height: 423px;
    }

    .reports__list {
      grid-area: list;
      padding-bottom: 100px;
      border-bottom: 1px solid #737373;
    }

    .reports__title {
      font-size: 106px;
      line-height: 75px;
      width: 80%;
      margin: 52px 0 41px 20px;
    }

    .reports__title-text {
      font-size: 106px;
      line-height: 75px;
    }

    .reports__title-text::after {
      height: 25px;
    }

    .reports__subtitle {
      max-width: 450px;
      font-size: 22px;
      line-height: 24px;
    }

    .reports__image {
      position: absolute;
      right: 115px;
      top: 164px;
      width: 245px;
      height: 245px;
    }
  }

  @media screen and (min-width: 1280px) {
    .reports__drop {
      fill: #b23438;
    }
  }
</style>
