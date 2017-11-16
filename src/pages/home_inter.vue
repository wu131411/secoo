<template lang="html">
    <div id="homeInter">
        <HomeHead></HomeHead>
        <div class="top_panel activityHandle mtArea">
            <img src="//pic12.secooimg.com/comment/17/11/d352dc06eacd4e8c92544eedb983e36d.JPG" alt="">
        </div>
        <div class="mtArea nav_floor searchBar">
            <ul>
                <li><a href="#bao">包袋</a></li>
                <li><a href="#shoe">鞋靴</a></li>
                <li><a href="#pei">配饰</a></li>
                <li><a href="#jia">家居</a></li>
                <li><a href="#">明星推荐</a></li>
            </ul>
        </div>

        <div id="bao" class="fifth_floor mtArea">
            <div>包治百病</div>
        </div>
        <!-- 商品小图排列 -->
        <HomeGoods></HomeGoods>
        <h2 class="title-big mtArea">
            To 包袋专场
            <span class="more activityHandle">More</span>
        </h2>

        <div class="fifth_floor mtArea">
            <div id="shoe">健步如飞</div>
        </div>
        <!-- 商品小图排列 -->
        <HomeGoods></HomeGoods>
        <h2 class="title-big mtArea">
            To 鞋靴专场
            <span class="more activityHandle">More</span>
        </h2>

        <img src="//pic12.secooimg.com/comment/17/11/92c420f7294a4ce9bda568033a62e94e.jpg" alt="">
        <img src="//pic12.secooimg.com/comment/17/11/832e47693aaa428fb6bf3a0f848b8a36.jpg" alt="">
        <img src="//pic12.secooimg.com/comment/17/11/f80ca775829c45219b7c28d763ebf546.jpg" alt="">
        <img src="//pic12.secooimg.com/comment/17/11/8db3c7019bdc4c19af62c98089ecb7d6.jpg" alt="">
        <img src="//pic12.secooimg.com/comment/17/11/a5ae1dcc2c82452eb756b36b21e7170a.jpg" alt="">
        <img src="//pic12.secooimg.com/comment/17/11/0fc8d023df464bc4b3a30946ce73f25c.jpg" alt="">
        <img src="//pic12.secooimg.com/comment/17/11/8165c0a8858045818a44a44606c04d1c.jpg" alt="">

        <div class="fifth_floor mtArea">
            <div id="pei">珠光宝气</div>
        </div>
        <!-- 商品小图排列 -->
        <HomeGoods></HomeGoods>
        <h2 class="title-big mtArea">
            To 配饰专场
            <span class="more activityHandle">More</span>
        </h2>

        <img src="//pic12.secooimg.com/comment/17/11/74c1d4ca055849a89a7ac89b2abb0da7.jpg" alt="">
        <img src="//pic12.secooimg.com/comment/17/11/e5bcf3a319fb46828cd534a6ab3afca0.jpg" alt="">

        <div class="fifth_floor mtArea">
            <div id="jia">独具匠心</div>
        </div>
        <!-- 商品小图排列 -->
        <HomeGoods></HomeGoods>

        <HomeTop></HomeTop>
    </div>
</template>

<script>
import HomeHead from "../components/home_head"
import HomeGoods from "../components/home_goods"
import HomeTop from "../components/home_top"
export default {
    components:{
        HomeHead,
        HomeGoods,
        HomeTop
    },
    data () {
        return {
            searchBarFixed : false
        }
    },
    methods:{
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            var offsetTop = document.querySelector('.searchBar').offsetTop;
            if (scrollTop > offsetTop) {
                document.querySelector('.searchBar').classList.add("isFixed")
            }
            if(scrollTop <= 400) {
                document.querySelector('.searchBar').classList.remove("isFixed")
            }
        }
    },
    mounted () {
        window.addEventListener('scroll',this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="css" scoped>
    #homeInter{
        background-color: white;
    }
    .top_panel {
        width: 100%;
    }
    .mtArea {
        margin-bottom: 0.53rem;
    }
    img {
        width: 100%;
        height: 100%;
        display: block;
    }
    .nav_floor {
        width: 100%;
        overflow: hidden;
        height: 1.25rem;
    }
    .nav_floor ul {
        display: -webkit-box;
        height: 1.25rem;
        -webkit-box-align: center;
        background-color: white;
        width: 100%;
        z-index: 10;
    }
    .isFixed{
        position: fixed;
        left: 0;
        top: 0;
        font-weight: bold;
    }
    .nav_floor li {
        font-size: 0.4rem;
        color: gray;
        border-right: 1px solid gray;
        -webkit-box-flex: 1;
        height: 0.4rem;
        line-height: 0.4rem;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        position: relative;
    }
    .nav_floor li:last-child {
        border: 0;
    }
    .nav_floor li:hover{
        font-size: 0.625rem;
    }



    #homeInter .fifth_floor {
        height: 4.666rem;
        display: -webkit-box;
        -webkit-box-pack: center;
        white-space: nowrap;
        overflow: hidden;
        font-size: 1.28rem;
        margin-top: 1.5rem;
    }

    .fifth_floor div {
        display: -webkit-box;
        -webkit-box-pack: center;
        padding: 0 0.53rem;
        width: 8.36rem;
        height: 2.57rem;
        line-height: 2.57rem;
        border:1px solid #666;
    }

    .title-big{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 1.6rem 0.8rem 0.267rem;
        line-height: 1.17rem;
        font-size: 1.17rem;
    }
    .title-big .more {
        float: right;
        padding-right: 0.5rem;
        font-weight: normal;
        font-size: 0.75rem;
        position: relative;
    }
</style>
