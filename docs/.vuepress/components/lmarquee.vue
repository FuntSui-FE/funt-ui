<template>
  <div class="docs-lmarquee">
    <Lmarquee class="list">
      <marquee-item v-for="(item,i) in list" :key="i">{{item}}</marquee-item>
    </Lmarquee>
  </div>
</template>
<script type="text/ecmascript-6">
import Lmarquee from '../../../packages/lmarquee';
import marqueeItem from '../../../packages/marqueeItem';
export default {
  name: 'docs-lmarquee',
  components: {
    Lmarquee,
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
@import url('../../../styles/lmarquee');
.docs-lmarquee {
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
