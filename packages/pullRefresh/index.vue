<template>
  <div class="pull-refresh" :style="style" @touchstart="onstart" @touchmove="onmove" @touchend="onend" @touchcancel="onend">
    <div class="header">
      <slot name="head-loading" v-if="status!=='normal'">
        <span>{{text}}</span>
      </slot>
    </div>
    <slot />
  </div>
</template>
<script>
import touch from 'packages/mixins/touch.js';
import scroll from 'packages/utils/scroll.js';
const duration = 300;
const headHeight = 40;
export default {
  name: 'pull-refresh',
  mixins: [touch],
  props: {
    value: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    pullingText: {
      type: String,
      default: '下拉刷新'
    },
    loosingText: {
      type: String,
      default: '释放刷新'
    },
    loadingText: {
      type: String,
      default: '正在加载'
    }
  },
  data() {
    return {
      headHeight: headHeight,
      duration: duration,
      height: 0,
      scrollEle: '',
      status: '',
      show: false
    };
  },
  mounted() {
    this.scrollEle = scroll.getScrollEventTarget(this.$el);
  },
  computed: {
    style() {
      return {
        transition: `${this.duration}ms`,
        transform: `translate3d(0,${this.height}px, 0)`
      };
    },
    text() {
      return {
        pulling: this.pullingText,
        loosing: this.loosingText,
        loading: this.loadingText
      }[this.status];
    },
    untouchable() {
      return this.status === 'loading' || this.disabled;
    }
  },
  methods: {
    //滚动条到达顶部
    scrollAtTop() {
      return scroll.getScrollTop(this.scrollEle) <= 0 ? true : false;
    },
    onstart(event) {
      if (this.untouchable) return;
      this.duration = 0;
      this.touchStart(event);
    },
    onmove(event) {
      if (this.untouchable) return;
      this.touchMove(event);
      if (this.direction === 'vertical' && this.deltaY > 0) {
        this.scrollAtTop() && this.getPullDis(this.offsetY) && event.preventDefault();
      }
    },
    onend(event) {
      if (this.untouchable) return;
      !this.scrollAtTop() && this.getPullDis();
      if (this.scrollAtTop() && this.offsetY) {
        this.duration = duration;
        this.status === 'loosing' ? this.startLoading() : this.getPullDis();
      }
    },
    //开始加载
    startLoading() {
      this.status = 'loading';
      this.height = this.headHeight;
      this.$emit('refresh');
    },
    //获取拉取距离
    getPullDis(y) {
      if (!y) {
        this.height = 0;
        this.status = 'normal';
        return false;
      }
      const { headHeight } = this;
      this.status = y > headHeight ? 'loosing' : 'pulling';
      this.height =
        y < headHeight
          ? y
          : y < headHeight * 2
            ? Math.round(headHeight + (y - headHeight) / 2)
            : Math.round(headHeight * 1.5 + (y - headHeight * 2) / 4);
      event.preventDefault();
    }
  },
  watch: {
    value(val) {
      !val && (this.status = 'normal');
      this.duration = duration;
      this.height = val ? this.headHeight : 0;
    }
  }
};
</script>
<style lang="less" scoped>
.pull-refresh {
  position: relative;
  height: 100%;
  .header {
    overflow: hidden;
    position: absolute;
    left: 0;
    top: -50px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #ccc;
    text-align: center;
  }
}
</style>