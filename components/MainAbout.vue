<template>
  <section class="about">
    <p class="about__text">
      <span class="about__name">{{ $t('fundName') }}</span> {{ pageData.about[`description_${$i18n.locale}`] }}
    </p>
    <svg
      class="about__drop"
      viewBox="0 0 26.7 47.81"
    >
      <path
        d="M13.18.598S8.284 15.485 2.354 25.536c-5.07 8.593-1.567 22.77 12.996 21.797 11.836-.793
         14.18-16.723 7.527-26.059C16.222 11.938 13.18.598 13.18.598"
      />
    </svg>
  </section>
</template>

<script>
export default {
  name: 'MainAbout',
  props: {
    pageData: {
      default: () => {},
      type: Object
    }
  }
}
</script>

<style scoped>
  .about {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .about__name {
    font-family: RussoOne, serif;
    font-weight: bold;
    position: relative;
  }

  .about__name::after {
    content: '';
    position: absolute;
    left: -3px;
    top: 18px;
    background-color: #b23438;
    width: 100%;
    height: 11px;
  }

  .about__text {
    font-family: RussoOne, serif;
    font-style: italic;
    font-size: 25px;
    text-align: left;
    line-height: 23px;
    margin: 24px auto 28px 17px;
    white-space: pre-line;
    width: 70vw;
    max-width: 348px;
    min-height: 135px;
  }

  .about__drop {
    width: 23px;
    height: 40px;
    position: absolute;
    right: 9px;
    top: 165px;
  }

  @media screen and (min-width: 768px) {
    .about__text {
      font-size: 48px;
      margin: 31px auto 21px 54px;
      line-height: 43px;
      max-width: 570px;
      min-height: 212px;
    }

    .about__name::after {
      left: -1px;
      top: 34px;
      height: 17px;
    }

    .about__drop {
      width: 40px;
      height: 65px;
      top: 255px;
      right: 17px;
    }
  }

  @media screen and (min-width: 1280px) {
    .about__text {
      font-size: 36px;
      margin: 61px auto 81px;
      line-height: 34px;
      max-width: 860px;
      padding-right: 180px;
      min-height: 100px;
    }

    .about__name::after {
      left: -3px;
      top: 26px;
      height: 11px;
    }

    .about__drop {
      width: 38px;
      height: 64px;
    }
  }
</style>
