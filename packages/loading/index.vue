<template>
  <div class="funt-loading" :style="style">
    <span :class="type">
      <i v-for="(item, index) in 12" :key="index" v-if="type=='spinner'" />
      <svg viewBox="25 25 50 50" v-if="type=='circular'">
        <circle cx="50" cy="50" r="20" fill="none" />
      </svg>
    </span>
  </div>
</template>
<script>
import basic from '../utils/create-basic';
export default basic({
  name: 'loading',
  props: {
    type: {
      type: String,
      default: 'circular'
    },
    size: {
      type: Number,
      default: 25
    }
  },
  computed: {
    style() {
      const size = this.size > 40 ? '40px' : `${this.size}px`;
      return {
        width: size,
        height: size
      };
    }
  }
});
</script>
