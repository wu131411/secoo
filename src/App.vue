<template>
  <div id="app">
      <div class="container" v-show="$route.meta.navShow">
          <ul>
              <li><router-link to="/home">
                  <img src="../static/images/home.png" alt="">
                  <p>首页</p>
              </router-link></li>
              <li><router-link to="/hot">
                  <img src="../static/images/hot.png" alt="">
                  <p>尖货</p>
              </router-link></li>
              <li><router-link to="/list" >
                  <img src="../static/images/list.png" alt="">
                  <p>分类</p>
              </router-link></li>
              <li><router-link to="/bag">
                  <img src="../static/images/bag.png" alt="">
                  <p>购物袋</p>
              </router-link></li>
              <li><router-link to="/mine">
                  <img src="../static/images/mine.png" alt="">
                  <p>我的</p>
              </router-link></li>
          </ul>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
//引入rem布局
import rem from "../static/js/rem"
import reset from "../static/css/reset.css"

// 导入尖货组件
import Hot from './pages/hot'

export default {
  name: 'app',
  components: {
      Hot,
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#app{
    width: 100%;

}
.container{
    width: 100%;
    color: #1A191E;
    background: #fff;
    border-top: 1px solid #e2e2e2;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
.container ul{
    width: 100%;
    height: 2.64rem;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.container ul li{
    padding: 2.4% 0 1.466666%;
    width: 20%;
    text-align: center;
}
.container li img{
    width: 1.07rem;
}
.container li a{
    line-height: 1;
    color: #1A191E;
    font-size: 0.586667rem;
    opacity: 0.45;
}
.container li p{
    opacity: 0.45;
}
.container .router-link-active, .container .router-link-active p{
    opacity: 1;
}
</style>
