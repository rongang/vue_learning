import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'lodash'
import 'ant-design-vue/dist/antd.css';
// import 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAHbknPTCvUSgWwU0jJ68m4h6b7vpyP6hM'
// import $ from 'jquery'
import Antd from 'ant-design-vue';
Vue.config.productionTip = false;

Vue.use(Antd);

Vue.component('underline', {
	template: '<hr color="#004085"/>'
});
new Vue({
  render: h => h(App),
}).$mount('#app')
