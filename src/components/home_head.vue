<template lang="html">
  <div class="">
      <header id="headerAll">
          <!-- 返回 -->
          <router-link to="/">
<<<<<<< HEAD
              <div class="leftPic orderListWrapper_l">
                  <span class="goBack"></span>
                  <em >返回</em>
              </div>
=======
          <div class="leftPic orderListWrapper_l ">
              <span class="goBack"></span>
              <em @click="back()">返回</em>
          </div>
>>>>>>> daa595f8ad04aae9674f498a02a8d88a0515e6c5
          </router-link>
          <!-- SECOO -->
          <hgroup class="pagesTitles">
              <div class="orderListWrapper">SECOO</div>
            </hgroup>
          <!-- right -->
          <div class="rightPic siteWrapper_r">
              <div v-show="isShow" class="right_menu_list">
                  <em></em>
                  <div>
                      <span><router-link to="/home">首页</router-link></span>
                      <span><router-link to="/list">分类</router-link></span>
                      <span><router-link to="/bag">购物袋</router-link></span>
                      <span><router-link to="/mine">我的寺库</router-link></span>
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
            isShow : false
        }
    },
    methods:{
        goBack(){
            history.back()
        },
        show(){
            if(this.isShow == false){
                this.isShow = true;
            }else{
                this.isShow = false;
            }
        },
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scroll) {
                this.isShow = false
            }
        },
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
    #headerAll {
        width: 100%;
        height: 1.375rem;
        box-sizing: border-box;
        background-color: white;
        font-size: 0.56rem;
        line-height: 1.375rem;
        display: -webkit-box;
    }
    .goBack {
        background-position: -0.1875rem -0.25rem;
        height: 0.94rem;
        top: 0.125rem;
        width: 0.94rem;
        margin: 0.16rem 0 0 0.16rem;
        float: left;
        background: url(http://mpic.secooimg.com/zhuanti_pic/tow_icon.png) no-repeat;
        background-size: 4.375rem 6.56rem;
        display: inline-block;
        overflow: hidden;
    }
    .leftPic, .rightPic {
        width: 90px;
        overflow: hidden;
        color: #474747;
        position: relative;
    }
    .pagesTitles {
        -webkit-box-flex: 1;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        height: 1.375rem;
        box-sizing: border-box;
    }
    .leftPic em {
        display: inline-block;
        float: left;
    }
    .right_menu_list {
        width: 6.15rem;
        height: 9rem;
        position: fixed;
        top: 1.375rem;
        right: 0;
        overflow: hidden;
        font-size: .7rem;
    }
    .right_menu_list > em {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.9);
    }
    .right_menu_list > div {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;

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
        background: url(http://mpic.secooimg.com/images/2016/01/05/act_icon_t_23.png)   no-repeat center;
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
        bottom: 0;
        left: 0;
        margin-left: .799rem;
    }
    .right_menu_btn {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: end;
    }
</style>
