<template lang="html">
    <div id="homeInter">
        <HomeHead></HomeHead>
        <div class="top_panel activityHandle mtArea">
            <img src="//pic12.secooimg.com/comment/17/11/d352dc06eacd4e8c92544eedb983e36d.JPG" alt="">
        </div>
        <div class="mtArea nav_floor">
            <ul class="fixed">
                <li>包袋</li>
                <li>鞋靴</li>
                <li>配饰</li>
                <li>家居</li>
                <li>明星推荐</li>
            </ul>
        </div>

        <div class="fifth_floor mtArea">
            <div>包治百病</div>
        </div>
        <!-- 商品小图排列 -->
        <HomeGoods></HomeGoods>
        <h2 class="title-big mtArea">
            To 包袋专场
            <span class="more activityHandle">More</span>
        </h2>

        <div class="fifth_floor mtArea">
            <div>健步如飞</div>
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
            <div>珠光宝气</div>
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
            <div>独具匠心</div>
        </div>
        <!-- 商品小图排列 -->
        <HomeGoods></HomeGoods>

    </div>
</template>

<script>
import HomeHead from "../components/home_head"
import HomeGoods from "../components/home_goods"
export default {
    components:{
        HomeHead,
        HomeGoods
    },
    watch:{

    }
}
</script>

<style lang="css">
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
.nav_floor ul {
    display: -webkit-box;
    height: 40px;
    -webkit-box-align: center;
    width: 100%;
}
/*.nav_floor ul.fixed {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 300;
}*/
.nav_floor li {
    font-size: 12px;
    line-height: 12px;
    color: gray;
    border-right: 1px solid gray;
    -webkit-box-flex: 1;
    height: 13px;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    position: relative;
}
.nav_floor li:last-child {
    border: 0;
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
    line-height: 1.173333rem;
    font-size: 1.173333rem;
}
.title-big .more {
    float: right;
    padding-right: 0.5rem;
    font-weight: normal;
    font-size: 0.746667rem;
    position: relative;
}
/*.title-big .more:before, .title-big .more:after {
    content: '';
    width: 0.4rem;
    height: 1px;
    background-color: #999;
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform-origin: right center;
    transform-origin: right center;
}*/
</style>
