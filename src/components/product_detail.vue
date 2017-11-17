<template lang="html">
    <div class="product_detail">
        <!-- 顶部导航 -->
        <div class="nav_wrap d_jump">
            <div class="goback" @click="goback()">
                <img src="../../static/images/hot_back.png" alt="">
            </div>
            <ul>
                <li @click="jump($event,0)" :class="{'on' : tag1}">商品</li>
                <li @click="jump($event,1)" :class="{'on' : tag2}">评论</li>
                <li @click="jump($event,2)" :class="{'on' : tag3}">详情</li>
                <li @click="jump($event,3)" :class="{'on' : tag4}">推荐</li>
            </ul>
            <div class="gohome" @click="gohome()">
                <img src="../../static/images/home.png" alt="">
            </div>
        </div>
        <!-- 商品图片轮播图部分 -->
        <div class="product_banner">
            <!-- 轮播图部分 -->
            <div class="imgs">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="item in topImgUrl" :key="item.key">
                        <img :src="item">
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
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
                    {{ kuChequeInfo.title }}
                </div>
                <div class="info">
                    <span>{{ kuChequeInfo.subTitle }}</span>
                    <span><img src="../../static/images/forward.png" alt=""></span>
                </div>
            </li>
            <li class="product_list ziTi" v-show="ziTiTag">
                <div class="titl">
                    {{ pickupInfo.title }}
                </div>
                <div class="info">
                    <span>{{ pickupInfo.subTitle }}</span>
                    <span><img src="../../static/images/forward.png" alt=""></span>
                </div>
            </li>
            <li class="product_list weiXin">
                <div class="titl">
                    {{ wecharManage.title }}
                </div>
                <div class="info">
                    <span>{{ wecharManage.subTitle }}</span>
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
        <!-- 用户评价部分 -->
        <div class="userComment d_jump">
            <div class="comment_title">
                <h2>{{ '用户评价(' + this.commentCount +')' }}</h2>
                <div class="">
                    <span>{{ '综合评分' + this.productGrade }}</span>
                    <img src="../../static/images/forward.png" alt="">
                </div>
            </div>
            <ul class="comment_list">
                <!-- 将列表控制在两个以内 -->
                <li v-for="(item,index) in commentList" v-if="index<2">
                    <div class="comment_user">
                        <span class="user_name">{{ item.userName }}</span>
                        <div class=" star">
                            <img v-for="i in item.grade" src="../../static/images/star.png" alt="">
                        </div>
                    </div>
                    <div class="comment_content">
                        {{ item.content }}
                    </div>
                    <div class="comment_info">
                        <time>{{ time[index] }}</time>
                        <div class="zan svg" @click="sayYes($event)">
                            <span></span>
                            <span>{{ item.praiseCount }}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 商品详情部分 -->
        <div class="product_imgs d_jump">
            <h2>商品详情</h2>
            <ul>
                <li v-for="item in productInfo.detail">
                    <img :src="item.info" alt="">
                </li>
            </ul>
        </div>
        <!-- 精品推荐部分 -->
        <div class="recommend d_jump">
            <p class="recommend_title">-精品推荐-</p>
            <ul class="recommend_content">
                <li v-for="item in tuiJianList" @click="go(item)">
                    <div class="recommend_img">
                        <img :src="'http://pic.secoo.com/product/300/300/' + item.picUrl" alt="">
                    </div>
                    <p class="recommend_name">{{ item.name }}</p>
                    <p class="recommend_price">{{ '￥' + item.secooPrice }}</p>
                </li>
            </ul>
        </div>
        <!-- 底部按钮部分 -->
        <div class="button">
            <div class="button_bag" @click="buyBag()">
                <img src="../../static/images/bag.png" alt="">
            </div>
            <div class="btn" v-for="item in buttonList" :style="{color:'white',backgroundColor:'#' + item.color}" @click="addBag(item.type)">
                {{ item.title }}
            </div>
        </div>
    </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import swiperCss from "../../static/css/swiper.css"

let zanTag = false;

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
            commentList : {}, // 商品评论列表
            productGrade : 0, // 商品综合评分
            commentCount : 0, // 当前商品评论数量
            brandCommentCount : 0, // 同品牌评价数量,
            time : [], //时间戳转为日期时间
            tuiJianList : {}, // 精品推荐列表
            buttonList : {}, // 按钮列表
            // 控制顶部导航样式的标签
            total1 : 0,
            total2 : 0,
            total3 : 0,
            total4 : 0,
            tag1 : true,
            tag2 : false,
            tag3 : false,
            tag4 : false,
            scroll : 0,//监听页面滚动
            total : 0,
            swiperOption : {
                loop : true,
                // autoplay: 3000,
                direction : 'horizontal',
                pagination : '.swiper-pagination',
                autoplayDisableOnInteraction : false,
            },
            dataArr : {},
            zanNum : 0,
            kuChequeInfo : '',
            pickupInfo : '',
            wecharManage : ''
        }
    },
    components : {
        swiper,
        swiperSlide
    },
    methods : {
        go(item){
            this.$router.push({
                path : '/product_detail/' + item.productId
            })
        },
        addBag(type){
            if (type == 0) {
                // 加入购物袋
                this.dataArr = {
                    url : this.productInfo.imgList[0],
                    msg : this.productInfo.title,
                    i : 1,
                    price : this.price.nowPrice.split("￥")[1].replace(/,/g,""),
                    isTrue : 0,
                }
                this.$store.commit({
                    type : "ADD_BAGDATA",
                    dataBag : this.dataArr
                })
                alert("已加入购物袋")
            }
        },
        buyBag(){
            this.$router.push({
                path: '/bag/' // 路径
            })
        },
        goback(){
            history.back()
        },
        gohome(){
            this.$router.push({
                path : '/home'
            })
        },
        sayYes(ev){
            if(zanTag){
                ev.currentTarget.children[0].classList.remove("color");
                this.zanNum -= 1;
                ev.currentTarget.children[1].innerText = this.zanNum;
                zanTag = false;
            } else {
                ev.currentTarget.children[0].classList.add("color");
                this.zanNum += 1;
                ev.currentTarget.children[1].innerText = this.zanNum;
                zanTag = true;
            }
        },
        menu() {
            this.scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let jump = document.querySelectorAll('.d_jump');
            // 获取需要滚动的距离
            this.total1 = jump[0].offsetTop
            this.total2 = jump[1].offsetTop
            this.total3 = jump[2].offsetTop
            this.total4 = jump[3].offsetTop

            if (this.scroll < this.total2 && this.scroll >= this.total1) {
                this.tag1 = true;
                this.tag2 = false;
                this.tag3 = false;
                this.tag4 = false;
            } else if (this.scroll < this.total3 && this.scroll >= this.total2) {
                this.tag2 = true;
                this.tag1 = false;
                this.tag3 = false;
                this.tag4 = false;
            } else if (this.scroll < this.total4 && this.scroll >= this.total3) {
                this.tag3 = true;
                this.tag1 = false;
                this.tag2 = false;
                this.tag4 = false;
            } else {
                this.tag4 = true;
                this.tag1 = false;
                this.tag2 = false;
                this.tag3 = false;
            }
        },
        jump(ev,index){
            let jump = document.querySelectorAll('.d_jump')
            // 获取需要滚动的距离
            this.total = jump[index].offsetTop
            // Chrome
            document.body.scrollTop = this.total
            // Firefox
            document.documentElement.scrollTop = this.total
            // Safari
            window.pageYOffset = this.total
        }
    },
    created(){
        // 请求商品详情
        this.$jsonp('http://las.secoo.com/api/product/detail_new?upk=&productId=' + this.productId + '&size=2&c_platform_type=0&_=' + Math.random() + '&callback').then(data => {
            this.data = data;
            this.topImgUrl  = data.productInfo.imgList;
            this.price = data.productInfo.priceInfo;
            this.productInfo = data.productInfo;
            this.serviceList = data.serviceList;
            this.buttonList = data.button.buttonList;
            this.kuChequeInfo = data.kuChequeInfo;
            this.pickupInfo = data.pickupInfo;
            this.wecharManage = data.wecharManage;
            // 判断到店自提是否存在，如果存在就展示
            if (data.pickupInfo.title) {
                this.ziTiTag = true;
            } else {
                this.ziTiTag = false;
            }
        }),
        // 请求商品的用户评价
        this.$jsonp('http://las.secoo.com/api/comment/show_product_comment?upk=affe88828a1641749c7e730b6483dcd9%7C464572656233%7Ccc4a951855c94198896b905a9d51c3a2%7CBF13678943951D86DD851ABD04D322F1&productId=' + this.productId + '&size=2&c_platform_type=0&type=0&filter=0&page=1&pageSize=8&productBrandId=5987&productCategoryId=1828&_=' + Math.random() + '&callback').then( data => {
            if (data.retCode == 0) {
                this.commentList = data.commentList; //评论列表
                this.commentCount = data.totalCurrCommentNum; //该品牌评论数量
                this.brandCommentCount = data.totalBrandCommentNum; //同品牌评论数量
                this.productGrade = parseInt(data.productGrade * 10) / 10; //评论综合评分
                // 时间戳转为规定的时间格式
                for (var i of data.commentList) {
                    var date = new Date(i.createDate);
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    var date = year + '.' + month + '.' + day;
                    this.time.push(date)
                    this.zanNum = i.praiseCount;
                }
            } else {
                this.commentList = data.commentList; //评论列表
                this.commentCount = 0; //该品牌评论数量
                this.brandCommentCount = data.totalBrandCommentNum; //同品牌评论数量
                this.productGrade = '5.0'; //评论综合评分
            }
        }),
        // 请求精品推荐数据
        this.$jsonp('https://lr.secooimg.com/recommend?upk=affe88828a1641749c7e730b6483dcd9%7C464572656233%7Ccc4a951855c94198896b905a9d51c3a2%7CBF13678943951D86DD851ABD04D322F1&productId=' + this.productId + '&size=2&c_platform_type=0&type=similar&count=12&platformType=2&categoryId=1449&brandId=6836&_=' + Math.random() + '&callback').then(data => {
            if (data.recode == 0) {
                this.tuiJianList = data.productList;
            }
        })
    },
    mounted(){
         window.addEventListener('scroll', this.menu)
    },
    destroyed(){
        window.removeEventListener('scroll', this.menu)
    }
}
</script>

<style lang="css" scoped>
    .product_detail{
        font: 0.693333rem/1.12rem 'STHeiti', 'Helvetica Neue';
        color: #1A191E;
        background-color: #fff;
        position: relative;
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
    /*分页器样式*/
    .swiper-container .swiper-pagination{
        top: 17rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 0.24rem;
        font-size: 0;
        width: 3rem;
        height: 0.8rem;
        background-color: rgba(100, 100, 100, 0.7);
        position: absolute;
        left: 50%;
        -webkit-border-radius: 0.4rem;
        border-radius: 0.4rem;
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0)
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
    /*评论部分*/
    .color{
        color : #ff0000!important;
    }
    .svg{
        font-family: 'icomoon';
    }
    .userComment{
        /*padding-bottom: 1rem;*/
        border-bottom: 1px solid #ebebeb;
        overflow: hidden;
    }
    .userComment .comment_title{
        padding: 1.5rem 1rem;
        line-height: 1.5rem;
        font-size: 1.1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ebebeb;
    }
    .userComment .comment_title h2{
        font-size: 1.1rem;
    }
    .userComment .comment_title span,.userComment .comment_title img{
        font-size: .75rem;
    }
    .userComment .comment_list li{
        padding: 1rem 0 1rem 1.5rem;
        border-top: 1px solid #ebebeb;
    }
    .userComment .comment_list .comment_user{
        line-height: 1rem;
    }
    .userComment .comment_user div{
        display: inline-block;
        margin-left: .5rem;
    }
    .userComment .comment_user div img{
        margin-left: 0.2rem;
        width: 0.5rem;
        height: 0.5rem;
        line-height: 1rem;
    }
    .userComment .comment_list .comment_content{
        margin: 0.4rem 1.3rem 0.3rem 0;
        max-height: 3.36rem;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .userComment .comment_list .comment_info{
        margin-right: 1.333333rem;
        color: #666;
    }
    .userComment .comment_info div{
        display: inline-block;
        float: right;
    }
    /*商品详情部分*/
    .product_detail .product_imgs{
        width: 100%;
    }
    .product_detail .product_imgs h2{
        font-size: 1.1rem;
        padding: 1.5rem 1rem;
    }
    .product_detail .product_imgs li{
        width: 100%;
        margin-bottom: .5rem;
        text-align: center;
    }
    .product_detail .product_imgs img{
        width: 90%;
    }
    /*精品推荐部分*/
    .recommend{
        width: 100%;
        overflow: hidden;
        margin-bottom: 2.5rem;
    }
    .recommend .recommend_title{
        width: 100%;
        line-height: 3.6rem;
        font-size: 0.96rem;
        text-align: center;
        background-color: #f5f5f5;
    }
    .recommend .recommend_content{
        width: 100%;
    }
    .recommend .recommend_content li{
        width: 49.5%;
        display: inline-block;
        border-right: .1rem solid #f5f5f5;
        border-bottom: .1rem solid #f5f5f5;
    }
    .recommend .recommend_content .recommend_img{
        width: 100%;
        height: 10rem;
    }
    .recommend .recommend_content img{
        width: 100%;
        height: 100%;
    }
    .recommend .recommend_content p:nth-of-type(1){
        margin: 0.8rem;
        height: 1.92rem;
        line-height: 0.96rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .recommend .recommend_content p:nth-of-type(2){
        margin: 0 0.8rem .5rem .8rem;
        height: 1rem;
        line-height: 1;
        font-weight: bold;
        font-size: 0.9rem;
    }
    /*底部按钮样式*/
    .product_detail .button{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2.5rem;
        z-index: 10;

        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index:10;
    }
    .product_detail .button .button_bag{
        flex: 0 1 15%;
        height: 100%;
        line-height: 3rem;
        background-color: white;
        text-align: center;
    }
    .product_detail .button .button_bag img{
        width: 40%;
        height: 50%;
    }
    .product_detail .button .btn{
        text-align: center;
        line-height: 2.5rem;
        font-size: .8rem;
        width: 100%;
        height: 100%;
        flex: 0 1 42.5%;
    }
    /*.product_detail .button div:nth-of-type(2){
        border-radius: .3rem 0 0 .3rem;
    }
    .product_detail .button div:nth-of-type(3){
        border-radius:0 .3rem .3rem 0;
    }*/
</style> -->
