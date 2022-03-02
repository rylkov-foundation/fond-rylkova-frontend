<template>
  <section ref="donation" class="donation">
    <div class="donation__container">
      <h2 class="donation__title">
        {{ pageData[`title_${$i18n.locale}`] }}
      </h2>
      <div class="donation__image-container">
        <img src="~/assets/images/smile.svg" alt="Смайл" class="donation__smile">
      </div>
      <DonationForm :donation-amount="donationAmount" :top-donation-sum="topDonationSum" class="donation__form" />
      <NuxtLink :to="'/privacy-policy'" class="donation__privacy-policy">
        {{ $t('links.privacyPolicy') }}
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Donation',
  props: {
    topDonationSum: {
      type: Number,
      default: 0
    },
    pageData: {
      default: () => {},
      type: Object
    },
    donationAmount: {
      default: () => {},
      type: Object
    }
  },
  mounted () {
    this.$root.donationRef = this.$refs.donation
  }
}
</script>

<style scoped>
  .donation__image-container {
    position: absolute;
    overflow: hidden;
    width: 140px;
    height: 147px;
    right: 0;
    top: -29px;
  }

  .donation__form {
    margin: 30px auto 0;
  }

  .donation {
    background-color: #000;
  }

  .donation__container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: #cbcbcb;
    position: relative;
    padding-bottom: 12px;
    margin-left: auto;
  }

  .donation__title {
    color: #cbcbcb;
    font-size: 38px;
    line-height: 30px;
    font-family: RussoOne, Times, serif;
    letter-spacing: 3px;
    word-spacing: 0;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
    margin: 24px 0 0 18px;
    width: 54vw;
    z-index: 1;
  }

  .donation__title-mark {
    text-transform: uppercase;
    color: #000;
    position: relative;
    top: 9px;
    right: 2px;
    font-weight: 900;
    font-size: 42px;
    letter-spacing: 0;
    font-family: RussoOne, Times, serif;
    text-shadow: none;
  }

  .donation__smile {
    width: 149px;
    position: absolute;
    right: -9px;
  }

  .donation__privacy-policy {
    font-family: Roboto, Arial, sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 19px;
    color: #727272;
    text-align: center;
  }

  .donation__privacy-policy:hover {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    .donation__title {
      font-size: 87px;
      line-height: 77px;
      text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
      margin: 25px 0 0 51px;
      width: 60vw;
    }

    .donation__form {
      margin: 12px auto 0;
    }

    .donation__title-mark {
      top: 1px;
      right: 8px;
      font-size: 90px;
    }

    .donation__image-container {
      width: 263px;
      overflow: unset;
      top: -52px;
      right: 14px;
    }

    .donation__smile {
      width: 100%;
      position: unset;
    }

    .donation__privacy-policy {
      font-size: 22px;
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: 1280px) {
    .donation {
      grid-area: donation;
      padding: 0;
    }

    .donation__form {
      margin-top: 0;
    }

    .donation__container {
      width: 615px;
      min-height: 730px;
      margin-left: auto;
      padding: 0;
    }

    .donation__title {
      font-size: 56px;
      line-height: 64px;
      letter-spacing: 6px;
      width: auto;
      margin: 3px 68px 0 124px;
    }

    .donation__title-mark {
      font-size: 63px;
    }

    .donation__image-container {
      top: -58px;
      left: -123px;
      width: 235px;
    }

    .donation__privacy-policy {
      margin: 6px 0 63px 98px;
      font-size: 18px;
      line-height: 31px;
      text-align: left;
    }
  }
</style>
