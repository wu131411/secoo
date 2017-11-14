 <template lang="html">
    <div class="lazy_load _eventBind">
        <div class="products mtArea">
            <ul class="activityHandles">
                <li class="activityBind">
                    <div>
                        <img src="https://pic12.secooimg.com/product/300/300/64/07/11246407.jpg" alt="">
                    </div>
                    <p>澳洲Downia 5%白鸭绒枕（低枕） 家庭常规羽绒枕头 900克 70*45CM</p>
                    <span> ¥ 100</span>
                    <i class="specialPrice">¥ 153</i>
                </li>
                <li class="activityBind">
                    <div>
                        <img src="https://pic12.secooimg.com/product/300/300/29/55/12452955_1.jpg" alt="">
                    </div>
                    <p>利快Mr&Mrs/Mr&Mrs 意大利进口NIKI车载香薰衣柜香薰居室香薰汽车香薰车载香薰香水香氛空气净化剂除味剂 金属粉（塔希提岛栀子花香）</p>
                    <span> ¥ 89</span>
                    <i class="specialPrice">¥ 129</i>
                </li>
                <li class="activityBind">
                    <div>
                        <img src="https://pic12.secooimg.com/product/300/300/55/51/7382ff1981734063b65d79f06d01574a.jpg" alt="">
                    </div>
                    <p>SECOO X MANITO 蕾丝拼边22MM真丝吊带睡裙</p>
                    <span> ¥ 828</span>
                    <i class="specialPrice">¥ 1380</i>
                </li>
                <li class="activityBind">
                    <div>
                        <img src="https://pic12.secooimg.com/product/300/300/48/10/0f22297c8bff48d5ab21acccbf1b4cb4.jpg" alt="">
                    </div>
                    <p>SECOO X NIGHT'S 北欧风情亚麻六件套（浅灰）</p>
                    <span> ¥ 1212</span>
                    <i class="specialPrice">¥ 1499</i>
                </li>
                <li class="activityBind">
                    <div>
                        <img src="https://pic12.secooimg.com/product/300/300/97/49/a1780657b96f4343a5b6ec10661c9e13.jpg" alt="">
                    </div>
                    <p>SECOO X MANITO 真丝枕套+眼罩美肌甜睡礼盒套装</p>
                    <span> ¥ 858</span>
                    <i class="specialPrice">¥ 1280</i>
                </li>
                <li class="activityBind">
                    <div>
                        <img src="https://pic12.secooimg.com/product/300/300/99/50/c2fee9dfd75d452c97b507ebd49ac021.jpg" alt="">
                    </div>
                    <p>ZIPPO打火机SC2595绿洲过滤嘴厌倦纪念机 白色哑漆彩印（2000年生产）</p>
                    <span> ¥ 1197</span>
                    <i class="specialPrice">¥ 1429</i>
                </li>
                <li class="activityBind">
                    <div>
                        <img src="https://pic12.secooimg.com/product/300/300/53/50/5210ebd7dc2c4ad9bd6232e32f7f8c29.jpg" alt="">
                    </div>
                    <p>PRADA/普拉达女士经典牛皮杀手包小号手提包1BA896</p>
                    <span> ¥ 11111</span>
                    <i class="specialPrice">¥ 12056</i>
                </li>
                <li class="activityBind">
                    <div>
                        <img src="https://pic12.secooimg.com/product/300/300/97/56/a8d63b69f6454a05bb42c719d6a1ff93.jpg" alt="">
                    </div>
                    <p>DIOR/迪奥魅惑润唇膏(焕彩) 001#粉色 3.5g</p>
                    <span> ¥ 248</span>
                    <i class="specialPrice">¥ 280</i>
                </li>
                <li class="activityBind">
                    <div>
                        <img src="https://pic12.secooimg.com/product/300/300/48/03/16094803.jpg" alt="">
                    </div>
                    <p>DIOR/迪奥魅惑润唇蜜（橘色）004#  3.5g</p>
                    <span> ¥ 234</span>
                    <i class="specialPrice">¥ 280</i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
 .mtArea {
    margin-bottom: 0.53333333333333rem;
}
 .products {
    height: 11.347333rem;
    font-size: 0.746667rem;
    overflow: hidden;
}
 .products ul {
    display: -webkit-box;
    width: 100%;
    height: 120%;
    overflow-x: auto;
    overflow-y: hidden;
}
 .products li {
    padding: 0.267rem 0.8rem 0 0;
    width: 6.933333rem;
}
 .products div {
    height: 6.933333rem;
    overflow: hidden;
    position: relative;
    z-index: -4;
}
 .products li:nth-child(1) {
    padding-left: 0.8rem;
}
/*li下的字体*/
 .products p {
    margin: 0.266667rem 0 0.4rem;
    height: 1.65rem;
    line-height: 0.88rem;
    /*文字溢出*/
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
 .products span {
    display: block;
    width: 100%;
    line-height: 0.746667rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
 .products .specialPrice {
    display: block;
    margin-left: 0;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
 .products i {
    font-size: 0.64rem;
    font-style: normal;
    text-decoration: line-through;
    color: gray;
}
</style>
