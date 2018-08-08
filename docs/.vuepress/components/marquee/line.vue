<template>
  <div class="docs-marquee-line">
    <Marquee class="list" type="line">
      <marquee-item v-for="(item,i) in list" :key="i">{{item}}</marquee-item>
    </Marquee>
  </div>
</template>
<script type="text/ecmascript-6">
import Marquee from '../../../../packages/marquee';
import marqueeItem from '../../../../packages/marqueeItem';
export default {
  components: {
    Marquee,
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
.docs-marquee-line {
  .list {
    padding: 0;
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
