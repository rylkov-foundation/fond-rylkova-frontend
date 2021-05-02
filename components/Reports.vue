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
      ]
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
    width: 83%;
    max-width: 290px;
    word-break: break-all;
    margin: 21px 0 24px 18px;
    position: relative;
    color: #000;
    letter-spacing: -2px;
  }

  .reports__title::before {
    content: "";
    height: 12px;
    background-color: #b23438;
    width: 252px;
    position: absolute;
    top: 23px;
    left: 0;
  }

  .reports__title::after {
    content: "";
    height: 12px;
    background-color: #b23438;
    width: 241px;
    position: absolute;
    top: 58px;
    left: 0;
  }

  .reports__line {
    content: "";
    height: 12px;
    background-color: #b23438;
    position: absolute;
  }

  .reports__line_number_tree {
    top: 93px;
    left: 0;
    width: 247px;
  }

  .reports__line_number_four {
    top: 129px;
    left: 0;
    width: 194px;
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

  @media screen and (min-width: 325px) {
    .reports__title::after {
      width: 264px;
    }

    .reports__line_number_four {
      width: 165px;
    }
  }

  @media screen and (min-width: 337px) {
    .reports__line_number_tree {
      width: 275px;
    }

    .reports__line_number_four {
      width: 147px;
    }
  }

  @media screen and (min-width: 354px) {
    .reports__line_number_four {
      width: 49%;
    }
  }

  @media screen and (min-width: 500px) {
    .reports__title {
      max-width: 418px;
    }

    .reports__title::before {
      width: 407px;
    }

    .reports__title::after {
      width: 396px;
    }

    .reports__line_number_tree {
      width: 150px;
    }

    .reports__line_number_four {
      display: none;
    }
  }

  @media screen and (min-width: 620px) {
    .reports__title {
      max-width: 514px;
    }

    .reports__title::before {
      width: 508px;
    }

    .reports__title::after {
      width: 445px;
    }

    .reports__line_number_tree {
      display: none;
    }
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
      max-width: 603px;
      margin: 51px 0 29px 46px;
    }

    .reports__title::before {
      height: 23px;
      width: 575px;
      top: 48px;
      left: 0;
    }

    .reports__title::after {
      height: 23px;
      width: 561px;
      top: 115px;
      left: -1px;
    }

    .reports__line {
      height: 23px;
    }

    .reports__line_number_tree {
      display: inline;
      top: 187px;
      left: -1px;
      width: 555px;
    }

    .reports__line_number_four {
      display: inline;
      top: 265px;
      left: -1px;
      width: 191px;
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

  @media screen and (min-width: 950px) {
    .reports__title {
      max-width: 739px;
    }

    .reports__title::before {
      width: 676px;
    }

    .reports__title::after {
      width: 683px;
    }

    .reports__line_number_tree {
      width: 542px;
    }

    .reports__line_number_four {
      display: none;
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
      width: 865px;
      max-width: 865px;
      margin: 52px 0 41px 20px;
      word-break: break-all;
    }

    .reports__title::before {
      height: 25px;
      top: 49px;
      left: 13px;
      width: 812px;
    }

    .reports__title::after {
      height: 25px;
      top: 121px;
      left: 13px;
      width: 824px;
    }

    .reports__line {
      height: 25px;
    }

    .reports__line_number_tree {
      top: 201px;
      left: 12px;
      width: 656px;
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
