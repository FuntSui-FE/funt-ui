<template>
  <div class="docs-marquee-stair">
    <marquee class="list">
      <marquee-item v-for="(item,i) in list" :key="i">{{item}}</marquee-item>
    </marquee>
  </div>
</template>
<script type="text/ecmascript-6">
import marquee from '../../../../packages/marquee';
import marqueeItem from '../../../../packages/marqueeItem';
export default {
  components: {
    marquee,
    marqueeItem
  },
  data() {
    return {
      list: ['Javascript是世界上最好的语言1', 'Javascript是世界上最好的语言2', 'Javascript是世界上最好的语言3', 'Javascript是世界上最好的语言4', 'Javascript是世界上最好的语言5']
    };
  }
};
</script>
<style lang="less" scoped>
@import url('../../../../styles/marquee');
.docs-marquee-stair {
  .list {
    background-color: #cecece;
    color: #fff;
    li {
      list-style: none;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
}
</style>
