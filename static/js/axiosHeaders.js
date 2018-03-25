import Vue from 'vue'
import axios from 'axios'

Vue.prototype.axios = axios;
function setHeaders () {
  const localData = localStorage.getItem('zt_data');
  if (localData !== '' && localData) {
    const ztData = JSON.parse(localData);
    axios.defaults.headers.common['access-token'] = ztData.token;
  }
}

export default {
  setHeaders: setHeaders
}
