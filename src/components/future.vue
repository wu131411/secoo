<template lang="html">
  <dl class="clearfix">
    <dt>{{ obj.name }}{{ obj.enName}}</dt>
    <dd>
       <ul class="ul">
          <li v-for="childArr in obj.child">
            <a href="#" @click="change()">{{ childArr.name}}</a>
          </li>
       </ul>
    </dd>
  </dl>
</template>

<script>
export default {
   props:['obj'],
   methods:{
      change(item){
         this.$router.push({
            path:'/three/' + item
         })
      }
   }
}
</script>

<style lang="css">
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
