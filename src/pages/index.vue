<template lang="html">
   <section>
      <Future></Future>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      <!-- <Future></Future> -->

      <Future v-for="listArr in result"  :obj="listArr"></Future>

>>>>>>> 71f03a8c7b3eb0048eb0541d125ad80beb1a0f9e
>>>>>>> a8fe3cbbfa6af33130958ad3f98c84b3af1c42c6
   </section>
</template>

<script>

import Future from '../components/future'

export default {
<<<<<<< HEAD
=======

>>>>>>> a8fe3cbbfa6af33130958ad3f98c84b3af1c42c6
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
