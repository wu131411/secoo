<template lang="html">
   <div id="hei" class="zong-xiala">
      <div id="bai" class="zong-bai">
         <ul class="shai-ul">
            <li>
               <dl>
                  <dt><b>{{name.name}}</b></dt>
                  <dd>
                     <a href="#" v-for = "index in (name.value)">{{index.name}}</a>
                  </dd>
               </dl>
            </li>
            <li>
               <dl>
                  <dt><b>{{name3.name}}</b></dt>
                  <dd>
                     <a href="#">1000以下</a>
                     <a href="#">1001-2000</a>
                     <a href="#">2001-5000</a>
                     <a href="#">5001-10000</a>
                     <a href="#">10001-50000</a>
                     <a href="#">50001-100000</a>
                     <a href="#">100001以上</a>
                  </dd>
               </dl>
            </li>
            <li>
               <dl>
                  <dt><b>{{name4.name}}</b></dt>
                  <dd>
                     <a href="#" v-for = "index in name4.value">{{index.name}}</a>
                  </dd>
               </dl>
            </li>
            <li>
               <dl>
                  <dt><b>{{name5.name}}</b></dt>
                  <dd>
                     <a href="#" v-for = "index in name5.value">{{index.name}}</a>
                  </dd>
               </dl>
            </li>
            <li>
               <dl>
                  <dt><b>{{name6.name}}</b></dt>
                  <dd>
                     <a href="#" v-for = "index in name6.value">{{index.name}}</a>
                  </dd>
               </dl>
            </li>
            <li>
               <dl>
                  <dt><b>{{name7.name}}</b></dt>
                  <dd>
                     <a href="#" v-for = "index in name7.value">{{index.name}}</a>
                  </dd>
               </dl>
            </li>
            <li>
               <dl>
                  <dt><b>{{name8.name}}</b></dt>
                  <dd>
                     <a href="#" v-for = "index in name8.value">{{index.name}}</a>
                  </dd>
               </dl>
            </li>
            <li>
               <dl>
                  <dt><b>{{name9.name}}</b></dt>
                  <dd>
                     <a href="#" v-for = "index in name9.value">{{index.name}}</a>
                  </dd>
               </dl>
            </li>
            <li>
               <dl>
                  <dt><b>{{name10.name}}</b></dt>
                  <dd>
                     <a href="#" v-for = "index in name10.value">{{index.name}}</a>
                  </dd>
               </dl>
            </li>
            <li>
               <dl>
                  <dt><b>{{name11.name}}</b></dt>
                  <dd>
                     <a href="#" v-for = "index in name11.value">{{index.name}}</a>
                  </dd>
               </dl>
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {
   data(){
      return{
         result:{},
         name:'',
         name3:'',
         name4:'',
         name5:'',
         name6:'',
         name7:'',
         name8:'',
         name9:'',
         name10:'',
         name11:''
      }
   },
   created(){
      this.$jsonp('http://m.secoo.com/appservice/search_cateGoods.action?categoryId=_30_31_&orderType=1&currPage=1&st=10&_=1510552205474&callback:').then(data => {
         this.result = data.rp_result.filterlist
         this.name = this.result[2];
         this.name3 = this.result[3];
         this.name4 = this.result[4];
         this.name5 = this.result[5];
         this.name6 = this.result[6];
         this.name7 = this.result[7];
         this.name8 = this.result[8];
         this.name9 = this.result[9];
         this.name10 = this.result[10];
         this.name11 = this.result[11];
      })
   }
}
</script>

<style lang="css">
#hei,#bai{
   height:auto;
}
.shai-ul li dl{
   border-bottom: 1px solid #ebebeb;
   padding:1rem;
}
.shai-ul li dl dt{
   font-size: 0.8rem;
   margin:0.5rem 0;
}
.shai-ul li dl dd{
   font-size: 0.5rem;
}
.shai-ul li dl dd a{
   display: inline-block;
   color:#737373;
   text-align: left;
   width:32.333333%;
   padding:0.4rem 0;
   margin: 0.4rem 0;
}
</style>
