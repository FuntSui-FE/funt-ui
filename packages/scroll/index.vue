<template>
  <div ref="wrapper" class="fs-scroll-wrapper">
    <div class="fs-scroll-content">
      <slot></slot>
    </div>
    <div class="fs-pulldown" ref="pulldown" :style="pullDownStyle">
      <slot name="pulldown">
        <loading v-if="isPullingDown" />
        <span v-else>准备刷新</span>
      </slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import loading from '../loading';
import yScroll from 'better-scroll';
const DEFAULT_OPTIONS = {
  observeDOM: true,
  click: true,
  probeType: 1,
  scrollbar: false,
  pullDownRefresh: false,
  pullUpLoad: false
};
const PULLDOWNHEIGHT = 40;
const EVENT_PULLING_DOWN = 'pullingDown';
const EVENT_BEFORE_SCROLL_START = 'before-scroll-start';
const EVENT_SCROLL = 'scroll';
const EVENT_SCROLL_END = 'scroll-end';
const SCROLL_EVENTS = [EVENT_SCROLL, EVENT_BEFORE_SCROLL_START, EVENT_SCROLL_END];
export default {
  name: 'scroll',
  components: {
    loading
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    scrollEvents: {
      type: Array,
      default() {
        return [];
      },
      validator(arr) {
        return arr.every(item => {
          return SCROLL_EVENTS.indexOf(item) !== -1;
        });
      }
    }
  },
  data() {
    return {
      pullDownY: -PULLDOWNHEIGHT,
      isPullingDown: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  computed: {
    pullDownStyle() {
      return {
        top: `${this.pullDownY}px`
      };
    }
  },
  methods: {
    initScroll() {
      let options = Object.assign(
        {},
        DEFAULT_OPTIONS,
        {
          probeType: this.scrollEvents.indexOf(EVENT_SCROLL) !== -1 ? 3 : 1,
          pullDownRefresh: {
            threshold: PULLDOWNHEIGHT,
            stop: PULLDOWNHEIGHT
          }
        },
        this.options
      );
      this.scroll = new yScroll(this.$refs.wrapper, options);
      this._listenScrollEvents();
      this._onPullDownRefresh();
    },
    //监听滚动事件
    _listenScrollEvents() {
      this.scrollEvents.forEach(event => {
        this.scroll.on(event, (...args) => {
          this.$emit(event, ...args);
        });
      });
    },
    //初始化下拉刷新
    _onPullDownRefresh() {
      this.scroll.on(EVENT_PULLING_DOWN, () => {
        this.setPullDownParms();
        this.$emit(EVENT_PULLING_DOWN);
      });
      this.scroll.on(EVENT_SCROLL, pos => {
        //正在加载中
        if (this.isPullingDown) return;
        this.pullDownY = pos.y - PULLDOWNHEIGHT;
      });
    },
    //设置下拉刷新参数
    setPullDownParms(value = 0, status = true) {
      this.$nextTick(() => {
        this.pullDownY = value;
        status
          ? (this.isPullingDown = status)
          : setTimeout(() => {
              this.isPullingDown = status;
            }, 300);
      });
    },
    //下拉刷新完成回调
    pullDownEnd() {
      this.setPullDownParms(-PULLDOWNHEIGHT, false);
      this.scroll.finishPullDown();
    }
  }
};
</script>
<style lang="less" scoped>
.fs-scroll-wrapper {
  position: relative;
  height: 100%;
  overflow: hidden;
  .fs-pulldown {
    transition: all;
    position: absolute;
    left: 0;
    top: -40px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #666;
    text-align: center;
  }
}
</style>