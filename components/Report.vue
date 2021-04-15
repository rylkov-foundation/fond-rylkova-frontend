<template>
  <li
    class="report"
    :class="{ 'report_color_white': ($attrs.index+1)%2 === 0}"
  >
    <img
      :src="require(`../assets/images/${report.imageLink}`)"
      :alt="report.title"
      class="report__image"
    >
    <div
      class="report__text-container"
      :class="{ 'report__text-container_color_white': ($attrs.index+1)%2 === 0}"
    >
      <h3
        class="report__title"
        :class="{ 'report__title_color_white': ($attrs.index+1)%2 === 0}"
      >
        {{ report.title }}
      </h3>
      <p
        class="report__date"
        :class="{ 'report__date_color_white': ($attrs.index+1)%2 === 0}"
      >
        {{ report.date }}
      </p>
      <p
        class="report__text"
        :class="{ 'report__text_color_white': ($attrs.index+1)%2 === 0}"
      >
        {{ report.text }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Report',
  props: {
    report: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .report {
    display: flex;
    flex-direction: column;
    background-color: #b23438;
    border-bottom: 1px solid #fff;
    align-items: center;
  }

  .report_color_white {
    background-color: #fff;
    border-color: #434343;
  }

  .report__image {
    width: 320px;
    height: 190px;
    object-fit: cover;
  }

  .report__text-container {
    display: flex;
    flex-direction: column;
    max-width: 83%;
    margin: 7px auto 28px;
  }

  .report__title {
    font-family: Vollkorn, Times, serif;
    font-size: 23px;
    line-height: 23px;
    text-transform: uppercase;
    color: #c8c8c8;
    margin-bottom: 13px;
    font-weight: 600;
  }

  .report__title_color_white {
    color: #b23438;
  }

  .report__date {
    font-family: Vollkorn, Times, serif;
    font-size: 16px;
    line-height: 13px;
    color: #000;
    font-weight: 600;
    border-bottom: 2px solid #fff;
    align-self: flex-start;
    padding-bottom: 7px;
    margin-bottom: 7px;
  }

  .report__date_color_white {
    border-color: #000;
  }

  .report__text {
    font-family: Vollkorn, Times, serif;
    font-size: 13px;
    line-height: 16px;
    color: #fff;
    font-weight: 400;
  }

  .report__text_color_white {
    color: #615858;
  }

  @media screen and (min-width: 768px) {
    .report {
      flex-direction: row;
      align-items: flex-start;
    }

    .report_color_white {
      background-color: #fff;
      border-bottom: 2px solid #b23438;
    }

    .report__image {
      height: auto;
      width: calc(100% / 2);
    }

    .report__text-container {
      margin-bottom: 0;
    }

    .report__text-container_color_white {
      order: -1;
    }

    .report__title {
      margin: 21px 0 16px 21px;
    }

    .report__title_color_white {
      text-align: right;
      margin: 21px 21px 16px 0;
    }

    .report__date {
      margin: 0 0 8px 24px;
      padding-bottom: 10px;
      color: #b3a2a3;
    }

    .report__date_color_white {
      color: #000;
      text-align: right;
      margin: 0 24px 8px auto;
      border-color: #b23438;
    }

    .report__text {
      font-size: 15px;
      line-height: 18px;
      margin-left: 24px;
    }

    .report__text_color_white {
      text-align: right;
      margin-left: 0;
      margin-right: 24px;
    }
  }
</style>
