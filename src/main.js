// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入jsonp
import jsonp from 'vue-jsonp'
Vue.use(jsonp)


// // 导入vue-resource
// import VueResource from 'vue-resource'
// // 安装vue-resource
// Vue.use(VueResource)

// 导入路由对象
import router from './router/router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  //挂载路由对象
  router
})
