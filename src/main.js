// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
import axios from "axios"
Vue.prototype.axios = axios
import VueJsonp from 'vue-jsonp'
//引入路由模块
import router from "./router/router"
Vue.use(VueJsonp)
//引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
=======

import router from "./router/router"

//引入vue-jsonp模块
import VueJsonp from "vue-jsonp"
Vue.use(VueJsonp)

//引入轮播图模块
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)


>>>>>>> 40bff996ab3fc4939eaa91861d2caba5e9c59876

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  //挂载路由对象
  router
})
