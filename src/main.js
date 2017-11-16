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
// 引入UI组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  //挂载路由对象
  router
})
