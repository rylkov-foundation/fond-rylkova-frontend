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
          Рыльков
        </p>
        <p class="info__rylkov">
          Андрей Рыльков
        </p>
        <h2 class="info__title">
          Кто такой
        </h2>
        <h2 class="info__title-rylkov">
          Андрей Рыльков
        </h2>
        <p class="info__rylkov">
          Андрей Рыльков
        </p>
        <p class="info__rylkov">
          Андрей Рыльков
        </p>
        <p class="info__rylkov">
          Андрей
        </p>
      </div>
      <img src="@/assets/images/Рыльков.png" alt="Рыльков" class="info__image">
    </div>
    <div class="info__text-container">
      <p class="info__link-description">
        Прочитать еще про Ирокеза можно <a class="info__link" href="#">здесь>></a>
      </p>
      <p class="info__text">
        Имя Андрея Рылькова (Ирокеза) хорошо известно всем, кто занимался и занимается проблемами,
        описанными выше, в России. Андрей начал свою деятельность в качестве волонтера-уличного
        работника проекта Снижение вреда – Москва в 2000 г. Являясь наркопотребителем, он хорошо понимал
        проблемы тех людей, с которыми работал, и никогда не оставался к ним равнодушным, никогда не переставал
        говорить о них во весь голос. Через несколько лет работы, он стал лидером, увлекшим за собой многих
        – организовал профсоюз аутрич работников, активно участвовал в работе самоорганизации потребителей
        наркотиков «Колодец», объединил практически всех активистов, работающих в области ВИЧ/СПИДа в движение
        ФронтЭЙДЗ, основной целью которого было обеспечение доступности лечения ВИЧ в России.
      </p>
      <div class="info__video-container">
        <p class="info__video-description">
          Предлагаем так же вашему внимание короткое видео о деятельности движения ФронтЭЙДЗ.
        </p>
        <p class="info__video-description">
          Где-то на пятной минуте – говорит Андрей Рыльков.
        </p>
        <iframe
          class="info__video"
          src="https://www.youtube.com/embed/_y0q9kKJOZw"
          title="YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
          Ваш браузер не поддерживает плавающие фреймы
        </iframe>
      </div>
      <p class="info__text">
        «Мы будем жить – это наша политика» – девиз ФронтЭЙДЗ, придавший силы в борьбе за доступ к лечению, медикаментам, жизни
        и достоинству для многих из нас. Андрей умер в октябре 2006 года, но для нас он всегда останется самым
        дорогим другом, лидером и вдохновением для нашей работы. Символом надежды на то, что наркополитика может
        быть гуманной и эффективной, что люди не должны быть наказаны болезнями и смертью за наркозависимость,
        что медицинская система может работать так, чтобы лечить, а не калечить, правоохранительные органы –
        защищать и охранять, а не унижать, избивать и грабить, и что люди, затронутые проблемой наркотиков имеют
        достаточно сил и возможностей для того, чтобы защищать себя и своих близких. Для этого мы работаем.
      </p>
    </div>
  </section>
</template>

<script>
import Drop from '@/components/Drop'

export default {
  name: 'Rylkov',
  components: {
    Drop
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
    margin: 19px 10px 7px 14px;
    letter-spacing: -3px;
  }

  .info__rylkov {
    display: none;
  }

  .info__title-rylkov {
    font-family: Vollkorn, Times, serif;
    font-weight: 600;
    line-height: 36px;
    text-transform: uppercase;
    font-size: 41px;
    color: #cbcbcb;
    text-align: left;
    max-width: 210px;
    margin: 0 0 0 15px;
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

  .info__link-description {
    font-family: Vollkorn, Times, serif;
    font-weight: 900;
    line-height: 15px;
    font-size: 15px;
    max-width: 203px;
    margin-bottom: 26px;
  }

  .info__link {
    color: #b23438;
    text-decoration: none;
    border-bottom: 3px solid #e7bfc1;
    font-family: Vollkorn, Times, serif;
    font-weight: 900;
    line-height: 15px;
    font-size: 15px;
  }

  .info__text {
    font-family: Vollkorn, Times, serif;
    font-weight: 400;
    line-height: 16px;
    font-size: 14px;
  }

  .info__video-description {
    display: block;
    font-family: Vollkorn, Times, serif;
    font-weight: 600;
    line-height: 14px;
    font-size: 15px;
    color: #b23438;
    word-break: break-all;
  }

  .info__video-container {
    margin: 23px 0 0;
  }

  .info__video-container p:first-of-type {
    margin: 0 0 16px;
  }

  .info__video {
    height: 205px;
    width: 100%;
    margin: 24px 0 10px 0;
    border: none;
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
    }

    .info__text-container {
      max-width: 87%;
      margin: 47px auto 47px;
    }

    .info__text-container p:last-child {
      margin-top: 10px;
    }

    .info__link-description {
      font-size: 38px;
      line-height: 39px;
      max-width: 470px;
      margin: 0 0 54px 0;
    }

    .info__link {
      font-size: 38px;
      line-height: 39px;
    }

    .info__text {
      font-size: 33px;
      line-height: 34px;
    }

    .info__video-container {
      margin: 34px auto 0;
      width: 100%;
    }

    .info__video-description {
      font-size: 33px;
      line-height: 34px;
    }

    .info__video-container p:first-of-type {
      margin: 0 0 37px;
    }

    .info__video {
      height: 530px;
      width: 100%;
      margin: 43px 0 40px 0;
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
    }

    .info__title {
      top: 81px;
      right: 259px;
      font-size: 67px;
      line-height: 48px;
      margin: 0;
      position: absolute;
    }

    .info__title-rylkov {
      font-size: 59px;
      line-height: 55px;
      max-width: 288px;
    }

    .info__text-container {
      max-width: 94%;
      margin: 5px auto 54px;
    }

    .info__text-container p:last-child {
      margin-top: 17px;
    }

    .info__link-description {
      max-width: 596px;
      margin: 18px 0 12px auto;
      line-height: 24px;
      font-size: 22px;
    }

    .info__link {
      line-height: 24px;
      font-size: 22px;
    }

    .info__text {
      line-height: 29px;
      font-size: 22px;
    }

    .info__video-description {
      line-height: 20px;
      font-size: 22px;
    }

    .info__video-container {
      margin: 21px 0 0 27px;
      width: 494px;
      float: right;
    }

    .info__video-container p:first-of-type {
      margin: 0 0 8px;
    }

    .info__video {
      height: 396px;
      width: 494px;
      margin: 2px 0 10px 0;
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
