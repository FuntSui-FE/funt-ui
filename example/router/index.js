import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import PullRefresh from '../view/pullRefresh/index.vue';
import loadMore from '../view/loadMore/index.vue';
const routes = [
  {
    path: '/pullRefresh',
    component: PullRefresh
  },
  {
    path: '/loadMore',
    component: loadMore
  },
  {
    path: '/',
    redirect: '/pullRefresh'
  }
];
const router = new VueRouter({
  routes
});
export default router;
