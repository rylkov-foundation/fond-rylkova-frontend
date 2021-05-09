<template>
  <div class="container">
    <MainHeader />
    <Menu />
    <MainAbout />
    <Main @clickSetTopDonationSum="setTopDonationSum" />
    <Container :top-donation-sum="topDonationSum" />
    <Footer />
    <div class="popup">
      <PopupCookie />
      <PopupAgent />
      <PopupNews />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      topDonationSum: 0
    }
  },
  methods: {
    setTopDonationSum (data) {
      this.topDonationSum = data.topDonationSum
    }
  }
}
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .popup {
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>
