import Vue from 'vue'
import App from './App.vue'
// import './bootstrap/css/bootstrap.css'
import 'bootstrap'
import 'lodash'
// import 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAHbknPTCvUSgWwU0jJ68m4h6b7vpyP6hM'
// import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
