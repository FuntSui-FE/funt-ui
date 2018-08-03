<template>
  <div class="home">
    <div class="home-header">
      <img :src="logo" class="home-logo" />
      <h3 class="home-title">FUNT-UI</h3>
      <p class="home-tips">基于VUE的移动端组件库</p>
    </div>
    <div class="home-contxt">
      <ul>
        <router-link v-for="(item,i) in menulist" :key="i" :to="item.path" tag="li">{{item.path.replace(/\//g,'')}}组件</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
const LOGO = require('../../../build/funt-ui.png');
import MENULIST from '../../data/menuList';
// git subtree push --prefix docs/dist origin gh-pages
export default {
  name: 'home',
  data() {
    return {
      logo: LOGO,
      menulist: MENULIST
    };
  }
};
</script>
<style lang="less" scoped>
@import url('./index');
</style>
