<template lang="html">
  <div id="jianHuo">
      <div class="banner">
          <a href="#"><img src="../assets/jianhuo_img/banner.jpg" alt=""></a>
      </div>
      <div class="hot_tabbar">
          <div class="">
              <ul>
                  <li v-for="item in tabbar" class="tab" @click="push(item.id)" >
                          <img :src="item.img" alt="" >
                          <p class="title" @click="changeBorder($event)">{{ item.title }}</p>
                  </li>
              </ul>
          </div>

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
        },
        changeBorder(ev){
            console.log(ev.currentTarget);
            ev.currentTarget.parentNode.classList.add('hot_tabbar_color');
            console.log(ev.currentTarget.parentNode);
        }
    },
    components : {
        Tabbar,
        HotShow
    },
    created(){
        this.$jsonp('http://las.secoo.com/api/show/hot_show_head').then(data => {
            // console.log(data);
            this.tabbar = data.tags;
            // console.log(this.tabbar);
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
    /*点击时的边框样式*/
    .hot_tabbar_color{
        border-color: #ceb88e !important;
    }
    .hot_tabbar{
        overflow: hidden;
        width: 100%;
        /*height: 5.6rem;*/
        background: #fff;
        overflow: hidden;
        font-family: STHeiti,Helvetica Neue;
    }
    .hot_tabbar>div{
        overflow: hidden;
        padding-right: 1.5rem;
    }
    .hot_tabbar ul{
        width: 100%;
        overflow: auto;
        padding: 1rem 0 0 0;
        display: -webkit-box;
        -webkit-padding-start: .8rem;
    }
    /*.hot_tabbar .tab::after{
        content: '';
        border: 2px solid transparent;
        position: absolute;
        left: -3px;
        top: -3px;
    }*/
    .hot_tabbar .tab{
        width: 2.67rem;
        height: 2.67rem;
        font-size: .693rem;
        color: #fff;
        border: 2px solid transparent;
        border-radius: 50%;
        position: relative;
        text-align: center;
        line-height: 2.67rem;
        margin-right: 1rem;
    }
    .hot_tabbar  img{
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;

    }
    .hot_tabbar .title{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2.666rem;
    }
    /*列表样式*/
    .hot_show{
        width: 100%;
        overflow: hidden;
    }
</style>
