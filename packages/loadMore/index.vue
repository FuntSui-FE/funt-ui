<template>
  <div class="load-more">
    <slot />
  </div>
</template>
<script>
import scroll from 'packages/utils/scroll.js';
export default {
  name: 'load-more',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    clientHeight() {
      return document.documentElement.clientHeight || document.body.clientHeight;
    },
    scrollHeight() {
      return document.documentElement.scrollHeight || document.body.scrollHeight;
    }
  },
  data() {
    return {
      scrollEle: ''
    };
  },
  mounted() {
    this.scrollEle = scroll.getScrollEventTarget(this.$el);
    this.scrollEle.addEventListener('scroll', () => {});
  },
  methods: {
    scrollToBot() {
      return scroll.getScrollTop(this.scrollEle) + this.clientHeight === this.scrollHeight;
    }
  }
};
</script>
<style lang="less">
.text {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
</style>