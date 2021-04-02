<template>
  <div class="grid-container">
    <OurMission />
    <Results />
    <Help />
    <Donation />
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style scoped>
  @media screen and (min-width: 1280px) {
    .grid-container {
      width: 100%;
      display: grid;
      grid-template-areas:
        "mission results"
        "donation help";
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: 55% 45%;
      gap: 0;
    }
  }
</style>
