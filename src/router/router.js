
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



// 商品详情页
import ProductDetail from '../components/product_detail'


//list分类
import List from "../pages/list"
import Index from "../pages/index"
import Index2 from "../pages/index2"
import Three from "../pages/three"


//bag购物袋
import Bag from "../pages/bag"
import BagOne from "../components/bag_one"
import BagTwo from "../components/bag_two"



//mine我的
import Mine from "../pages/mine"
import Minedl from "../pages/mine_dl"
import Minezh from "../pages/mine_zh"//我的账户
import Minerecommend from "../pages/mine_recommend"//我的账户二级页面——推荐人
import Mineaddress from "../pages/mine_address"//我的账户二级页面——收货地址
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
import Mineaboutqxhuisuo from "../pages/mine_aboutqx_huisuo"//旗下品牌三级页面库会所
import Mineaboutqxjianding from "../pages/mine_aboutqx_jianding"//旗下品牌三级页面鉴定中心
import Mineaboutqxyanghu from "../pages/mine_aboutqx_yanghu"//旗下品牌三级页面养护中心
import Mineaboutqxxueyuan from "../pages/mine_aboutqx_xueyuan"//旗下品牌三级页面寺库商学院
import Mineaboutry from "../pages/mine_aboutry"//关于寺库二级页面——集团荣誉



//VUE中使用router
Vue.use(VueRouter)

//创建路由规则
let routes = [
    {path : "/", redirect : '/home', meta : {navShow : true}},

    // home
    {path : "/home", component : Home, meta : {navShow : true}},
    {path:"/home_overseas", component:Home_overseas},
    {path:"/home_zhuanguiziti/",component:Home_zhuanguiziti},
    {path:"/home_new",component:HomeNew},
    {path:"/home_inter",component:HomeInter},
    {path:"/home_shehua",component:HomeShehua},
    {path:"/home_wabao",component:Home_wabao},


    // hot
    {path : "/hot", component : Hot, meta : {navShow : false},children:[
        {path : '/hot/hot_show/:id', component : HotShow},
        {path : '/hot',component : HotShow},
        // {path :'/hot/hot_show_detail/:id',component : HotShowDetail},
    ]},
    {path :'/hot_show_detail/:id',component : HotShowDetail},
    // 商品详情页
    {path : '/product_detail/:productId',component : ProductDetail},


    //list列表
    {path : "/list", component : List, meta : {navShow : false}, children :[
      { path : '/list',component : Index},
      { path : '/list/index',component: Index},
      { path : '/list',component : Index2},
      { path : '/list/index2',component: Index2}

   ]},
    {name: 'three',path: '/list/three',component:Three},


    //bag购物袋
    {path : "/bag", component : Bag, meta : {navShow : false}, children : [
        {path : "/bag", component : BagOne},
        {path : "/bag/bag_one", component : BagOne},
        {path : "/bag/bag_two", component : BagTwo}
    ]},

   // mine我的页面路由
    {path : "/mine", component : Mine, meta : {navShow : false}},
    {path : "/mine_zh", component : Minezh},
    {path : "/mine_dl", component : Minedl},
    {path : "/mine_recommend", component : Minerecommend},
    {path : "/mine_address", component : Mineaddress},
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
    {path : "/mine_aboutry", component : Mineaboutry},
    {path : "/mine_aboutqx_huisuo", component : Mineaboutqxhuisuo},
    {path : "/mine_aboutqx_jianding", component : Mineaboutqxjianding},
    {path : "/mine_aboutqx_yanghu", component : Mineaboutqxyanghu},
    {path : "/mine_aboutqx_xueyuan", component : Mineaboutqxxueyuan},
    {path : "/mine_aboutry", component : Mineaboutry},
    // 商品详情页
    {path : '/product_detail/:productId',component : ProductDetail},
    {path : "/mine_aboutry", component : Mineaboutry},
]
//创建路由对象
let router = new VueRouter({
    routes
})

//导出路由对象
export default router
