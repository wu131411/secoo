<template lang="html">
  <div id="zhuangui">
      <HomeHead></HomeHead>
      <!-- 寺库现在体验中心 -->
      <div class="top_panel mtArea">
          <img src="//pic12.secooimg.com/comment/17/11/707b2484459f462ca8b40417a67669fa.jpg" alt="">
      </div>
      <!-- 青岛线下体验中心 -->
      <div class="top_panel activityHandle mtArea">
          <img src="//pic12.secooimg.com/comment/17/11/e3b3e30ec1ac4bdea447f6a4d9457371.jpg" alt="">
      </div>
      <!-- 小图片列表 -->
      <HomeList></HomeList>

      <div class="top_panel activityHandle mtArea">
          <img src="//pic12.secooimg.com/comment/17/11/6d97b2e127a54715a9b80f252f008917.jpg" alt="">
      </div>
      <!-- 小图片列表 -->
      <HomeList></HomeList>

      <div class="fifth_floor mtArea">
          <div class="main_box">
              <span><em></em></span>
              <div>11.11 精选品牌</div>
              <span><em></em></span>
          </div>
      </div>

      <div class="top_panel activityHandle mtArea">
          <img src="//pic12.secooimg.com/comment/17/10/f6708e4b84234db6a32a97f2430ec753.gif" alt="">
      </div>
  </div>
</template>

<script>
import HomeHead from "../components/home_head"
import HomeList from "../components/home_list"
export default {
    components:{
        HomeHead,
        HomeList
    }
}

</script>

<style lang="css">
    #zhuangui .top_panel {
        width: 100%;
    }
    #zhuangui img {
        width: 100%;
        height: 100%;
        display: block;
    }

    #zhuangui .fifth_floor {
        height: 4.666rem;
        display: -webkit-box;
        -webkit-box-pack: center;
        white-space: nowrap;
        overflow: hidden;
    }
    #zhuangui .fifth_floor .main_box {
        height: 2.506rem;
        border: 1px solid;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: justify;
        font-size: 1.28rem;
        margin-top: 1.36rem;
    }
    #zhuangui .fifth_floor .main_box div {
        padding: 0 0.53rem;
    }
</style>
