<template lang="html">
  <div class="">
     <div class="load-index" v-if="bol">
       <img src="../../static/images/loading_holder.gif" alt="">
     </div>
     <dl class="clearfix" v-for="list in result">
        <dt>{{ list.name }}{{ list.enName}}</dt>
        <dd>
           <ul class="ul">
              <li v-for="childArr in list.child">
                <router-link :to="{name:'three'}">
                   <a href="#">{{ childArr.name}}</a>
                </router-link>
              </li>
           </ul>
        </dd>
     </dl>
  </div>
</template>

<script>
export default {
   data(){
      return{
         result : {},
         bol:true
      }
   },
   created(){
      this.$jsonp('//android.secoo.com/appservice/cartAndBrand.action?v=2.0').then(data => {
         this.result = data.rp_result.categorys
         // console.log(this.result);
         this.bol = false
      })
   },
}
</script>

<style lang="css">
.load-index img{
   width:100%;
   height:100%;
}
.clearfix{
   margin-bottom: 5%;
}
.clearfix dt{
   display: flex;
   justify-content: center;
   align-items: center;
   background: #eaeaea;
   font-size:0.9rem;
   height:1.8rem;
   margin-bottom:5%;
}
.clearfix dt a{
   color: #474747;
}
.clearfix dd{
   margin-left:4%;
}
.ul{
   display: flex;
   flex-wrap: wrap;
}
.ul li{
   display: flex;
   align-items: center;
   width:25%;
   height:2.45rem;
}
.ul li a{
   font-size:0.7rem;
   color: #737373;
}
</style>
