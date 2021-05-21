<template>
  <section class="info">
    <LogoWhite />
    <Support />
    <div class="info__colour-container info__colour-container_colour_white" />
    <div class="info__colour-container info__colour-container_colour_black" />
    <div class="info__colour-container info__colour-container_colour_red" />
    <div class="info__colour-container info__colour-container_colour_grey">
      <Drop class="info__drop" />
    </div>
    <div class="info__wrapper">
      <div class="info__container">
        <p class="info__rylkov">
          {{ $t('rylkov.surname') }}
        </p>
        <p class="info__rylkov">
          {{ $t('rylkov.rylkovTitleSecond') }}
        </p>
        <h2 class="info__title">
          <span class="info__title-start">{{ $t('rylkov.rylkovTitleFirst') }}</span>
          <span class="info__title-rylkov">{{ $t('rylkov.rylkovTitleSecond') }}</span>
        </h2>
        <p class="info__rylkov">
          {{ $t('rylkov.rylkovTitleSecond') }}
        </p>
        <p class="info__rylkov">
          {{ $t('rylkov.rylkovTitleSecond') }}
        </p>
        <p class="info__rylkov">
          {{ $t('rylkov.name') }}
        </p>
      </div>
      <img
        :src="$config.constants.serverUrl +pageData.image.url"
        :alt="pageData['title_' + $i18n.locale]"
        class="info__image"
      >
    </div>
    <div class="info__text-container" v-html="pageData['content_' + $i18n.locale]" />
  </section>
</template>

<script>
import Drop from '@/components/Drop'

export default {
  name: 'Rylkov',
  components: {
    Drop
  },
  props: {
    pageData: {
      default: () => {},
      type: Object
    }
  }
}
</script>

<style scoped>
  .info {
    display: block;
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid #989898;
  }

  .info__container {
    background-color: #b23438;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px 0 6px 0;
  }

  .info__title {
    font-family: Vollkorn, Times, serif;
    font-weight: 600;
    font-size: 47px;
    line-height: 34px;
    color: #fff;
    max-width: 143px;
    text-align: left;
    margin: 19px 10px 0 14px;
    letter-spacing: -3px;
  }

  .info__rylkov {
    display: none;
  }

  .info__title-rylkov {
    display: block;
    font-family: Vollkorn, Times, serif;
    font-weight: 600;
    line-height: 36px;
    text-transform: uppercase;
    font-size: 41px;
    color: #cbcbcb;
    text-align: left;
    max-width: 210px;
    margin: 10px 0 0;
    letter-spacing: 1px;
  }

  .info__image {
    width: 100%;
    height: 397px;
    object-fit: cover;
    object-position: left;
  }

  .info__text-container {
    max-width: 88%;
    margin: 20px auto 10px;
  }

  .info__video-container p:first-of-type {
    margin: 0 0 16px;
  }

  .info__drop {
    display: none;
  }

  @media screen and (min-width: 470px) {
    .info__image {
      object-fit: contain;
      object-position: center;
      background-color: #000;
    }
  }

  @media screen and (min-width: 768px) {
    .info__image {
      width: 100%;
      height: 623px;
      object-fit: cover;
      object-position: right;
    }

    .info__container {
      padding: 26px 0 33px 42px;
    }

    .info__title {
      margin: 0;
      font-size: 76px;
      line-height: 67px;
      max-width: unset;
    }

    .info__title-rylkov {
      margin: 0 -4px 0 0;
      font-size: 90px;
      line-height: 74px;
      max-width: 455px;
      font-weight: 800;
    }

    .info__text-container {
      max-width: 87%;
      margin: 47px auto 47px;
    }

    .info__text-container p:last-child {
      margin-top: 10px;
    }

    .info__video-container p:first-of-type {
      margin: 0 0 37px;
    }
  }

  @media screen and (min-width: 1087px) {
    .info {
      display: grid;
      grid-template-columns: auto 1087px auto;
      grid-template-areas:
        "black title white"
        "red text grey";
    }

    .info__wrapper {
      width: 1087px;
      display: flex;
      justify-content: center;
      background-color: #b23438;
    }

    .info__rylkov {
      display: block;
      font-size: 59px;
      line-height: 52px;
      max-width: 266px;
      text-shadow:
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        2px 2px 0 #000;
      font-family: 'Vollkorn', Times, serif;
      color: #b23438;
      text-align: right;
      text-transform: uppercase;
    }

    .info__image {
      width: 654px;
      height: 523px;
    }

    .info__container {
      margin-top: -13px;
      width: 448px;
      top: 0;
      padding: 0;
      position: relative;
      overflow: hidden;
      align-items: flex-end;
    }

    .info__title {
      font-size: 67px;
      line-height: 48px;
      margin: 0;
      text-align: right;
    }

    .info__title-rylkov {
      font-size: 59px;
      line-height: 55px;
      max-width: 288px;
      text-align: right;
      margin-right: 13px;
    }

    .info__title-start {
      position: absolute;
      right: 256px;
      top: 68px;
      max-width: 270px;
    }

    .info__text-container {
      max-width: 94%;
      margin: 5px auto 54px;
    }

    .info__text-container p:last-child {
      margin-top: 17px;
    }

    .info__video-container p:first-of-type {
      margin: 0 0 8px;
    }

    .info__colour-container {
      width: calc((100vw - 1087px) / 2);
      height: auto;
    }

    .info__colour-container_colour_white {
      grid-area: white;
      background-color: #fff;
    }

    .info__colour-container_colour_grey {
      grid-area: grey;
      background-color: #cbcbcb;
      position: relative;
    }

    .info__colour-container_colour_red {
      grid-area: red;
      background-color: #b23438;
    }

    .info__colour-container_colour_black {
      grid-area: black;
      background-color: #000;
    }
  }

  @media screen and (min-width: 1280px) {
    .info__drop {
      display: block;
      width: 36px;
      height: 62px;
    }
  }
</style>
