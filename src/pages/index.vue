<template lang="html">
   <section>
      <Future></Future>
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
