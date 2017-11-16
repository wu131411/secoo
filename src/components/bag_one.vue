<template lang="html">
    <div class="bagbag">
        <div class="bag_one">
            <div class="" v-for="(item, index, key) in data1">
                <header class="bag_list">
                    <div class="bagLeft">
                        <p class="bagLef" :class="data1[index].dataBag.isTrue==0?'':'selected'" @click="bagChan(index,$event)"></p>
                    </div>
                    <div class="bagCenter">
                        <img :src="item.dataBag.url" alt="">
                        <p>{{item.dataBag.msg}}</p>
                        <p><span>x</span>{{item.dataBag.i}}</p>
                    </div>
                    <div class="bagRight">
                        ￥<em>{{item.dataBag.price}}</em>
                    </div>
                </header>
            </div>
        </div>
        <main class="bag_price">
            <div class="priceAreaBox">
                <p>商品金额：<span>¥{{allPrice}}</span></p>
            </div>
            <div class="baoxian">
                <div class="baoxian_bag">
                    <p>100%正品保证 假一赔十</p>
                    <p>寺库承诺所有在售商品均为正品，假一赔十</p>
                </div>
            </div>
        </main>
        <footer>
            <div class="bag_footer">
                <span class="bagFoot" :class="{'selected' : isi}" @click="changeAll()"></span>
                <p>
                    <span>全选</span>
                    <span>合计:￥{{allPrice}}</span>
                    <button>去结算({{all}})</button>
                </p>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    props:["data1"],
    data () {
        return {
            allPrice : 0,
            all : 0,
            isi : 0
        }
    }
    ,created () {
            for(var item of this.data1){
                console.log(item);
            }
        //创建实例根据是否选中状态，选中件数，选中商品单价来得到总价，总数量
        for (var i = 0; i < this.data1.length; i++) {
            this.allPrice += parseInt(this.data1[i].dataBag.price * this.data1[i].dataBag.i * this.data1[i].dataBag.isTrue)
            this.all += this.data1[i].dataBag.i * this.data1[i].dataBag.isTrue
            if(this.data1[i].dataBag.isTrue == 0){
                this.isi = 0
                break
            }else{
                this.isi = 1
            }
        }
    }
    ,methods : {
        //判断商品是否选中，从而改变商品总价，商品总数量
        bagChan(index,event){
            if(this.data1[index].dataBag.isTrue == 0){
                event.target.classList.add("selected")
                this.data1[index].dataBag.isTrue = 1
                this.allPrice += parseInt(this.data1[index].dataBag.price * this.data1[index].dataBag.i * this.data1[index].dataBag.isTrue)
                this.all += (this.data1[index].dataBag.i * this.data1[index].dataBag.isTrue)
            }else{
                event.target.classList.remove("selected")
                this.data1[index].dataBag.isTrue = 0
                this.allPrice -= parseInt(this.data1[index].dataBag.price * this.data1[index].dataBag.i)
                this.all -= this.data1[index].dataBag.i
            }
            //是否为全选状态
            for (var i = 0; i < this.data1.length; i++) {
                if(this.data1[i].dataBag.isTrue == 0){
                    this.isi = 0
                    break
                }else{
                    this.isi = 1
                }
            }
        },
        changeAll () {
            //通过全选按钮，选择所有商品或取消所有已选商品，计算总价，总数量
            if(this.isi == 0){
                for(var i = 0; i < this.data1.length; i++){
                    if(this.data1[i].dataBag.isTrue == 0){
                        this.data1[i].dataBag.isTrue = 1
                        this.allPrice += parseInt(this.data1[i].dataBag.price * this.data1[i].dataBag.i * this.data1[i].dataBag.isTrue)
                        this.all += (this.data1[i].dataBag.i * this.data1[i].dataBag.isTrue)
                    }                
                }
                this.isi = 1
            }else{
                for(var i = 0; i < this.data1.length; i++){
                    this.data1[i].dataBag.isTrue = 0
                    this.allPrice -= parseInt(this.data1[i].dataBag.price * this.data1[i].dataBag.i)
                    this.all -= this.data1[i].dataBag.i
                }
                this.isi = 0
            }
        }
    }
}
</script>

<style lang="css">
    /*已选中商品样式*/
    .bagbag{
        width: 100%;
        overflow: hidden;
    }
    .bag_one{
        border-top: 1px solid #d5d5d5;
    }
    .bag_list{
        width: 100%;
        height: 90px;
        padding: 10px 0 10px 10px;
        font-size: 14px;
        box-sizing: border-box;
        border-bottom: 1px solid #d5d5d5;
        background: #ffffff;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .bag_list .bagLef{
        position: absolute;
        top: 40px;
        left: 7px;
        color: white;
        font-size: 12px;
        width: 20px;
        height: 20px;
        background: url(../../static/images/bag_mark.png) no-repeat;
        background-size: 70px;
    }
    .bagLef.selected{
        background-position: -48px 0;
    }
    .bag_list .bagLefff{
        position: absolute;
        top: 40px;
        left: 7px;
        color: white;
        font-size: 12px;
        width: 20px;
        height: 20px;
        background: url(../../static/images/bag_mark.png) no-repeat;
        background-size: 70px;
        background-position: -48px 0;
    }
    .bag_list .bagLeft{
            width: 5%;
    }

    .bag_list .bagCenter{
        width: 70%;
    }
    .bag_list .bagCenter img{
        width: 60px;
        height: 68px;
        float: left;
        margin-top: 5px;
        margin-right: 15px;
    }
    .bag_list .bagCenter p:nth-child(2){
        line-height: 20px;
        height: 40px;
        font-size: 12px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .bag_list .bagCenter p:nth-child(3){
        margin: 3px -8px 0 0;
        text-align: right;
        font-size: 12px;
        color: #ababab;
    }
    .bagCenter p:nth-child(3) span {
        font-size: 15px;
    }
    .bag_list .bagRight{
        width: 25%;
        line-height: 70px;
        display: inline-block;
        box-sizing: border-box;
        font-size: 12px;
        color: #737373;
        text-align: right;
        padding-right: 6px;
    }

    /*bagprice*/
    .bag_price{
        margin-top: 19px;
    }
    .bag_price .priceAreaBox{
        background: #f8f8f8;
        padding: 10px 20px;
        box-sizing: border-box;
        width: 100%;
    }
    .bag_price .priceAreaBox p{
        text-align: left;
        vertical-align: middle;
        font-size: 14px;
        margin-bottom: 5px;
    }
    .priceAreaBox p span{
        float: right;
    }
    .bag_price .baoxian{
        width: 100%;
        height: 45px;
        background: red;
        padding-top: 12px;
        background:rgb(238, 238, 238);
    }
    .bag_price .baoxian .baoxian_bag{
        width: 100%;
        height: 45px;
        background: url(../../static/images/bag_bao_03.png) no-repeat 10px 3px;
        background-size: 30px;
        box-sizing: border-box;
        padding-left: 45px;
        margin-left:10px;
    }
    .baoxian .baoxian_bag p:nth-child(1){
        font-size: 14px;
        font-weight: bold;
        padding-bottom: 5px;
        color: #ababab;
            line-height: 20px;
    }
    .baoxian .baoxian_bag p:nth-child(2){
        font-size: 12px;
        color: #ababab;
        line-height: 20px;
    }
    footer{
        width: 100%;
        padding:5px;
        height: 32px;
        /*background: blue;*/
        position: fixed;
        left: 0;
        bottom: 0;
    }
    footer .bag_footer{
        width: 100%;
        height: 32px;
    }
    footer .bag_footer .bagFoot{
        display: inline-block;
        margin:3px 5px 0 9px;
        width: 30px;
        height: 30px;
        background: url(../../static/images/bag_mark.png) no-repeat;
        background-size: 80px;
        float: left;
    }
    footer .bag_footer .bagFoot.selected{
        background-position: -55px 0;
    }
    footer p{
        float: left;
        display: inline-block;
        font-size: 12px;
        line-height: 32px;
    }
    footer p span{
        margin-right: 10px;
    }
    button{
        width: 95px;
        height: 26px;
        background-color: #f24413;
        border: none;
        font-size: 14px;
        color: #fff;
        float: right;
        padding: 0;
        position: absolute;
        top: 8px;
        right: 20px;
        z-index: 99;
        display: block;
    }
</style>
