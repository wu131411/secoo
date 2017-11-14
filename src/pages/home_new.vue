<template lang="html">
  <div id="home_new">
      <!-- header -->
      <HomeHead></HomeHead>
      <!-- section -->
      <section class="activtyApp_c">
          <div class="top_panel activityHandle mtArea">
              <img src="//pic12.secooimg.com/comment/17/11/2a88e974f40e4ac8afb4485a2cbe7e29.jpg" alt="">
          </div>

          <div class="r_title">
              <span class="fontTopPro icon-top"></span>
              首饰榜单
          </div>
          <HomeList></HomeList>

          <div class="r_title">
              <span class="fontTopPro icon-top"></span>
              家具专区
          </div>
          <HomeList></HomeList>

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

          <div class="r_title">
              <span class="fontTopPro icon-top"></span>
              新人推荐top榜
          </div>
          <div class="mtArea nav_floor searchBar" id="searchBar">
              <ul>
                  <li class="selected">美妆</li>
                  <li>家居百货</li>
                  <li>包袋</li>
                  <li>首饰</li>
                  <li>男装</li>
                  <li>腕表</li>
                  <li>鞋靴</li>
                  <li>女装</li>
              </ul>
          </div>
          <!-- 商品小图排列 -->
          <HomeGoods></HomeGoods>
      </section>
  </div>
</template>

<script>
import HomeHead from "../components/home_head"
import HomeList from "../components/home_list"
import HomeGoods from "../components/home_goods"
export default {
    components:{
        HomeHead,
        HomeList,
        HomeGoods
    },
    // mounted(){
    //     window.addEventListener('scroll',this.handleScroll);
    //
    // },
    // handleScroll () {
    //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //     var offsetTop = document.querySelector('#searchBar').offsetTop;
    //     if (scrollTop > offsetTop) {
    //         this.searchBarFixed = true;
    //     } else {
    //         this.searchBarFixed = false;
    //     }
    // },

    // destroyed () {
    //     window.removeEventListener('scroll', this.handleScroll)
    // }



    // watch:{
    //     if (window.clientHeight >= '2000px') {
    //         ul.addClass('isFixed');
    //     } else {
    //         ul.removeClass('isFixed');
    //     }
    // },
}
</script>

<style lang="css">
 /*section*/
    .mtArea {
      margin-bottom: 0.26rem;
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
        font-size: 0.5rem;
        line-height: 1;
        margin-right: 0.32rem;
    }
    .icon-top:before {
        content: "\e606";
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
        font-size: 15px;
        line-height: 15px;
        margin-top: 0.6rem;
        font-weight: bold;
    }
    .twelfth_floor .text_tips_2 {
        font-size: 12px;
        line-height: 12px;
        margin-top: 0.3rem;
    }
    .twelfth_floor .text_tips_3 {
        margin-top: 0.5rem;
        font-size: 13px;
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
        height: 40px;
    }
    .nav_floor ul {
        display: -webkit-box;
        height: 40px;
        -webkit-box-align: center;
        width: 100%;
        background-color: white;
    }
    /*.searchBar{*/
        .isFixed{
           position: fixed;
           left: 0;
           top: 0;
           z-index: 300;
       }
    /*}*/

    .nav_floor li {
        font-size: 12px;
        line-height: 12px;
        border-right: 1px solid;
        -webkit-box-flex: 1;
        height: 13px;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        position: relative;
    }
    .nav_floor li::before {
        top: -100%;
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
