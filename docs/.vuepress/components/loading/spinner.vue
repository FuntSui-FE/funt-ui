<template>
  <div>
    <Loading type="spinner" />
    <Loading type="spinner" :size="35" />
    <Loading type="spinner" :size="40" />
  </div>
</template>
<script>
import Loading from '../../../../packages/loading';
export default {
  components: {
    Loading
  }
};
</script>
<style lang="less">
@import url('../../../../styles/base');
@import url('../../../../styles/loading');
</style>