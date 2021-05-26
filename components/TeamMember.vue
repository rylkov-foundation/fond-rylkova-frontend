<template>
  <li class="team-member">
    <img
      :src="$config.constants.serverUrl +member.photo.url"
      :alt="member['name_' + $i18n.locale]"
      class="team-member__photo"
    >
    <div class="team-member__container">
      <h2 ref="titleContainer" class="team-member__title">
        <span class="team-member__title-text">
          {{ member['name_' + $i18n.locale] }}
        </span>
        <span class="team-member__title-text">
          {{ member['surname_' + $i18n.locale] }}
        </span>
      </h2>
      <p class="team-member__text">
        {{ member['description_' + $i18n.locale] }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TeamMember',
  props: {
    member: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .team-member {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1087px;
  }

  .team-member__photo {
    width: 100%;
  }

  .team-member__container {
    margin-top: -158px;
    border: 5px solid #000;
    background-color: #b23438;
    border-radius: 13%;
    max-width: 94%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 282px;
    min-width: 292px;
  }

  .team-member:nth-child(2n) .team-member__container {
    background-color: #fff;
  }

  .team-member__title {
    font-family: 'Vollkorn', 'Times', serif;
    font-size: 31px;
    line-height: 27px;
    font-weight: bold;
    color: #fff;
    margin: 24px 0 23px 0;
    text-align: center;
    max-width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .team-member__title-text {
    font-family: 'Vollkorn', 'Times', serif;
    font-size: 31px;
    line-height: 27px;
    font-weight: bold;
    position: relative;
  }

  .team-member__title-text::after {
    content: '';
    position: absolute;
    background-color: #000;
    left: 0;
    bottom: 2px;
    width: 100%;
    height: 7px;
  }

  .team-member:nth-child(2n) .team-member__title {
    color: #c71f25;
  }

  .team-member__text {
    font-family: 'Vollkorn', 'Times', serif;
    font-size: 13px;
    line-height: 18px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin-bottom: 6px;
    max-width: 90%;
  }

  .team-member:nth-child(2n) .team-member__text {
    color: #000;
  }

  @media screen and (min-width: 500px) {
    .team-member__container {
      margin-top: -355px;
      margin-bottom: 30px;
      border-radius: 7%;
      max-width: 85%;
    }

    .team-member__photo {
      width: 100vw;
      height: auto;
    }

    .team-member__title {
      font-size: 63px;
      line-height: 52px;
      font-weight: bold;
      margin: 74px 0 42px 0;
    }

    .team-member__title-text {
      font-size: 63px;
      line-height: 52px;
    }

    .team-member__title-text::after {
      height: 16px;
    }

    .team-member__text {
      font-size: 33px;
      line-height: 34px;
      font-weight: 400;
      text-align: left;
      margin-left: 13px;
      max-width: 78%;
      margin-bottom: 56px;
    }
  }

  @media screen and (min-width: 1087px) {
    .team-member__photo {
      width: 370px;
      height: 360px;
    }

    .team-member__container {
      width: 695px;
      background-color: #fff;
      margin-top: 0;
      margin-right: 10px;
      align-items: flex-start;
      padding-top: 20px;
      align-self: stretch;
      justify-content: flex-start;
      border-radius: 43px;
      min-height: 330px;
    }

    .team-member__title {
      font-size: 45px;
      line-height: 38px;
      margin: 0 0 26px 20px;
      text-align: left;
      color: #b23438;
    }

    .team-member__title-text {
      font-size: 45px;
      line-height: 38px;
    }

    .team-member__title-text::after {
      height: 11px;
    }

    .team-member__text {
      font-size: 22px;
      line-height: 29px;
      margin-left: 24px;
      font-weight: 400;
      text-align: left;
      max-width: 94%;
      color: #000;
    }

    .team-member {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 14px;
    }

    .team-member:nth-child(2n) .team-member__container {
      order: -1;
      margin-right: 0;
      margin-left: 10px;
      background-color: #000;
    }

    .team-member:nth-child(4n) .team-member__container {
      background-color: #b23438;
    }

    .team-member:nth-child(2n) .team-member__title {
      color: #fff;
    }

    .team-member:nth-child(3n) .team-member__title-text::after {
      background-color: #cbcbcb;
    }

    .team-member:nth-child(2n) .team-member__title-text::after {
      background-color: #b23438;
    }

    .team-member:nth-child(4n) .team-member__title-text::after {
      background-color: #000;
    }

    .team-member:nth-child(2n) .team-member__text {
      color: #fff;
    }
  }
</style>
