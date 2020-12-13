import Vue from 'vue'
import App from './App.vue'

import axiosApi from 'axios'

const axios = axiosApi.create({
  baseURL:`http://localhost:8080/api/`,
  headers:{ header:'' }
});

Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
