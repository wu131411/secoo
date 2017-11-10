//引入模块
import Vue from "vue"
import VueRouter from "vue-router"

//引入一级路由组件
import Home from "../pages/home"
import Hot from "../pages/hot"
import List from "../pages/list"
import Bag from "../pages/bag"
import Mine from "../pages/mine"

import HotShow from '../components/hot_show'

//VUE中使用router
Vue.use(VueRouter)

//创建一级路由规则
let routes = [
    {path : "/", component : Home},
    {path : "/home", component : Home},
    {path : "/hot", component : Hot,children:[
        {path:'/hot/hot_show/:id', component: HotShow}
    ]},
    {path : "/list", component : List},
    {path : "/bag", component : Bag},
    {path : "/mine", component : Mine}
]
//创建路由对象
let router = new VueRouter({
    routes
})

//导出路由对象
export default router
