<template>
  <section class="info">
    <div class="info__colour-container info__colour-container_colour_white" />
    <div class="info__colour-container info__colour-container_colour_black" />
    <div class="info__colour-container info__colour-container_colour_red" />
    <div class="info__colour-container info__colour-container_colour_grey">
      <Drop :style="dropPosition" class="info__drop" />
    </div>
    <img src="@/assets/images/logo_white.png" alt="Логотип" class="logo">
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
  },
  data () {
    return {
      dropPosition: {
        position: 'absolute',
        top: '50%',
        left: '60px',
        transform: 'translateX(-24px)'
      }
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
    align-items: flex-end;
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
    margin: 0 10px 9px 0;
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
    text-align: right;
    max-width: 210px;
    margin: 0 54px 0 0;
    letter-spacing: 1px;
  }

  .info__image {
    width: 100%;
    height: 355px;
    object-fit: cover;
    object-position: left;
  }

  .info__text-container {
    max-width: 80%;
    margin: 5px auto 10px;
  }

  .info__link-description {
    font-family: Vollkorn, Times, serif;
    font-weight: 900;
    line-height: 15px;
    font-size: 15px;
    max-width: 203px;
    margin-bottom: 32px;
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
    line-height: 15px;
    font-size: 11px;
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
    margin: 49px 0 0;
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

  .logo {
    width: 82px;
    position: absolute;
    right: 7px;
    top: 521px;
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
    .info__wrapper {
      display: flex;
      width: 100vw;
      justify-content: center;
      background-color: #b23438;
    }

    .info__rylkov {
      display: block;
      font-family: 'Vollkorn', Times, serif;
      font-size: 41px;
      line-height: 39px;
      color: #b23438;
      text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
      max-width: 186px;
      text-align: right;
      text-transform: uppercase;
    }

    .info__image {
      width: 453px;
      height: 366px;
      object-fit: cover;
      object-position: right;
    }

    .info__container {
      padding: 0;
      position: relative;
      width: 41%;
      overflow: hidden;
      margin-top: -13px;
    }

    .info__title {
      margin: 0;
      position: absolute;
      top: 60px;
      right: 146px;
    }

    .info__title-rylkov {
      margin: 0 -4px 0 0;
    }

    .info__text-container {
      max-width: 93%;
      margin: 5px auto 47px;
    }

    .info__text-container p:last-child {
      margin-top: 10px;
    }

    .info__link-description {
      max-width: 420px;
      margin: 0 0 8px auto;
    }

    .info__text {
      line-height: 20px;
      font-size: 15px;
    }

    .info__video-container {
      margin: 12px 0 0 27px;
      width: 345px;
      float: right;
    }

    .info__video-container p:first-of-type {
      margin: 0 0 22px;
    }

    .info__video {
      height: 277px;
      width: 345px;
      margin: 2px 0 10px 0;
    }

    .logo {
      top: 333px;
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
    }

    .info__rylkov {
      font-size: 59px;
      line-height: 52px;
      max-width: 266px;
      text-shadow:
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        2px 2px 0 #000;
    }

    .info__image {
      width: 654px;
      height: 523px;
    }

    .info__container {
      margin-top: -13px;
      width: 448px;
      top: 0;
    }

    .info__title {
      top: 81px;
      right: 259px;
      font-size: 67px;
      line-height: 48px;
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
    }

    .info__video-container p:first-of-type {
      margin: 0 0 8px;
    }

    .info__video {
      height: 396px;
      width: 494px;
      margin: 2px 0 10px 0;
    }

    .logo {
      width: 116px;
      right: 20px;
      top: 542px;
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
