<template lang="html">
  <div id="jianHuo">
      <div class="banner">
          <a href="#"><img src="../assets/jianhuo_img/banner.jpg" alt=""></a>
      </div>
      <div class="hot_tabbar">
          <ul>
              <li v-for="item in tabbar" class="tab" @click="push(item.id)">
                  <!-- <a :href=item.id> -->
                      <img :src="item.img" alt="">
                      <p class="title">{{ item.title }}</p>
                  <!-- </a> -->
              </li>
          </ul>
          <!-- <router-view></router-view> -->
      </div>
      <div class="hot_show">
          <HotShow />
      </div>
  </div>
</template>

<script>
// 引入二级路由的组件
import Tabbar from '../components/circleTab'
// 导入评论列表组件
import HotShow from '../components/hot_show'

export default {
    data(){
        return {
            tabbar:{}
        }
    },
    methods : {
        push(id){
            this.$router.push({
                path : '/hot/hot_show/' + id,
            })
        }
    },
    components : {
        Tabbar,
        HotShow
    },
    created(){
        this.$jsonp('http://las.secoo.com/api/show/hot_show_head').then(data => {
            console.log(data);
            this.tabbar = data.tags;
            console.log(this.tabbar);
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

    /*二级路由样式*/
    .hot_tabbar{
        /*overflow: hidden;*/
    }
    .hot_tabbar>ul{
        width: 100%;

        display: flex;
        flex-direction: row;
        overflow: scroll;
    }
    .hot_tabbar .tab{
        flex: 0 1 2.6rem;
        /*height: 2.6rem;*/
        border: 2px solid transparent;
        border-radius: 50%;
    }
    .hot_tabbar>a{
        /*display: inline-block;*/
        /*width: 100%;
        height: 100%;*/
    }
    .hot_tabbar a img{
        border-radius: 50%;
        /*position: absolute;*/
    }
    .hot_tabbar .title{
        position: absolute;
        /*color: white;*/
    }
</style>
