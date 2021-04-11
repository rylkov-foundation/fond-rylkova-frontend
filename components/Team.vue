<template>
  <section class="team">
    <div class="team__container">
      <h2 class="team__title">
        Ко&shy;манда <span class="team__title-bold">ФАР</span>
      </h2>
      <div class="team__image" />
    </div>
    <img src="@/assets/images/logo.svg" alt="Логотип" class="logo">
    <ul class="team__list">
      <TeamMember
        v-for="(member,index) in teamMembers"
        :key="member.id"
        :member="member"
        :index="index"
      />
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Team',
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

.logo {
  width: 82px;
  position: absolute;
  right: 20px;
  top: 509px;
}

.team__list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
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
    font-weight: bold;
    font-size: 99px;
    line-height: 60px;
    max-width: calc(100% - 272px);
  }

  .team__container {
    display: flex;
    background-color: #fff;
    align-items: flex-end;
    min-height: 271px;
    margin-bottom: 22px;
  }

  .team__image {
    height: 259px;
    width: 272px;
  }
}
</style>
