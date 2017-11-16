<!-- 购物袋 -->
<template lang="html">
     <div class="bag">
         <div class="bag_back">
             <div class="bag_goback" @click="lastPage()">
                 <img src="../../static/images/bag_back.png" alt="">
                <span>返回</span>
             </div>
             <div class="bag_bag">
                 购物袋
             </div>
             <div class="bag_com">
                 <span @click="bagChange()">{{ msg1 }}</span>
             </div>
        </div>

         <div class="bag_main" v-if="bagShow">
            <bagone v-if="isShow" :data1="dataAll"></bagone>
            <bagtwo v-else :data2="dataAll"></bagtwo>
         </div>
         <div v-else class="bagNull">
            <p><img src="../../static/images/bag_bag.png" alt=""></p>
            <p>您的购物袋空空如也~</p>
         </div>
     </div>

</template>
<script>


import BagOne from "../components/bag_one"
import BagTwo from "../components/bag_two"
<<<<<<< HEAD
=======


>>>>>>> a8fe3cbbfa6af33130958ad3f98c84b3af1c42c6
export default {
    data () {
        return {
            bagShow : true,
            isShow : true,
            msg1 : "编辑",
            dataAll : []
        }
    },
    components : {
        bagone : BagOne,
        bagtwo : BagTwo
    },
    methods : {
        lastPage () {
            history.back()
        },
        bagChange(){
            if(this.msg1 == "编辑"){
                this.msg1 = "完成"
                this.isShow = false
            }else{
                this.msg1 = "编辑"
                this.isShow = true
            }
        }
    },
    created () {
        this.dataAll = this.$store.state.dataBag
        console.log(this.dataAll);
        
        if(this.dataAll.length == 0){
            this.bagShow = false
        }else{}
    },
    updated(){
        if(this.dataAll.length == 0){
            this.bagShow = false
        }
    }
}
</script>




<style lang="css">
    .bag{
        background: rgb(249, 249, 249);
        width: 100%;
        height: auto;
        color: #474747;
    }
    .bag .bag_back{
        width: 100%;
        height: 44px;
        box-sizing: border-box;
        background-color: white;
        font-size: 16px;
        line-height: 44px;
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    .bag_back .bag_goback img{
        float: left;
        margin-top: 10px;
        margin-left: 6px;
    }
    .bag .bag_back .bag_bag{
        font-size: 18px;
        margin-right: 10px;
    }
    .bag .bag_back .bag_com{
        padding-right: 4%;
    }
    /*主体*/
    .bag .bag_main{
        width: 100%;
        min-height: 300px;
        padding-bottom: 100px;
        margin-top: 44px;
        padding-top: 10px;
    }
    .bagNull{
        width: 100%;
        text-align: center;
        line-height: 42px;
        clear: both;
        padding-top: 167px;
        min-height: 200px;
        font-size: 30px;
        background: rgb(249, 249, 249);
    }
    .bagNull p img{
        width: 60px;
        max-width: 100%;
    }
    .bagNull p{
        font-size: 13px;
        color: #999999;
        margin-bottom: 10px;
    }
    /*如果购物车没商品，则隐藏商品列表*/
    .bag_hidden{
        display: none;
    }
</style>
