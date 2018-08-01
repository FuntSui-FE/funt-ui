import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import menuList from '../data/menuList';
import home from '../view/home/index.vue';
const routes = [
  ...menuList,
  {
    path: '/home',
    component: home
  },
  {
    path: '/',
    redirect: '/home'
  }
];
const router = new VueRouter({
  routes
});
export default router;
