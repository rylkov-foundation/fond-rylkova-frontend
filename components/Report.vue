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
    <div class="report__text-container">
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
</style>
