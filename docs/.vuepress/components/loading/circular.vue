<template>
  <div>
    <Loading/>
    <Loading :size="35" />
    <Loading :size="40" />
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