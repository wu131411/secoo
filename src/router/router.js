//引入模块
import Vue from "vue"
import VueRouter from "vue-router"

//引入一级路由组件
import Home from "../pages/home"
import Hot from "../pages/hot"
import List from "../pages/list"
import Bag from "../pages/bag"
import Mine from "../pages/mine"//我的
import Minezh from "../pages/mine_zh"//我的账户
import Minedd from "../pages/mine_dd"//我的订单
import Minejp from "../pages/mine_jp"//我的竞拍
import Mineyhq from "../pages/mine_yhq"//我的红包优惠券
import Mineyhqyhq from "../pages/mine_yhq_yhq"//优惠券二级路由优惠券
// import Mineyhqhb from "../pages/mine_yhq_hb"//优惠券二级路由红包
import Mineabout from "../pages/mine_about" //关于寺库
//VUE中使用router
Vue.use(VueRouter)

//创建一级路由规则
let routes = [
    {path : "/", component : Home},
    {path : "/home", component : Home},
    {path : "/hot", component : Hot},
    {path : "/list", component : List},
    {path : "/bag", component : Bag},
    {path : "/mine", component : Mine},
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
