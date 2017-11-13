<template lang="html">
   <div class="list">
      <div class="bor header">
        <div  class="imgArr">
           <img src="../../static/images/list-goback.png" alt="" @click='back1()'>
        </div>
         <div class="input">
            <input type="text" name="" value="" placeholder='搜索商品和品牌'>
         </div>
         <div @click='home()' class="imgArr">
            <img src="../../static/images/list-home.png" alt="">
         </div>
         <div class="sousuo">

         </div>
      </div>
      <div class="nav-wrapper">
         <div class="nav-container">
            <div class="zong">
               综合
            </div>
            <div class="pin">
               品牌
            </div>
            <div class="shai">
               筛选
            </div>
         </div>
      </div>
      <div class="bao-wrap">
         <ul>
            <Bao  :obj="result"></Bao>
         </ul>
      </div>
     <router-view></router-view>
   </div>
</template>

<script>

import Bao from '../components/bao'

export default {
   data(){
      return{
         result:{}
      }
   },
   components:{
      Bao
   },
   methods:{
      back1(){
         history.back()
      }
   }
}
</script>

<style lang="css">
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
.nav-wrapper{
   display: flex;
   justify-content: center;
}
.nav-container{
   margin-top: 3rem;
   width:96%;
   display: flex;
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
</style>
