<template lang="html">
    <div class="bag_two">
        <div class="" v-for="(item, index, key) in data2">
            <header class="bag_list">
                <div class="bagLeft">
                    <p class="bagLef" :class="data2[index].dataBag.isTrue==0?'':'selected'"  @click="bagChan(index,$event)"></p>
                </div>
                <div class="bagCenter">
                    <img :src="item.dataBag.url" alt="">
                    <p>{{item.dataBag.msg}}</p>
                    <p class="bagTwoP">
                        <span @click="minNum(index)">-</span>
                        <span>{{item.dataBag.i}}</span>
                        <span @click="addNum(index)">+</span>
                    </p>
                </div>
                <div class="bagRight">
                    ￥<em>{{item.dataBag.price}}</em>
                </div>
            </header>
            <footer>
                <div class="bag_footer">
                    <span class="bagFoot" :class="{'selected' : isi}" @click="changeAll"></span>
                    <p>
                        <span>全选</span>
                        <button @click="deleteList()">删除</button>
                    </p>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    props:["data2"],
    data () {
        return {
            isi : 0
        }
    },
    methods : {
        //商品数量加减
        minNum (index){
            if(this.data2[index].dataBag.i == 1){
                // console.log(1);
            }else{
                this.data2[index].dataBag.i--
            }
        },
        addNum(index){
            this.data2[index].dataBag.i++
        },
        //商品列表中是否为选中状态
        bagChan(index,event){
            if(this.data2[index].dataBag.isTrue == 0){
                event.target.classList.add("selected")
                this.data2[index].dataBag.isTrue = 1
            }else{
                event.target.classList.remove("selected")
                this.data2[index].dataBag.isTrue = 0
            }
            // 判断是否选中状态，从而改变全选样式
            for (var i = 0; i < this.data2.length; i++) {
                if(this.data2[i].dataBag.isTrue == 0){
                    this.isi = 0
                    break
                }else{
                    this.isi = 1
                }
            }
        },
        //删除选中商品
        deleteList(){
            for (var i = this.data2.length-1 ; i >= 0; i--) {
                if(this.data2[i].dataBag.isTrue == 1){
                    this.data2.splice(i,1)
                }
            }
        },
        changeAll () {
            //通过全选按钮，选择所有商品或取消所有已选商品，计算总价，总数量
            if(this.isi == 0){
                for(var i = 0; i < this.data2.length; i++){
                    this.data2[i].dataBag.isTrue = 1
                }
                this.isi = 1
            }else{
                for(var i = 0; i < this.data2.length; i++){
                    this.data2[i].dataBag.isTrue = 0
                }
                this.isi = 0
            }
        }
    },
    created () {
        for (var i = 0; i < this.data2.length; i++) {
            if(this.data2[i].dataBag.isTrue == 0){
                this.isi = 0
                break
            }else{
                this.isi = 1
            }
        }
    }
}
</script>
<style lang="css">
    .bagCenter .bagTwoP span{
        box-sizing: border-box;
        float: left;
        display: inline-block;
        width: 25px;
        height: 25px;
        border: 1px solid #d5d5d5;
        text-align: center;
        line-height: 25px;
        color: black;
    }
    .bagCenter .bagTwoP span:nth-of-type(2){
        width: 32px;
        border-left: none;
        border-right: none;
    }
</style>
