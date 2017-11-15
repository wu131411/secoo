 <template lang="html">
    <div class="lazy_load _eventBind">
        <div class="products mtArea">
            <ul class="activityHandles">
                <li v-for="item in data">
                    <div>
                        <img :src="item.img" alt="">
                    </div>
                    <p>{{item.title}}</p>
                    <span>{{item.price}}</span>
                    <i>{{item.subPrice}}</i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:{}
        }
    },
    created(){
        this.data = [
            {
                "img":"https://pic12.secooimg.com/product/300/300/64/07/11246407.jpg",
                "title":"澳洲Downia 5%白鸭绒枕（低枕） 家庭常规羽绒枕头 900克 70*45CM",
                "price":"¥ 100",
                "subPrice":"153"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/29/55/12452955_1.jpg",
                "title":"利快Mr&Mrs/Mr&Mrs 意大利进口NIKI车载香薰衣柜香薰居室香薰汽车香薰车载香薰香水香氛空气净化剂除味剂 金属粉（塔希提岛栀子花香）",
                "price":"¥ 89",
                "subPrice":"129"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/55/51/7382ff1981734063b65d79f06d01574a.jpg",
                "title":"SECOO X MANITO 蕾丝拼边22MM真丝吊带睡裙",
                "price":"¥ 828",
                "subPrice":"1380"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/48/10/0f22297c8bff48d5ab21acccbf1b4cb4.jpg",
                "title":"SECOO X NIGHT'S 北欧风情亚麻六件套（浅灰）",
                "price":"¥ 1212",
                "subPrice":"1499"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/97/49/a1780657b96f4343a5b6ec10661c9e13.jpg",
                "title":"SECOO X MANITO 真丝枕套+眼罩美肌甜睡礼盒套装",
                "price":"¥ 858",
                "subPrice":"1280"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/99/50/c2fee9dfd75d452c97b507ebd49ac021.jpg",
                "title":"ZIPPO打火机SC2595绿洲过滤嘴厌倦纪念机 白色哑漆彩印（2000年生产）",
                "price":"¥ 1197",
                "subPrice":"1429"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/53/50/5210ebd7dc2c4ad9bd6232e32f7f8c29.jpg",
                "title":"PRADA/普拉达女士经典牛皮杀手包小号手提包1BA896",
                "price":"¥ 11111",
                "subPrice":"12056"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/97/56/a8d63b69f6454a05bb42c719d6a1ff93.jpg",
                "title":"DIOR/迪奥魅惑润唇膏(焕彩) 001#粉色 3.5g",
                "price":"¥ 248",
                "subPrice":"280"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/48/03/16094803.jpg",
                "title":"DIOR/迪奥魅惑润唇蜜（橘色）004#  3.5g",
                "price":"¥ 234",
                "subPrice":"280"
            }
        ]
    }
}
</script>

<style lang="css">
    .mtArea {
        margin-bottom: 0.53rem;
    }
    .products {
        height: 11.347333rem;
        font-size: 0.6rem;
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
        margin: 0.26rem 0 0.4rem;
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
