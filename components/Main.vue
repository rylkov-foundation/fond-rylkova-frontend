<template>
  <section class="main">
    <div class="main__wrapper main__wrapper_color_red">
      <div class="main__red-block" />
    </div>
    <div class="main__wrapper main__wrapper_color_grey">
      <div class="main__grey-block">
        <div class="main__money-block">
          <button type="button" name="1000" class="main__number main__number_size_big" @click="onSumClick">
            {{ donationAmount.amount_big }}
            <span class="main__money-sign">&#8381;</span>
          </button>
          <button type="button" name="200" class="main__number main__number_size_small" @click="onSumClick">
            {{ donationAmount.amount_small }}
          </button>
          <button type="button" name="500" class="main__number main__number_size_medium" @click="onSumClick">
            {{ donationAmount.amount_medium }}
          </button>
          <NuxtLink class="link link_position_top" to="/donation">
            {{ $t('links.donate') }}
            <span class="main__arrow">&gt;</span>
          </NuxtLink>
        </div>
        <div class="main__image-block">
          <img src="~/assets/images/eye.png" alt="Глаз" class="main__eye">
        </div>
        <NuxtLink class="link link_position_bottom" to="/get-help">
          {{ $t('links.getHelp') }}
          <span class="main__arrow">&gt;</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Main',
  props: {
    donationAmount: {
      default: () => {},
      type: Object
    }
  },
  methods: {
    onSumClick (e) {
      this.$emit(
        'clickSetTopDonationSum',
        {
          topDonationSum: Number(e.target.name)
        }
      )
      this.$root.donationRef.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

<style scoped>
  .main__wrapper_color_red {
    background-color: #b23438;
    width: 100vw;
  }

  .main__red-block {
    height: 51px;
    max-width: 1280px;
  }

  .main__wrapper_color_grey {
    background-color: #cbcbcb;
    width: 100vw;
  }

  .main__grey-block {
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    padding-bottom: 17px;
    position: relative;
    margin: 0 auto;
  }

  .main__money-block {
    display: flex;
    justify-content: space-between;
    margin: 0 17px 0 22px;
    position: relative;
    top: -37px;
    max-width: 320px;
  }

  .main__number {
    font-family: 'Tomorrow', 'Times', fantasy, serif;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    padding: 0;
    background-color: transparent;
    outline: none;
    border: none;
  }

  .main__number:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  .main__money-sign {
    font-family: 'DrukCyr', 'Times', serif;
    font-size: 94px;
    line-height: 86px;
    font-weight: 500;
    font-style: normal;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px black;
    margin-left: -5px;
  }

  .main__number_size_big {
    color: #000;
    font-size: 122px;
    line-height: 70px;
    position: relative;
  }

  .main__number_size_medium {
    color: #fff;
    font-size: 101px;
    line-height: 93px;
  }

  .main__number_size_small {
    color: #727272;
    font-size: 80px;
    line-height: 73px;
    position: relative;
    padding-left: 13px;
  }

  .link {
    font-family: 'Vollkorn', 'Times', serif;
    font-size: calc(0.0424 * 100vw + 3.4286px);
    line-height: calc(0.0446 * 100vw + 5.7143px);
    font-weight: bold;
    color: #b23438;
    text-decoration: none;
    border-bottom: 2px solid #b23438;
    padding: 0;
  }

  .link:hover {
    opacity: 0.7;
  }

  .link_position_top {
    position: absolute;
    bottom: -7px;
    right: 0;
  }

  .main__image-block {
    background-color: #000;
    width: 99%;
    border-radius: 60%;
    position: relative;
    top: -10px;
    align-self: center;
    display: flex;
    margin-right: auto;
  }

  .main__eye {
    width: 94%;
    padding: 30px 0 25px 14px;
    margin: auto;
  }

  .main__arrow {
    position: relative;
    left: -3px;
  }

  .link_position_bottom {
    align-self: center;
    position: relative;
    top: 1px;
  }

  @media screen and (min-width: 525px) {
    .main__money-block {
      margin: 0 0 0 5px;
      max-width: 490px;
      top: -62px;
    }

    .main__money-sign {
      font-size: 153px;
      line-height: 139px;
      margin-left: -15px;
    }

    .main__number_size_big {
      font-size: 200px;
      line-height: 112px;
      padding: 0 7px 20px 13px;
      border-radius: 15px;
      letter-spacing: 3px;
    }

    .main__number_size_medium {
      font-size: 156px;
      line-height: 143px;
    }

    .main__number_size_small {
      font-size: 123px;
      line-height: 112px;
    }
  }

  @media screen and (min-width: 768px) {
    .main__red-block {
      height: 78px;
    }

    .main__grey-block {
      height: 550px;
    }

    .main__money-block {
      align-items: start;
      margin: 0 0 0 55px;
    }

    .link {
      font-size: 35px;
      line-height: 34px;
    }

    .link_position_top {
      bottom: -4px;
      line-height: 40px;
      right: -171px;
      font-size: 36px;
    }

    .main__image-block {
      background-color: #000;
      min-height: 379px;
      max-width: 768px;
      top: -50px;
    }

    .main__image-block::before {
      top: 10px;
      left: 20px;
      background-size: 80%;
    }

    .main__eye {
      width: 79%;
      padding: 5% 0 6% 14px;
    }

    .link_position_bottom {
      position: relative;
      left: 11px;
      top: -40px;
      font-size: 34px;
      line-height: 38px;
    }
  }

  @media screen and (min-width: 1280px) {
    .main__red-block {
      height: 93px;
    }

    .main__grey-block {
      background-color: #cbcbcb;
      height: 315px;
      display: grid;
      grid-template-columns: 816px 385px;
      grid-template-rows: 314px auto;
      grid-template-areas:
        "eye money"
        "eye help";
      grid-column-gap: 20px;
    }

    .main__money-block {
      grid-area: money;
      display: grid;
      grid-template-columns: 274px auto;
      grid-template-rows: 70px 113px;
      grid-template-areas:
        "big small"
        "big medium";
      grid-column-gap: 21px;
      grid-row-gap: 15px;
      top: -35px;
      margin: 0;
    }

    .main__money-sign {
      font-size: 153px;
      line-height: 123px;
    }

    .main__number_size_big {
      grid-area: big;
      align-self: start;
      font-size: 218px;
      line-height: 168px;
      padding: 0 0 0 13px;
      border-radius: 20px;
    }

    .main__number_size_medium {
      grid-area: medium;
      align-self: start;
      font-size: 145px;
      line-height: 90px;
    }

    .main__number_size_small {
      align-self: start;
      grid-area: small;
      font-size: 123px;
      line-height: 70px;
    }

    .link {
      font-size: 22px;
      line-height: 20px;
    }

    .link_position_top {
      position: unset;
      margin-left: 10px;
      justify-self: flex-start;
    }

    .main__arrow {
      position: relative;
      left: 1px;
    }

    .main__image-block {
      grid-area: eye;
      width: 816px;
      max-width: 816px;
      height: 413px;
      position: relative;
      top: -95px;
    }

    .link_position_bottom {
      grid-area: help;
      align-self: start;
      justify-self: start;
      position: relative;
      top: -68px;
      left: 9px;
    }
  }
</style>
