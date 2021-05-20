<template>
  <li
    class="project"
    :class="{ 'project_position_even': ($attrs.index + 1) % 2 === 0 }"
  >
    <h3
      class="project__title"
      :class="{ 'project__title_position_even': ($attrs.index + 1) % 2 === 0 }"
    >
      {{ project['title_' + $i18n.locale] }}
    </h3>
    <div
      class="project__text-container"
      :class="{ 'project__text-container_position_even': ($attrs.index + 1) % 2 === 0 }"
    >
      <p
        class="project__date"
        :class="{ 'project__date_position_even': ($attrs.index + 1) % 2 === 0 }"
      >
        {{ project['date_' + $i18n.locale] }}
      </p>
      <p
        class="project__description"
        :class="{ 'project__description_position_even': ($attrs.index + 1) % 2 === 0 }"
      >
        {{ project['description_' + $i18n.locale] }}
      </p>
    </div>
    <img
      :src="$config.constants.serverUrl +project.image.url"
      :alt="project['title_' + $i18n.locale]"
      class="project__photo"
      :class="{ 'project__photo_position_even': ($attrs.index + 1) % 2 === 0 }"
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

  .project_position_even {
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

  @media screen and (min-width: 1087px) {
    .project {
      flex-direction: row;
    }

    .project__text-container {
      margin: 42px 0 40px 53px;
    }

    .project__text-container_position_even {
      order: -1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: 42px 53px 40px 0;
    }

    .project__title {
      font-size: 40px;
      line-height: 39px;
      margin: 43px 0 35px 0;
      text-align: right;
    }

    .project__title_position_even {
      text-align: left;
    }

    .project__date {
      font-size: 23px;
      line-height: 19px;
      margin: 0 0 5px 0;
      border-bottom: 2px solid #fff;
      width: max-content;
      padding-bottom: 10px;
    }

    .project__date_position_even {
      border-color: #c7c7c7;
    }

    .project__description {
      font-size: 22px;
      line-height: 29px;
      margin: 0;
    }

    .project__description_position_even {
      text-align: right;
    }

    .project__photo {
      order: -1;
      width: 183px;
      margin: 42px 0 40px 30px;
    }

    .project__photo_position_even {
      order: 5;
      margin: 0;
    }
  }
</style>
