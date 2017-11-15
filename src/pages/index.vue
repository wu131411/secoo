<template lang="html">
   <section>
<<<<<<< HEAD
      <Future></Future>
=======
<<<<<<< HEAD
      <Future></Future>
=======
      <Future v-for="listArr in result"  :obj="listArr"></Future>
>>>>>>> 22563648a027f4fda145a0a99954275594294dd5
>>>>>>> b040db4f72862fb9e303d4f43fe490131f84e184
   </section>
</template>

<script>

import Future from '../components/future'

export default {
<<<<<<< HEAD
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
=======
>>>>>>> b040db4f72862fb9e303d4f43fe490131f84e184
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
