<template>
  <section class="reports">
    <div class="reports__colour-container reports__colour-container_colour_black-top" />
    <div class="reports__colour-container reports__colour-container_colour_grey-top" />
    <div class="reports__colour-container reports__colour-container_colour_black-bottom">
      <Drop :style="dropPosition" class="reports__drop" />
    </div>
    <div class="reports__colour-container reports__colour-container_colour_grey-bottom" />
    <img src="@/assets/images/logo_white.png" alt="Логотип" class="logo">
    <div class="reports__container">
      <h2 class="reports__title">
        Финансовые и содержательные годовые  отчеты
        <span class="reports__line reports__line_number_tree" />
        <span class="reports__line reports__line_number_four" />
      </h2>
      <p class="reports__subtitle">
        В данном разделе представлена  информация о реализующихся  в настоящее время проектах фонда
      </p>
      <Bolt class="reports__image" />
    </div>
    <ul class="reports__list">
      <Report
        v-for="(report,index) in reportsData"
        :key="report.id"
        :report="report"
        :index="index"
      />
    </ul>
  </section>
</template>

<script>
import Drop from '@/components/Drop'

export default {
  name: 'Reports',
  components: {
    Drop
  },
  data () {
    return {
      reportsData: [
        {
          id: '1',
          imageLink: 'reports-picture1.png',
          title: 'Отчет о работе  проекта  “Снижение вреда –  Москва” в 2018 году',
          date: 'Январь 16th, 2020',
          text: 'Проект реализовывался ФАР при поддержке AIDSFonds'
        },
        {
          id: '2',
          imageLink: 'reports-picture-2.png',
          title: 'Отчет о  работе проекта  “Снижение вреда –  Москва” в 2018 году',
          date: 'Январь 16th, 2020',
          text: 'Мы собрали самые важные данные, которые отражают проделанную нами работу за 2018 год, и сделали красивую инфографику'
        }
      ],
      dropPosition: {
        position: 'absolute',
        top: '420px',
        left: '60px',
        transform: 'translateX(-24px)'
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

  .logo {
    display: none;
  }

  .reports__container {
    min-height: 300px;
  }

  .reports__title {
    font-family: Vollkorn, Times, serif;
    font-size: 40px;
    line-height: 33px;
    font-weight: 700;
    width: 83%;
    max-width: 415px;
    word-break: break-all;
    margin: 32px 0 20px 12px;
    position: relative;
  }

  .reports__title::before {
    content: "";
    height: 12px;
    background-color: #b23438;
    width: 90%;
    position: absolute;
    top: 23px;
    left: 0;
  }

  .reports__title::after {
    content: "";
    height: 12px;
    background-color: #b23438;
    width: 100%;
    position: absolute;
    top: 55px;
    left: 0;
  }

  .reports__line {
    content: "";
    height: 12px;
    background-color: #b23438;
    position: absolute;
  }

  .reports__line_number_tree {
    top: 92px;
    left: 0;
    width: 94%;
  }

  .reports__line_number_four {
    top: 119px;
    left: 0;
    width: 75%;
  }

  .reports__subtitle {
    font-family: Vollkorn, Times, serif;
    font-size: 15px;
    line-height: 17px;
    font-weight: 400;
    max-width: 43%;
    margin: 0 0 0 33px;
  }

  .reports__image {
    position: absolute;
    right: -32px;
    top: 136px;
    width: 182px;
    height: 174px;
  }

  .reports__list {
    list-style: none;
    padding: 0;
  }

  .reports__drop {
    display: none;
  }

  @media screen and (min-width: 354px) {
    .reports__line_number_four {
      width: 49%;
    }
  }

  @media screen and (min-width: 354px) {
    .reports__line_number_four {
      display: none;
    }
  }

  @media screen and (min-width: 512px) {
    .reports__line_number_tree {
      width: 36%;
    }
  }

  @media screen and (min-width: 768px) {
    .reports__container {
      min-height: 261px;
    }

    .logo {
      display: block;
      width: 82px;
      position: absolute;
      right: 2px;
      top: 353px;
    }

    .reports__title {
      font-size: 75px;
      line-height: 53px;
      font-weight: 600;
      width: 81%;
      max-width: 603px;
      margin: 36px 0 29px 20px;
      word-break: normal;
    }

    .reports__title::before {
      height: 17px;
      width: 82%;
      top: 44px;
      left: 9px;
    }

    .reports__title::after {
      height: 17px;
      width: 95%;
      top: 95px;
      left: 6px;
    }

    .reports__line {
      height: 17px;
    }

    .reports__line_number_tree {
      top: 143px;
      left: 9px;
      width: 89%;
    }

    .reports__subtitle {
      max-width: 40%;
    }

    .reports__image {
      right: 8px;
      top: 112px;
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
      width: 869px;
      max-width: 869px;
      margin: 52px 0 41px 20px;
    }

    .reports__title::before {
      height: 25px;
      top: 60px;
      left: 13px;
    }

    .reports__title::after {
      height: 25px;
      top: 130px;
      left: 13px;
    }

    .reports__line {
      height: 25px;
    }

    .reports__line_number_tree {
      top: 201px;
      left: 12px;
      width: 87%;
    }

    .reports__subtitle {
      max-width: 450px;
      font-size: 22px;
      line-height: 24px;
    }

    .reports__image {
      right: 115px;
      top: 164px;
      width: 245px;
      height: 245px;
    }

    .logo {
      z-index: 13;
      right: 17px;
      width: 117px;
      height: 86px;
      top: 521px;
    }
  }

  @media screen and (min-width: 1280px) {
    .reports__drop {
      display: block;
      width: 36px;
      height: 62px;
      fill: #b23438;
    }
  }
</style>
