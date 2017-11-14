<template lang="html">
  <div id="home_new">
      <header id="headerAll">
          <!-- 返回 -->
          <div class="leftPic orderListWrapper_l ">
              <span class="goBack"></span>
              <em>返回</em>
          </div>
          <!-- SECOO -->
          <hgroup class="pagesTitles">
              <div class="orderListWrapper">SECOO</div>
          </hgroup>
          <!-- 导航 -->
          <div class="rightPic siteWrapper_r">
              <div class="right_menu_list">
                  <em></em>
                  <div>
                      <span>首页</span>
                      <span>分类</span>
                      <span>购物袋</span>
                      <span>我的寺库</span>
                  </div>
              </div>
              <div class="right_menu_btn">
                  <em class="addPic"></em>
              </div>
          </div>
      </header>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
    #headerAll {
        width: 100%;
        height: 44px;
        box-sizing: border-box;
        background-color: white;
        font-size: 18px;
        line-height: 44px;
        z-index: 20;
        display: -webkit-box;
    }
    .leftPic, .rightPic {
    width: 70px;
    overflow: hidden;
    color: #474747;
    position: relative;
    z-index: 20;
}
</style>
