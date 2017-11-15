// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from "axios"
Vue.prototype.axios = axios

//引入路由模块
import router from "./router/router"
Vue.use(VueJsonp)

//引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)


//引入vue-jsonp模块
import VueJsonp from "vue-jsonp"
Vue.use(VueJsonp)
<<<<<<< HEAD
// 引入占位模块
import VueOccupy from 'vue-occupy'
Vue.use(VueOccupy)

// Vue.prototype.axios = Axios
=======


>>>>>>> 22563648a027f4fda145a0a99954275594294dd5
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  //挂载路由对象
  router
})
