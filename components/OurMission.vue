<template>
  <section class="mission">
    <div class="mission__header-container">
      <h1 class="mission__header">
        {{ pageData.about['title_' + $i18n.locale] }}
      </h1>
    </div>
    <div class="mission__container">
      <div class="mission__mission-container">
        <h2 ref="titleContainer" class="mission__subtitle">
          <span v-for="line in splitTitle" :key="line" class="mission__title-text">{{ line }}</span>
        </h2>
        <p class="mission__our-mission">
          {{ pageData.mission['description_' + $i18n.locale] }}
        </p>
      </div>
      <NuxtLink to="/about-us" class="link">
        {{ $t('links.moreAboutUs') }} &gt;
      </NuxtLink>
      <div class="mission__footer">
        <img src="~/assets/images/road.png" alt="Дорога" class="mission__road">
        <img src="~/assets/images/logo.svg" alt="Логотип ФАР" class="logo">
      </div>
      <img src="~/assets/images/crystal.svg" alt="Кристал" class="mission__crystal">
    </div>
  </section>
</template>

<script>
import splitLine from '@/utilites/splitLine'

export default {
  name: 'OurMission',
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
          this.splitTitle = splitLine(this.pageData.mission['title_' + this.$i18n.locale], this.$refs.titleContainer)
        }, 40)
      }
    }
  }
}
</script>

<style scoped>
  .mission {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .mission__header {
    color: #fff;
    background-color: #b23438;
    font-size: 23px;
    line-height: 20px;
    font-weight: normal;
    padding: 18px 39px 13px 14px;
    margin: 0;
  }

  .mission__mission-container {
    padding: 23px 0 0 18px;
  }

  .mission__subtitle {
    float: left;
    margin-bottom: -6px;
    margin-right: 32px;
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 26px;
    line-height: 22px;
    font-family: Vollkorn, Times, serif;
    width: 95px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .mission__title-text {
    text-transform: uppercase;
    font-weight: bold;
    position: relative;
    font-size: 27px;
    line-height: 22px;
    font-family: Vollkorn, Times, serif;
    color: #484848;
  }

  .mission__title-text::after {
    content: '';
    position: absolute;
    background-color: #b23438;
    left: -2px;
    bottom: 2px;
    width: 100%;
    height: 7px;
  }

  .mission__our-mission {
    margin: 35px 14px 0 0;
    line-height: 17px;
    min-height: 144px;
  }

  .link {
    text-decoration: none;
    color: #b23438;
    font-size: 17px;
    line-height: 20px;
    font-weight: 600;
    border-bottom: 2px solid #b23438;
    margin: 19px auto 0 16px;
    z-index: 1;
  }

  .link:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  .mission__road {
    width: 200px;
  }

  .logo {
    width: 137px;
    position: absolute;
    right: 5px;
    bottom: 42px;
  }

  .mission__crystal {
    width: 100px;
    position: absolute;
    top: 85px;
    right: 18px;
  }

  .mission__footer {
    display: flex;
    width: 100%;
  }

  @media screen and (min-width: 420px) {
    .mission__crystal {
      top: 65px;
    }
  }

  @media screen and (min-width: 480px) {
    .mission__crystal {
      top: 42px;
    }
  }

  @media screen and (min-width: 768px) {
    .mission__header {
      font-size: 43px;
      line-height: 40px;
      word-spacing: 3px;
      padding: 30px 30px 35px 30px;
    }

    .mission__mission-container {
      padding: 47px 0 0 50px;
    }

    .mission__subtitle {
      margin-bottom: -11px;
      margin-right: 48px;
      margin-top: -3px;
      font-size: 52px;
      line-height: 45px;
      width: 200px;
    }

    .mission__title-text {
      font-size: 52px;
      line-height: 45px;
      letter-spacing: 2px;
    }

    .mission__title-text::after {
      height: 14px;
    }

    .mission__our-mission {
      margin: 56px 45px 0 0;
      font-size: 32px;
      line-height: 34px;
    }

    .link {
      font-size: 34px;
      line-height: 38px;
      margin: 8px 49px 0 406px;
      letter-spacing: 1px;
    }

    .mission__footer {
      margin-top: -88px;
    }

    .mission__road {
      width: 388px;
    }

    .logo {
      width: 237px;
      right: 42px;
      bottom: 42px;
    }

    .mission__crystal {
      width: 200px;
      right: 22px;
      top: 110px;
    }
  }

  @media screen and (min-width: 1280px) {
    .mission {
      grid-area: mission;
      background-color: #cbcbcb;
      width: 100%;
    }

    .mission__header-container {
      background-color: #b23438;
      min-height: 79px;
    }

    .mission__header {
      font-size: 36px;
      line-height: 27px;
      padding: 25px 50px;
      max-width: 710px;
      margin-left: auto;
      min-height: 129px;
    }

    .mission__container {
      width: 615px;
      margin-left: auto;
      background-color: #fff;
      min-height: 586px;
    }

    .mission__mission-container {
      padding: 40px 0 0 91px;
    }

    .mission__subtitle {
      margin-bottom: -6px;
      margin-right: 17px;
      margin-top: 6px;
      font-size: 22px;
      line-height: 22px;
      letter-spacing: 0;
      width: 85px;
    }

    .mission__title-text {
      font-size: 22px;
      line-height: 22px;
      letter-spacing: 0;
    }

    .mission__title-text::after {
      height: 7px;
    }

    .mission__our-mission {
      font-size: 22px;
      line-height: 22px;
      margin-top: 27px;
      margin-right: 85px;
    }

    .link {
      display: none;
    }

    .mission__road {
      width: 350px;
    }

    .mission__footer {
      margin-top: -47px;
      position: relative;
    }

    .logo {
      width: 147px;
      right: 110px;
      bottom: 53px;
    }

    .mission__crystal {
      display: none;
    }
  }
</style>
