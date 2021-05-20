<template>
  <section class="projects">
    <div class="projects__colour-container projects__colour-container_colour_black-top" />
    <div class="projects__colour-container projects__colour-container_colour_white" />
    <div class="projects__colour-container projects__colour-container_colour_red" />
    <div class="projects__colour-container projects__colour-container_colour_black-bottom">
      <Drop class="projects__drop" />
    </div>
    <Support />
    <LogoWhite />
    <div class="projects__container">
      <div class="projects__title-container">
        <h2 ref="titleContainer" class="projects__title">
          <span v-for="line in splitTitle" :key="line" class="projects__title-text">{{ line }}</span>
        </h2>
        <p class="projects__subtitle">
          {{ pageData['description_' + $i18n.locale] }}
        </p>
      </div>
      <div class="projects__background" />
    </div>
    <ul class="projects__list">
      <Project
        v-for="(project,index) in pageData.projects_items"
        :key="project._id"
        :project="project"
        :index="index"
      />
    </ul>
  </section>
</template>

<script>
import Drop from '@/components/Drop'
import splitLine from '@/utilites/splitLine'

export default {
  name: 'Projects',
  components: {
    Drop
  },
  props: {
    pageData: {
      default: () => {},
      type: Object
    }
  },
  data () {
    return {
      splitTitle: [],
      resizeTimeout: null
    }
  },
  beforeMount () {
    this.handleSplitTitle()
  },
  mounted () {
    window.addEventListener('resize', this.handleSplitTitle)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleSplitTitle)
  },
  updated() {
    this.handleSplitTitle()
  },
  methods: {
    handleSplitTitle () {
      if (!this.resizeTimeout) {
        this.resizeTimeout = setTimeout(() => {
          this.resizeTimeout = null
          this.splitTitle = splitLine(this.pageData['title_' + this.$i18n.locale], this.$refs.titleContainer)
        }, 40)
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
  align-self: stretch;
}

.projects__container {
  background-color: #000;
}

.projects__title {
  font-family: Vollkorn, Times, serif;
  font-size: 80px;
  line-height: 70px;
  font-weight: 600;
  margin: 24px 0 27px;
  letter-spacing: -6px;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.projects__title-text {
  font-family: Vollkorn, Times, serif;
  font-size: 70px;
  line-height: 70px;
  font-weight: 600;
  letter-spacing: -6px;
  position: relative;
  word-break: normal;
}

.projects__title-text::after {
  content: '';
  height: 18px;
  width: 100%;
  background-color: #b23438;
  bottom: 2px;
  left: 0;
  position: absolute;
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
    width: 85%;
  }

  .projects__title-text {
    font-size: 160px;
    line-height: 140px;
    letter-spacing: -12px;
  }

  .projects__title-text::after {
    height: 35px;
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

  .projects__title-container {
    min-width: 559px;
  }

  .projects__title {
    font-size: 107px;
    line-height: 75px;
    margin: 57px 0 38px 21px;
    letter-spacing: -5px;
    max-width: 450px;
  }

  .projects__title-text {
    font-size: 107px;
    line-height: 75px;
    letter-spacing: -5px;
  }

  .projects__title-text::after {
    height: 24px;
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
}
</style>
