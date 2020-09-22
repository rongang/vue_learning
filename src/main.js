import Vue from 'vue'
import App from './App.vue'
// import './bootstrap/css/bootstrap.css'
import 'bootstrap'
// import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
