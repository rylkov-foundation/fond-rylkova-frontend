<template>
  <svg
    class="drop"
    viewBox="0 0 26.7 47.81"
  >
    <path
      d="M13.18.598S8.284 15.485 2.354 25.536c-5.07
     8.593-1.567 22.77 12.996 21.797 11.836-.793
     14.18-16.723 7.527-26.059C16.222 11.938 13.18.598 13.18.598"
    />
  </svg>
</template>

<script>
export default {
  name: 'Drop'
}
</script>

<style scoped>
  .drop {
    position: absolute;
    top: 135px;
    right: 7px;
    width: 35px;
    height: 35px;
  }

  @media screen and (min-width: 768px) {
    .drop {
      display: none;
    }
  }

  @media screen and (min-width: 1280px) {
    .drop {
      display: block;
      top: 50%;
      left: 50%;
      width: 36px;
      height: 62px;
      transform: translate(-50%, -50%);
    }
  }
</style>
