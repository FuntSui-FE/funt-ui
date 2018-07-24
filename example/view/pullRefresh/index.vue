<template>
  <div class="pull-refresh-example">
    <pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p>刷新次数:
        <strong>{{ count }}</strong>
      </p>
    </pull-refresh>
  </div>
</template>
<script>
import pullRefresh from 'packages/pullRefresh';
export default {
  name: 'pull-refresh-example',
  components: {
    pullRefresh
  },
  data() {
    return {
      isLoading: false,
      count: 0
    };
  },
  methods: {
    onRefresh() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>
<style lang="less" scoped>
.pull-refresh-example {
  height: 100%;
  p {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #666;
    text-align: center;
    strong {
      color: #f33;
    }
  }
}
</style>