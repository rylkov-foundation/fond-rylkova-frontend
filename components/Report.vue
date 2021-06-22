<template>
  <li class="report">
    <img
      :src="`${$config.constants.serverUrl}${report.image.url}`"
      :alt="report[`title_${$i18n.locale}`]"
      class="report__image"
    >
    <div class="report__text-container">
      <h3 class="report__title">
        {{ report[`title_${$i18n.locale}`] }}
      </h3>
      <p class="report__date">
        {{ report[`date_${$i18n.locale}`] }}
      </p>
      <p class="report__text">
        {{ report[`description_${$i18n.locale}`] }}
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

  .report:last-of-type {
    border-bottom: none;
  }

  .report:nth-child(2n) {
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
    max-width: 91%;
    margin: 23px auto 28px;
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

  .report:nth-child(2n) .report__title {
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

  .report:nth-child(2n) .report__date {
    border-color: #000;
  }

  .report__text {
    font-family: Vollkorn, Times, serif;
    font-size: 13px;
    line-height: 16px;
    color: #fff;
    font-weight: 400;
  }

  .report:nth-child(2n) .report__text {
    color: #615858;
  }

  @media screen and (min-width: 768px) {
    .report__text-container {
      margin-bottom: 0;
    }

    .report__title {
      margin: 21px 0 32px 21px;
      font-size: 46px;
      line-height: 46px;
    }

    .report__date {
      margin: 0 0 19px 14px;
      padding-bottom: 27px;
      color: #000;
      font-size: 38px;
      line-height: 27px;
    }

    .report__text {
      font-size: 32px;
      line-height: 34px;
      margin-left: 16px;
      margin-bottom: 50px;
    }

    .report__image {
      width: 768px;
      height: auto;
    }
  }

  @media screen and (min-width: 1087px) {
    .report {
      flex-direction: row;
      align-items: flex-start;
    }

    .report:nth-child(2n) {
      background-color: #fff;
      border-bottom: 2px solid #b23438;
    }

    .report__text-container {
      width: calc(1087px / 2);
    }

    .report:nth-child(2n) .report__text-container {
      order: -1;
    }

    .report__title {
      font-size: 34px;
      line-height: 34px;
      margin: 16px 0 20px 31px;
    }

    .report:nth-child(2n) .report__title {
      margin: 30px 31px 20px 0;
      text-align: right;
    }

    .report__date {
      font-size: 23px;
      line-height: 19px;
      margin: 0 0 13px 33px;
      padding-bottom: 15px;
    }

    .report:nth-child(2n) .report__date {
      margin: 0 33px 13px auto;
      color: #000;
      text-align: right;
      border-color: #b23438;
    }

    .report__text {
      font-size: 22px;
      line-height: 25px;
      margin-left: 33px;
      margin-bottom: 0;
    }

    .report:nth-child(2n) .report__text {
      text-align: right;
      margin-left: 0;
      margin-right: 24px;
    }

    .report__image {
      width: calc(1087px / 2);
    }
  }
</style>
