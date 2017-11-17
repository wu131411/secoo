// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入bootstrap
import $ from 'jquery'
import "../static/css/bootstrap.min.css"
import "../static/js/bootstrap.min"


//引入路由模块
import router from "./router/router"


//引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// 引入UI组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


Vue.config.productionTip = false


//引入vue-jsonp模块
import VueJsonp from "vue-jsonp"
Vue.use(VueJsonp)


//引入并安装vuex
import Vuex from "vuex"
Vue.use(Vuex)
//创建store
const store = new Vuex.Store({
    state : {
        dataBag : []
    },
    mutations : {//同步执行
        ADD_BAGDATA(state, shopData){
            console.log(state.dataBag.length);
            if(state.dataBag.length == 0){
                state.dataBag.push(shopData)
            }else{
                for(var i = 0; i < state.dataBag.length; i++){
                    if(state.dataBag[i].dataBag.url == shopData.dataBag.url){
                        state.dataBag[i].dataBag.i++
                        break
                    }
                    if(i == (this.state.dataBag.length-1)) {
                        state.dataBag.push(shopData)
                        break
                    }
                }
            }
        },
        REDUCE_BAGDATA(state, shopList){
            state.dataBag -= shopList
        }
    }
})


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  //挂载路由对象
  router,
  store
})
