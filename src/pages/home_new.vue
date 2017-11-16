<template lang="html">
  <div id="home_new">
      <!-- header -->
      <HomeHead></HomeHead>
      <!-- section -->
      <section class="activtyApp_c">
          <!-- 头部图片 -->
          <div class="top_panel activityHandle mtArea">
              <img src="//pic12.secooimg.com/comment/17/11/2a88e974f40e4ac8afb4485a2cbe7e29.jpg" alt="">
          </div>

          <!-- 首饰榜单 -->
          <div class="r_title">
              <span class="fontTopPro icon-top"></span>
              首饰榜单
          </div>
          <HomeList></HomeList>

          <!-- 家居专场 -->
          <div class="r_title">
              <span class="fontTopPro icon-top"></span>
              家具专区
          </div>
          <HomeList></HomeList>

          <!-- 新客必逛专区 -->
          <div class="r_title">
              <span class="fontTopPro icon-top"></span>
              新客必逛专区
          </div>
          <div class="twelfth_floor mtArea">
              <div class="main_box_item activityHandle">
                  <div class="sub_box_1">
                      <img src="//pic12.secooimg.com/comment/17/11/a4af4079bd1a40259533befa69d9057f.jpg" alt="">
                  </div>
                  <div class="sub_box_2">
                      <div class="text_tips_1"></div>
                      <div class="text_tips_2"></div>
                      <div class="text_tips_3">
                          配饰专区
                      </div>
                  </div>
              </div>
              <div class="main_box_item activityHandle">
                  <div class="sub_box_1">
                      <img src="//pic12.secooimg.com/comment/17/11/69980412fe7a4bbfa8e9f929094f1eb7.jpg" alt="">
                  </div>
                  <div class="sub_box_2">
                      <div class="text_tips_1"></div>
                      <div class="text_tips_2"></div>
                      <div class="text_tips_3">
                          包袋专区
                      </div>
                  </div>
              </div>
          </div>

          <!-- 新人推荐top榜 -->
          <div class="r_title">
              <span class="fontTopPro icon-top"></span>
              新人推荐top榜
          </div>
          <div class="mtArea nav_floor searchBar">
              <ul>
                  <li><a href="#new">美妆</a></li>
                  <li><a href="#new">家居百货</a></li>
                  <li><a href="#new">包袋</a></li>
                  <li><a href="#new">首饰</a></li>
                  <li><a href="#new">男装</a></li>
                  <li><a href="#new">腕表</a></li>
                  <li><a href="#new">鞋靴</a></li>
                  <li><a href="#new">女装</a></li>
              </ul>
          </div>
          <!-- 商品小图排列 -->
          <HomeGoods id="new"></HomeGoods>

          <HomeTop></HomeTop>
      </section>
  </div>
</template>

<script>
import HomeHead from "../components/home_head"
import HomeList from "../components/home_list"
import HomeGoods from "../components/home_goods"
import HomeTop from "../components/home_top"
export default {
    data () {
        return {
            searchBarFixed : false
        }
    },
    components:{
        HomeHead,
        HomeList,
        HomeGoods,
        HomeTop
    },
    methods : {
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            var offsetTop = document.querySelector('.searchBar').offsetTop;
            if (scrollTop > offsetTop) {
                document.querySelector('.searchBar').classList.add("isFixed")
            }
            if(scrollTop <= 2083) {
                document.querySelector('.searchBar').classList.remove("isFixed")
            }
        }
    },
    mounted () {
        window.addEventListener('scroll',this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="css" scoped>
 /*section*/
    .mtArea {
      margin-bottom: 0.26rem;
    }
    .activtyApp_c{
        background-color: white;
        margin-top: 0;
    }
    .top_panel {
        width: 100%;
    }
    .r_title {
        width: 100%;
        height: 0.98rem;
        font-size: 0.9rem;
        line-height: 0.9rem;
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
        font-weight: bold;
        text-indent: 0.8rem;
    }
    .fontTopPro {
        font-size: 0.7rem;
        line-height: 1rem;
    }
    .icon-top:before {
        content: "\e901";
        font-family: 'icomoon';
    }

    .twelfth_floor {
        width: 100%;
        height: 15.786rem;
        display: -webkit-box;
        -webkit-box-pack: justify;
    }
    .twelfth_floor .main_box_item {
        width: 9.973rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
    .twelfth_floor .sub_box_1 {
        width: 100%;
        height: 11.066rem;
    }
    img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .twelfth_floor .sub_box_2 {
        -webkit-box-flex: 1;
        width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-box-align: center;
        white-space: nowrap;
        overflow: hidden;
    }
    .twelfth_floor .text_tips_1 {
        font-size: 0.468rem;
        line-height: 0.468rem;
        margin-top: 0.6rem;
        font-weight: bold;
    }
    .twelfth_floor .text_tips_2 {
        font-size: 0.375rem;
        line-height: 0.375rem;
        margin-top: 0.3rem;
    }
    .twelfth_floor .text_tips_3 {
        margin-top: 0.5rem;
        font-size: 0.4rem;
        width: 5.28rem;
        height: 1.146rem;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        border: 1px solid;
    }

 /*新人推荐榜*/
    .nav_floor {
        width: 100%;
        overflow: hidden;
        height: 1.25rem;
    }
    .nav_floor ul {
        display: -webkit-box;
        height: 1.25rem;
        -webkit-box-align: center;
        width: 100%;
        background-color: white;
    }
    .isFixed{
       position: fixed;
       left: 0;
       top: 0;
       font-weight: bold;
   }
    .nav_floor ul li {
        font-size: 0.4rem;
        border-right: 1px solid;
        -webkit-box-flex: 1;
        height: 0.4rem;
        line-height: 0.4rem;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        position: relative;
    }
    .nav_floor ul li:nth-of-type(8){
        border-right: none;
    }
    .nav_floor li::before, .nav_floor li::after {
        content: "";
        width: 100%;
        display: block;
        position: absolute;
        left: 0;
        height: 100%;
    }


</style>
