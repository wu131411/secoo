<template lang="html">
   <div class="top">
      <Brands v-for="listArr in result" :obj="listArr"></Brands>
      <div class="black-list">
         <a href="#">A</a>
         <a href="#">B</a>
         <a href="#">C</a>
         <a href="#">D</a>
         <a href="#">E</a>
         <a href="#">F</a>
         <a href="#">G</a>
         <a href="#">H</a>
         <a href="#">I</a>
         <a href="#">J</a>
         <a href="#">K</a>
         <a href="#">L</a>
         <a href="#">M</a>
         <a href="#">N</a>
         <a href="#">O</a>
         <a href="#">P</a>
         <a href="#">Q</a>
         <a href="#">R</a>
         <a href="#">S</a>
         <a href="#">T</a>
         <a href="#">U</a>
         <a href="#">V</a>
         <a href="#">W</a>
         <a href="#">S</a>
         <a href="#">Y</a>
         <a href="#">Z</a>
         <a href="#">#</a>
      </div>
   </div>
</template>

<script>

import Brands from '../components/brands'

export default {
   data(){
      return{
         result:{}
      }
   },
   created(){
      this.$jsonp('//android.secoo.com/appservice/all_brand.action').then(data => {
         this.result = data.rp_result.brands
         console.log(this.result);
      })
   },
   components:{
      Brands
   }
}
</script>

<style lang="css">
.top,section{
   position: absolute;
   top: 2.7rem;
}
.black-list{
   background-color: #474747;
   position: fixed;
   right: 0;
   top:2.7rem;
   z-index: 1;
   width:5%;
   text-align: center;
}
.black-list a{
   font-size: 0.5rem;
   display: block;
   color: #fff;
}
</style>
<!-- //android.secoo.com/appservice/all_brand.action -->
