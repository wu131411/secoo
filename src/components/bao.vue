<template lang="html">
   <li class="bao">
      <dl class="dl" v-for = "item in result">
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
         result : '',
         a : "http://pic.secoo.com/product/200/200/"
      }
   },
   props:['obj'],
   created(){
      this.$jsonp('http://m.secoo.com/appservice/search_cateGoods.action?categoryId=_30_31_&orderType=1&currPage=1&st=10&_=1510385321636&callback:').then(data => {
         this.result = data.rp_result.productlist
         console.log(this.result);
      })
   }
}
</script>

<style lang="css">
.dl{
   display: flex;
   border-bottom: 1px solid #EEE;
   align-items: center;
   height:6.5rem;
}
.dl dt{
   height:6rem;
   margin: 0 1rem 0 0.5rem;
}
.dl dt img{
   margin-top: 0.2rem;
   width:5rem;
   height:5rem;
}
.dd{
   width:60%;
}
.dd h6{
   display: -webkit-box;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    /*从上向下垂直排列子元素*/
    -webkit-box-orient: vertical;
}
</style>
