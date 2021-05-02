<template>
  <section class="team">
    <div class="team__colour-container team__colour-container_colour_black" />
    <Support />
    <div class="team__container">
      <h2 class="team__title">
        Ко&shy;манда <span class="team__title-bold">ФАР</span>
      </h2>
      <div class="team__image" />
    </div>
    <div class="team__colour-container team__colour-container_colour_white" />
    <LogoWhite />
    <div class="team__colour-container team__colour-container_colour_grey" />
    <ul class="team__list">
      <TeamMember
        v-for="(member,index) in teamMembers"
        :key="member.id"
        :member="member"
        :index="index"
      />
    </ul>
    <div class="team__colour-container team__colour-container_colour_red">
      <Drop class="team__drop" />
    </div>
  </section>
</template>

<script>
import Drop from '@/components/Drop'

export default {
  name: 'Team',
  components: {
    Drop
  },
  data () {
    return {
      teamMembers: [
        {
          id: '1',
          imageLink: 'Дельфинов.png',
          name: 'Александр  Дельфинов',
          text: 'Поэт, журналист, литератор. Автор поэтических книг “Весёлые нечеловечки" (2000), "Анестизия 2084" ' +
            '(2002), "Шкаф" (2005). В 1999-2001 гг. литературный редактор информационного проекта снижения вреда "мозг"' +
            '(Москва). В 2001 г. проходил стажировку в контактно-консультационном центре для наркозависимых MisFit'
        },
        {
          id: '2',
          imageLink: 'Дельфинов.png',
          name: 'Александр  Дельфинов',
          text: 'Поэт, журналист, литератор. Автор поэтических книг “Весёлые нечеловечки" (2000), "Анестизия 2084" ' +
            '(2002), "Шкаф" (2005). В 1999-2001 гг. литературный редактор информационного проекта снижения вреда "мозг"' +
            '(Москва). В 2001 г. проходил стажировку в контактно-консультационном центре для наркозависимых MisFit'
        },
        {
          id: '3',
          imageLink: 'Дельфинов.png',
          name: 'Александр  Дельфинов',
          text: 'Поэт, журналист, литератор. Автор поэтических книг “Весёлые нечеловечки" (2000), "Анестизия 2084" ' +
            '(2002), "Шкаф" (2005). В 1999-2001 гг. литературный редактор информационного проекта снижения вреда "мозг"' +
            '(Москва). В 2001 г. проходил стажировку в контактно-консультационном центре для наркозависимых MisFit'
        },
        {
          id: '4',
          imageLink: 'Дельфинов.png',
          name: 'Александр  Дельфинов',
          text: 'Поэт, журналист, литератор. Автор поэтических книг “Весёлые нечеловечки" (2000), "Анестизия 2084" ' +
            '(2002), "Шкаф" (2005). В 1999-2001 гг. литературный редактор информационного проекта снижения вреда "мозг"' +
            '(Москва). В 2001 г. проходил стажировку в контактно-консультационном центре для наркозависимых MisFit'
        }
      ]
    }
  }
}
</script>

<style scoped>
.team {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  position: relative;
}

.team__title {
  font-family: 'Vollkorn', 'Times', serif;
  font-size: 102px;
  line-height: 61px;
  word-break: break-word;
  color: #b23438;
  font-weight: 400;
  padding: 35px 0 8px 8px;
  background-image:
    url("~/assets/images/team.svg"),
    url("~/assets/images/team.svg"),
    url("~/assets/images/team.svg"),
    url("~/assets/images/team.svg"),
    url("~/assets/images/team.svg");
  background-repeat: repeat-x;
  background-position:
    0 31px,
    121px 70px,
    18px 110px,
    8px 153px,
    70px 192px;
}

.team__title-bold {
  display: inline-block;
  font-weight: bold;
  padding-top: 15px;
}

.team__image {
  background-image: url("~/assets/images/blade-team.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #000;
  height: 315px;
  width: 100%;
  position: relative;
}

.team__list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
}

.team__drop {
  display: none;
}

@media screen and (min-width: 500px) {
  .team__title {
    padding: 0 29px 87px;
    background-image:
      url("~/assets/images/team.svg"),
      url("~/assets/images/team.svg"),
      url("~/assets/images/team.svg"),
      url("~/assets/images/team.svg");
    background-position:
      28px 37px,
      331px 82px,
      -3px 131px,
      140px 180px;
  }
}

@media screen and (min-width: 768px) {
  .team__title {
    font-weight: 600;
    font-size: 216px;
    line-height: 172px;
    max-width: 100%;
    padding-bottom: 0;
    background-size: 629px;
    background-position:
      -100px 77px,
      139px 174px,
      -69px 292px,
      542px 403px;
  }

  .team__container {
    margin: 52px 0 0 0;
    max-height: 890px;
    overflow: hidden;
  }

  .team__image {
    height: 720px;
    width: 768px;
    background-size: cover;
  }
}

@media screen and (min-width: 1087px) {
  .team {
    display: grid;
    grid-template-columns: auto 1087px auto;
    grid-template-areas:
      "black team-title white"
      "grey list red";
  }

  .team__container {
    grid-area: team-title;
    max-width: 1087px;
    margin-bottom: 44px;
    display: flex;
    background-color: #fff;
    align-items: flex-end;
    min-height: 271px;
  }

  .team__colour-container {
    width: calc((100vw - 1087px) / 2);
    height: auto;
  }

  .team__colour-container_colour_black {
    grid-area: black;
    background-color: #000;
  }

  .team__colour-container_colour_white {
    grid-area: white;
    background-color: #fff;
  }

  .team__colour-container_colour_grey {
    grid-area: grey;
    background-color: #cbcbcb;
  }

  .team__colour-container_colour_red {
    grid-area: red;
    background-color: #b23438;
    position: relative;
  }

  .team__image {
    width: 387px;
    height: 376px;
  }

  .team__title {
    max-width: 705px;
    width: 705px;
    font-size: 140px;
    line-height: 121px;
    background-size: 600px;
    background-position:
      268px 49px,
      153px 123px,
      217px 203px,
      185px 279px;
  }

  .team__list {
    grid-area: list;
  }
}

@media screen and (min-width: 1280px) {
  .team__drop {
    display: block;
    width: 36px;
    height: 62px;
  }
}
</style>
