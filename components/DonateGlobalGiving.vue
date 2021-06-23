<template>
  <div class="donate-global-giving">
    <div class="donate-global-giving__fire" />
    <h3 class="donate-global-giving__title">
      {{ pageData[`title_${$i18n.locale}`] }}
    </h3>
    <p class="donate-global-giving__text" v-html="pageData[`description_${$i18n.locale}`]" />
    <Smile class="donate-global-giving__smile" />
  </div>
</template>

<script>
export default {
  name: 'DonateGlobalGiving',
  props: {
    pageData: {
      default: () => {},
      type: Object
    }
  }
}
</script>

<style scoped>
.donate-global-giving {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
  position: relative;
  overflow: hidden;
}

.donate-global-giving__fire {
  position: absolute;
  left: 45%;
  top: 10px;
  background-image: url("~/assets/images/fire.png");
  background-size: cover;
  height: 40px;
  width: 24px;
}

.donate-global-giving__title {
  color: #b23438;
  font-family: Vollkorn, Times, serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  font-style: italic;
  text-align: center;
  text-transform: uppercase;
  padding-top: 35px;
  z-index: 1;
}

.donate-global-giving__text {
  font-family: Vollkorn, Times, serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  font-style: normal;
  color: #a2a2a2;
  max-width: 85%;
  margin: 0 auto;
}

.donate-global-giving__smile {
  width: 300px;
  height: 300px;
  position: relative;
  right: -64px;
  bottom: -37px;
  filter: invert(100%);
}

@media screen and (min-width: 768px) {
  .donate-global-giving__fire {
    position: absolute;
    left: 45%;
    top: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    height: 130px;
    width: 90px;
  }

  .donate-global-giving__title {
    font-size: 54px;
    line-height: 56px;
    padding-top: 135px;
  }

  .donate-global-giving__text {
    font-size: 33px;
    line-height: 34px;
    max-width: 85%;
    margin: 38px auto 0;
  }

  .donate-global-giving__smile {
    width: 600px;
    height: 600px;
    right: -232px;
    bottom: -37px;
  }
}

@media screen and (min-width: 1100px) {
  .donate-global-giving {
    width: 593px;
    z-index: -1;
    justify-content: start;
    padding-top: 35px;
  }

  .donate-global-giving__fire {
    position: absolute;
    left: 356px;
    top: 18px;
    height: 62px;
    width: 40px;
  }

  .donate-global-giving__title {
    font-size: 40px;
    line-height: 49px;
    padding-top: 0;
    padding-left: 42px;
    text-align: left;
  }

  .donate-global-giving__text {
    font-size: 16px;
    line-height: 23px;
    max-width: 85%;
    margin: 0 auto 0;
  }

  .donate-global-giving__smile {
    width: 600px;
    height: 600px;
    right: -232px;
    bottom: -37px;
  }
}
</style>
