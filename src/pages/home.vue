<!-- 主页 -->
<template lang="html">
    <div id="home">
       <div @click="go()" class="home-banner" >
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="item in home_swiper">
                    <img :src="item.img">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
       </div>
       <div class="home-manner">
           <ul class="home-manner">
               <a href="#" v-for="item in home_manner">
                   <li @click="erji(item)" >
                       <img :src="item.img" alt="">
                       {{item.title}}
                   </li></a>
           </ul>
       </div>
       <div v-for="items in main">
           <div @click="fnOne(items)" class="main" v-if="items.type=='15'">
                <a href="#"><img :src="items.content.img" alt=""></a>
           </div>
           <div v-else-if="items.type=='18'">
               <div class="text">{{ items.content.title }}</div>
           </div>
       </div>
   </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'home',
    components: { swiper, swiperSlide },
    data(){
        return{
            home_swiper : {},
            home_manner : {},
            main : {},
            swiperOption: {
                autoplay: 1000,
                direction : 'horizontal',
                pagination : '.swiper-pagination',
            }
        }
    },
    created(){
        this.$jsonp('http://las.secoo.com/api/home/home_page?c_app_ver=1.0.0&c_platform_type=3').then( data=>{
            console.log(data.floors);
            this.home_swiper = data.floors[0].list;
            this.home_manner = data.floors[1].list;
            this.main = data.floors
        })
    },
    methods:{
        go(){
            this.$router.push({
                path:'/home_overseas/'
            })
        },
        erji(i){
            console.log(i)
            if(i.title == '专柜自提'){
                this.$router.push({
                    path:'/home_zhuanguiziti/'
                })
            } else if(i.title == '挖宝'){
                this.$router.push({
                    path:'/home_wabao/'
                })
            }
        },
        fnOne(j){
            console.log(j);
            if(j.index == 4){
                this.$router.push({
                    path:'/home_new/'
                })
            }
        }

    }

}
</script>

<style lang="css">

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
    }
    .main img{
        width: 100%;
    }
    .text {
        margin: 8% 0 4%;
        text-align: center;
        font-size: 0.746667rem;
    }
    </style>
