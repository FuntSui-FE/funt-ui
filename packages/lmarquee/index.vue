<template>
  <div class="funt-lmarquee" :style="{height:`${Height}px`}">
    <ul class="funt-lmarquee-box" ref="box" :style="{transform:`translateY(${curY}px)`,transition:`transform ${animated?duration:0}ms`}">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
import basic from '../utils/create-basic';
export default basic({
  name: 'lmarquee',
  props: {
    //切换动画时间
    duration: {
      type: Number,
      default: 300
    },
    //切换时间间隙
    interval: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      //是否动画
      animated: true,
      count: 0,
      Height: 0,
      curY: 0,
      Timer: null
    };
  },
  beforeDestroy() {
    clearInterval(this.Timer);
  },
  methods: {
    init() {
      this.count++;
      if (this.count == 0 || this.count != this.$refs.box.children.length) return false;
      const node = this.$refs.box.firstChild.cloneNode(true);
      this.$refs.box.appendChild(node);
      this.start();
    },
    start() {
      const { offsetHeight, children } = this.$refs.box;
      this.Height = `${offsetHeight / children.length}`;
      clearInterval(this.Timer);
      this.Timer = setInterval(() => {
        this.animated = true;
        this.curY -= this.Height;
        if (Math.abs(this.curY) == offsetHeight - this.Height) {
          setTimeout(() => {
            this.animated = false;
            this.curY = 0;
          }, this.duration);
        }
      }, this.interval);
    }
  }
});
</script>
