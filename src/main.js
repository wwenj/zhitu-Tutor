// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'mint-ui/lib/style.css'
// import {Indicator, Toast, InfiniteScroll} from 'mint-ui'

Vue.config.productionTip = false;

Vue.prototype.axios = axios;

const localData = localStorage.getItem('zt_data');
if (localData !== '' && localData) {
  const ztData = JSON.parse(localData);
  axios.defaults.headers.common['access-token'] = ztData.token;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
