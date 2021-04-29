<template>
  <section class="about-us">
    <h2 class="about-us__title">
      <span class="about-us__title-text">
        О нас
      </span>
    </h2>
    <Support />
    <img src="@/assets/images/logo_white.png" alt="Логотип" class="logo">
    <p class="about-us__text">
      Адвокация более гуманной наркополитики на страновом уровне, соблюдения прав человека в отношении людей,
      употребляющих наркотики, а также обеспечения доступа в России к лечению наркозависимости и сопутствующих
      заболеваний, таких как ВИЧ, гепатиты и т.д., является одним из ключевых направлений деятельности Фонда.
      В рамках своей адвокационной деятельности Фонд подает стратегические иски в различные судебные инстанции
      национального уровня, направляет обращения и открытые письма в соответствующие учреждения, проводит пикеты
      и акции – т.е. осуществляет целый ряд мероприятий, которые в конечном итоге направлены на изменение
      существующего неадекватного законодательства или действующих практик.

      Параллельно с адвокацией на национальном уровне мы также стараемся влиять на неправоменую и неэффективную
      наркополитику в России и ситуацию с доступом к лечению наркозависимости научно обоснованными методами
      через соответствующие международные инстанции и механизмы. Так, при поддержке наших партнеров из Канадской
      правовой сети по ВИЧ\СПИД, мы периодически готовим и направляем обращения, жалобы, теневые доклады и т.д.
      в соответствующие международные органы, призванные отслеживать соблюдение прав человека, в том числе
      различные комитеты ООН, которые занимаются мониторинком выполнения странами – подписантами соответствующих
      международных конвенций своих обязательств, взятых на себя в рамках данных конвенций. К таким комитетам
      и международным инстанциям относятся, например, Комитет ООН по Экономическим, Социальным и Культурным
      правам, Комитет ООН против пыток, Специальные докладчики ООН по вопросам здоровья, прав человека и т.д.
      Мы стараемся мотивировать эти структуры на формулирование четких рекомендаций в отношении России
      касательно необходимости приведения внутреннего законодательства в соответствие с международными нормами
      и обязательствами, которе могут служить в дальнейшем базой для национальной адвокации и принятия решений
      различных судебных инстанций, включая ЕСПЧ.
    </p>
    <div class="about-us__colour-container about-us__colour-container_colour_white" />
    <div class="about-us__colour-container about-us__colour-container_colour_red" />
    <div class="about-us__colour-container about-us__colour-container_colour_grey">
      <Drop class="about-us__drop" />
    </div>
  </section>
</template>

<script>
import Drop from '@/components/Drop'

export default {
  name: 'AboutUs',
  components: {
    Drop
  }
}
</script>

<style scoped>
  .about-us {
    position: relative;
    border-bottom: 1px solid #a2a2a2;
    padding-bottom: 56px;
  }

  .about-us__title {
    background-image: url("./assets/images/about-us.png");
    height: 340px;
    background-position: center;
    background-size: cover;
    padding: 27px 0 0 23px;
    margin-bottom: 32px;
  }

  .about-us__title-text {
    display: block;
    max-width: 160px;
    color: #fff;
    font-family: Vollkorn, Times, serif;
    font-size: 115px;
    font-style: italic;
    font-weight: 400;
    line-height: 71px;
    position: relative;
  }

  .about-us__title-text::before {
    content: '';
    position: absolute;
    background-color: #b23438;
    left: -5px;
    top: 55px;
    width: 104px;
    height: 17px;
  }

  .about-us__title-text::after {
    content: '';
    position: absolute;
    background-color: #b23438;
    left: -3px;
    top: 128px;
    width: 137px;
    height: 17px;
  }

  .about-us__text {
    font-family: Vollkorn, Times, serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    max-width: 88%;
    margin: 0 auto;
  }

  .logo {
    display: none;
  }

  .about-us__drop {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .about-us__title {
      height: 715px;
      padding: 79px 0 0 52px;
      margin-bottom: 40px;
    }

    .about-us__title-text {
      max-width: 450px;
      font-size: 231px;
      line-height: 144px;
      word-spacing: -5px;
      letter-spacing: -11px;
    }

    .about-us__title-text::before {
      left: 2px;
      top: 108px;
      width: 207px;
      height: 36px;
    }

    .about-us__title-text::after {
      left: 1px;
      top: 252px;
      width: 276px;
      height: 36px;
    }

    .about-us__text {
      font-size: 33px;
      line-height: 34px;
      max-width: 87%;
    }
  }

  @media screen and (min-width: 1087px) {
    .about-us {
      display: grid;
      grid-template-columns: auto 1087px auto;
      grid-template-areas:
        "title title white"
        "red text grey";
    }

    .about-us__title {
      grid-area: title;
      height: 418px;
      padding: 152px 0 0 79px;
      margin-bottom: 0;
      max-width: 1186px;
      width: 100%;
      background-position: left;
      justify-self: right;
    }

    .about-us__title-text {
      grid-area: text;
      max-width: none;
      font-size: 247px;
      line-height: 178px;
      word-spacing: -23px;
      letter-spacing: -11px;
    }

    .about-us__title-text::before {
      display: none;
    }

    .about-us__title-text::after {
      left: 28px;
      top: 127px;
      width: 479px;
      height: 34px;
    }

    .about-us__text {
      padding-top: 44px;
      font-size: 22px;
      line-height: 29px;
      max-width: 981px;
    }

    .about-us__colour-container {
      width: calc((100vw - 1087px) / 2);
      height: auto;
    }

    .about-us__colour-container_colour_white {
      grid-area: white;
      background-color: #fff;
    }

    .about-us__colour-container_colour_grey {
      grid-area: grey;
      background-color: #cbcbcb;
      position: relative;
    }

    .about-us__colour-container_colour_red {
      grid-area: red;
      background-color: #b23438;
    }
  }

  @media screen and (min-width: 1280px) {
    .about-us__drop {
      display: block;
      width: 36px;
      height: 62px;
    }

    .logo {
      position: absolute;
      display: block;
      z-index: 15;
      right: 28px;
      top: 545px;
      width: 113px;
    }
  }
</style>
