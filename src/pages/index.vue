<template lang="html">
   <section>
      <Future v-for="listArr in result"  :obj="listArr"></Future>
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
         // console.log(this.result);
      })
   },
   components:{
      Future
   }
}
</script>

<style lang="css">
.two .router-link-active{
   border: none;
   color: #fff;
   background-color: #474747;
}
</style>
