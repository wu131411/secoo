//引入模块
import Vue from "vue"
import VueRouter from "vue-router"

//home
import Home from "../pages/home"
import Home_overseas from "../pages/home_overseas"
import Home_zhuanguiziti from "../pages/home_zhuanguiziti"
import Home_wabao from "../pages/home_wabao"
import HomeNew from "../pages/home_new"
import HomeShehua from "../pages/home_shehua"
import HomeInter from "../pages/home_inter"

//hot尖货
import Hot from "../pages/hot"
import HotShow from '../components/hot_show'
import HotShowDetail from '../components/hot_show_detail'

//list分类
import List from "../pages/list"
import Index from "../pages/index"
import Index2 from "../pages/index2"
import Three from "../pages/three"

//bag购物袋
import Bag from "../pages/bag"

//mine我的
import Mine from "../pages/mine"
import Minezh from "../pages/mine_zh"//我的账户
import Minedd from "../pages/mine_dd"//我的订单
import Minejp from "../pages/mine_jp"//我的竞拍
import Mineyhq from "../pages/mine_yhq"//我的红包优惠券
import Mineyhqyhq from "../pages/mine_yhq_yhq"//优惠券二级路由优惠券
import Minepmq from "../pages/mine_pmq"//我的拍卖券
import Minepmqpmq from "../pages/mine_pmq_pmq"//我的拍卖券二级页面
import Mineseaout from "../pages/mine_seaout"//海外站购买说明
import Mineabout from "../pages/mine_about" //关于寺库
import Mineaboutqy from "../pages/mine_aboutqy"//关于寺库二级页面——寺库起源
import Mineaboutqx from "../pages/mine_aboutqx"//关于寺库二级页面——旗下品牌
import Mineaboutry from "../pages/mine_aboutry"//关于寺库二级页面——集团荣誉
//VUE中使用router
Vue.use(VueRouter)

//创建一级路由规则
let routes = [
    {path : "/", component : Home, meta : {navShow : true}},

    // home
    {path : "/home", component : Home, meta : {navShow : true},children:[
        // {path:"/home/home-overseas",component:Home_overseas},
        // {path:"/home/home-zhuanguiziti/",component:Home_zhuanguiziti},
        // {path:"/home/home_wabao",component:Home_wabao},
        // {path:"/home/home_new",component:HomeNew},
        // {path:"home_inter",component:HomeInter},
    ]},
    {path:"/home_overseas",component:Home_overseas},
    {path:"/home_zhuanguiziti/",component:Home_zhuanguiziti},
    {path:"/home_wabao",component:Home_wabao},
    {path:"/home_new",component:HomeNew},
    {path:"/home_inter",component:HomeInter},
    {path:"/home_shehua",component:HomeShehua},

    // hot
    {path : "/hot", component : Hot, meta : {navShow : false},children:[
        {path : '/hot',component : HotShow},
        {path : '/hot/hot_show/:id', component : HotShow},
        // {path:'/hot/hot_show_detail/:id',component: HotShowDetail}
    ]},
    {path :'/hot/hot_show_detail/:id',component : HotShowDetail},

    //list列表
    {path : "/list", component : List, meta : {navShow : false}, children :[
      { path : '/list',component : Index},
      { path : '/list/index',component: Index},
      { path : '/list/index2',component: Index2}
    ]},
    {path:'/three/:id',component: Three},

    // bag
    {path : "/bag", component : Bag, meta : {navShow : false}},

    // mine
    {path : "/mine", component : Mine, meta : {navShow : false}},
    {path : "/mine_zh", component : Minezh},
    {path : "/mine_dd", component : Minedd},
    {path : "/mine_jp", component : Minejp},
    {path : "/mine_seaout", component : Mineseaout},
    {path : "/mine_yhq", component : Mineyhq, children: [
      {path:"/mine_yhq",component : Mineyhqyhq},
      {path : "/mine_yhq/:id", component : Mineyhqyhq}
    ]},
    {path : "/mine_pmq", component : Minepmq, children: [
      {path : "/mine_pmq", component : Minepmqpmq},
      {path : "/mine_pmq/:id", component : Minepmqpmq}
    ]},
    {path : "/mine_about", component : Mineabout},
    {path : "/mine_aboutqy", component : Mineaboutqy},
    {path : "/mine_aboutqx", component : Mineaboutqx},
    {path : "/mine_aboutry", component : Mineaboutry}

]
//创建路由对象
let router = new VueRouter({
    routes
})

//导出路由对象
export default router
