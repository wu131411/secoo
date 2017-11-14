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
         <div class="bag_main">
            <bagone v-if="isShow" :data1="dataAll"></bagone>
            <bagtwo v-else :data2="dataAll"></bagtwo>
         </div>
     </div>
</template>
<script>
import BagOne from "../components/bag_one"
import BagTwo from "../components/bag_two"

export default {
    data () {
        return {
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
        this.dataAll = [
            {
                url : "http://pic.secoo.com/product/120/120/07/94/11010794.jpg",
                msg : "蒂芙尼/Tiffany & Co.  女式925纯银蓝色时尚双心珐琅项链 16英寸 TBDZ0079",
                i : 1,
                price : "1356",
            },
            {
                url : "http://pic.secoo.com/product/120/120/56/56/883b896ab06146f8b13be0647424bd28.jpg",
                msg : "奥蓝/ALLE 赫拉HERA系列富贵花镂空白金色项链",
                i : 1,
                price : "1290"
            }]}
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
</style>
