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
import HotShowDetail from '../components/hot_show_detail'


//VUE中使用router
Vue.use(VueRouter)

//创建一级路由规则
let routes = [
    {path : "/", component : Home, meta : {navShow : true}},
    {path : "/home", component : Home, meta : {navShow : true}},
    {path : "/hot", component : Hot, meta : {navShow : false},children:[
        {path : '/hot',component : HotShow},
        {path : '/hot/hot_show/:id', component : HotShow},
        // {path:'/hot/hot_show_detail/:id',component: HotShowDetail}
    ]},
    {path : "/list", component : List, meta : {navShow : false}},
    {path : "/bag", component : Bag, meta : {navShow : false}},
    {path : "/mine", component : Mine, meta : {navShow : false}},
    {path :'/hot/hot_show_detail/:id',component : HotShowDetail}
]
//创建路由对象
let router = new VueRouter({
    routes
})

//导出路由对象
export default router
