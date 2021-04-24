<template>
  <section class="contacts">
    <Support />
    <div class="contacts__container">
      <h2 class="contacts__title">
        Контакты
      </h2>
      <EmailForm class="contacts__form" />
    </div>
    <div class="contacts__black-container">
      <p class="contacts__text">
        Если вы уптребляете наркотики  и Вам нужна помощь по вопросам защиты прав, консультации психолога,
        профилактические материалы и тд, тел:
      </p>
      <div class="contacts__telephone-block">
        <a class="contacts__telephone-number" href="tel:+79268879087">+7-(926)-887-90-87</a>
      </div>
      <div class="contacts__email-block">
        <a class="contacts__email" href="mailto:rylkov.foundation@gmail.com" target="_blank">
          rylkov.foundation@gmail.com
        </a>
      </div>
    </div>
    <ul class="contacts__list">
      <Contact
        v-for="(contact,index) in contactData"
        :key="contact.id"
        :contact="contact"
        :index="index"
      />
    </ul>
    <p class="contacts__info">
      Фонд содействия защите здоровья  и социальной справедливости им.
      Андрея Рылькова  зарегистрировался совсем недавно, по меркам более чем 20-летней
      истории существования ВИЧ-инфекции в Российской Федерации, существования СПИД-сервисных организаций.
      Зарегистрировался в то время, когда многие организации стали сворачивать свою деятельность, а более
      предприимчивые – менять цели и задачи своей работы. Сейчас ведь модно говорить о здоровом образе жизни,
      бороться с курением, алкоголизмом, да мало ли на что еще государство дает деньги
    </p>
  </section>
</template>

<script>
export default {
  name: 'Contacts',
  data () {
    return {
      contactData: [
        {
          id: '1',
          imageLink: 'Дельфинов.png',
          name: ' Дарья  Байбакова',
          position: 'Директорзаведения',
          telephone: '+79060741192'
        },
        {
          id: '2',
          imageLink: 'Дельфинов.png',
          name: ' Дарья  Байбакова',
          position: 'Директорзаведения',
          telephone: '+79060741192'
        },
        {
          id: '3',
          imageLink: 'Дельфинов.png',
          name: ' Дарья  Байбакова',
          position: 'Директорзаведения',
          telephone: '+79060741192'
        }
      ]
    }
  }
}
</script>

<style scoped>
.contacts {
  display: flex;
  flex-direction: column;
}

.contacts__container {
  background-color: #cbcbcb;
}

.contacts__title {
  font-family: Vollkorn, Times, serif;
  font-size: 101px;
  line-height: 56px;
  font-style: italic;
  word-break: break-all;
  color: #fff;
  margin: 26px 0 23px 8px;
  max-width: 89%;
  position: relative;
}

.contacts__title::before {
  content: '';
  position: absolute;
  top: 38px;
  left: 6px;
  width: 234px;
  height: 18px;
  background-color: #b23438;
}

.contacts__title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 4px;
  width: 233px;
  height: 18px;
  background-color: #b23438;
}

.contacts__form {
  margin: 0 auto;
}

.contacts__black-container {
  background-color: #000;
  display: flex;
  flex-direction: column;
}

.contacts__text {
  font-family: Vollkorn, Times, serif;
  font-size: 18px;
  line-height: 16px;
  font-style: italic;
  font-weight: 400;
  color: #fff;
  margin: 21px auto 0;
  max-width: 89%;
}

.contacts__telephone-block {
  background-color: #cbcbcb;
  border-radius: 50%;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto 0;
}

.contacts__telephone-number {
  padding: 5% 0;
  text-align: center;
  font-family: Tomorrow, Times, fantasy, serif;
  font-size: 44px;
  line-height: 33px;
  color: #000;
  text-decoration: none;
}

.contacts__telephone-number:hover {
  opacity: 0.7;
}

.contacts__email-block {
  background-color: #b23438;
  border-radius: 50%;
  width: 95%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.contacts__email {
  color: #fff;
  font-family: Vollkorn, Times, serif;
  font-weight: bold;
  font-size: 15px;
  line-height: 28px;
  padding: 5% 0;
  text-align: center;
  text-decoration: none;
}

.contacts__email:hover {
  opacity: 0.7;
}

.contacts__list {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px 0 24px;
}

.contacts__info {
  font-family: Vollkorn, Times, serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  max-width: 85%;
  margin: 0 auto;
  border-bottom: 2px solid #c7c7c7;
  padding-bottom: 27px;
}

@media screen and (min-width: 768px) {
  .contacts__title {
    font-size: 220px;
    line-height: 122px;
    margin: 88px 0 41px 43px;
    max-width: 89%;
  }

  .contacts__title::before {
    top: 78px;
    left: 9px;
    width: 574px;
    height: 38px;
  }

  .contacts__title::after {
    bottom: 7px;
    width: 415px;
    height: 38px;
  }

  .contacts__text {
    font-family: Vollkorn, Times, serif;
    font-size: 36px;
    line-height: 32px;
    font-style: normal;
    margin: 51px auto 0;
    max-width: 85%;
  }

  .contacts__telephone-block {
    width: 84%;
    margin: 5px auto 0;
  }

  .contacts__telephone-number {
    font-size: 95px;
    line-height: 69px;
  }

  .contacts__email-block {
    width: 84%;
  }

  .contacts__email {
    font-size: 32px;
    line-height: 59px;
    padding: 6% 0;
  }

  .contacts__list {
    flex-direction: row;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
    margin: 48px 0 69px;
  }

  .contacts__info {
    font-size: 33px;
    line-height: 34px;
    border-bottom: none;
  }
}
</style>
