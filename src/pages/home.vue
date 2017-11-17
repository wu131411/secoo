<!-- 主页 -->
<template lang="html">
    <div id="home">
        <!-- 轮播图 -->
       <div @click="bannerGo()" class="home-banner" >
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="item in home_swiper" :key="item.key">
                    <img :src="item.img">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
       </div>
       <!-- 列表 -->
       <div class="home-manner">
           <ul class="home-manner">
               <a href="#" v-for="item in home_manner">
                   <li @click="fnOne(item)" >
                       <img :src="item.img" alt="">
                       {{item.title}}
                   </li>
               </a>
           </ul>
       </div>

       <div v-for="items in main">
           <div @click="fnTwo(items)" v-if="items.type=='15'" class="main" >
                <a href="#"><img :src="items.content.img" alt=""></a>
           </div>
           <div @click="fenlei(items)" class="main" v-if="items.type=='16'" >
                <a href="#"><img :src="items.content.img" alt=""></a>
                <p>
                    <span>{{items.content.title}}</span>
                    {{items.content.subTitle}}
                </p>
           </div>
           <div class="main" v-if="items.type=='17'">
                <a href="#"><img :src="items.content.img" alt=""></a>
           </div>
           <div class="text" v-else-if="items.type=='18'">
                  {{ items.content.title }}
           </div>
       </div>

       <HomeTop></HomeTop>
   </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import swiperCss from "../../static/css/swiper.css"
import HomeTop from "../components/home_top"
export default {
    name: 'home',
    components: {
        swiper,swiperSlide,
        HomeTop
     },
    data (){
        return {
            home_swiper : {},
            home_manner : {},
            main : {},
            swiperOption : {
                loop : true,
                autoplay: 3000,
                direction : 'horizontal',
                pagination : '.swiper-pagination',
                autoplayDisableOnInteraction : false,
            }
        }
    },
    created(){

        this.$jsonp('http://las.secoo.com/api/home/home_page?c_app_ver=1.0.0&c_platform_type=3').then( data=>{
            // console.log(data.floors);
            this.home_swiper = data.floors[0].list;
            this.home_manner = data.floors[1].list;
            this.main = data.floors
        })
    },
    methods:{
        bannerGo(){
            // console.log(this.$router);
            this.$router.push({
                path:'/home_overseas/'
            })
        },
        fnOne(i){
            // console.log(i)
            if(i.title == '专柜自提'){
                this.$router.push({
                    path:'/home_zhuanguiziti/'
                })
            } else if(i.title == '明星车库'){
                this.$router.push({
                    path:'/home_wabao/'
                })
            } else if(i.title == '奢华体验' || i.title == '艺术' || i.title == '名物'){
                this.$router.push({
                    path:'/home_shehua/'
                })
            }
        },
        fnTwo(j){
            // console.log(j);
            if(j.type == "15"){
                this.$router.push({
                    path:'/home_new/'
                })
            }
        },
        fenlei(k){
            // console.log(k);
            if(k.type == "16"){
                this.$router.push({
                    path:'/home_inter/'
                })
            }
        }

    }
}
</script>

<style lang="css">
    #home{
        background-color: white;
    }
    #home .home-manner{
        width: 100%;
        height: 5.424rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .home-manner a li{
        width: 3.78rem;
        font-size: 0.6rem;
        text-align: center;
        vertical-align: middle;
    }
    .home-manner a li img{
        width: 2.4rem;
        display: block;
        margin:0 auto;
    }
    .main{
        width: 100%;
        margin-bottom: 2.66%;
        position: relative;
        overflow: hidden;
    }
    .main img{
        width: 100%;
    }
    .main p {
        color: #000;
        line-height: 0.746667rem;
        position: absolute;
        top: 0;
        left: 0;
        margin: 10.4% 0 0 6.26%;
        font-size:0.65rem;
    }
    .main span {
        display: block;
        line-height: 1.33rem;
        font-size: 0.96rem;
    }
    .text {
        margin: 8% 0 4%;
        text-align: center;
        font-size: 0.746667rem;
    }
    </style>
