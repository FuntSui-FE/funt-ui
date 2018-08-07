import scroll from '../view/scroll/index.vue';
import loading from '../view/loading/index.vue';
import lmarquee from '../view/lmarquee/index.vue';
import marquee from '../view/marquee/index.vue';
const menuList = [
  {
    path: '/scroll',
    component: scroll
  },
  {
    path: '/loading',
    component: loading
  },
  {
    path: '/lmarquee',
    component: lmarquee
  },
  {
    path: '/marquee',
    component: marquee
  }
];
export default menuList;
