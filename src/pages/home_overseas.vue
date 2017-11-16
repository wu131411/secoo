<template lang="html">
    <div id="overseas">
        <HomeHead></HomeHead>
        <div class="sea-head">
            <img src="../../static/images/home-img/change.gif" alt="">
        </div>
        <div class="time-axis-container bg-img">
            <div class="time-axis">
                <ul class="axis-top align-center">
                    <li class="time-item pre">
                        <div class="time-date">11.1</div>
                        <div class="time-text">
                            <div class="time-text-inner activityHandle">

                                <h5>包袋</h5>
                                <p>4折起</p>
                            </div>
                        </div>
                    </li>
                    <li class="time-item pre">
                        <div class="time-date">11.2</div>
                        <div class="time-text">
                            <div class="time-text-inner activityHandle">

                                <h5>腕表首饰</h5>
                                <p>4折起</p>
                            </div>
                        </div>
                    </li>
                    <li class="time-item pre">
                        <div class="time-date">11.3</div>
                        <div class="time-text">
                            <div class="time-text-inner activityHandle">

                                <h5>服装配饰</h5>
                                <p>3折起</p>
                            </div>
                        </div>
                    </li>
                    <li class="time-item pre">
                        <div class="time-date">11.4</div>
                        <div class="time-text">
                            <div class="time-text-inner activityHandle">

                                <h5>鞋靴</h5>
                                <p>3折起</p>
                            </div>
                        </div>
                    </li>
                    <li class="time-item pre">
                        <div class="time-date">11.5</div>
                        <div class="time-text">
                            <div class="time-text-inner activityHandle">

                                <h5>运动户外</h5>
                                <p>3折起</p>
                            </div>
                        </div>
                    </li>
                    <li class="time-item pre">
                        <div class="time-date">11.6</div>
                        <div class="time-text">
                            <div class="time-text-inner activityHandle">

                                <h5>美妆</h5>
                                <p>3折起</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="axis-arc">
                    <!-- ::after -->
                </div>
                <ul class="axis-bottom align-center">
                    <li class="time-item">
                        <div class="time-date">11.11</div>
                        <div class="time-text">
                            <div class="time-text-inner activityHandle  noActivityLink">
                                <h5>火热开抢</h5>
                            </div>
                        </div>
                    </li>
                    <li class="time-item pre">
                        <div class="time-date">11.10</div>
                        <div class="time-text">
                            <div class="time-text-inner activityHandle  noActivityLink">
                                <h5>巨惠提前抢</h5>
                                <p>3折起</p>
                            </div>
                        </div>
                    </li>
                    <li class="time-item now">
                        <div class="time-date">11.9</div>
                        <div class="time-text">
                            <div class="time-text-inner activityHandle">
                                <!-- ::before -->
                                <h5>海外专场</h5>
                                <p>2折起</p>
                            </div>
                        </div>
                    </li>
                    <li class="time-item pre">
                        <div class="time-date">11.8</div>
                        <div class="time-text">
                            <div class="time-text-inner activityHandle">
                                <!-- ::before -->
                                <h5>精品生活</h5>
                                <p>2折起</p>
                            </div>
                        </div>
                    </li>
                    <li class="time-item pre">
                        <div class="time-date">11.7</div>
                        <div class="time-text">
                            <div class="time-text-inner activityHandle">
                                <!-- ::before -->
                                <h5>中国精品</h5>
                                <p>4折起</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="seckill-container">
                <div class="seckill swiper-container swiper-container-horizontal swiper-container-android">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HomeHead from "../components/home_head"
export default {
    components:{
        HomeHead
    },
}
</script>

<style lang="css">
    #overseas .sea-head{
        width: 100%;
    }
    #overseas .sea-head img{
        width: 100%;
        display: block;
    }
    /*时间表上部分*/
    #overseas .time-axis-container {
        background: #3e80d6;
        height: 6.933333rem;
        padding: 1.28rem 0 1.386667rem 0;
    }
    .time-axis {
        position: relative;
        width: 86.13%;
        height: 3.733333rem;
        margin-left: 4.27%;
        margin-top: 0.853333rem;
    }
    .axis-top, .axis-bottom {
        position: absolute;
        width: 100%;
        left: 0;
        border-top: 1px dashed #888;
        height: 1px;
        box-sizing: border-box;
    }
    .align-center{
        display: flex;
        align-items: center;
    }
    .axis-top li, .axis-bottom li {
        width: 1.5479876%;
        height: 0.266667rem;
        border-radius: 50%;
        background-color: #ffdbda;
        position: relative;
    }
    .time-item.pre .time-date {
        color: #fff;
    }
    .time-date {
        position: absolute;
        width: 800%;
        bottom: 0.24rem;
        left: 50%;
        margin-left: -400%;
        font-size: 0.48rem;
        line-height: 1.28rem;
        font-weight: bold;
        text-align: center;
    }
    .time-text {
        position: absolute;
        width: 2000%;
        height: 1.84rem;
        top: 0.613333rem;
        left: 50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        text-align: center;
    }
    .time-item.pre .time-text-inner {
        background-color: #fff;
        color: #4a4a4a;
    }
    .time-text-inner {
        position: relative;
        height: 100%;
        padding: 0 3%;
        display: inline-block;
        border-radius: 0.133333rem;
        color: rgba(255, 255, 255, 0.4);
        background-color: rgba(255, 255, 255, 0.2);
    }
    .time-item.pre .time-text-inner::before {
        border-bottom-color: #fff;
    }
    .time-text-inner::before {
        content: '';
        position: absolute;
        left: 50%;
        top: -8px;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        border-color: transparent;
        border-style: solid;
        border-width: 4px;
        border-bottom-color: rgba(255, 255, 255, 0.2);
    }
    .time-text-inner h5 {
        font-size: 0.666667rem;
        line-height: 0.666667rem;
        margin: 0.24rem 0 0.16rem 0;
    }
    .time-item.pre .time-text-inner {
        background-color: #fff;
        color: #4a4a4a;
    }
    .time-text-inner p {
        font-size: 0.586667rem;
        line-height: 0.586667rem;
    }
    .axis-top .time-item:nth-child(1) {
        margin-left: 7.585139%;
    }
    .axis-top .time-item:nth-child(2) {
        margin-left: 15.492260%;
    }
    .axis-top .time-item:nth-child(3) {
        margin-left: 18.492260%;
    }
    .axis-top .time-item:nth-child(4) {
        margin-left: 14.860681%;
    }
    .axis-top .time-item:nth-child(5) {
        margin-left: 14.860681%;
    }
    .axis-top .time-item:nth-child(6) {
        margin-left: 14.860681%;
    }

    /*右弧线部分*/
    .axis-arc {
        position: absolute;
        width: 9.597523%;
        height: 100%;
        top: 0;
        right: -9.597523%;
        overflow: hidden;
    }
    .axis-arc::after {
        content: '';
        position: absolute;
        width: 225.806452%;
        height: 3.733333rem;
        top: 0;
        right: 0;
        box-sizing: border-box;
        border: 1px dashed #888;
        border-left: none;
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
    }

    /*时间表下部分*/
    .time-text-inner::before {
        content: '';
        position: absolute;
        left: 50%;
        top: -8px;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        border-color: transparent;
        border-style: solid;
        border-width: 4px;
        border-bottom-color: rgba(255, 255, 255, 0.2);
    }
    .time-date {
        position: absolute;
        width: 800%;
        bottom: 0.24rem;
        left: 50%;
        margin-left: -400%;
        font-size: 0.48rem;
        line-height: 1.28rem;
        font-weight: bold;
        text-align: center;
    }
    .axis-bottom .time-item:nth-child(1) h5 {
        margin: 0;
        line-height: 1.84rem;
    }
    .axis-bottom .time-item:nth-child(1) {
        margin-left: 11.455108%;
    }
    .axis-bottom .time-item:nth-child(2) {
        margin-left: 19.659443%;
    }
    .axis-bottom .time-item:nth-child(3) {
        margin-left: 19.659443%;
    }
    .axis-bottom .time-item:nth-child(4) {
        margin-left: 17.647059%;
    }
    .axis-bottom .time-item:nth-child(5) {
        margin-left: 17.647059%;
    }
    .time-text {
        position: absolute;
        width: 2000%;
        height: 1.84rem;
        top: 0.613333rem;
        left: 50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        text-align: center;
    }
    .axis-bottom {
        bottom: 0;
    }
    .time-item.pre {
        background-color: #fff;
    }
    .axis-top li, .axis-bottom li {
        width: 1.5479876%;
        height: 0.266667rem;
        border-radius: 50%;
        position: relative;
    }
    .time-item.pre .time-text-inner {
        background-color: #fff;
        color: #4a4a4a;
    }
    .time-item.pre {
        background-color: #fff;
    }
    .time-date {
        position: absolute;
        width: 800%;
        bottom: 0.24rem;
        left: 50%;
        margin-left: -400%;
        font-size: 0.48rem;
        line-height: 1.28rem;
        font-weight: bold;
        text-align: center;
        color: rgba(255, 255, 255, 0.5);
    }
    .time-text-inner {
        position: relative;
        height: 100%;
        padding: 0 3%;
        display: inline-block;
        border-radius: 0.133333rem;
    }
    .time-text h5 {
        font-size: 0.666667rem;
        line-height: 0.666667rem;
        margin: 0.24rem 0 0.16rem 0;
    }
    .time-text p {
        font-size: 0.586667rem;
        line-height: 0.586667rem;
    }
    .time-item.now .time-text-inner {
        background-color: #35508c;
        color: #fff;
    }
    .time-item.now .time-date {
        color: #fff;
    }
    .time-item.now {
    background-color: #35508c;
}
.time-item.now .time-text-inner::before {
    border-bottom-color: #35508c;
}
</style>
