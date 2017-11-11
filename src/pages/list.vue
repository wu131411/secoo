<!-- 分类 -->
<template lang="html">
     <div class="list">
        <div class="header">
          <div @click='back()' class="imgArr">
             <img src="../../static/images/list-goback.png" alt="">
          </div>
           <div class="two">
              <p class="p1"><router-link to="/list/index">分类</router-link></p>
              <p class="p2"><router-link to="/list/index2">品牌</router-link></p>
           </div>
           <div class="imgArr">
              <img src="../../static/images/list-home.png" alt="" >
           </div>
       </div>
       <router-view></router-view>
     </div>

</template>

<script>



export default {
   data(){
      return {
         tag : true
      }
   },
   methods:{
      back(){
         history.back()
      },
      home(){
         this.$route.push({
            path:'home'
         })
      }
   }
}

 // :class="{'router-link-active' : tag}"
</script>

<style lang="css">
html{
   font-size:20rem;
}
.header{
   display: flex;
   justify-content: space-around;
   height:2.7rem;
   align-items: center;
   border-bottom: 1px solid #adadad;
}
.two{
   display: flex;
   width:73%;
   height:1.9rem;
}
.two>p{
   font-size:0.7rem;
   width:50%;
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid #eaeaea;
   line-height: 1.9rem;
}
.two>p a{
   display: inline-block;
   width: 100%;
   height:100%;
}
.two .p1{
   border-right:0;
   /*background-color: #474747;
   color: #fff;*/
}
.two .p2{
   border-left: 0;
}
.imgArr{
   display: flex;
   justify-content: center;
   align-items: center;
   width:12.5%;
}
.imgArr img{
   width: 1.2rem;
   height:1.2rem;
}
</style>
