<template lang="html">
    <div class="product_detail">
        <!-- 顶部导航 -->
        <div class="nav_wrap">
            <div class="goback" @click="goback()">
                <img src="../../static/images/hot_back.png" alt="">
            </div>
            <ul>
                <li>商品</li>
                <li>评论</li>
                <li>详情</li>
                <li>推荐</li>
            </ul>
            <div class="gohome" @click="gohome()">
                <img src="../../static/images/home.png" alt="">
            </div>
        </div>
        <!-- 商品图片轮播图部分 -->
        <div class="product_banner">
            <!-- 轮播图部分 -->
            <div class="imgs">
                <img src="http://pic12.secooimg.com/product/500/500/54/53/655eb447900f4e77b2fee34a4fe39485.jpg" alt="">
            </div>
            <p>您有一张满<span>4999</span>减<span>550</span>的券可用，购买立省<span class="liSheng">550</span>元</p>
        </div>
        <!-- 价钱部分 -->
        <div class="product_price">
            <div class="price" :style="{color : '#' + price.nowPriceColor}">
                {{ price.nowPrice }}
            </div>
            <div class="title">
                <h3>
                    <span class="on">{{ data.brandName }}</span>
                    {{ productInfo.title }}
                </h3>
            </div>
            <div class="carriage">
                <span>{{ productInfo.areaName }}</span>
                <span>{{ productInfo.deliverInfo }}</span>
            </div>
        </div>
        <!-- 分期付款列表部分 -->
        <ul>
            <li class="product_list fenQi">
                <div class="titl">
                    {{ data.kuChequeInfo.title }}
                </div>
                <div class="info">
                    <span>{{ data.kuChequeInfo.subTitle }}</span>
                    <span><img src="../../static/images/forward.png" alt=""></span>
                </div>
            </li>
            <li class="product_list ziTi" v-show="ziTiTag">
                <div class="titl">
                    {{ data.pickupInfo.title }}
                </div>
                <div class="info">
                    <span>{{ data.pickupInfo.subTitle }}</span>
                    <span><img src="../../static/images/forward.png" alt=""></span>
                </div>
            </li>
            <li class="product_list weiXin">
                <div class="titl">
                    {{ data.wecharManage.title }}
                </div>
                <div class="info">
                    <span>{{ data.wecharManage.subTitle }}</span>
                    <span><img src="../../static/images/forward.png" alt=""></span>
                </div>
            </li>
        </ul>
        <!-- 会员权益：假一赔十部分 -->
        <ul class="serve">
            <li v-for="item in serviceList">
                <img :src="item.icon" alt="">
                <p class="text">{{ item.name }}</p>
            </li>
            <li class="more">
                <img src="../../static/images/forward.png" alt="">
            </li>
        </ul>
        <!-- 商品信息部分 -->
        <div class="product_info">
            <h2>商品信息</h2>
            <table>
                <tr v-for="item in productInfo.attrList">
                    <td>{{ item.name }}</td>
                    <td>{{ item.value }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data : {},
            productInfo : {},
            productId : this.$route.params.productId,
            topImgUrl : {}, // 顶部商品图片轮播图url
            price : '',
            serviceList : {}, // 权益：假一赔十部分数据
            ziTiTag : '', // 到店自提是否存在的判断
        }
    },
    methods : {
        goback(){
            history.back()
        },
        gohome(){
            this.$router.push({
                path : '/home'
            })
        }
    },
    created(){
        // 请求商品详情
        this.$jsonp('http://las.secoo.com/api/product/detail_new?upk=&productId=' + this.productId + '&size=2&c_platform_type=0&_=' + Math.random() + '&callback').then(data => {
            this.data = data;
            console.log(data);
            this.topImgUrl  = data.productInfo.imgList;
            this.price = data.productInfo.priceInfo;
            this.productInfo = data.productInfo;
            this.serviceList = data.serviceList;
            // 判断到店自提是否存在，如果存在就展示
            if (data.pickupInfo.title) {
                this.ziTiTag = true;
            } else {
                this.ziTiTag = false;
            }
        })
    }
}
</script>

<style lang="css">
    .product_detail{
        font: 0.693333rem/1.12rem 'STHeiti', 'Helvetica Neue';
        color: #1A191E;
        background-color: #fff;
    }
    .product_detail .nav_wrap{
        height: 2.35rem;
        background-color: #f9f9f9;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .product_detail .nav_wrap img{
        width: 50%;
        height: 50%;
    }
    .product_detail .nav_wrap .goback{
        text-align: center;
        line-height: 100%;
        flex: 0 1 10%;
    }
    .product_detail .nav_wrap ul{
        flex: 0 1 80%;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .product_detail .nav_wrap .gohome{
        /*text-align: center;*/
        line-height: 100%;
        flex: 0 1 10%;
    }
    /*顶部标签被选中时的样式*/
    .on{
        color: #BEA474;
    }
    /*轮播图部分*/
    .product_banner{
        margin-top: 2.35rem;
        width: 100%;
        height: 20rem;
        position: relative;
    }
    .product_banner img{
        width: 100%;
        height: 100%;
    }
    .product_banner p{
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 10;

        width: 94%;
        height: 1.9rem;
        padding: 0 0 0 6%;
        line-height: 1.9rem;
        background-color: rgba(238, 238, 238, 0.8);
    }
    /*价钱部分*/
    .liSheng{
        color: rgb(233, 59, 57);
    }
    .product_price{
        padding: 0 5%;
        width: 90%;
        height: 7rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .product_price .price{
        line-height: 1.6rem;
        font-size: 1.28rem;
        font-weight: bold;
        vertical-align: middle;
    }
    .product_price .title{
        line-height: 1.2rem;
    }
    .product_price .carriage span:nth-of-type(1){
        padding-right: .5rem;
    }

    /*列表部分*/
    .product_detail>ul{
        width: 100%;
    }
    .product_detail .product_list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.1rem 1.2rem;

        height: 3rem;
        border-top: .005rem solid #ededed;
        border-bottom: .005rem solid #ededed;
    }
    .product_detail .product_list .titl{
        font-size: .8rem;
        font-weight: bold;
    }
    .product_detail .product_list .info img{
        vertical-align: middle;
        width: 1rem;
    }
    /*会员权益部分，假一赔十*/
    .product_detail .serve{
        height: 7rem;
        background-color: #fafafa;
        font-size: 0.64rem;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .product_detail .serve li{
        text-align: center;
        flex: 0 1 23%;
    }
    .product_detail .serve li img{
        width: 1.44rem;
    }
    .product_detail .serve .more{
        flex: 0 1 4%;
    }
    /*商品信息部分*/
    .product_detail .product_info{
        padding-bottom: 1.6rem;
        border-bottom: 1px solid #ebebeb;
        overflow: hidden;
    }
    .product_detail .product_info h2{
        line-height: 1.5rem;
        margin-top: 1.6rem;
        margin-bottom: 1.4rem;
        font-size: 1.1rem;
        position: relative;
        margin: 0 1.3rem;
        padding: 1.3rem 0;
    }
    .product_detail .product_info table{
        line-height: 0.96rem;
        margin: 0 1.3rem;
    }
    .product_detail .product_info tr{
        height: 1.6rem;
        line-height: 1rem;
    }
    .product_detail .product_info td:nth-of-type(1){
        width: 6rem;
    }
</style>
