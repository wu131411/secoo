//引入模块
import Vue from "vue"
import VueRouter from "vue-router"

//引入一级路由组件
import Home from "../pages/home"
import Hot from "../pages/hot"
import List from "../pages/list"
import Bag from "../pages/bag"
import Mine from "../pages/mine"
import Home_overseas from "../pages/home_overseas"
import Home_zhuanguiziti from "../pages/home_zhuanguiziti"
import Home_wabao from "../pages/home_wabao"
import HomeNew from "../pages/home_new"

//VUE中使用router
Vue.use(VueRouter)

//创建一级路由规则
let routes = [
    {path : "/", component : Home},
    {path : "/home", component : Home,children:[
        {path:"/home/home-overseas",component:Home_overseas},
        {path:"/home/home-zhuanguiziti/",component:Home_zhuanguiziti},
        {path:"/home/home_wabao",component:Home_wabao},
        {path:"/home/home_new",component:HomeNew}
    ]},
    {path : "/hot", component : Hot},
    {path : "/list", component : List},
    {path : "/bag", component : Bag},
    {path : "/mine", component : Mine},
    {path:"/home_overseas",component:Home_overseas},
    {path:"/home_zhuanguiziti/",component:Home_zhuanguiziti},
    {path:"/home_wabao",component:Home_wabao},
    {path:"/home_new",component:HomeNew}
]
//创建路由对象
let router = new VueRouter({
        routes
})

//导出路由对象
export default router
