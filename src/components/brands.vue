<template lang="html">
   <div class="">
      <div class="load" v-if="bol">
         <img src="../../static/images/loading_holder.gif" alt="">
      </div>
      <dl class="pin-list" v-for="listArr in result">
        <a :name="listArr.cap">
           <dt >
             {{ listArr.cap }}
          </dt>
        </a>
        <dd v-for="childArr in listArr.list">
           <router-link to="/list/three">
              <div class="left">
                 {{ childArr.cname }}
              </div>
              <span class="right">
                 {{ childArr.ename }}
              </span>
          </router-link>
        </dd>
        <router-view></router-view>
      </dl>
      <div class="black-list">
         <a href="#">A</a>
         <a href="#">B</a>
         <a href="#C">C</a>
         <a href="#D">D</a>
         <a href="#">E</a>
         <a href="#">F</a>
         <a href="#">G</a>
         <a href="#">H</a>
         <a href="#">I</a>
         <a href="#">J</a>
         <a href="#">K</a>
         <a href="#">L</a>
         <a href="#">M</a>
         <a href="#">N</a>
         <a href="#">O</a>
         <a href="#">P</a>
         <a href="#">Q</a>
         <a href="#">R</a>
         <a href="#">S</a>
         <a href="#">T</a>
         <a href="#">U</a>
         <a href="#">V</a>
         <a href="#">W</a>
         <a href="#">S</a>
         <a href="#">Y</a>
         <a href="#">Z</a>
         <a href="#">#</a>
      </div>
   </div>
</template>

<script>
export default {
   data(){
        return{
         result:{},
         bol:true
        }
    },
    created(){
      this.$jsonp('//android.secoo.com/appservice/all_brand.action').then(data => {
         this.result = data.rp_result.brands
         // console.log(this.result);
         this.bol = false
      })
   }
}
</script>

<style lang="css">
.left,.right{
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}
.load img{
   width:100%;
   height:100%;
}
.pin-list dt{
   background: #eeeeee;
   font-size: 0.8rem;
   font-weight: bold;
   height:1.5rem;
   color: #000;
   line-height: 1.5rem;
   text-indent: 0.5rem;
}
.pin-list dd{
   height:2.47rem;
   line-height: 2.47rem;
}
.pin-list dd a div,.pin-list dd a span{
   width:50%;
}
.pin-list dd a span{
   text-align: right;
}
.header{
   z-index: 100;
   background-color: #fff;
   width: 100%;
   position: fixed;
}
.pin-list dd a{
   text-indent: 0.5rem;
   font-size: 0.4rem;
   color: #737373;
   display: flex;
   width:94%;
   border-bottom: 1px solid #d5d5d5;
}
.load{
   position: fixed;
   top: 2.7rem;
   width:100%;
   height:80%;
}
.black-list{
   background-color: #474747;
   position: fixed;
   right: 0;
   top:2.7rem;
   z-index: 1;
   width:5%;
   text-align: center;
}
.black-list a{
   font-size: 0.5rem;
   display: block;
   color: #fff;
}
</style>
