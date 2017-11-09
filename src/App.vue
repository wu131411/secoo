<template>
  <div id="app">
      <div class="container">
          <router-link to="/home">主页</router-link>
          <router-link to="/hot">尖货</router-link>
          <router-link to="/list">分类</router-link>
          <router-link to="/bag">购物袋</router-link>
          <router-link to="/mine">我的</router-link>
          <router-view></router-view>
      </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
.container{
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
