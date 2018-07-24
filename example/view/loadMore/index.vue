<template>
  <div class="loadMore-example">
    <load-more v-model="isLoading">
      <ul>
        <li v-for="(item,i) in content" :key="i">
          我是内容{{item}}
        </li>
      </ul>
    </load-more>
  </div>
</template>
<script>
import loadMore from 'packages/loadMore';
export default {
  name: 'loadMore-example',
  components: {
    loadMore
  },
  data() {
    return {
      isLoading: false,
      count: 0,
      content: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    };
  }
};
</script>
<style lang="less" scoped>
.loadMore-example {
  height: 100%;
  ul {
    li {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      color: #ccc;
      text-align: center;
    }
  }
  p {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
}
</style>