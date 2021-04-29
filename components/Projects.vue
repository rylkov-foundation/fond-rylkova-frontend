<template>
  <section class="projects">
    <div class="projects__colour-container projects__colour-container_colour_black-top" />
    <div class="projects__colour-container projects__colour-container_colour_white" />
    <div class="projects__colour-container projects__colour-container_colour_red" />
    <div class="projects__colour-container projects__colour-container_colour_black-bottom">
      <Drop class="projects__drop" />
    </div>
    <Support />
    <img src="@/assets/images/logo_white.png" alt="Логотип" class="logo">
    <div class="projects__container">
      <div class="projects__title-container">
        <h2 class="projects__title">
          Текущие проекты
        </h2>
        <p class="projects__subtitle">
          В данном разделе  представлена информация  о реализующихся  в настоящее время проектах фонда
        </p>
      </div>
      <div class="projects__background" />
    </div>
    <ul class="projects__list">
      <Project
        v-for="(project,index) in projectsData"
        :key="project.id"
        :project="project"
        :index="index"
      />
    </ul>
  </section>
</template>

<script>
import Drop from '@/components/Drop'

export default {
  name: 'Projects',
  components: {
    Drop
  },
  data () {
    return {
      projectsData: [
        {
          id: '1',
          imageLink: 'Solidarite_sida.png',
          title: 'Московский  проект  снижения   вреда 2020',
          date: 'Январь 16th, 2020',
          text: 'Оказание поддержки представителям гей сообщества в Москве, практикующим химсекс,' +
            ' в целях снижения возможного вреда, ассоциированного с данной практикой'
        },
        {
          id: '2',
          imageLink: 'Elton_John.png',
          title: 'Профилактика ВИЧ-инфекции среди людей, употребляющих наркотики на улицах Москвы',
          date: 'Январь 16th, 2020',
          text: 'снизить количество новых случаев ВИЧ, гепатита С, а также смертности от передозировок среди людей,' +
            ' употребляющих наркотики на улицах Москвы, путем обеспечения их доступа' +
            ' к необходимым профилактическим и медицинским услугам, а также информации.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  position: relative;
}

.logo {
  display: none;
}

.projects__container {
  background-color: #000;
}

.projects__title {
  font-family: Vollkorn, Times, serif;
  font-size: 80px;
  line-height: 70px;
  font-weight: 600;
  margin: 24px 0 27px -10px;
  letter-spacing: -6px;
  color: #fff;
  position: relative;
  max-width: 584px;
}

.projects__title::before {
  position: absolute;
  top: 54px;
  left: 0;
  content: '';
  height: 18px;
  background-color: #b23438;
  width: 287px;
}

.projects__title::after {
  position: absolute;
  top: 110px;
  left: 0;
  content: '';
  height: 18px;
  background-color: #b23438;
  width: 287px;
}

.projects__subtitle {
  font-family: Vollkorn, Times, serif;
  font-size: 19px;
  line-height: 18px;
  font-style: italic;
  font-weight: 400;
  color: #fff;
  margin: 0 0 23px 16px;
  max-width: 68%;
}

.projects__background {
  background-image: url("./assets/images/project-back.png");
  height: 278px;
  width: 304px;
  margin: 0 0 5px 4px;
}

.projects__list {
  padding: 0;
  list-style: none;
  border-bottom: 3px solid #c7c7c7;
}

.projects__drop {
  display: none;
}

@media screen and (min-width: 768px) {
  .projects__title {
    font-size: 160px;
    line-height: 140px;
    margin: 38px 0 72px 41px;
    letter-spacing: -12px;
    max-width: 584px;
  }

  .projects__title::before {
    top: 102px;
    left: 19px;
    height: 35px;
    width: 557px;
  }

  .projects__title::after {
    top: 222px;
    left: 17px;
    height: 35px;
    width: 556px;
  }

  .projects__subtitle {
    font-size: 38px;
    line-height: 36px;
    font-style: normal;
    margin: 0 0 18px 55px;
    max-width: 74%;
  }

  .projects__background {
    background-image: url("./assets/images/project-back2.png");
    background-size: contain;
    height: 340px;
    width: 750px;
    margin: 0 0 5px 1px;
  }
}

@media screen and (min-width: 1087px) {
  .projects {
    display: grid;
    grid-template-columns: auto 1087px auto;
    grid-template-areas:
      "black-top title white"
      "red list black-bottom";
  }

  .projects__colour-container {
    width: calc((100vw - 1087px) / 2);
    height: auto;
  }

  .projects__colour-container_colour_black-top {
    grid-area: black-top;
    background-color: #000;
  }

  .projects__colour-container_colour_white {
    grid-area: white;
    background-color: #fff;
  }

  .projects__colour-container_colour_black-bottom {
    grid-area: black-bottom;
    background-color: #000;
    position: relative;
  }

  .projects__colour-container_colour_red {
    grid-area: red;
    background-color: #b23438;
  }

  .projects__container {
    grid-area: title;
    display: flex;
    max-height: 370px;
  }

  .projects__title {
    font-size: 107px;
    line-height: 75px;
    margin: 57px 0 38px 21px;
    letter-spacing: -5px;
    max-width: 410px;
  }

  .projects__title::before {
    top: 55px;
    left: 11px;
    height: 24px;
    width: 366px;
  }

  .projects__title::after {
    top: 132px;
    left: 12px;
    height: 24px;
    width: 388px;
  }

  .projects__subtitle {
    font-size: 22px;
    line-height: 24px;
    margin: 0 0 18px 33px;
    max-width: 60%;
  }

  .projects__background {
    background-image: url("./assets/images/project-back3.png");
    background-size: unset;
    height: 340px;
    width: 928px;
    margin: 30px 29px 0 0;
    z-index: 10;
  }
}

@media screen and (min-width: 1280px) {
  .projects__drop {
    display: block;
    width: 36px;
    height: 62px;
    fill: #fff;
  }

  .logo {
    display: block;
    position: absolute;
    z-index: 13;
    right: 36px;
    width: 117px;
    height: 86px;
    top: 426px;
  }
}
</style>
