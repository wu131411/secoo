<template lang="html">
  <div id="she">
      <HomeHead></HomeHead>
      <div class="top_panel">
          <img src="//pic12.secooimg.com/comment/17/10/002457ecf03b4b568584951d27e867a9.jpg" alt="">
      </div>
      <div class="top_panel">
          <img src="//pic12.secooimg.com/comment/17/11/52f2a465df7c4ab0821f806d89592357.jpg" alt="">
      </div>
      <div class="nav_floor">
          <ul>
              <li>精选</li>
              <li>游艇</li>
              <li>全部商品</li>
          </ul>
      </div>
      <div class="top_panel">
          <img src="//pic12.secooimg.com/comment/17/10/cacddadbebc54c2b8951e7b4596f1e0d.jpg" alt="">
      </div>
      <HomeGoods></HomeGoods>

      <div class="top_panel">
          <img src="//pic12.secooimg.com/comment/17/11/2251ed0ff34d444589b05e97574e0b49.jpg" alt="">
      </div>
      <div class="eleventh_floor activityHandle">
          <div class="sub_box_1">
              <img src="//pic12.secooimg.com/comment/17/11/df99a22be3fb47fca2c009b99cc765f0.jpg" alt="">
          </div>
          <div class="sub_box_2">
              <div class="text_tips_1">公主游艇54尺</div>
              <div class="text_tips_2">可用优惠券</div>
              <div class="text_tips_3">5800元/小时</div>
          </div>
      </div>
      <div class="eleventh_floor activityHandle">
          <div class="sub_box_1">
              <img src="//pic12.secooimg.com/comment/17/11/e847a14e94df4201982f9f4c51ffdb2a.jpg" alt="">
          </div>
          <div class="sub_box_2">
              <div class="text_tips_1">法国蓝高45尺</div>
              <div class="text_tips_2">双十一秒杀</div>
              <div class="text_tips_3">4500元/小时</div>
          </div>
      </div>
      <div class="eleventh_floor activityHandle">
          <div class="sub_box_1">
              <img src="//pic12.secooimg.com/comment/17/10/039c7a9e7e034a7fb10958556b503571.jpg" alt="">
          </div>
          <div class="sub_box_2">
              <div class="text_tips_1">圣劳伦佐70尺</div>
              <div class="text_tips_2">21米游艇 / 浦江租赁</div>
              <div class="text_tips_3">双十一惊爆价</div>
          </div>
      </div>
      <div class="eleventh_floor activityHandle">
          <div class="sub_box_1">
              <img src="//pic12.secooimg.com/comment/17/10/7ea0382a449a4a07ad260bf68ac8a47d.jpg" alt="">
          </div>
          <div class="sub_box_2">
              <div class="text_tips_1">法圣劳伦佐96尺</div>
              <div class="text_tips_2">可用优惠券</div>
              <div class="text_tips_3">30000元/小时</div>
          </div>
      </div>

      <div class="top_panel">
          <img src="//pic12.secooimg.com/comment/17/10/4d01c043d834459abb5c6fdcc8e25421.jpg" alt="">
      </div>
      <HomeList></HomeList>

      <div class="top_panel">
          <img src="//pic12.secooimg.com/comment/17/11/c129daa0b133448bbd3e6f1e0eb97d53.jpg" alt="">
      </div>
      <HomeList></HomeList>

      <div class="top_panel">
          <img src="//pic12.secooimg.com/comment/17/11/8bb881bbb7654050a6d2fe83920f3d5f.jpg" alt="">
      </div>
      <HomeList></HomeList>

      <div class="top_panel">
          <img src="//pic12.secooimg.com/comment/17/11/c6603dd6d6b14852b05e1758613bd163.jpg" alt="">
      </div>
      <HomeList></HomeList>
  </div>
</template>

<script>
import HomeHead from "../components/home_head"
import HomeGoods from "../components/home_goods"
import HomeList from "../components/home_list"
export default {
    components:{
        HomeHead,
        HomeGoods,
        HomeList
    }
}
</script>

<style lang="css">
/*#she{
    background-color: #ECF7FB;
}*/
.top_panel {
    width: 100%;
}
img {
    width: 100%;
    height: 100%;
    display: block;
}
.nav_floor {
    width: 100%;
    overflow: hidden;
    height: 40px;
    color:#78c2e7;
}
.nav_floor ul {
    display: -webkit-box;
    height: 40px;
    -webkit-box-align: center;
    width: 100%;
}
.nav_floor li {
    font-size: 12px;
    line-height: 12px;
    border-right: 1px solid;
    -webkit-box-flex: 1;
    height: 13px;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    position: relative;
}

.eleventh_floor {
    height: 9.333rem;
    display: -webkit-box;
}
.eleventh_floor .sub_box_1 {
    width: 11.733rem;
    height: 100%;
}
.eleventh_floor .sub_box_2 {
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-align: center;
    overflow: hidden;
    white-space: nowrap;
    color: #1e77a2;
    background-color: #ECF7FB;
}
.eleventh_floor .text_tips_1 {
    font-size: 1.066rem;
    line-height: 1.066rem;
    margin-top: 2.746rem;
    font-weight: bold;
}
.eleventh_floor .text_tips_2 {
    font-size: 13px;
    line-height: 13px;
    margin-top: 0.373rem;
}
.eleventh_floor .text_tips_3 {
    margin-top: 1.413rem;
    font-size: 13px;
    width: 5.28rem;
    height: 1.146rem;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    border: 1px solid #1e77a2;
}
</style>
