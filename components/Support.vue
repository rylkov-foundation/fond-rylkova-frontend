<template>
  <div class="support">
    <p class="support__text">
      Поддержать
    </p>
    <svg
      id="svg"
      class="support__heart"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0, 0, 400,433.3333333333333"
    >
      <path id="path0" d="M27.583 113.812 C -27.151 174.293,-7.887 234.905,100.000 341.667 L 200.000 440.623 300.000 341.667 C 379.796 262.703,400.000 232.183,400.000 190.605 C 400.000 97.414,298.251 49.584,230.479 110.916 C 202.118 136.583,197.882 136.583,169.521 110.916 C 129.268 74.488,61.928 75.862,27.583 113.812 " stroke="none" fill="#000000" fill-rule="evenodd" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Support'
}
</script>

<style scoped>
.support {
  position: fixed;
  display: flex;
  right: -61px;
  top: 50%;
  background-color: #b23438;
  transform: rotate(270deg);
}

.support__text {
  text-transform: uppercase;
  color: #fff;
  font-family: Vollkorn, Times, serif;
  font-size: 19px;
  line-height: 18px;
  font-weight: 400;
  margin: 3px 10px 0 8px;
}

.support__heart {
  order: -1;
  position: absolute;
  bottom: -2px;
  left: -13px;
  transform: rotate(90deg);
}

</style>
