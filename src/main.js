import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import axios from 'axios'
axios.defaults.baseURL = 'https://easy-mock.com/mock/5ccab34e4080e97283e41572/api'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
