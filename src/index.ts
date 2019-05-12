// import Vue from 'vue';
// import Thing from './components/Thing.vue';
//
// const app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!',
//   },
//   components: {
//     Thing,
//   },
// });
//
// console.log('app', app);

import Vue, { CreateElement } from 'vue';
import App from './App.vue';
import router from './router';
// import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h: CreateElement) => h(App, {
    props: {
      message: process.env.DEFAULT_MESSAGE || 'This is a Thing! ololo trololo!',
    },
  }),
}).$mount('#app');
