<template lang="html">
    <div class="hot_show_detail">
        <!-- 头部 -->
        <header>
            <div class="header_inner">
                <div class="go_left" @click="back()">
                    <img src="../../static/images/hot_back.png" alt="">
                </div>
                <div class="page_title">
                    晒货详情
                </div>
                <div class="go_right">

                </div>
            </div>
        </header>
        <!-- 商品主体介绍部分 -->
        <main>
            <!-- 图片部分 -->
            <div class="pro_info">
                <!-- 用户信息部分 -->
                <div class="pro_user">
                    <div class="user_img">
                        <img :src="show.headImg" alt="">
                    </div>
                    <div class="user_info">
                        <div class="user_name">
                            {{ show.nickName }}
                        </div>
                        <div class="user_time">
                            {{ show.createDate }}
                        </div>
                    </div>
                </div>
                <ul>
                    <li class="pro_img" v-for="item in show.imgs">
                        <img :src="item" alt="">
                    </li>
                </ul>
                <div class="pro_des" v-html="show.content">
                    <!-- {{ show.content }} -->
                </div>
                <div class="mixin_show">
                    <div class="zan_wrap" @click="sayZan($event)">
                        <div class="zan svg">
                            
                        </div>
                        <span>{{ show.praiseCount }}</span>
                    </div>
                    <div class="like_wrap" @click="sayLike($event)">
                        <div class="like">
                            <img src="../../static/images/hot_like.svg" alt="">
                        </div>
                        <span>{{ show.favoriteCount }}</span>
                    </div>
                </div>
            </div>
            <!-- 评论部分 -->
            <div class="comment_cont">
                <div class="comment_title">
                    {{ '全部评论( ' + comment_length + ' )' }}
                </div>
                <div class="comment_list">
                    <ul>
                        <li v-for="(item,index) in comment">
                            <div class="user_icon">
                                <img :src="item.headImg" alt="">
                            </div>
                            <div class="user_wrap">
                                <div class="user_group">
                                    <div class="user_name">
                                        {{ item.nickName }}
                                    </div>
                                    <div class="user_time">
                                        {{ item.createDate }}
                                    </div>
                                </div>
                                <div class="comment_content">
                                    {{ item.content }}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        <!-- 商品购买部分 -->
        <footer>
            <div class="pro_img">
                <img :src="productInfo.productImg" alt="">
            </div>
            <div class="fix_proInfo_inner">
                <div class="pro_box">
                    <div class="pro_title">
                        {{ productInfo.productName }}
                    </div>
                    <div class="pro_price">
                        {{ '￥' + productInfo.secooPrice }}
                    </div>
                </div>
                <div class="pro_buy" @click="goBuy()">
                    去购买
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
let zanTag = false;
let likeTag = false;
export default {
    data(){
        return {
            id: this.$route.params.id, //接收参数
            show : {},
            comment : {},
            comment_length : 0,
            productInfo : {},
            zanNum : '',
            likeNum : '',
            productId : '', // 点击购买用
        }
    },
    methods : {
        back(){
            history.back()
        },
        sayZan(ev){
            if(zanTag){
                event.currentTarget.children[0].classList.remove("color");
                this.zanNum -= 1;
                ev.currentTarget.childNodes[2].innerText = this.zanNum;
                zanTag = false;
            } else {
                event.currentTarget.children[0].classList.add("color");
                this.zanNum += 1;
                ev.currentTarget.childNodes[2].innerText = this.zanNum;
                zanTag = true;
            }
        },
        sayLike(ev){
            if(likeTag){
                event.currentTarget.children[0].classList.remove("color");
                this.likeNum -= 1;
                ev.currentTarget.childNodes[2].innerText = this.likeNum;
                likeTag = false;
            } else {
                event.currentTarget.children[0].classList.add("color");
                this.likeNum += 1;
                ev.currentTarget.childNodes[2].innerText = this.likeNum;
                likeTag = true;
            }
        },
        // 点击购买
        goBuy(){
            this.$router.push({
                path : '/product_detail/' + this.productId,
            })
        }
    },
    created(){
        // 晒货详情数据请求
        this.$jsonp('http://las.secoo.com/api/show/comment_show?commentShowDetailId=' + this.id + '&c_upk=&c_app_ver=1.0&c_channel=&c_device_id=98f0f00e-8938-48f9-b70c-e714487a8241&c_platform=&c_platform_type=&c_platform_ver=&c_screen_width=414&c_screen_height=736&_=' + Math.random() + '&callback').then(data => {
            this.show = data.show;
            this.zanNum = data.show.praiseCount;
            this.likeNum = data.show.favoriteCount;
            this.productInfo = data.show.productInfo[0];
            this.productId = data.show.productId;
        })

        // 详细评论数据请求
        this.$jsonp('http://las.secoo.com/api/show/comment_show_comments?commentShowDetailId=' + this.id + '&currpage=1&pagesize=20&c_upk=&c_app_ver=1.0&c_channel=&c_device_id=98f0f00e-8938-48f9-b70c-e714487a8241&c_platform=&c_platform_type=&c_platform_ver=&c_screen_width=414&c_screen_height=736&_=' + Math.random() + '&callback').then(data => {
            // console.log(data);
            this.comment = data.data;
            if (data.recode == 2002) {
                comment_length = 0;
            } else {
                this.comment_length = data.data.length;
            }
        })
    }
}
</script>

<style lang="css">
    .hot_show_detail{
        width: 100%;
        color: #1a191e;
        font-family: STHeiti,Helvetica Neue;
        overflow: hidden;
    }
    .hot_show_detail header{
        width: 100%;
        height: 2.32rem;
        background-color: #fff;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }
    .hot_show_detail .header_inner{
        display: -webkit-box;
    }
    .hot_show_detail header .go_left{
        width: 2.32rem;
        height: 2.32rem;
        text-align: center;
        line-height: 2.32rem;
    }
    .hot_show_detail .go_left img{
        width: 50%;
        height: 50%;
    }
    .hot_show_detail header .page_title{
        text-align: center;
        line-height: 100%;
        font-size: .906rem;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        -webkit-box-flex: 1;
    }
    .hot_show_detail header .go_right{
        width: 2.32rem;
        height: 2.32rem;
        text-align: center;
        line-height: 2.32rem;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
    }
    .hot_show_detail main{
        width: 100%;
        overflow-y: auto;
        margin-top: 2.32rem;
        border-top: .005rem solid #ededed;
    }
    .hot_show_detail main .pro_user{
        display: -webkit-box;
        width: 20rem;
        height: 3.36rem;
        -webkit-box-align: center;
    }
    .hot_show_detail .pro_user .user_img{
        margin-left: 0.8rem;
        width: 1.76rem;
        height: 1.76rem;
        border-radius: 50%;
        overflow: hidden;
    }
    .hot_show_detail .pro_user .user_img img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .hot_show_detail .pro_user .user_info{
        margin-left: 0.48rem;
        font-size: .64rem;
    }
    .hot_show_detail .pro_user .user_name{
        margin-bottom: .16rem;
    }
    .hot_show_detail .pro_user .user_time{
        color: #999;
    }
    .hot_show_detail .pro_info .pro_img{
        font-size: 0px;
        width: 20rem;
        height: 20rem;
        margin-bottom: .533rem;
        margin-left: 0;
    }
    .hot_show_detail .pro_info .pro_img img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .hot_show_detail .pro_info .pro_des{
        padding: .533rem .8rem .7rem;
        line-height: 1rem;
        font-size: .693rem;
        text-align: justify;
        word-wrap: break-word;
        word-break: break-all;
    }
    .hot_show_detail .pro_info .mixin_show{
        display: -webkit-box;
        overflow: hidden;
        font-size: .64rem;
        -webkit-box-pack: end;
        margin-bottom: 0.8rem;
    }
    .hot_show_detail .mixin_show .zan_wrap,.hot_show_detail .mixin_show .like_wrap{
        padding-right: 0.5rem;
        padding-left: .267rem;
        height: 1.6rem;
        line-height: 1.6rem;
        display: -webkit-box;
        -webkit-box-align: center;
    }
    .svg{
        font-family: 'icomoon';
    }
    .hot_show_detail .zan_wrap .zan,.hot_show_detail .like_wrap .like{
        display: inline-block;
    }
    .hot_show_detail .like_wrap .like{
        vertical-align: middle;
    }

    /*详细评论部分*/
    .hot_show_detail .comment_cont{
        overflow: hidden;
    }
    .hot_show_detail .comment_cont .comment_title{
        width: 100%;
        font-size: .64rem;
        height: 2.746rem;
        display: -webkit-box;
        -webkit-box-align: center;
        padding-left: .8rem;
        position: relative;
        border-top: .005rem solid #ededed;
        border-bottom: .005rem solid #ededed;
    }
    .hot_show_detail .comment_list ul{
        width: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
        margin-bottom: 2.38rem;
    }
    .hot_show_detail .comment_list li{
        width: 100%;
        display: -webkit-box;
        padding: 0.75rem 0;
        font-size: .64rem;
        text-align: -webkit-match-parent;

    }
    .comment_list li .user_icon{
        width: 1.87rem;
        height: 1.87rem;
        margin: 0 .8rem;
        border-radius: 50%;
        overflow: hidden;
    }
    .comment_list li .user_icon img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .comment_list li .user_wrap{
        -webkit-box-flex: 1;
        font-size: .64rem;
        padding-right: .8rem;
        padding-bottom: 0.6rem;
        border-bottom: .04rem solid #ededed;
    }
    .comment_list .user_wrap .user_group{
        display: -webkit-box;
        -webkit-box-pack: justify;
        margin-bottom: .32rem;
        margin-top: -0.107rem;
    }
    .comment_list .user_group .user_name{
        color: #666;
    }
    .comment_list .user_group .user_time{
        color: #ccc;
    }
    .comment_list .comment_content{
        line-height: 1.013rem;
        word-wrap: break-word;
        word-break: break-all;
    }
    /*点赞的类名*/
    .color{
        color : #ff0000!important;
    }

    /*购买部分*/
    .hot_show_detail footer{
        display: -webkit-box;
        width: 20rem;
        height: 2.38rem;
        background: #f5f5f5;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .hot_show_detail .pro_img{
        width: 2.34666667rem;
        height: 2.34666667rem;
        border: 1px solid #ededed;
        margin: -0.26666667rem 0 0 0.26666667rem;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        background: #fff;
    }
    .hot_show_detail .pro_img img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .hot_show_detail .fix_proInfo_inner{
        display: -webkit-box;
        -webkit-box-flex: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .hot_show_detail .fix_proInfo_inner .pro_box{
        height: 100%;
        color: #1a191e;
        font-size: .64rem;
        display: -webkit-box;
        -webkit-box-flex: 1;
        -webkit-box-pack: center;
        -webkit-box-orient: vertical;
        margin: 0 0.48rem;
        line-height: .906rem;
    }
    .hot_show_detail .pro_box .pro_title{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .hot_show_detail .fix_proInfo_inner .pro_buy{
        width: 6.93333333rem;
        height: 100%;
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        background: #e93b39;
        color: #fff;
        font-size: 0.8rem;
    }
</style>
