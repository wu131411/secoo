<template lang="html">
  <div class="hot_show">
      <ul>
          <li v-for="(item,index) of this.list">
              <div class="main" @click="more(item.id)">
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
                  <div class="showBuy">
                      <span class="toBuy">去购买</span>
                      <span class="svg"></span>
                  </div>
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
        }
    },
    methods : {
        sayYes(ev,index){
            // console.log(num);
            if(tag){
                event.currentTarget.children[0].classList.remove("color");
                this.num[index] -= 1;
                ev.path[3].children[0].childNodes[2].innerText = this.num[index];
                tag = false;
            } else {
                event.currentTarget.children[0].classList.add("color");
                this.num[index] += 1;
                ev.path[3].children[0].childNodes[2].innerText = this.num[index];
                tag = true;
            }
        },
        more(){

        }
    },
    filters:{
        over(index){
            if (this.content[index].length >= 30) {
                // TODO
            }
        }
    },
    created(){
        this.$jsonp(this.url).then(data => {
            // console.log(data);
            this.list = data.list;
            // console.log(this.list);
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
                // console.log(data);
                this.list = data.list;
                // console.log(this.list);
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
    }
    .hot_show ul{
        width: 100%;
        font-family: STHeiti,Helvetica Neue;
    }
    .hot_show li{
        width: 100%;
    }
    .hot_show .user{
        margin-top: 1.17rem;
        width: 100%;
    }
    .hot_show .user img{
        width: 2.14rem;
        height: 2.14rem;
        border-radius: 50%;
        vertical-align: top;
        padding: 0 .8rem;
    }
    .hot_show .user .userName{
        display: inline-block;
        font-size: 16px;
    }
    .hot_show .user time{
        font-size: 12px;
        color: #999;
    }
    .hot_show .userContent{
        color: #1a191e;
        padding: .8rem .8rem;
        line-height: 1.12rem;
        font-size: 14px;
        text-align: justify;
        word-wrap: break-word;
        word-break: break-all;
    }
    .hot_show .userContent>div{
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
    .hot_show .userContent .seeMore{
        color: #BEA474;
        width: 3.04rem;
        height: 0.746rem;
        display: inline-block;
        position: relative;
        white-space: nowrap;
    }
    .hot_show .showMain{
        width: 100%;
        overflow: hidden;
    }
    .hot_show .showMain ul{
        width: 100%;
        height: 10rem;
        margin-top: .8rem;
        overflow-x: auto;
        display: -webkit-box;
    }
    .hot_show .showMain li :nth-of-type(1){
        margin-left: .5rem;
    }
    .hot_show .showMain li{
        width: 9rem;
        height: 9rem;
        margin-left: .2rem;
    }
    .hot_show .showMain li img{
        width: 100%;
        height: 100%;
    }
    .svg{
        font-family: 'icomoon';
    }
    .hot_show .showBottom{
        width: 100%;
        /*margin-left: .8rem;*/
        overflow: hidden;
        color: #1a191e;
        display: -webkit-box;
        border: .5px solid #ebebeb;
    }
    .hot_show .showBottom>div{
        text-align: center;
    }
    .hot_show .showBtn,.hot_show .showBuy{
        width: 50%;
        height: 2.186rem;
        position: relative;
        line-height: 2.186rem;
    }
    .hot_show .showBtn .finger{
        display: inline-block;
        font-size: 17px;
        color: #666;
    }
    .hot_show .showBtn .sayYes{
        font-size: 15px;
        margin-left: -.2rem;
        color: #666;
    }
    .hot_show .showBtn{
        height: 100%;
        border-right: .5px solid #ebebeb;
    }
    .hot_show .showBuy{
        font-size: 13px;
    }
    /*点赞的类名*/
    .color{
        color : #ff0000!important;
    }
</style>
