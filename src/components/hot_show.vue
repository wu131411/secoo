<template lang="html">
  <div class="hot_show">
      <ul>
          <li v-for="(item,index) of this.list">
              <div class="hot_list" v-if="item.id | hasword">
                  <div class="hot_main" @click="more(item.id)">
                      <div class="user">
                          <div class="userInfo">
                              <img class="userImg" :src="item.showUserImg" alt="">
                              <div class="userName">
                                  <p>{{ item.showUserName }}</p>
                                  <time>{{ item.showTime }}</time>
                              </div>
                          </div>
                          <div class="userContent">
                              <div>
                                  <!-- {{ item.content }} -->
                                  {{ content[index] }}
                              </div>
                              <span class="seeMore">查看详情</span>
                          </div>
                      </div>
                      <div class="showMain">
                          <ul>
                              <li v-for="src in item.showImgs">
                                  <img :src="src" alt="">
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="showBottom">
                      <div class="showBtn">
                          <div class="">
                              <div class="finger" @click="sayYes($event,index)" >
                                  <span class="right svg"></span>
                              </div>
                              <!-- <span class="sayYes">{{ item.praiseCount }}</span> -->
                              <span class="sayYes">{{ num[index] }}</span>
                          </div>
                      </div>
                      <div class="showBuy" @click="goBuy(index)">
                          <span class="toBuy">去购买</span>
                          <span class="svg"></span>
                      </div>
                  </div>
              </div>
              <div class="hot_ad" v-else>
                  <div class="">
                      <div class="hot_ad_img" @click="goWabao()">
                          <img :src="item.titleImg" alt="">
                          <div class="img_view"></div>
                          <div class="hot_ad_title">
                              <p class="title">{{ item.title }}</p>
                              <p class="subTitle">{{ item.subTitle }}</p>
                              <p class="btn">进入专题</p>
                          </div>
                          <div class="hot_ad_showNum">
                              <div class="">
                                  <img src="../../static/images/hot_see.svg" alt="">
                              </div>
                              <span>{{ item.showNumber }}</span>
                          </div>
                          <div class="hot_ad_bar"></div>
                      </div>
                      <div class="hot_ad_imgs">
                          <ul>
                              <li v-for="i in item.products" @click="gouMai(i.productId)">
                                  <div class="hot_ad_smallImg">
                                      <img :src="i.img" alt="">
                                  </div>
                                  <div class="hot_ad_name">
                                      {{ i.name }}
                                  </div>
                                  <div class="hot_ad_price">
                                      {{ i.price }}
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
                 <div class="line"></div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>


let tag = false;
export default {
    data(){
        return {
            list : {},
            url : 'http://las.secoo.com/api/show/hot_show_list?lineNumber=1&tagId=1&size=20&c_upk=&c_app_ver=1.0&c_channel=&c_device_id=98f0f00e-8938-48f9-b70c-e714487a8241&c_platform=&c_platform_type=&c_platform_ver=&c_screen_width=414&c_screen_height=736&_=1510218762697&callback',
            num : [],
            content : [],
            hasword : '',
            productId : '',
        }
    },
    methods : {
        sayYes(ev,index){
            // console.log(num);
            if(tag){

                ev.currentTarget.children[0].classList.remove("color");
                this.num[index] -= 1;
                ev.path[3].children[0].childNodes[2].innerText = this.num[index];
                tag = false;
            } else {
                ev.currentTarget.children[0].classList.add("color");
                this.num[index] += 1;
                ev.path[3].children[0].childNodes[2].innerText = this.num[index];
                tag = true;
            }
        },
        more(id){
            this.$router.push({
                path : '/hot_show_detail/' + id,
                query : {
                    commentShowDetail : id
                }
            })
        },
        goBuy(index){
            this.$router.push({
                path : '/product_detail/' + this.list[index].productId
            })
        },
        gouMai(productId){
            this.$router.push({
                path : '/product_detail/' + productId
            })
        },
        goWabao(){
            this.$router.push({
                path : '/home_wabao'
            })
        }
    },
    filters:{
        over(index){
            if (this.content[index].length >= 30) {
                // TODO
            }
        },
        haswords(str){
            if (str.indexof('content') != -1) {
                this.hasword = true;
            } else {
                this.hasword = false;
            }
        }
    },
    created(){
        this.$jsonp(this.url).then(data => {
            this.list = data.list;
            this.num = [];
            this.content = [];
            for (var item of data.list) {
                this.num.push(item.praiseCount);
                this.content.push(item.content);
            }
        })
    },
    watch : {
        '$route'(newValue, oldValue){
            this.url = 'http://las.secoo.com/api/show/hot_show_list?lineNumber=1&tagId=' + this.$route.params.id + '&size=20&c_upk=&c_app_ver=1.0&c_channel=&c_device_id=98f0f00e-8938-48f9-b70c-e714487a8241&c_platform=&c_platform_type=&c_platform_ver=&c_screen_width=414&c_screen_height=736&_='+ Math.random() + '&callback';
            this.$jsonp(this.url).then(data => {
                this.list = data.list;
                this.num = [];
                this.content = [];
                for (var item of data.list) {
                    this.num.push(item.praiseCount);
                    this.content.push(item.content);
                }
            })
        }
    }
}
</script>

<style lang="css">
    .hot_show{
        width: 100%;
        font-family: STHeiti,Helvetica Neue;
    }
    .hot_show .hot_list ul{
        width: 100%;
    }
    .hot_show .hot_list li{
        width: 100%;
    }
    .hot_show .hot_list .user{
        margin-top: 1.17rem;
        width: 100%;
    }
    .hot_show .hot_list .user img{
        width: 2.14rem;
        height: 2.14rem;
        border-radius: 50%;
        vertical-align: top;
        padding: 0 .8rem;
    }
    .hot_show .hot_list .user .userName{
        display: inline-block;
        font-size: 16px;
    }
    .hot_show .hot_list .user time{
        font-size: 12px;
        color: #999;
    }
    .hot_show .hot_list .userContent{
        color: #1a191e;
        padding: .8rem .8rem 0 .8rem;
        line-height: 1.12rem;
        font-size: 14px;
        text-align: justify;
        word-wrap: break-word;
        word-break: break-all;
    }
    .hot_show .hot_list .userContent>div{
        /*display: inline-block;*/
        text-align: justify;
        /*允许长单词换行到下一行*/
        word-wrap: break-word;
        /*允许在单词内换行*/
        word-break: break-all;

        display: -webkit-box;
        overflow: hidden;
        /*限制在一个块元素显示的文本的行数*/
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .hot_show .hot_list .userContent .seeMore{
        color: #BEA474;
        width: 3.04rem;
        height: 0.746rem;
        display: inline-block;
        position: relative;
        white-space: nowrap;
    }
    .hot_show .hot_list .showMain{
        width: 100%;
        overflow: hidden;
    }
    .hot_show .hot_list .showMain ul{
        width: 100%;
        height: 10rem;
        margin-top: .8rem;
        overflow-x: auto;
        display: -webkit-box;
    }
    .hot_show .hot_list .showMain li :nth-of-type(1){
        margin-left: .5rem;
    }
    .hot_show .hot_list .showMain li{
        width: 9rem;
        height: 9rem;
        margin-left: .2rem;
    }
    .hot_show .hot_list .showMain li img{
        width: 100%;
        height: 100%;
    }
    .svg{
        font-family: 'icomoon';
    }
    .hot_show .hot_list .showBottom{
        width: 100%;
        /*margin-left: .8rem;*/
        overflow: hidden;
        color: #1a191e;
        display: -webkit-box;
        border: .5px solid #ebebeb;
    }
    .hot_show .hot_list .showBottom>div{
        text-align: center;
    }
    .hot_show .hot_list .showBtn,.hot_show .showBuy{
        width: 50%;
        height: 2.186rem;
        position: relative;
        line-height: 2.186rem;
    }
    .hot_show .hot_list .showBtn .finger{
        display: inline-block;
        font-size: 17px;
        color: #666;
    }
    .hot_show .hot_list .showBtn .sayYes{
        font-size: 15px;
        margin-left: -.2rem;
        color: #666;
    }
    .hot_show .hot_list .showBtn{
        height: 100%;
        border-right: .5px solid #ebebeb;
    }
    .hot_show .hot_list .showBuy{
        font-size: 13px;
    }
    /*点赞的类名*/
    .color{
        color : #ff0000!important;
    }

    /*广告部分的样式*/
    .hot_show .hot_ad{
        margin-top: 1.44rem;
        width: 100%;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-orient: vertical;
    }
    .hot_show .hot_ad .hot_ad_img{
        width: 18.4rem;
        height: 10.133rem;
        position: relative;
        overflow: hidden;
        border-radius: .1.6rem;
    }
    .hot_ad .hot_ad_img img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .hot_ad .hot_ad_img .imgView{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.3);
        border-radius: 0.106rem;
    }
    .hot_ad .hot_ad_img .hot_ad_title{
        width: 100%;
        position: absolute;
        left: 0;
        top: 3.6rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-box-align: center;
    }
    .hot_ad .hot_ad_title .title{
        font-size: 1.12rem;
        color: #fff;
        letter-spacing: .5px;
        font-weight: bold;
        line-height: 1.22rem;
        white-space: nowrap;
        overflow: hidden;
    }
    .hot_ad .hot_ad_title .subTitle{
        font-size: .746rem;
        color: #fff;
        letter-spacing: .5px;
        margin-top: .373rem;
        line-height: .746rem;
        white-space: nowrap;
        overflow: hidden;
    }
    .hot_ad .hot_ad_title .btn{
        width: 3.2rem;
        height: 1.066rem;
        border-radius: 1px;
        background: #fff;
        font-size: 12px;
        color: #000;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        margin-top: 0.8rem;
    }
    .hot_ad .hot_ad_img .hot_ad_showNum{
        position: absolute;
        right: 0.8rem;
        bottom: 0.594rem;
        display: -webkit-box;
        font-size: 12px;
        color: #fff;
        line-height: 1.3rem;
    }
    .hot_ad .hot_ad_showNum>div{
        /*font-size: 12px;*/
        /*margin-top: 0.106rem;*/
        width: 1.3rem;
        height: 1.3rem;
        vertical-align: bottom;
    }
    .hot_ad .hot_ad_showNum>div img{
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
    .hot_ad .hot_ad_showNum span{
        /*margin-left: 0.266rem;*/
        font-size: 12px;
    }
    .hot_ad .hot_ad_img .hot_ad_bar{
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 100%;
        height: 0.266rem;
        display: -webkit-box;
        -webkit-box-pack: center;
    }
    .hot_ad .hot_ad_img .hot_ad_bar::before{
        content: "";
        width: 0;
        height: 0;
        display: block;
        border: solid transparent;
        border-bottom-color: #ffffff;
        border-width: 0 0.453rem 0.373rem;
    }
    .hot_ad .hot_ad_imgs{
        width: 18.4rem;
        padding-bottom: 1.333rem;
    }
    .hot_ad .hot_ad_imgs ul{
        display: -webkit-box;
        width: 100%;
        margin-top: 0.533rem;
        /*border-bottom: .1rem solid #ebebeb;*/

        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .hot_ad_imgs ul li{
        flex: 0 1 5.333rem;
        /*display: list-item;*/
    }
    .hot_ad_imgs .hot_ad_smallImg{
        width: 100%;
        height: 5.333rem;
    }
    .hot_ad_imgs .hot_ad_smallImg img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .hot_ad_imgs .hot_ad_name{
        color: #1A191E;
        font-size: 14px;
        white-space: nowrap;
        text-align: center;
        margin-top: 0.533rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .hot_ad_imgs .hot_ad_price{
        color: #1A191E;
        font-size: 14px;
        text-align: center;
        margin-top: 0.2rem;
    }
    .hot_ad .line{
        width: 100%;
        height: 1px;
        background-color: #EBEBEB;
    }
</style>
