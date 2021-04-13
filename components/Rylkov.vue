<template>
  <section class="info">
    <img src="@/assets/images/logo_white.png" alt="Логотип" class="logo">
    <div class="info__container">
      <h2 class="info__title">
        Кто такой
      </h2>
      <h2 class="info__title-rylkov">
        Андрей Рыльков
      </h2>
    </div>
    <img src="@/assets/images/Рыльков.png" alt="Рыльков" class="info__image">
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
export default {
  name: 'Rylkov'
}
</script>

<style scoped>
  .info {
    display: block;
    overflow: hidden;
    position: relative;
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

  .info__text-container p:nth-of-type(3n) {
    margin: 49px 0 16px 0;
  }

  .info__video {
    height: 205px;
    width: 100%;
    margin: 24px 0 10px 0;
  }

  .logo {
    width: 82px;
    position: absolute;
    right: 7px;
    top: 626px;
  }
</style>
