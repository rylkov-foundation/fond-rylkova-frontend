<template>
  <section class="mission">
    <h1 class="mission__header">
      Фонд содействия защите&nbsp;здоровья и соци&shy;альной справедливости имени Андрея<br class="mission__header-br"> Рылькова
    </h1>
    <div class="mission__container">
      <h2 class="mission__subtitle">
        <span class="mark">Наша</span>
        <br>
        <span class="mark mark_long">миссия</span>
      </h2>
      <p class="mission__our-mission">
        способствовать развитию&nbsp;наркополитики, основанной на&nbsp;гуманности, терпимости, защите здоро&shy;вья, достоинства и прав человека.
      </p>
    </div>
    <p class="mission__principles">
      Работа ФАР строится на принципах горизон&shy;тального управления и разви&shy;тия проектов на&nbsp;основе инициатив людей, употребляющих наркотики, активистов и активисток, профессио&shy;налов и профессионалок в области об&shy;щественного здравоохранения и защиты прав человека.
    </p>
    <a href="#" class="link">Подробнее о нас &gt;</a>
    <div class="mission__footer">
      <img src="~/assets/images/road.png" alt="Дорога" class="mission__road">
      <img src="~/assets/images/logo.svg" alt="Логотип ФАР" class="logo">
    </div>
    <img src="~/assets/images/crystal.png" alt="Кристал" class="mission__crystal">
  </section>
</template>

<script>
export default {
  name: 'OurMission'
}
</script>

<style scoped>
  .mission {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .mission__header {
    color: white;
    background-color: #b23438;
    font-size: 23px;
    line-height: 20px;
    font-weight: normal;
    padding: 18px 39px 13px 14px;
    margin: 0;
  }

  .mission__container {
    padding: 23px 0 0 18px;
  }

  .mission__subtitle {
    float: left;
    margin-bottom: -10px;
    margin-right: 8px;
  }

  .mission__our-mission {
    margin: 35px 14px 0 0;
    line-height: 17px;
  }

  .mark {
    text-transform: uppercase;
    font-weight: bold;
    position: relative;
    font-size: 27px;
    line-height: 22px;
    color: #484848;
  }

  .mark::before {
    content: '';
    position: absolute;
    background-color: #b23438;
    left: -2px;
    top: 19px;
    width: 92px;
    height: 7px;
  }

  .mark_long::before {
    width: 129px;
    left: -3px;
    z-index: 1;
  }

  .mark_long::after {
    content: ':';
    position: relative;
    top: -3px;
    right: -2px;
  }

  .mission__principles {
    margin: 13px 14px 0 18px;
    line-height: 17px;
    word-spacing: 0;
  }

  .link {
    text-decoration: none;
    color: #b23438;
    font-size: 17px;
    line-height: 20px;
    font-weight: 600;
    border-bottom: 2px solid #b23438;
    margin: 19px auto 0 16px;
    letter-spacing: 1px;
    word-spacing: -1px;
  }

  .mission__road {
    width: 200px;
  }

  .logo {
    width: 137px;
    position: absolute;
    right: 5px;
    bottom: 42px;
  }

  .mission__crystal {
    width: 100px;
    position: absolute;
    top: 85px;
    right: 18px;
  }

  .mission__footer {
    margin-top: -8px;
    display: flex;
    width: 100vw;
  }

  @media screen and (min-width: 420px) {
    .mission__header-br {
      display: none;
    }

    .mission__crystal {
      top: 65px;
    }
  }

  @media screen and (min-width: 480px) {
    .mission__crystal {
      top: 42px;
    }
  }

  @media screen and (min-width: 768px) {
    .mission__header {
      font-size: 43px;
      line-height: 40px;
      word-spacing: 3px;
      padding: 30px 30px 35px 30px;
    }

    .mission__container {
      padding: 47px 0 0 50px;
    }

    .mark {
      font-size: 52px;
      line-height: 45px;
      letter-spacing: 2px;
    }

    .mark::before {
      left: -5px;
      top: 37px;
      width: 184px;
      height: 14px;
    }

    .mark_long::before {
      height: 14px;
      width: 259px;
      top: 36px;
      left: -7px;
    }

    .mission__subtitle {
      margin-right: 11px;
    }

    .mission__our-mission {
      margin: 56px 45px 0 0;
      font-size: 32px;
      line-height: 34px;
    }

    .mission__principles {
      font-size: 32px;
      line-height: 34px;
      margin: 16px 50px 0 50px;
    }

    .link {
      font-size: 32px;
      line-height: 40px;
      margin: 9px 52px 0 auto;
      letter-spacing: 3px;
      word-spacing: -2px;
    }

    .mission__footer {
      margin-top: -88px;
    }

    .mission__road {
      width: 388px;
    }

    .logo {
      width: 237px;
      right: 42px;
      bottom: 42px;
    }

    .mission__crystal {
      width: 200px;
      right: 22px;
      top: 110px;
    }
  }
</style>
