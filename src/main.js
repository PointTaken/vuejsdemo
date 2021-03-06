import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store';

new Vue({
  el: '#app',
  store, //optional
  render: h => h(App)
})
