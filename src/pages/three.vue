<template lang="html">
   <div class="list">
      <div class="load-three" v-if="fag">
         <img src="../../static/images/loading_holder.gif" alt="">
      </div>
      <div class="bor header">
        <div  class="imgArr">
           <img src="../../static/images/list-goback.png" alt="" @click='back1()'>
        </div>
         <div class="input" @click=down()>
            <input type="text" name="" value="" placeholder='搜索商品和品牌'>
         </div>
         <div @click='home()' class="imgArr">
            <img src="../../static/images/list-home.png" alt="">
         </div>
         <div class="sousuo" v-if='sou'>

         </div>
         <div @click="clossdon()" class="guanbi" v-if='closs'>

         </div>
      </div>
      <div class="nav-wrapper">
         <div class="nav-container">
            <div class="zong" @click="zongxiala()">
               <p v-if="zz">综合</p>
               <p v-if="ss">价格↑</p>
               <p v-if="xx">价格↓</p>
               <p v-if="kk">折扣</p>
            </div>
            <div class="pin" @click="pinxiala()">
               品牌
            </div>
            <div class="shai" @click="shaixuan()">
               筛选
            </div>
         </div>
      </div>
      <div class="bao-wrap" v-if='dibu'>
         <ul>
            <Bao :obj="result"></Bao>
         </ul>
      </div>
      <div class="bao-wrap2">

      </div>
      <div class="downArr" v-if="bol">
         <p>热门搜索</p>
         <ul>
            <li>爆款</li>
            <li>超值包袋</li>
            <li>jimmy cho...</li>
            <li>古驰围巾</li>
            <li>Fendi包税</li>
            <li>欧米茄</li>
         </ul>
      </div>
      <div id="zonghe-bai" class="zong-xiala" v-if='zonghe'>
       <div id="zonghe-hei" class="zong-bai">
          <ul class="zong-ul">
              <li :class="active1" @click="zong()">综合</li>
              <li :class="active2" @click="sheng()">价格↑</li>
              <li :class="active3" @click="jiang()">价格↓</li>
              <li :class="active4" @click="zhe()">折扣</li>
          </ul>
       </div>
      </div>
      <div class="zong-xiala" v-if="pinpai">
         <div class="zong-bai">
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
               <h1>品牌</h1>
            </div>
      </div>
     <router-view></router-view>
   </div>
</template>

<script>

import Bao from '../components/bao'

export default {
   data(){
      return{
         fag:true,
         dibu:true,
         result : {},
         bol:false,
         dibu:true,
         sou:true,
         closs:false,
         zonghe:false,
         active1:'color',
         active2:'',
         active3:'',
         active4:'',
         zz:true,
         ss:false,
         xx:false,
         kk:false,
         pinpai:false
      }
   },
   created(){
      this.$jsonp('http://m.secoo.com/appservice/search_cateGoods.action?categoryId=_30_31_&orderType=1&currPage=1&st=10&_=1510385321636&callback:').then(data => {
         this.result = data.rp_result.productlist
         this.fag = false
      })
   },
   components:{
      Bao
   },
   methods:{
      back1(){
         history.back()
      },
      home(){
         this.$router.push({
            path:'/home'
         })
      },
      down(){
         this.bol = true
         this.sou = false
         this.closs = true
      },
      clossdon(){
         this.bol = false
         this.closs = false
         this.sou = true
      },
      zongxiala(){
         if (this.zonghe == true && this.dibu == false) {
            this.zonghe = false
            this.dibu = true
         }else {
            this.zonghe = true
            this.dibu = false
         }
         pinpai:false
      },
      pinxiala(){
         if (this.pinpai == true) {
            this.pinpai = false
         }else {
            this.pinpai = true
         }
      },
      sheng(){
         this.$jsonp('http://m.secoo.com/appservice/search_cateGoods.action?categoryId=_30_31_&orderType=3&currPage=1&st=10&_=1510659850918&callback:').then(data => {
            this.result = data.rp_result.productlist
         })
         this.zonghe = false
         this.active1 = ''
         this.active2 = 'color'
         this.active3 = ''
         this.active4 = ''
         this.zz = false
         this.xx = false
         this.kk = false
         this.ss = true
         this.dibu = true
      },
      zong(){
         this.$jsonp('http://m.secoo.com/appservice/search_cateGoods.action?categoryId=_30_31_&orderType=1&currPage=1&st=10&_=1510385321636&callback:').then(data => {
            this.result = data.rp_result.productlist
         })
         this.zonghe = false
         this.active1 = 'color'
         this.active2 = ''
         this.active3 = ''
         this.active4 = ''
         this.zz = true
         this.xx = false
         this.kk = false
         this.ss = false
         this.dibu = true
      },
      jiang(){
         this.$jsonp('http://m.secoo.com/appservice/search_cateGoods.action?categoryId=_30_31_&orderType=4&currPage=1&st=10&_=1510659969197&callback:').then(data => {
            this.result = data.rp_result.productlist
         })
         this.zonghe = false
         this.active1 = ''
         this.active2 = ''
         this.active3 = 'color'
         this.active4 = ''
         this.zz = false
         this.xx = true
         this.kk = false
         this.ss = false
         this.dibu = true
      },
      zhe(){
         this.$jsonp('http://m.secoo.com/appservice/search_cateGoods.action?categoryId=_30_31_&orderType=9&currPage=1&st=10&_=1510660077923&callback:').then(data => {
            this.result = data.rp_result.productlist
         })
         this.zonghe = false
         this.active1 = ''
         this.active2 = ''
         this.active3 = ''
         this.active4 = 'color'
         this.zz = false
         this.xx = false
         this.kk = true
         this.ss = false
         this.dibu = true
      }
   }
}
</script>

<style lang="css">
.load-three img{
   width:100%;
   height:75%;
   position: fixed;
   top:5rem;
}
.header{
   display: flex;
   justify-content: space-around;
   height:2.7rem;
   align-items: center;
   border-bottom: 1px solid #adadad;
}
.imgArr{
   display: flex;
   justify-content: center;
   align-items: center;
   width:12.5%;
}
.imgArr img{
   width: 1.2rem;
   height:1.2rem;
}
.list .bor{
   border-bottom: 1px solid #eee;
   z-index: 100;
   background-color: #fff;
}
.input{
   text-align: center;
   width:55%;
   height:0.8rem;
   line-height:08rem;
   background: #f2f1f1;
   display: flex;
   border: 1px solid #e5e5e5;
   padding: 0.5rem 3rem 0.5rem 0.7rem;
}
.input input{
   outline: none;
   background: #f2f1f1;
   border: none;
   height:1rem;
}
.sousuo{
   position: fixed;
   top:0.2rem;
   right:3rem;
   background: url('../../static/images/list-icon.png')no-repeat;
   background-size:5rem auto;
   width:1.9rem;
   height:1.9rem;
}
.guanbi{
   position: fixed;
   top:-2rem;
   right:2.8rem;
   background: url('../../static/images/list-icon.png')no-repeat;
   background-size:5rem 5rem;
   width:1.9rem;
   height:4.9rem;
}
.nav-wrapper{
   display: flex;
   justify-content: center;
   z-index: 12;
}
/*.bao-wrap{
   position: fixed;
   top: 5.7rem;
}*/
.nav-container{
   z-index:10;
   margin-top: 3rem;
   width:96%;
   display: flex;
   height:100%;
   background-color: #fff;
   border-bottom: 1px solid #cccccc;
}
.nav-container div{
   color: #666666;
   font-size: 0.5rem;
   font-weight: bold;
   display: flex;
   height:2.2rem;
   justify-content: center;
   align-items: center;
   width:33.333333333%;
}
.bor{
   width: 100%;
   position: fixed;
}
.downArr{
   height:100%;
   background: #fff;
   z-index: 20;
   position: fixed;
   top: 2.7rem;
   width:100%;
   padding: 0 2rem;
}
.downArr p{
   margin: 0.7rem 0;
   font-size:1rem;
   text-indent: 1rem;
}
.downArr ul li{
   color: #4c4c4c;
   float: left;
   width:20%;
   padding: 0.8rem 0.2rem;
   margin: 0.4rem 0.4rem;
   text-align: center;
   font-size: 0.6rem;
   background: #eee;
}

/*综合页*/
#zonghe-bai,#zonghe-hei{
   height: 100%;
}
.zong-xiala{
   background-color:rgba(0,0,0,.6);
   z-index:1;
   position: absolute;
   top:2.4rem;
   width:100%;
   height:auto;
   display: flex;
   justify-content: center;
}
.zong-bai{
   margin-top:2.8rem;
   z-index: 2;
   background-color: #fff;
   width:96%;
   /*height:auto;*/
}
.zong-ul li{
   border-bottom: 1px solid #ebebeb;
   height:2.7rem;
   font-size:0.5rem;
   display: flex;
   align-items: center;
   text-indent: 1rem;
   color: #737373;
}
.zong-ul .color{
   color: #baa071;
}
</style>
