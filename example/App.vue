<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {};
  }
};
</script>
<style lang="less">
@import url('../styles/index');
#app {
  width: 100%;
  height: 100%;
}
</style>
