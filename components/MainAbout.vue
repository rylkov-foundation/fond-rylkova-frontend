<template>
  <section class="about">
    <p class="about__text">
      <span class="about__name">ФАР</span> — это организация&#8209;сообще&shy;ство, площадка&nbsp;для инициатив в&nbsp;сфере&nbsp;гуманизации наркополитики.
    </p>
    <svg
      class="about__drop"
      viewBox="0 0 26.7 47.81"
    >
      <path
        d="M13.18.598S8.284 15.485 2.354 25.536c-5.07
     8.593-1.567 22.77 12.996 21.797 11.836-.793
     14.18-16.723 7.527-26.059C16.222 11.938 13.18.598 13.18.598"
      />
    </svg>
  </section>
</template>

<script>
export default {
  name: 'MainAbout'
}
</script>

<style scoped>
  .about {
    display: flex;
    flex-direction: row;
    width: 100vw;
    color: #313131;
  }

  .about__name {
    font-family: Vollkorn, serif;
    font-weight: bold;
    position: relative;
  }

  .about__name::after {
    content: '';
    position: absolute;
    left: -3px;
    top: 18px;
    background-color: #b23438;
    width: 72px;
    height: 11px;
  }

  .about__text {
    font-family: VollkornItalic, serif;
    font-size: 25px;
    text-align: left;
    line-height: 23px;
    margin: 24px auto 28px 17px;
    white-space: pre-line;
    width: 70vw;
    max-width: 348px;
  }

  .about__drop {
    align-self: flex-end;
    margin: auto 11px 20px auto;
    width: 23px;
    height: 40px;
  }

  @media screen and (min-width: 768px) {
    .about__text {
      font-size: 48px;
      margin: 31px auto 21px 54px;
      line-height: 43px;
      max-width: 570px;
    }

    .about__name::after {
      left: -1px;
      top: 34px;
      width: 107px;
      height: 17px;
    }

    .about__drop {
      margin: auto 24px 5px auto;
      width: 40px;
      height: 65px;
    }
  }

  @media screen and (min-width: 1280px) {
    .about__text {
      font-size: 36px;
      margin: 61px auto 81px 183px;
      line-height: 34px;
    }

    .about__name::after {
      left: -3px;
      top: 26px;
      width: 93px;
      height: 11px;
    }

    .about__drop {
      margin: auto 18px 0 auto;
      width: 38px;
      height: 64px;
      position: relative;
      top: 25px;
    }
  }
</style>
