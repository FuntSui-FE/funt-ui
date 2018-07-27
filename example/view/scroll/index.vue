<template>
  <div class="scroll-example">
    <scroll ref="scroll" :scrollEvents="['scroll']" @pullingDown="onPullingDown" @pullingUp="onPullingUp">
      <ul>
        <li v-for="(item,i) in list" :key="i">我是第{{item}}行</li>
      </ul>
    </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
import scroll from 'packages/scroll';
export default {
  name: 'scroll-example',
  components: {
    scroll
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    };
  },
  methods: {
    //上拉加载
    onPullingUp() {
      console.log('begin pullingup');
      setTimeout(() => {
        this.list.slice(0, 10).map(v => {
          this.list.push(this.list.length + 1);
        });
        console.log('close pullingup');
        this.$refs.scroll.pullUpEnd();
      }, 3000);
    },
    //下拉刷新
    onPullingDown() {
      console.log('begin loading');
      setTimeout(() => {
        console.log('close loading');
        this.$refs.scroll.pullDownEnd();
      }, 3000);
    }
  }
};
</script>
<style lang="less" scoped>
.scroll-example {
  height: 400px;
  li {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
}
</style>