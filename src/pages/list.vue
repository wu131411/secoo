<!-- 分类 -->
<template lang="html">
     <div class="list">
       <div class="header">
         <div @click='back()' class="imgArr">
            <img src="../../static/images/list-goback.png" alt="">
         </div>
          <div class="two">
             <p class="p1" @click="bianse()" :class="color"><router-link to="/list/index">分类</router-link></p>
             <p class="p2" @click="bianse2()" :class="colortwo"><router-link to="/list/index2">品牌</router-link></p>
          </div>
          <div @click="home()" class="imgArr">
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
         color:'black',
         colortwo:''
      }
   },
   methods:{
      back(){
         history.back()
      },
      home(){
         this.$router.push({
            path:'/home'
         })
      },
      bianse(){
         this.color = 'black';
         this.colortwo = '';
      },
      bianse2(){
         this.color = ' ';
         this.colortwo = 'black';
      }
   }
}

 // :class="{'router-link-active' : tag}"
</script>

<style lang="css">
/*.bounce-enter-active{
   transition:all .5s ease;
}
.bounce-leave-active{
   transition:all .8s cubic-bezier(1.0,0.5,0.8,1.0)
}
.bounce-fade-enter,.bounce-leave-to{
   transform: translateX(10px);
   opacity:0
}*/
.black{
   background-color: #474747;

}
.black a{
   color: #fff;
}
html{
   font-size:20rem;
}
.header{
   position: fixed;
   top: 0;
   width:100%;
   display: flex;
   justify-content: space-around;
   height:2.7rem;
   background-color: #fff;
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
section{
   /*position: fixed;
   top:2.7rem;*/
   /*margin-top: 2.7rem;*/
}
</style>
