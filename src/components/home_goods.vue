<template lang="html">
        <div class="pro_dList mtArea">
            <ul>
                <li v-for="item in result">
                    <div class="pro_imgclearfix">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="pro_info">
                        <div class="pro_title">
                            <span>{{item.title}}</span>
                        </div>
                        <div class="pro_second_price">
                            <span>{{item.subTitle}}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
    data(){
        return{
            result:{}
        }
    },
    created(){
        this.result = [
            {
                "img":"https://pic12.secooimg.com/product/300/300/10/10/fdaac6276ba74d70a857d9975a660158.jpg",
                "title":"HERMES/爱马仕大地男士淡香水 100ml87",
                "subTitle":"¥ 1056"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/54/57/69698de25bc24966b4b6621c97f43d6a.jpg",
                "title":"【免税】YSL/YSL  方管口红迷魅纯漾亮采 #13  3.8g80",
                "subTitle":"¥ 353"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/10/10/fdaac6276ba74d70a857d9975a660158.jpg",
                "title":"【免税】YSL/YSL 方管口红73#  3.8g89",
                "subTitle":"¥ 325"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/10/98/dbe8aa9ca39642fb98e9562ac5bd4efc.jpg",
                "title":"【免税】Sulwhasoo/雪花秀  玉容撕拉面膜 150ml76",
                "subTitle":"¥ 257"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/52/56/487d0588fd6f45e3b3769b1dec660691.jpg",
                "title":"【免税】Sulwhasoo/雪花秀 雨润面膜 120ml92",
                "subTitle":"¥ 317"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/99/81/13549981.jpg",
                "title":"VERSACE/范思哲晶钻女士香水套装 5ml*38",
                "subTitle":"¥ 219"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/95/86/13329586.jpg",
                "title":"Salvatore Ferragamo/菲拉格慕蓝色经典男士淡香水 100ml40",
                "subTitle":"¥ 384"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/12/11/11141211.jpg",
                "title":"Salvatore Ferragamo/菲拉格慕梦中情人淡香水30ml18",
                "subTitle":"¥ 287"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/97/54/a6bcf280926043aab86a4c8d96f0a1ba.jpg",
                "title":"L'OCCITANE/欧舒丹玫瑰皇后润手霜75ML14",
                "subTitle":"¥ 156"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/61/37/14826137.jpg",
                "title":"Laneige/兰芝气垫粉凝霜SPF30+/PA++15G*2 21#(新款叫兰芝亮白聚光气垫霜21#）127",
                "subTitle":"¥ 289"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/10/10/fdaac6276ba74d70a857d9975a660158.jpg",
                "title":"HERMES/爱马仕大地男士淡香水 100ml87",
                "subTitle":"¥ 1056"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/76/81/14817681.jpg",
                "title":"Lancome/兰蔻净透洁面泡沫125ML133",
                "subTitle":"¥ 313"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/51/99/3ca6c7c2822846219cacd0d935ab10c8.jpg",
                "title":"【免税】Lancome/兰蔻juicy shaker摇摇气垫唇油6.5ml #38143",
                "subTitle":"¥ 210"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/48/10/0d11986297d04a84ac5f86893becddbf.jpg",
                "title":"Jurlique/茱莉蔻玫瑰柔肤身体乳300ML65",
                "subTitle":"¥ 312"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/43/87/10974387.jpg",
                "title":"GUCCI/古驰罪爱淡香水 50ml21",
                "subTitle":"¥ 720"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/60/25/10976025.jpg",
                "title":"GUCCI/古驰罪爱男士淡香水 50ml7",
                "subTitle":"¥ 598"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/51/52/34f559dbe3964effb9f825ec6add76ef.jpg",
                "title":"【免税】Estee Lauder/雅诗兰黛  洗面奶 红石榴泡沫洁面乳125ml36",
                "subTitle":"¥ 220"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/81/86/11578186.jpg",
                "title":"BURBERRY/博柏利周末男用香水30ml291",
                "subTitle":"¥ 274"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/54/57/69698de25bc24966b4b6621c97f43d6a.jpg",
                "title":"【免税】YSL/YSL  方管口红迷魅纯漾亮采 #13  3.8g80",
                "subTitle":"¥ 353"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/50/10/2e503086e24a4b9ca78fd563fc513f5f.jpg",
                "title":"ALBION/奥碧虹（澳尔滨）爽肤精萃面膜11ml*810",
                "subTitle":"¥ 210"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/48/49/0152dc6ac1e7433b8a6257f68ff56876.jpg",
                "title":"【日本直邮】SPA treatment/SPA treatment HAS红蛇毒保湿紧致眼膜 60片33",
                "subTitle":"¥ 341"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/52/49/4170315dc263479f96d552203dda3424.jpg",
                "title":"POLA/宝丽  WHITE SHOT IX 美白丸 180粒21",
                "subTitle":"¥ 1135"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/56/98/8bc9613fdf974c3d9dfc640e988f65c6.jpg",
                "title":"POLA/宝丽  WHITE SHOT美白口服液 30ml*10支  日本同步上市41",
                "subTitle":"¥ 425"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/10/49/e1c4ddda082c498da3595fcff06355e1.jpg",
                "title":"【日本直邮】POLA/宝丽 B.A抗糖丸 60粒2",
                "subTitle":"¥ 568"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/10/98/eb6af61845704adba8e64c5a43cbbdb2.jpg",
                "title":"【日本直邮】POLA/宝丽 馥美修护无硅洗发露 550ml10",
                "subTitle":"¥ 185"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/98/56/b838f104f6f147ceac83f3741cca37b5.jpg",
                "title":"SPA treatment/SPA treatment 干细胞美容液面膜 25ml×5 SPT006134",
                "subTitle":"¥ 429"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/50/55/274cba8fb8234015b33ea0cd6357746a.png",
                "title":"【日本直邮】POLA/宝丽 WRINKLE SHOT局部去皱纹抗皱精华液 20g COSME大赏59",
                "subTitle":"¥ 915"
            },
            {
                "img":"https://pic12.secooimg.com/product/300/300/55/54/76d5d05cd6c742d7b3fea8f86e5777c1.jpg",
                "title":"【日本直邮】ALBION/奥尔滨爽肤精华液药用美白健康水 330ml+活润保湿渗透乳液II 200g37",
                "subTitle":"¥ 1074"
            },
        ]
    }
}
</script>

<style lang="css">
.pro_dList {
    width: 100%;
    overflow: hidden;
}
.pro_dList ul {
    width: 100%;
}
.clearfix {
    zoom: 1;
}
.pro_dList li:nth-child(1),.pro_dList li:nth-child(2) {
    border-top: none;
}
.pro_dList li:nth-child(odd) {
    border-right:none;
}

.pro_dList li {
    float: left;
    width: 50%;
    -webkit-box-sizing: border-box;
    border: 1px solid #eeeeee;
    height: 15.093rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
.pro_dList .pro_img {
    width: 100%;
    height: 10rem;
    position: relative;
}
.pro_dList .pro_info {
    padding: 0 0.96rem;
    -webkit-box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    height: 5.093rem;
}
.pro_dList .pro_title {
    height: 1.706rem;
    color: #333;
    line-height: .8rem;
    font-size: 12px;
}
.pro_dList .pro_title span {
    margin-top: 0.7rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
}
.pro_second_price, .pro_second_price span {
    font-size: 14px;
}
</style>
