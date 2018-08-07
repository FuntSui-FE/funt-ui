<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
import basic from '../utils/create-basic';
export default basic({
  name: 'marquee-item',
  mounted() {
    this.$nextTick(() => {
      this.$parent.init();
    });
  }
});
</script>