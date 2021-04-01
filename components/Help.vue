<template>
  <section class="help">
    <h2 class="help__title">
      Получить помощь
    </h2>
    <p class="help__text">
      Если вы употребляете  наркотики и вам нужна помощь по вопросам здоровья, защиты прав, консультации психолога,
      профилактические материалы и тд, свяжитесь с нами
    </p>
    <div class="help__block">
      <img src="~/assets/images/blade.svg" class="help__image">
    </div>
    <a class="link" href="#">Подробнее
      <span class="link__arrow">&gt;</span>
    </a>
    <div class="help__telephone-block">
      <a class="help__telephone-number" href="tel:+79268879087">+7-(926)-887-90-87</a>
    </div>
    <div class="help__email-block">
      <a class="help__email" href="mailto:rylkov.foundation@gmail.com" target="_blank">
        rylkov.foundation@gmail.com
      </a>
    </div>
    <p class="help__contacts">
      telegram/whatsapp/mail
    </p>
    <img src="~/assets/images/logo.svg" alt="Логотип ФАР" class="logo">
  </section>
</template>

<script>
export default {
  name: 'Help'
}
</script>

<style scoped>
.help {
  position: relative;
  display: flex;
  flex-direction: column;
}

.help__title {
  background-color: #b23438;
  min-height: 91px;
  color: #b23438;
  text-shadow:
    -1px -1px 0 #fff,
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
    1px 1px 0 #fff;
  font-family: Vollkorn, Times, serif;
  font-size: calc(0.1116 * 100vw + 4.2857px);
  line-height: calc(0.0692 * 100vw + 8.8571px);
  padding: 17px 0 0 13px;
  margin-bottom: 25px;
}

.help__block {
  overflow: hidden;
  position: absolute;
  height: 180px;
  top: -13px;
  right: 0;
}

.help__image {
  height: 100%;
  position: relative;
  right: -53px;
}

.help__text {
  max-width: 71%;
  font-family: Vollkorn, Times, serif;
  font-size: calc(0.0357 * 100vw + 4.5714px);
  line-height: calc(0.0402 * 100vw + 5.1429px);
  margin-left: 17px;
}

.link {
  display: block;
  font-family: 'Vollkorn', 'Times New Roman', serif;
  font-size: calc(0.037946429 * 100vw + 4.85714272px);
  line-height: calc(0.055803571 * 100vw + 2.14285728px);
  font-weight: bold;
  color: #b23438;
  text-decoration: none;
  border-bottom: 2px solid #b23438;
  padding: 0;
  align-self: start;
  margin: 22px 20px 36px 19px;
}

.help__telephone-block {
  background-color: #000;
  border-radius: 50%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.help__telephone-number {
  padding: 5% 0;
  text-align: center;
  font-family: Tomorrow, Times, fantasy;
  font-size: calc(0.1563 * 100vw + 1px);
  line-height: calc(0.1116 * 100vw + 1.2857px);
  color: #fff;
  text-decoration: none;
}

.help__telephone-number:hover {
  opacity: 0.7;
}

.help__email-block {
  background-color: #cbcbcb;
  border-radius: 50%;
  width: 100vw;
  z-index: 1;
  margin-bottom: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.help__email {
  color: #000;
  font-family: Vollkorn, Times, serif;
  font-weight: bold;
  font-size: calc(0.0513 * 100vw + 0.5714px);
  line-height: calc(0.096 * 100vw + 0.2857px);
  padding: 5% 0;
  text-align: center;
  text-decoration: none;
}

.help__email:hover {
  opacity: 0.7;
}

.help__contacts {
  transform: rotate(270deg);
  position: absolute;
  top: 54%;
  right: -220px;
  font-family: Vollkorn, Times, serif;
  font-weight: bold;
  font-style: normal;
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 1px #b23438;
  font-size: 34px;
  line-height: 30px;
  text-transform: uppercase;
}

.logo {
  width: 137px;
  position: absolute;
  right: 5px;
  bottom: 50px;
}

@media screen and (min-width: 370px) {
  .help__title {
    padding-bottom: 2%;
  }
}

@media screen and (min-width: 768px) {
  .help__title {
    min-height: 182px;
    font-size: 90px;
    line-height: 62px;
    padding: 38px 0 0 52px;
    margin-bottom: 52px;
  }

  .help__text {
    max-width: 59%;
    font-size: 32px;
    line-height: 36px;
    margin-left: 56px;
  }

  .link {
    font-size: 34px;
    line-height: 45px;
    margin: 35px 20px 18px 53px;
  }

  .help__telephone-number {
    font-size: 121px;
    line-height: 87px;
  }

  .help__email-block {
    margin-bottom: 55px;
  }

  .help__block {
    height: 380px;
    top: -35px;
  }

  .help__image {
    right: -48px;
  }

  .help__email {
    font-size: 41px;
    line-height: 74px;
  }

  .help__contacts {
    top: 61%;
    right: -426px;
    font-size: 68px;
    line-height: 60px;
  }

  .logo {
    display: none;
  }
}

</style>
