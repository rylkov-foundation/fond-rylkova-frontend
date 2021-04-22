<template>
  <li
    class="project"
    :class="{ 'project_color_white': ($attrs.index+1)%2 === 0}"
  >
    <h3 class="project__title">
      {{ project.title }}
    </h3>
    <p class="project__date">
      {{ project.date }}
    </p>
    <p class="project__description">
      {{ project.text }}
    </p>
    <img
      :src="require(`../assets/images/${project.imageLink}`)"
      :alt="project.name"
      class="project__photo"
    >
  </li>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .project {
    display: flex;
    flex-direction: column;
    background-color: #c8c8c8;
  }

  .project_color_white {
    background-color: #fff;
  }

  .project__title {
    text-transform: uppercase;
    font-family: Vollkorn, Times, serif;
    font-size: 26px;
    line-height: 24px;
    font-weight: 700;
    color: #b23438;
    margin: 23px 0 7px 17px;
    max-width: 79%;
  }

  .project__date {
    font-family: Vollkorn, Times, serif;
    font-size: 16px;
    line-height: 14px;
    font-weight: 700;
    color: #000;
    margin: 0 0 16px 17px;
  }

  .project__description {
    font-family: Vollkorn, Times, serif;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    color: #514747;
    max-width: 88%;
    margin: 0 0 0 17px;
  }

  .project__photo {
    object-fit: contain;
    width: 142px;
    margin: 9px 0 28px 8px;
  }

  @media screen and (min-width: 768px) {
    .project__title {
      font-size: 46px;
      line-height: 48px;
      margin: 60px 0 24px 49px;
    }

    .project__date {
      font-size: 38px;
      line-height: 27px;
      margin: 0 0 27px 47px;
    }

    .project__description {
      font-size: 32px;
      line-height: 34px;
      margin: 0 0 0 47px;
    }

    .project__photo {
      width: 292px;
      margin: 10px 0 46px 46px;
    }
  }
</style>
