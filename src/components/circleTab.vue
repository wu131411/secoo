<template lang="html">
  <div class="hot_tabbar_tab">
      <router-link to="/item.id" :style="{background:item.img}">
          {{ item.title }}
      </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return {
            tabbar : {}
        }
    },
    created(){
        this.$http.jsonp('http://las.secoo.com/api/show/hot_show_head').then(data => {
            // console.log(data);
            // this.tabbar = data.body.tags;
            // console.log(this.tabbar);
        })
    }
}
</script>

<style lang="css">
</style>
