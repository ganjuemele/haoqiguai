// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//全局引入Mint-ui组件
import Mint from 'mint-ui'
Vue.use(Mint);
import 'mint-ui/lib/style.css'
import '../static/globle.css'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false;

//引入vue-awesome-swiper
import vueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
Vue.use(vueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
