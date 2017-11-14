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
                loop : true,
                autoplay: 3000,
                direction : 'horizontal',
                pagination : '.swiper-pagination',
                autoplayDisableOnInteraction : false,
            }
        }
    },
    created () {
        this.$jsonp("http://las.secoo.com/api/home/home_page?c_app_ver=1.0.0&c_platform_type=3").then(data=>{
            // console.log(data.floors);
            //获取轮播图数据，并赋给home_swiper
            this.home_swiper = data.floors[0].list
        })
    }
}
</script>

<style lang="css">
    /*轮播图*/
    .home .swiper-container{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .home .swiper-wrapper{
        width: 300%;
        height: 100%;
    }
    .home .swiper-wrapper div{
        float: left;
    }
    .home .swiper-wrapper img{
        width: 100%;
    }
    /*分页器*/
    .swiper-container .swiper-pagination{
        font-size: 0;
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 13.8rem;
    }
    .swiper-container .swiper-pagination .swiper-pagination-bullet{
        display: inline-block;
        width: 0.426667rem;
        height: 0.426667rem;
        background: #fff;
        border-radius: 50%;
    }
</style>
