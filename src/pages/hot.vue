<template lang="html">
  <div id="jianHuo">
      <div class="banner" @click="goWabao()">
          <swiper :options="swiperOption" ref="mySwiper">
              <!-- slides -->
              <swiper-slide v-for="item in hot_swiper" :key="item.key">
                  <img :src="item.img">
              </swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
      </div>
      <div class="hot_tabbar">
          <div class="">
              <ul>
                  <li v-for="item in tabbar" class="tab">
                          <img :src="item.img" alt="" >
                          <p class="title" @click="push(item.id)">{{ item.title }}</p>
                  </li>
              </ul>
          </div>

      </div>
      <div class="hot_show">
          <HotShow />
      </div>
  </div>
</template>

<script>
// 导入评论列表组件
import HotShow from '../components/hot_show'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import swiperCss from "../../static/css/swiper.css"

// import LunBo from '../components/lunbo'
let hot_tabbar_color = false;

export default {
    data(){
        return {
            tabbar:{},
            hot_swiper : {},
            swiperOption : {
                loop : true,
                autoplay: 3000,
                direction : 'horizontal',
                pagination : '.swiper-pagination',
                autoplayDisableOnInteraction : false,
            }
        }
    },
    methods : {
        push(id){
            this.$router.push({
                path : '/hot/hot_show/' + id,
            })
        },
        changeBorder(ev){
            // TODO:圆圈路由点击效果
            if (hot_tabbar_color) {
                ev.currentTarget.classList.remove("hot_tabbar_color");
                hot_tabbar_color = true;
            } else {
                ev.currentTarget.classList.add('hot_tabbar_color');
                hot_tabbar_color = false;
            }
        },
        goWabao(){
            this.$router.push({
                path : '/home_wabao'
            })
        }
    },
    components : {
        HotShow,
        swiper,
        swiperSlide
    },
    created(){

        this.$jsonp('http://las.secoo.com/api/show/hot_show_head').then(data => {
            this.tabbar = data.tags;
            this.hot_swiper = data.banners
            this.banner = data.banners;
        })
    }

}
</script>

<style lang="css">
    /*轮播图样式*/
    #jianHuo{
        width: 100%;
    }
    #jianHuo .banner{
        width: 100%;
    }
    #jianHuo .banner img{
        width: 100%;
        height: 100%;
    }

    /*轮播图*/
    .hot_banner .swiper-container{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .hot_banner .swiper-wrapper{
        width: 500%;
        height: 100%;
    }
    .hot_banner .swiper-wrapper div{
        float: left;
    }
    .hot_banner .swiper-wrapper img{
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

    /*二级路由样式*/
    /*点击时的边框样式*/
    .hot_tabbar_color{
        border-color: #ceb88e !important;
    }
    .hot_tabbar{
        overflow: hidden;
        width: 100%;
        /*height: 5.6rem;*/
        background: #fff;
        overflow: hidden;
        font-family: STHeiti,Helvetica Neue;
    }
    .hot_tabbar>div{
        overflow: hidden;
    }
    .hot_tabbar ul{
        width: 100%;
        overflow: auto;
        padding: 1rem 0 0 0;
        display: -webkit-box;
    }
    .hot_tabbar ul li:nth-of-type(1){
        margin-left: .6rem;
    }
    .hot_tabbar ul li:last-child{
        margin-right: .8rem;
    }
    /*.hot_tabbar .tab::after{
        content: '';
        border: 2px solid red;
        position: absolute;
        left: -3px;
        top: -3px;
    }*/
    .hot_tabbar .tab{
        width: 2.67rem;
        height: 2.67rem;
        font-size: .693rem;
        color: #fff;
        border: .2rem solid transparent;
        border-radius: 50%;
        position: relative;
        text-align: center;
        line-height: 2.67rem;
        margin-right: 1rem;
    }
    .hot_tabbar  img{
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;

    }
    .hot_tabbar .title{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2.666rem;
    }
    /*列表样式*/
    .hot_show{
        width: 100%;
        overflow: hidden;
    }

</style>
