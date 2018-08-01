<template>
  <div class="loading-example">
    <div>
      <Loading />
      <Loading :size="35" />
      <Loading :size="40" />
    </div>
    <div>
      <Loading type="spinner" />
      <Loading type="spinner" :size="35" />
      <Loading type="spinner" :size="40" />
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Loading from 'packages/loading';
export default {
  name: 'loading-example',
  components: {
    Loading
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.loading-example {
  width: 100%;
  height: 100%;
  text-align: center;
  & > div {
    padding: 20px;
  }
}
</style>
