<template>
  <li class="team-member">
    <img
      :src="require(`../assets/images/${member.imageLink}`)"
      :alt="member.name"
      class="team-member__photo"
    >
    <div
      class="team-member__container"
      :class="{ 'team-member__container_color_white': ($attrs.index+1)%2 === 0,
                'team-member__container_position_even': ($attrs.index+1)%2 === 0,
                'team-member__container_position_fourth': ($attrs.index+1)%4 === 0}"
    >
      <h2
        class="team-member__title"
        :class="{ 'team-member__title_color_white': ($attrs.index+1)%2 === 0,
                  'team-member__title_position_second': ($attrs.index+1)%2 === 0,
                  'team-member__title_position_third': ($attrs.index+1)%3 === 0,
                  'team-member__title_position_fourth': ($attrs.index+1)%4 === 0,
        }"
      >
        {{ member.name }}
      </h2>
      <p class="team-member__text" :class="{ 'team-member__text_color_white': ($attrs.index+1)%2 === 0}">
        {{ member.text }}
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
  }

  .team-member__container_color_white {
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
    position: relative;
  }

  .team-member__title::after {
    content: '';
    position: absolute;
    background-color: #000;
    left: 19%;
    top: 43px;
    width: 61%;
    height: 7px;
  }

  .team-member__title::before {
    content: '';
    position: absolute;
    background-color: #000;
    left: 19%;
    top: 19px;
    width: 59%;
    height: 7px;
  }

  .team-member__title_color_white {
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

  .team-member__text_color_white {
    color: #000;
  }

  @media screen and (min-width: 500px) {
    .team-member {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 14px;
    }

    .team-member__photo {
      width: 257px;
      height: 252px;
    }

    .team-member__container {
      background-color: #fff;
      margin-top: 0;
      max-width: calc(100% - 280px);
      margin-right: 10px;
      align-items: flex-start;
      padding-top: 20px;
      align-self: stretch;
      justify-content: flex-start;
      border-radius: 43px;
    }

    .team-member__container_position_even {
      order: -1;
      margin-right: 0;
      margin-left: 10px;
      background-color: #000;
    }

    .team-member__container_position_fourth {
      background-color: #b23438;
    }

    .team-member__title {
      max-width: 343px;
      text-align: left;
      margin: 0 0 11px 13px;
      color: #b23438;
    }

    .team-member__title_color_white {
      color: #fff;
    }

    .team-member__title::after {
      left: 0;
      width: 53%;
    }

    .team-member__title::before {
      left: 0;
      width: 49%;
    }

    .team-member__title_position_third::after,
    .team-member__title_position_third::before {
      background-color: #cbcbcb;
    }

    .team-member__title_position_second::after,
    .team-member__title_position_second::before {
      background-color: #b23438;
    }

    .team-member__title_position_fourth::after,
    .team-member__title_position_fourth::before {
      background-color: #000;
    }

    .team-member__text {
      font-size: 15px;
      line-height: 20px;
      font-weight: 400;
      text-align: left;
      margin-left: 13px;
      max-width: 94%;
      color: #000;
    }

    .team-member__text_color_white {
      color: #fff;
    }
  }
</style>
