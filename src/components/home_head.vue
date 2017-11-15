<template lang="html">
  <div class="">
      <header id="headerAll">
          <!-- 返回 -->
          <router-link to="/">
          <div class="leftPic orderListWrapper_l ">
              <span class="goBack"></span>
              <em @click="back">返回</em>
          </div>
          </router-link>
          <!-- SECOO -->
          <hgroup class="pagesTitles">
              <div class="orderListWrapper">SECOO</div>
            </hgroup>
          <!-- right -->
          <div class="rightPic siteWrapper_r">
              <div v-show="true" class="right_menu_list">
                  <em></em>
                  <div>
                      <span>首页</span>
                      <span>分类</span>
                      <span>购物袋</span>
                      <span>我的寺库</span>
                  </div>
              </div>
              <div @click="show()" class="right_menu_btn">
                  <em class="addPic"></em>
              </div>
          </div>
      </header>
  </div>
</template>

<script>
export default {
    data(){
        return{
            // isShow:flase
        }
    },
    methods:{
        show(){
            // if(isShow = false){
            //     isShow=ture;
            // }
        }
    }
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
.goBack {
    background-position: -6px -8px;
    height: 30px;
    top: 4px;
    width: 30px;
    margin: 5px 0 0 5px;
    float: left;
    background: url(http://mpic.secooimg.com/zhuanti_pic/tow_icon.png) no-repeat;
    background-size: 140px 210px;
    display: inline-block;
    line-height: 555px;
    overflow: hidden;
}
.leftPic, .rightPic {
    width: 90px;
    overflow: hidden;
    color: #474747;
    position: relative;
    z-index: 20;
}
.pagesTitles {
    -webkit-box-flex: 1;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    height: 44px;
    box-sizing: border-box;
}
.leftPic em {
    display: inline-block;
    float: left;
}
em, b {
    font-style: normal;
}
.right_menu_list {
    width: 6.133rem;
    height: 0px;
    top: 44px;
    position: absolute;
    right: 0px;
    overflow: hidden;
    font-size: .693rem;
    color: #1a191e;
    -webkit-transition: all .2s cubic-bezier(1,.01,.46,.82);
}
.right_menu_list > em {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    /* -webkit-filter: blur(10px); */
    background: rgba(255,255,255,0.9);
}
.right_menu_list > div {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
}
.right_menu_list span {
    height: 2.24rem;
    width: 100%;
    display: block;
    padding-left: .799rem;
    display: -webkit-box;
    -webkit-box-align: center;
    line-height: initial;
    position: relative;
}
.right_menu_btn .addPic {
    width: .853rem;
    height: .853rem;
    margin-right: .8rem;
    display: block;
    background: url(http://mpic.secooimg.com/images/2016/01/06/daohang@3x.png) no-repeat;
    background-size: 100% 100%;
}
.right_menu_list span:nth-of-type(1)::before {
    background: url(http://mpic.secooimg.com/images/2016/01/05/act_icon_t_05.png) no-repeat center;
    background-size: 100%;
}
.right_menu_list span:nth-of-type(2)::before {
    background: url(http://mpic.secooimg.com/images/2016/01/05/act_icon_t_11.png) no-repeat center;
    background-size: 100%;
}
.right_menu_list span:nth-of-type(3)::before {
    background: url(http://mpic.secooimg.com/images/2016/01/05/act_icon_t_17.png) no-repeat center;
    background-size: 100%;
}
.right_menu_list span:nth-of-type(4)::before {
    background: url(http://mpic.secooimg.com/images/2016/01/05/act_icon_t_23.png) no-repeat center;
    background-size: 100%;
}
.right_menu_list span::before {
    display: block;
    width: .96rem;
    height: 100%;
    content: "";
    margin-right: .8rem;
}

.right_menu_list span:not(:last-child)::after {
    width: 4.533rem;
    content: "";
    height: 1px;
    background: #fff;
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0px;
    margin-left: .799rem;
}
.right_menu_btn {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: end;
}
</style>
