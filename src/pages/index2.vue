<template lang="html">
   <div class="top">
<<<<<<< HEAD
      <Brands></Brands>
=======
      <Brands v-for="listArr in result" :obj="listArr" :key="listArr.key"></Brands>
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
      <div class="">
         <Brands></Brands>
      </div>
>>>>>>> 71f03a8c7b3eb0048eb0541d125ad80beb1a0f9e
   </div>
</template>

<script>

import Brands from '../components/brands'

export default {
   data(){
      return{
         // result:{},
         // bol:true
      }
   },
   components:{
      Brands
   }
}
</script>

<style lang="css">
.top section{
   position: absolute;
   top: 2.7rem;
}
.top{
   margin-top:2.7rem;
   width:100%;
}
</style>
