<template lang="html">
  <div class="hot_show">
      <ul>
          <li v-for="item in this.list">
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
                          {{ item.content }}
                      </div>
                  </div>
              </div>
              <div class="showMain">
                  <ul>
                      <li v-for="src in item.showImgs">
                          <img :src="src" alt="">
                      </li>
                  </ul>
              </div>
              <div class="showBottom">
                  <div class="showBtn">
                      <div class="">
                          <div class="finger svg">
                              
                          </div>
                          <span>{{ item.praiseCount }}</span>
                      </div>
                  </div>
                  <div class="showBuy">
                      去购买
                      <span class="svg"></span>
                  </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            list : {},
            url : 'http://las.secoo.com/api/show/hot_show_list?lineNumber=1&tagId=1&size=20&c_upk=&c_app_ver=1.0&c_channel=&c_device_id=98f0f00e-8938-48f9-b70c-e714487a8241&c_platform=&c_platform_type=&c_platform_ver=&c_screen_width=414&c_screen_height=736&_=1510218762697&callback'
        }
    },
    created(){
        this.$jsonp(this.url).then(data => {
            console.log(data);
            this.list = data.list;
            console.log(this.list);
        })
    },
    watch : {
        '$route'(newValue, oldValue){
            this.url = 'http://las.secoo.com/api/show/hot_show_list?lineNumber=1&tagId=' + this.$route.params.id + '&size=20&c_upk=&c_app_ver=1.0&c_channel=&c_device_id=98f0f00e-8938-48f9-b70c-e714487a8241&c_platform=&c_platform_type=&c_platform_ver=&c_screen_width=414&c_screen_height=736&_='+ Math.random() + '&callback';
            this.$jsonp(this.url).then(data => {
                console.log(data);
                this.list = data.list;
                console.log(this.list);
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
        /*padding: 1rem;*/
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
        width: 10rem;
        height: 9.5rem;
        margin-left: .2rem;
    }
    .hot_show .showMain li img{
        width: 100%;
        height: 100%;
    }
    .svg{
        font-family: 'icomoon';
    }
</style>
