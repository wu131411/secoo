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
                 <span>编辑</span>
             </div>
        </div>
         <div class="bag_main">
         </div>
     </div>
</template>

<script>
export default {
    methods : {
        lastPage () {
            history.back()
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
        margin-left: 10px;
    }
    .bag .bag_back .bag_bag{
        font-size: 18px;
    }
    .bag .bag_back .bag_com{
        padding-right: 4%;
    }

    /*主体*/
    .bag .bag_main{
        width: 100%;
        height: 300px;
        padding-bottom: 100px;
    }
</style>
