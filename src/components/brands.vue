<template lang="html">
   <div class="">
      <div class="load" v-if="bol">
         <img src="../../static/images/loading_holder.gif" alt="">
      </div>
      <dl class="pin-list" v-for="listArr in result">
        <a class="djump">
           <dt>
             {{ listArr.cap }}
          </dt>
        </a>
        <dd v-for="childArr in listArr.list">
           <router-link to="/list/three">
              <div class="left">
                 {{ childArr.cname }}
              </div>
              <span class="right">
                 {{ childArr.ename }}
              </span>
          </router-link>
        </dd>
        <router-view></router-view>
      </dl>
      <div class="black-list">
         <a  @click="jump(0)">A</a>
         <a  @click="jump(1)">B</a>
         <a  @click="jump(2)">C</a>
         <a  @click="jump(3)">D</a>
         <a  @click="jump(4)">E</a>
         <a  @click="jump(5)">F</a>
         <a  @click="jump(6)">G</a>
         <a  @click="jump(7)">H</a>
         <a  @click="jump(8)">I</a>
         <a  @click="jump(9)">J</a>
         <a  @click="jump(10)">K</a>
         <a  @click="jump(11)">L</a>
         <a  @click="jump(12)">M</a>
         <a  @click="jump(13)">N</a>
         <a  @click="jump(14)">O</a>
         <a  @click="jump(15)">P</a>
         <a  @click="jump(16)">Q</a>
         <a  @click="jump(17)">R</a>
         <a  @click="jump(18)">S</a>
         <a  @click="jump(19)">T</a>
         <a  @click="jump(20)">U</a>
         <a  @click="jump(21)">V</a>
         <a  @click="jump(22)">W</a>
         <a  @click="jump(23)">S</a>
         <a  @click="jump(24)">Y</a>
         <a  @click="jump(25)">Z</a>
         <a href="#">#</a>
      </div>
   </div>
</template>

<script>
export default {
   data(){
        return{
         result:{},
         bol:true,
         total:0,
        }
    },
    created(){
      this.$jsonp('//android.secoo.com/appservice/all_brand.action').then(data => {
         this.result = data.rp_result.brands
         // console.log(this.result);
         this.bol = false
      })
   },
   methods:{
      jump(index){
         console.log('123');
          let jump = document.querySelectorAll('.djump')
          // 获取需要滚动的距离
         //  console.log(jump);
         //  console.log(index);
         // console.log(jump[index].offsetTop);
          this.total = (jump[index].offsetTop - 50)
         //  console.log(total);
          // console.log(ev.currentTarget);
          // Chrome
          document.body.scrollTop = this.total

         //Firefox
          document.documentElement.scrollTop = this.total
          // Safari
          window.pageYOffset = this.total
      }
   }
}
</script>

<style lang="css">
.left,.right{
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}
.load img{
   width:100%;
   height:100%;
}
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
.load{
   position: fixed;
   top: 2.7rem;
   width:100%;
   height:80%;
}
.black-list{
   background-color: #474747;
   position: fixed;
   right: 0;
   top:2.7rem;
   z-index: 1;
   width:5%;
   text-align: center;
}
.black-list a{
   font-size: 0.5rem;
   display: block;
   color: #fff;
}
.poson{
   position: fixed;
   top: 2.7rem;
   left: 0;
   right: 0;
}
</style>
