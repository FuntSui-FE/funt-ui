<template>
  <div class="funt-marquee-wrapper" :style="{height:`${Height}px`}">
    <div ref="box" :class="['funt-marquee-box',{'Animate':status&&type=='stair'}]" :style="{transform:`translateY(${curY}px)`}">
      <ul class="funt-marquee" ref="list">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>
<script>
import basic from '../utils/create-basic';
const AnimationFn = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

export default basic({
  name: 'marquee',
  props: {
    speed: {
      type: String,
      default: 'fast'
    },
    type: {
      type: String,
      default: 'stair'
    }
  },
  data() {
    return {
      Height: 0,
      count: 0,
      curY: 0,
      duration: 0,
      Timer: null,
      status: true
    };
  },
  beforeDestroy() {
    clearInterval(this.Timer);
  },
  methods: {
    init() {
      this.count++;
      if (this.count == 0 || this.count != this.$refs.list.children.length) return false;
      const node = this.$refs.list.cloneNode(true);
      this.Height = this.$refs.list.offsetHeight;
      this.$refs.box.appendChild(node);
      this.type == 'stair' && this.stairStep();
      this.type == 'line' && this.lineStep();
    },
    stairStep() {
      const { children } = this.$refs.list;
      const itemHeight = `${this.Height / children.length}`;
      this.Timer = setInterval(() => {
        if (this.curY > -this.Height) {
          this.status = true;
          this.curY -= itemHeight;
          if (this.curY == -this.Height) {
            clearInterval(this.Timer);
            setTimeout(() => {
              this.status = false;
              this.curY = 0;
              this.stairStep();
            }, 300);
          }
        }
      }, this.speed == 'fast' ? 800 : 1500);
    },
    lineStep() {
      this.curY -= this.speed == 'fast' ? 1 : 0.5;
      if (this.curY > -this.Height) {
        AnimationFn(this.lineStep);
      } else {
        this.curY = 0;
        AnimationFn(this.lineStep);
      }
    }
  }
});
</script>
