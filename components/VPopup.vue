<template>
  <div class="popup">
    <div class="popup__content popup__content_cookie">
      <h4 class="popup__title">
        Cookies.
      </h4>
      <p class="popup__text">
        Сайт использует куки-файлы.
      </p>
      <a href="#" class="popup__link">Понятно</a>
    </div>
    <div class="popup__content popup__content_agent">
      <h4 class="popup__title popup__title_agent">
        Подтвердите действие на странице rylkov-fond.org.
      </h4>
      <p class="popup__text">
        Данные материалы изданы и (или) распространяются некоммерческой организацией, выполняющей функции иностранного агента.
      </p>
      <a href="#" class="popup__link">Скачать материал</a>
    </div>
    <div class="popup__content popup__content_news">
      <h4 class="popup__title popup__title_news">
        Срочная новость
      </h4>
      <p class="popup__text popup__text_news">
        В Никола-Ленивце на Масленицу устроили «Великое лежание» и сожгли «Замок корона-людоеда».
      </p>
      <a href="#" class="popup__link">Перейти ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VPopup'
}
</script>

<style scoped>
  .popup {
    position: fixed;
    bottom: 50px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .popup__title {
    font-family: 'Vollkorn', Times, serif;
    font-size: 17px;
    font-weight: bold;
    font-style: normal;
    letter-spacing: normal;
    line-height: 12.73px;
    margin-bottom: 12px;
  }

  .popup__title_agent {
    font-size: 13px;
  }

  .popup__title_news {
    font-size: 17px;
    color: #fff;
    line-height: 18.48px;
  }

  .popup__text {
    color: #666;
    font-family: Roboto, serif;
    font-size: 11px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 14.71px;
    margin-bottom: 10px;
  }

  .popup__link {
    font-family: 'Vollkorn', 'Times New Roman', serif;
    font-size: 17px;
    line-height: 24.34px;
    font-weight: bold;
    color: #b23438;
    text-decoration: none;
    border-bottom: 2px solid #b23438;
  }

  .popup__content {
    background-color: #fff;
    padding: 17px 0 16px 20px;
    border-radius: 20px;
    width: 229px;
    min-height: 100px;
    box-shadow: 0 9px 13px 1px rgba(0, 0, 0, 0.29);
    box-sizing: border-box;
  }

  .popup__content_news {
    background-color: #000;
  }

  @media screen and (min-width: 768px) {
    .popup {
      bottom: 50px;
      right: 30px;
    }

    .popup__content {
      width: 470px;
      min-height: 204px;
      padding: 35px 0 32px 41px;
    }

    .popup__title {
      font-size: 40px;
      line-height: 26.18px;
      margin-bottom: 28px;
    }

    .popup__title_agent {
      font-size: 26px;
    }

    .popup__title_news {
      font-size: 34px;
      line-height: 38px;
    }

    .popup__text {
      font-size: 22px;
      line-height: 30.26px;
      margin-bottom: 21px;
    }

    .popup__link {
      font-size: 34px;
      line-height: 50.07px;
    }
  }

  @media screen and (min-width: 1280px) {
    .popup__content {
      width: 295px;
      min-height: 128px;
      padding: 22px 0 19px 25px;
    }

    .popup__title {
      font-size: 25px;
      line-height: 16.44px;
      margin-bottom: 17px;
    }

    .popup__title_agent {
      font-size: 16px;
      line-height: 16.44px;
      margin-bottom: 10px;
    }

    .popup__title_news {
      font-size: 24px;
      line-height: 23.81px;
    }

    .popup__text {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 12px;
    }

    .popup__link {
      font-size: 22px;
      line-height: 31.44px;
    }
  }
</style>
