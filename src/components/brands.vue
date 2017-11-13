<template lang="html">
      <div class="load" v-if='bol'>
         <h1>loading...</h1>
      </div>
      <dl class="pin-list" v-else>
        <dt class="1">{{ obj.cap }}</dt>
        <dd v-for="childArr in obj.list">
           <router-link to="/list">
              <div class="">
                 {{ childArr.cname }}
              </div>
              <span>
                 {{ childArr.ename }}
              </span>
          </router-link>
        </dd>
      </dl>
</template>

<script>
export default {
   props:['obj'],
   data() {
        return{
            bol: true
        }
    },
    created(){
      this.bol = false
   }
}
</script>

<style lang="css">
.pin-list dt{
   background: #eeeeee;
   font-size: 0.8rem;
   font-weight: bold;
   height:1.5rem;
   color: #000;
   line-height: 1.5rem;
   text-indent: 0.5rem;
}
.pin-list dd{
   height:2.47rem;
   line-height: 2.47rem;
}
.pin-list dd a div,.pin-list dd a span{
   width:50%;
}
.pin-list dd a span{
   text-align: right;
}
.header{
   z-index: 100;
   background-color: #fff;
   width: 100%;
   position: fixed;
}
.pin-list dd a{
   text-indent: 0.5rem;
   font-size: 0.4rem;
   color: #737373;
   display: flex;
   width:94%;
   border-bottom: 1px solid #d5d5d5;
}
</style>
