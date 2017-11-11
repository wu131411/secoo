<!-- 主页 -->
<template lang="html">
     <div class="home">
         <swiper :options="swiperOption" ref="mySwiper">
             <!-- slides -->
             <swiper-slide v-for="item in home_swiper">
                 <img :src="item.img" alt="">
             </swiper-slide>
             <!-- Optional controls -->
             <div class="swiper-pagination"  slot="pagination"></div>
         </swiper>
     </div>
</template>

<script>
//注册轮播图局部组件
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'home',
    components: { swiper, swiperSlide },
    data (){
        return {
            home_swiper : {},
            swiperOption: {
                autoplay: 1000,
                direction : 'horizontal',
                pagination : '.swiper-pagination',
            }
        }
    },
    created () {
        this.$jsonp("http://las.secoo.com/api/home/home_page?c_app_ver=1.0.0&c_platform_type=3").then(data=>{
            //获取轮播图数据，并赋给home_swiper
            this.home_swiper = data.floors[0].list
        })
    }
}
</script>

<style lang="css">
    .home{
        overflow: hidden;
    }
    .home .swiper-wrapper{
        width: 200%;
    }
    .home .swiper-wrapper div{
        float: left
    }
    .home .swiper-wrapper img{
        width: 100%;
        float: left;
    }
</style>
