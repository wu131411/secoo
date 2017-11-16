<template lang="html">
   <li class="bao">
      <dl class="dl" v-for = "item in obj2" @click="goDetail(item)">
         <dt><img :src=" a + item.imgUrl" alt=""></dt>
         <dd class="dd">
            <h6>{{item.productName}}</h6>
            <p><b>{{'￥'+item.refPrice}}</b></p>
         </dd>
      </dl>
   </li>
</template>

<script>
export default {
   data(){
      return{
         a : "http://pic.secoo.com/product/200/200/"
      }
   },
   props:['obj2'],
   methods : {
      goDetail(item){
         this.$router.push({
            path : '/product_detail/' + item.productId
         })
      }
   }
}
</script>

<style lang="css">
</style>
