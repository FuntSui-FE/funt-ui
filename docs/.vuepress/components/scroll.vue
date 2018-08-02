<template>
  <div class="docs-scroll">
    <div class="scroll-example">
      <Scroll ref="scroll" :options="options" @pullingDown="onPullingDown" @pullingUp="onPullingUp">
        <ul>
          <li v-for="(item,i) in list" :key="i" :class="{'active':i%2==0}">我是第{{item}}行</li>
        </ul>
      </Scroll>
    </div>
  </div>
</template>
<script>
import Scroll from '../../../packages/scroll';
export default {
  components: {
    Scroll
  },
  data() {
    return {
      options: {
        pullDownRefresh: true,
        pullUpLoad: true
      },
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    };
  },
  methods: {
    //上拉加载
    onPullingUp() {
      setTimeout(() => {
        this.list.slice(0, 10).map(v => {
          this.list.push(this.list.length + 1);
        });
        this.$refs.scroll.pullUpEnd();
      }, 2000);
    },
    //下拉刷新
    onPullingDown() {
      setTimeout(() => {
        this.$refs.scroll.pullDownEnd();
      }, 800);
    }
  }
};
</script>

<style lang="less" >
@import url('../../../styles/index');
.docs-scroll {
  .scroll-example {
    height: 500px;
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style: none;
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      color: #ccc;
      text-align: center;
    }
    .active {
      background-color: #dcdcdc;
    }
  }
}
</style>
