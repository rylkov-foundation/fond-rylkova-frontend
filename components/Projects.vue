<template>
  <section class="projects">
    <Drop :style="dropPosition" class="projects__drop" />
    <Support />
    <div class="projects__container">
      <h2 class="projects__title">
        Текущие проекты
      </h2>
      <p class="projects__subtitle">
        В данном разделе  представлена информация  о реализующихся  в настоящее время проектах фонда
      </p>
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
.projects {
  display: flex;
  flex-direction: column;
  position: relative;
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
}

.projects__drop {
  display: none;
}
</style>
