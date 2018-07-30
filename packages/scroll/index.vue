<template>
  <div class="fs-scroll-wrapper" ref="wrapper">
    <div class="fs-scroll-content">
      <slot></slot>
      <div class="fs-pullup">
        <slot name="pullup" v-if="isPullingUp">
          <loading type="spinner" />
        </slot>
      </div>
    </div>
    <div class="fs-pulldown" ref="pulldown" :style="pullDownStyle">
      <slot name="pulldown">
        <loading v-if="isPullingDown" />
        <svg v-else viewBox="25 25 50 50">
          <linearGradient id="SVGID" gradientUnits="userSpaceOnUse">
            <stop offset="0" style="stop-color:#fff" />
            <stop offset="1" style="stop-color:#f05b54" />
          </linearGradient>
          <circle cx="50" cy="50" r="12" fill="none" />
        </svg>
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
const STOPTIME = 300;
const PULLDOWNHEIGHT = 40;
const PULLUPHEIGHT = 40;
const EVENT_PULLING_DOWN = 'pullingDown';
const EVENT_PULLING_UP = 'pullingUp';
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
      isPullingDown: false,
      isPullingUp: false
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
      const { pullDownRefresh, pullUpLoad } = this.options;
      const obj = {};
      pullDownRefresh &&
        (obj.pullDownRefresh = {
          threshold: PULLDOWNHEIGHT,
          stop: PULLDOWNHEIGHT
        });
      pullUpLoad &&
        (obj.pullUpLoad = {
          threshold: PULLUPHEIGHT
        });
      let options = Object.assign(
        {},
        DEFAULT_OPTIONS,
        {
          probeType: this.scrollEvents.indexOf(EVENT_SCROLL) !== -1 ? 3 : 1
        },
        this.options,
        obj
      );
      this.scroll = new yScroll(this.$refs.wrapper, options);
      this._listenScrollEvents();
      pullDownRefresh && this._onPullDownRefresh();
      pullUpLoad && this._onPullUpLoad();
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
        //正在加载中
        if (this.isPullingDown) return;
        this.setPullDownParms();
        this.$emit(EVENT_PULLING_DOWN);
      });
      this.scroll.on(EVENT_SCROLL, pos => {
        this.pullDownY = pos.y - PULLDOWNHEIGHT;
      });
    },
    //初始化上拉加载
    _onPullUpLoad() {
      this.scroll.on(EVENT_PULLING_UP, () => {
        if (this.isPullingUp) return;
        this.isPullingUp = true;
        this.$emit(EVENT_PULLING_UP);
      });
    },
    //设置下拉刷新参数
    setPullDownParms(value = 0, status = true) {
      this.pullDownY = value;
      this.isPullingDown = status;
    },
    //下拉刷新完成回调
    pullDownEnd() {
      this.$nextTick(() => {
        this.setPullDownParms(-PULLDOWNHEIGHT, false);
        this.scroll && this.scroll.finishPullDown();
      });
    },
    //下拉加载完成回调
    pullUpEnd() {
      this.$nextTick(() => {
        this.isPullingUp = false;
        this.scroll && this.scroll.finishPullUp();
        this.scroll && this.scroll.refresh();
      });
    },
    beforeDestroy() {
      this.scroll && this.scroll.destroy();
      this.scroll = null;
    }
  }
};
</script>
<style lang="less" scoped>
.fs-scroll-wrapper {
  position: relative;
  height: 100%;
  overflow: hidden;

  .fs-pullup {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
  }
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
    svg {
      width: 100%;
      height: 100%;
    }
    circle {
      stroke: url(#SVGID);
      stroke-width: 2;
      stroke-linecap: round;
    }
  }
}
</style>