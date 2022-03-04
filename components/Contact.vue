<template>
  <li class="contact">
    <img
      class="contact__image"
      :src="`${$config.constants.serverUrl}${contact.photo.url}`"
      :alt="contact[`name_${$i18n.locale}`]"
    >
    <h3 class="contact__name">
      {{ contact[`name_${$i18n.locale}`] }}
    </h3>
    <p class="contact__description">
      {{ contact[`position_${$i18n.locale}`] }}
    </p>
<!--    <a-->
<!--      class="contact__telephone-number"-->
<!--      :class="{ 'contact__telephone-number_number_two': ($attrs.index+1)%2 === 0,-->
<!--                'contact__telephone-number_number_three': ($attrs.index+1)%3 === 0}"-->
<!--      :href="'tel:'+contact.phone_number"-->
<!--    >{{ contact.phone_number }}-->
<!--    </a>-->
  </li>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    contact: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 15px;
  }

  .contact__image {
    border-radius: 50%;
    width: 125px;
    height: 125px;
    object-fit: cover;
  }

  .contact__name {
    color: #b23438;
    font-family: RussoOne, Times, serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 20px;
    width: min-content;
    text-align: center;
    margin-top: -53px;
    border-bottom: 3px solid #c7c7c7;
    background: linear-gradient(to top, #fff 50%, transparent);
    padding-top: 20px;
    min-width: 115px;
    min-height: 60px;
  }

  .contact__description {
    color: #000;
    font-family: RussoOne, Times, serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
  }

  .contact__telephone-number {
    background-color: #b23438;
    border-radius: 50%;
    color: #fff;
    text-decoration: none;
    font-family: RussoOne, Times, serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 12px;
    width: 139px;
    height: 30px;
    text-align: center;
    padding-top: 5%;
  }

  .contact__telephone-number:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  .contact__telephone-number_number_two {
    background-color: #7f7f7f;
  }

  .contact__telephone-number_number_three {
    background-color: #000;
  }

  @media screen and (min-width: 768px) {
    .contact {
      margin: 0 49px 15px 0;
    }

    .contact__image {
      width: 250px;
      height: 250px;
    }

    .contact__name {
      font-size: 47px;
      line-height: 40px;
      margin-top: -104px;
      padding-top: 20px;
      padding-bottom: 5px;
      min-width: 246px;
      min-height: 110px;
    }

    .contact__description {
      font-size: 30px;
      line-height: 45px;
    }

    .contact__telephone-number {
      font-size: 32px;
      line-height: 24px;
      width: 276px;
      height: 62px;
    }
  }

  @media screen and (min-width: 1098px) {
    .contact {
      margin: 0 43px 15px 0;
    }

    .contact__image {
      width: 171px;
      height: 171px;
    }

    .contact__name {
      font-size: 33px;
      line-height: 31px;
      margin-top: -75px;
      padding-top: 20px;
      padding-bottom: 0;
      min-width: 172px;
      min-height: 80px;
    }

    .contact__description {
      font-size: 22px;
      line-height: 25px;
    }

    .contact__telephone-number {
      font-size: 22px;
      line-height: 16px;
      width: 186px;
      height: 39px;
    }
  }
</style>
