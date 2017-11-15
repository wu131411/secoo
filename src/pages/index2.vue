<template lang="html">
   <div class="top">
      <div class="">
         <Brands></Brands>
      </div>
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
