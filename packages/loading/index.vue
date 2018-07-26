<template>
  <div class="loading">
    <span>
      <svg class='circular' viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" />
      </svg>
    </span>
  </div>
</template>
<script>
export default {
  name: 'loading',
  data() {
    return {};
  }
};
</script>
<style lang="less">
.loading {
  display: inline-block;
  width: 30px;
  height: 30px;
  z-index: 0;
  font-size: 0;
  line-height: 0;
  position: relative;
  vertical-align: middle;
  & > span {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    z-index: -1;
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    -webkit-animation: rotate 0.8s linear infinite;
    animation: rotate 0.8s linear infinite;
  }
  svg {
    width: 100%;
    height: 100%;
  }
  circle {
    stroke: #f05b54;
    stroke-width: 3;
    stroke-linecap: round;
    -webkit-animation: circular 1.5s ease-in-out infinite;
    animation: circular 1.5s ease-in-out infinite;
  }
}
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}
</style>