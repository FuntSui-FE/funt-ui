import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import scroll from '../view/scroll/index.vue';
const routes = [
  {
    path: '/',
    redirect: '/scroll'
  },
  {
    path: '/scroll',
    component: scroll
  }
];
const router = new VueRouter({
  routes
});
export default router;
