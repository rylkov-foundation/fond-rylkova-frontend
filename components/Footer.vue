<template>
  <footer class="footer">
    <h2 class="footer__title">
      {{ footerData[`title_${$i18n.locale}`] }}
    </h2>
    <div class="footer__container">
      <div class="footer__social-links">
        <a
          v-for="linkItem in footerData.social_links"
          :key="linkItem.icon._id"
          class="footer__social-link"
          :href="linkItem.link"
          :style="{ backgroundImage: `url(${$config.constants.serverUrl}${linkItem.icon.url})` }"
          target="_blank"
        />
        <div class="footer__agent" />
      </div>
      <p class="footer__foreign-agent">
        {{ footerData[`foreign_agent_text_${$i18n.locale}`] }}
      </p>
      <p class="footer__license">
        {{ footerData[`license_text_${$i18n.locale}`] }}
        <a v-if="footerData.link" :href="footerData.link" target="_blank" class="footer__license-link">
          {{ ` ${footerData.link_text}` }}
        </a>
      </p>
    </div>
    <p class="footer__copyright">
      ФАР {{ footerData.year }}
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    footerData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .footer {
    display: flex;
    flex-direction: column;
    color: #727272;
    text-align: center;
    width: 100%;
  }

  .footer__title {
    font-family: Roboto, Arial, sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    line-height: 19px;
    font-weight: 400;
    margin-top: 12px;
    margin-bottom: 15px;
    margin-right: 6px;
  }

  .footer__container {
    display: flex;
    flex-direction: column;
  }

  .footer__foreign-agent {
    font-family: Roboto, Arial, sans-serif;
    font-size: 11px;
    line-height: 14px;
    margin: 0 40px 15px 30px;
  }

  .footer__license {
    margin: 0 40px 21px 39px;
    text-align: left;
    font-family: Roboto, Arial, sans-serif;
    font-size: 11px;
    line-height: 14px;
  }

  .footer__license-link {
    font-family: Roboto, Arial, sans-serif;
    font-size: 11px;
    line-height: 14px;
    text-decoration: underline;
    color: inherit;
  }

  .footer__license-link:hover {
    opacity: 0.7;
  }

  .footer__copyright {
    font-family: Roboto, Arial, sans-serif;
    font-size: 11px;
    line-height: 14px;
    margin: 0 auto 26px;
  }

  .footer__social-links {
    display: flex;
    margin: 0 auto 81px;
    padding-left: 27px;
    position: relative;
    background-repeat: no-repeat;
  }

  .footer__social-link {
    display: block;
    width: 23px;
    height: 23px;
    background-position: center;
    background-size: cover;
    margin-right: 26px;
  }

  .footer__social-link:hover {
    opacity: 0.7;
  }

  .footer__agent {
    display: block;
    width: 43px;
    height: 43px;
    position: absolute;
    left: 66px;
    top: 47px;
    background-image: url("~/assets/images/foreign-agent.svg");
    background-position: center;
    background-size: cover;
  }

  @media screen and (min-width: 768px) {
    .footer__title {
      font-size: 29px;
      margin-top: 76px;
      margin-left: 12px;
      margin-bottom: 57px;
    }

    .footer__social-links {
      padding-left: 90px;
      margin-bottom: 221px;
    }

    .footer__social-link {
      width: 60px;
      height: 60px;
      margin-right: 66px;
    }

    .footer__agent {
      width: 110px;
      height: 110px;
      top: 130px;
      left: 194px;
      margin-bottom: 40px;
    }

    .footer__foreign-agent {
      font-size: 29px;
      line-height: 37px;
      margin: 0 40px 43px 34px;
    }

    .footer__license {
      font-size: 29px;
      line-height: 37px;
      margin: 0 40px 56px 72px;
    }

    .footer__license-link {
      font-size: 29px;
      line-height: 37px;
    }

    .footer__copyright {
      font-size: 29px;
      line-height: 37px;
      margin-bottom: 166px;
      position: relative;
      left: 9px;
    }
  }

  @media screen and (min-width: 1280px) {
    .footer {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
    }

    .footer__title {
      font-size: 20px;
      line-height: 34px;
      margin-top: 14px;
      margin-left: 12px;
      margin-bottom: 0;
    }

    .footer__container {
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      top: -16px;
      width: 100%;
    }

    .footer__social-links {
      order: 2;
      padding-left: 0;
      margin: 16px 0 70px;
      position: relative;
      left: 11px;
      top: 16px;
    }

    .footer__social-link {
      width: 25px;
      height: 25px;
      margin-right: 26px;
    }

    .footer__agent {
      width: 45px;
      height: 45px;
      top: 36px;
      left: 43px;
      margin: 0;
    }

    .footer__foreign-agent {
      font-size: 17px;
      line-height: 19px;
      order: 3;
      margin: 0 73px 0 0;
      max-width: 456px;
      text-align: left;
      word-spacing: -2px;
    }

    .footer__license {
      font-size: 17px;
      line-height: 19px;
      order: 1;
      margin: 0 0 0 108px;
      max-width: 422px;
      text-align: right;
      word-spacing: -3px;
    }

    .footer__license-link {
      font-size: 17px;
      line-height: 19px;
    }

    .footer__copyright {
      font-size: 20px;
      line-height: 25px;
      left: 2px;
      top: -10px;
      margin-bottom: 11px;
    }
  }
</style>
