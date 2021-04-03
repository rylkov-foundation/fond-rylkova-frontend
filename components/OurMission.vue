<template>
  <section class="mission">
    <div class="mission__header-container">
      <h1 class="mission__header">
        Фонд содействия защите&nbsp;здоровья и соци&shy;альной справедливости имени Андрея<br class="mission__header-br"> Рылькова
      </h1>
    </div>
    <div class="mission__container">
      <div class="mission__mission-container">
        <h2 class="mission__subtitle">
          <span class="mark">Наша</span>
          <br>
          <span class="mark mark_long">миссия</span>
        </h2>
        <p class="mission__our-mission">
          способствовать развитию наркополитики, основанной на&nbsp;гуманности, терпимости, защите здоро&shy;вья, достоинства и прав человека.
        </p>
      </div>
      <p class="mission__principles">
        Работа ФАР строится на принципах горизон&shy;тального управления и разви&shy;тия проектов на&nbsp;основе инициатив людей, употребляющих наркотики, активистов и активисток, профессио&shy;налов и профес&shy;сионалок в области об&shy;щественного здравоохранения и защиты прав человека.
      </p>
      <a href="#" class="link">Подробнее о нас &gt;</a>
      <div class="mission__footer">
        <img src="~/assets/images/road.png" alt="Дорога" class="mission__road">
        <img src="~/assets/images/logo.svg" alt="Логотип ФАР" class="logo">
      </div>
      <img src="~/assets/images/crystal.svg" alt="Кристал" class="mission__crystal">
    </div>
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

  .mission__mission-container {
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
    margin: 13px 14px 22px 18px;
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
    z-index: 1;
  }

  .link:hover {
    cursor: pointer;
    opacity: 0.7;
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
    display: flex;
    width: 100%;
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

    .mission__mission-container {
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
      margin: 16px 50px 19px 50px;
    }

    .link {
      font-size: 34px;
      line-height: 38px;
      margin: 8px 49px 0 406px;
      letter-spacing: 1px;
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

  @media screen and (min-width: 1280px) {
    .mission {
      grid-area: mission;
      background-color: #cbcbcb;
      width: 100%;
    }

    .mission__header-container {
      background-color: #b23438;
    }

    .mission__header {
      font-size: 36px;
      line-height: 27px;
      padding: 25px 50px;
      max-width: 710px;
      margin-left: auto;
    }

    .mission__container {
      width: 615px;
      margin-left: auto;
      background-color: white;
      min-height: 586px;
    }

    .mission__mission-container {
      padding: 40px 0 0 91px;
    }

    .mark {
      font-size: 22px;
      line-height: 22px;
      letter-spacing: 0;
    }

    .mark::before {
      left: 1px;
      top: 17px;
      width: 80px;
      height: 7px;
    }

    .mark_long::before {
      width: 105px;
      top: 17px;
    }

    .mission__our-mission {
      font-size: 22px;
      line-height: 22px;
      margin-top: 27px;
      margin-right: 85px;
    }

    .mission__principles {
      font-size: 22px;
      line-height: 22px;
      margin: 16px 102px 0 92px;
    }

    .link {
      display: none;
    }

    .mission__road {
      width: 350px;
    }

    .mission__footer {
      margin-top: -51px;
      position: relative;
    }

    .logo {
      width: 147px;
      right: 110px;
      bottom: 53px;
    }

    .mission__crystal {
      display: none;
    }
  }
</style>
