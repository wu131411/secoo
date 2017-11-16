<template lang="html">
   <section>
      <Future></Future>
<<<<<<< HEAD
=======

      <!-- <Future></Future> -->

      <Future v-for="listArr in result"  :obj="listArr"></Future>

>>>>>>> 71f03a8c7b3eb0048eb0541d125ad80beb1a0f9e
   </section>
</template>

<script>

import Future from '../components/future'

export default {

   data(){
      return{
         result:{}
      }
   },
   created(){
      this.$jsonp('//android.secoo.com/appservice/cartAndBrand.action?v=2.0').then(data => {
         this.result = data.rp_result.categorys
      })
   },
   components:{
      Future
   }
}
</script>

<style lang="css">
section{
   margin-top: 2.7rem;
}
</style>
