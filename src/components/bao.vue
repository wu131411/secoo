<template lang="html">
   <li class="bao">
      <dl class="dl" v-for = "item in obj">
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
   props:['obj']

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
