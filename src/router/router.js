//引入模块
import Vue from "vue"
import VueRouter from "vue-router"

//引入一级路由组件
import Home from "../pages/home"
//bag购物袋
import Bag from "../pages/bag"
<<<<<<< HEAD
import Mine from "../pages/mine"//我的

=======


//mine我的
import Mine from "../pages/mine"
>>>>>>> 0e08045ca1d4d641eb2482bca6d7642e45c58473
import Minezh from "../pages/mine_zh"//我的账户
import Minedd from "../pages/mine_dd"//我的订单
import Minejp from "../pages/mine_jp"//我的竞拍
import Mineyhq from "../pages/mine_yhq"//我的红包优惠券
import Mineyhqyhq from "../pages/mine_yhq_yhq"//优惠券二级路由优惠券
// import Mineyhqhb from "../pages/mine_yhq_hb"//优惠券二级路由红包
import Mineabout from "../pages/mine_about" //关于寺库
<<<<<<< HEAD

import Home_overseas from "../pages/home_overseas"
import Home_zhuanguiziti from "../pages/home_zhuanguiziti"
import Home_wabao from "../pages/home_wabao"
import HomeNew from "../pages/home_new"
=======
>>>>>>> 0e08045ca1d4d641eb2482bca6d7642e45c58473

//list分类
import List from "../pages/list"
import Index from "../pages/index"
import Index2 from "../pages/index2"
import Three from "../pages/three"

//hot尖货
import Hot from "../pages/hot"
import HotShow from '../components/hot_show'
import HotShowDetail from '../components/hot_show_detail'

<<<<<<< HEAD

=======
>>>>>>> 0e08045ca1d4d641eb2482bca6d7642e45c58473
//VUE中使用router
Vue.use(VueRouter)

//创建一级路由规则
let routes = [
    {path : "/", component : Home, meta : {navShow : true}},
<<<<<<< HEAD
    {path : "/home", component : Home, meta : {navShow : true},children:[
        {path:"/home/home-overseas",component:Home_overseas},
        {path:"/home/home-zhuanguiziti/",component:Home_zhuanguiziti},
        {path:"/home/home_wabao",component:Home_wabao},
        {path:"/home/home_new",component:HomeNew}
    ]},
    {path : "/hot", component : Hot, meta : {navShow : false},children:[
        {path : '/hot',component : HotShow},
        {path : '/hot/hot_show/:id', component : HotShow},
        // {path:'/hot/hot_show_detail/:id',component: HotShowDetail}
    ]},
    {path : "/list", component : List, meta : {navShow : false}},
    {path : "/bag", component : Bag, meta : {navShow : false}},
    {path : "/mine", component : Mine, meta : {navShow : false}},

    {path :'/hot/hot_show_detail/:id',component : HotShowDetail},
    {path:"/home_overseas",component:Home_overseas},
    {path:"/home_zhuanguiziti/",component:Home_zhuanguiziti},
    {path:"/home_wabao",component:Home_wabao},
    {path:"/home_new",component:HomeNew},

=======
    //home首页
    {path : "/home", component : Home, meta : {navShow : true}},

    //hot尖货
    {path : "/hot", component : Hot, meta : {navShow : false},children:[
        // {path : '/hot' ,component : HotShow},
        {path : '/hot/hot_show/:id', component : HotShow}
        // {path:'/hot/hot_show_detail/:id',component: HotShowDetail}
    ]},
    {path :'/hot/hot_show_detail/:id',component : HotShowDetail},



    //list列表
    {path : "/list", component : List, meta : {navShow : false}, children :[
      { path : '/list',component : Index},
      { path : '/list/index',component: Index},
      { path : '/list/index2',component: Index2}]
    },
    {path:'/three/:id',component: Three},



    //bag购物袋
    {path : "/bag", component : Bag, meta : {navShow : false}},


   // {name: 'three',path: '/list/three',component:Three},
   // mine我的页面路由
    {path : "/mine", component : Mine, meta : {navShow : false}},
>>>>>>> 0e08045ca1d4d641eb2482bca6d7642e45c58473
    {path : "/mine_zh", component : Minezh},
    {path : "/mine_dd", component : Minedd},
    {path : "/mine_jp", component : Minejp},
    {path : "/mine_yhq", component : Mineyhq, children: [
      {path:"/mine_yhq",component : Mineyhqyhq},
      {path : "/mine_yhq/:id", component : Mineyhqyhq}
    ]},
    {path : "/mine_about", component : Mineabout}
]
//创建路由对象
let router = new VueRouter({
    routes
})

//导出路由对象
export default router
