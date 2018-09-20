import Vue from 'vue';
import App from './App.vue';
import router from './router';
import FastClick from '../packages/utils/FastClick'
FastClick.attach(document.body);
new Vue({
  el: '#app',
  router,
  render(h) {
    return h(App);
  }
});
