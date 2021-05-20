<template>
  <header class="header">
    <div class="header__text" :class="{ header__text_en: $i18n.locale === 'en' }" />
    <LanguageButton />
  </header>
</template>

<script>
import logoRu from '@/assets/images/title.svg'
import logoEn from '@/assets/images/title_en.svg'

export default {
  name: 'MainHeader',
  data () {
    return {
      image_ru: logoRu,
      image_en: logoEn
    }
  }
}
</script>

<style scoped>
  .header {
    background-color: #b23438;
    overflow: hidden;
    height: 40px;
    max-width: 100%;
    position: relative;
  }

  .header__text {
    color: #b23438;
    background-image: url("~/assets/images/title.svg");
    background-repeat: repeat-x;
    width: 100vw;
    height: 100%;
    animation: animate 10s linear infinite;
  }

  @keyframes animate {
    from {
      background-position: 0 -215%;
    }

    to {
      background-position: 680px -215%;
    }
  }

  .header__text_en {
    background-image: url("~/assets/images/title_en.svg");
    animation: animate_en 7s linear infinite;
  }

  @keyframes animate_en {
    from {
      background-position: 0 -250%;
    }

    to {
      background-position: 580px -250%;
    }
  }

  @media screen and (min-width: 768px) {
    .header {
      height: 66px;
    }

    .header__text {
      background-size: 926px;
      background-position: -150px 28px;
    }

    @keyframes animate {
      from {
        background-position: 0 28px;
      }

      to {
        background-position: 926px 28px;
      }
    }

    .header__text_en {
      animation: animate_en 10s linear infinite;
    }

    @keyframes animate_en {
      from {
        background-position: 0 -400%;
      }

      to {
        background-position: 926px -400%;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .header {
      height: 53px;
    }

    .header__text {
      background-size: 900px;
      background-position: -250px 12px;
    }

    .header__text_en {
      animation: animate_en 10s linear infinite;
    }

    @keyframes animate {
      from {
        background-position: 0 12px;
      }

      to {
        background-position: 900px 12px;
      }
    }

    @keyframes animate_en {
      from {
        background-position: 0 8px;
      }

      to {
        background-position: 900px 8px;
      }
    }
  }
</style>
