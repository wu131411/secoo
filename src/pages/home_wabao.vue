<template lang="html">
  <div id="wabao">
      <HomeHead></HomeHead>
      <div class="top_panel" v-for="item in result">
           <img :src="item.one" alt="">
      </div>
  </div>
</template>

<script>
import HomeHead from "../components/home_head"
export default {
    components:{
        HomeHead
    },
    data(){
        return{
            result:{}
        }
    },
    created(){
        this.result = [
            {"one":"//pic12.secooimg.com/comment/17/11/b04b8316560043c8ab18ef8145a3bfda.jpg"},
            {"one":"//pic12.secooimg.com/comment/17/11/1ce346ca9f764d3caf170812eff6f95a.jpg"},
            {"one":"//pic12.secooimg.com/comment/17/11/058a60da9329443ebb31915af33ed652.jpg"},
            {"one":"//pic12.secooimg.com/comment/17/11/20c4a997009a489d9f5740eb7f9d8308.jpg"},
            {"one":"//pic12.secooimg.com/comment/17/11/bfc5f59df00f43c3b3c59404b9ec3336.jpg"},
            {"one":"//pic12.secooimg.com/comment/17/11/db66924a9d1d42039155a0a6739acde0.jpg"},
            {"one":"//pic12.secooimg.com/comment/17/11/6f1ef02d160b4022b7b1c39186e698f1.jpg"},
            {"one":"//pic12.secooimg.com/comment/17/11/e221522b27514661a780b37c3c90f057.jpg"}
        ]
    }
}
</script>

<style lang="css" scoped="">
    .top_panel {
        width: 100%;
        margin-bottom: 0.53333333333333rem;
    }
    img{
        width: 100%;
    }
</style>
