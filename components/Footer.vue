<template>
  <footer class="footer">
    <h2 class="footer__title">
      мы в соцсетях
    </h2>
    <div class="footer__container">
      <div class="footer__social-links">
        <a href="#" class="footer__social-link footer__social-link_facebook" />
        <a href="#" class="footer__social-link footer__social-link_instagram" />
        <a href="#" class="footer__social-link footer__social-link_twitter" />
        <a href="#" class="footer__link-agent" />
      </div>
      <p class="footer__foreign-agent">
        Материалы изданы и (или) распространены некоммер&shy;ческой организацией, выполняющей, по мнению Минюста России, функции иностранного агента
      </p>
      <p class="footer__license">
        За исключением специально оговоренных случаев, содержание сайта залицензировано под <a href="#" class="footer__license-link">Creative Commons Attribution 3.0 License</a>
      </p>
    </div>
    <p class="footer__copyright">
      ФАР {{ (new Date().getFullYear()) }}
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer {
    display: flex;
    flex-direction: column;
    font-family: Roboto, Arial, sans-serif;
    color: #727272;
    font-size: 11px;
    line-height: 14px;
    text-align: center;
    width: 100%;
  }

  .footer__title {
    font-size: inherit;
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
    margin: 0 40px 15px 30px;
  }

  .footer__license {
    margin: 0 40px 21px 39px;
    text-align: left;
  }

  .footer__license-link {
    text-decoration: underline;
    color: inherit;
  }

  .footer__license-link:hover {
    opacity: 0.7;
  }

  .footer__copyright {
    margin: 0 auto 26px;
  }

  .footer__social-links {
    display: flex;
    margin: 0 auto 81px;
    padding-left: 27px;
    position: relative;
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

  .footer__social-link_facebook {
    background-image: url("~/assets/images/facebook.svg");
  }

  .footer__social-link_instagram {
    background-image: url("~/assets/images/instagram.svg");
  }

  .footer__social-link_twitter {
    background-image: url("~/assets/images/twitter.svg");
  }

  .footer__link-agent {
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

  .footer__link-agent:hover {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    .footer {
      font-size: 29px;
      line-height: 37px;
    }

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

    .footer__link-agent {
      width: 110px;
      height: 110px;
      top: 130px;
      left: 194px;
      margin-bottom: 40px;
    }

    .footer__foreign-agent {
      margin: 0 40px 43px 34px;
    }

    .footer__license {
      margin: 0 40px 56px 72px;
    }

    .footer__copyright {
      margin-bottom: 166px;
      position: relative;
      left: 9px;
    }
  }

  @media screen and (min-width: 1280px) {
    .footer {
      font-size: 17px;
      line-height: 19px;
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

    .footer__link-agent {
      width: 45px;
      height: 45px;
      top: 36px;
      left: 43px;
      margin: 0;
    }

    .footer__foreign-agent {
      order: 3;
      margin: 0 73px 0 0;
      max-width: 456px;
      text-align: left;
      word-spacing: -2px;
    }

    .footer__license {
      order: 1;
      margin: 0 0 0 108px;
      max-width: 422px;
      text-align: right;
      word-spacing: -3px;
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
