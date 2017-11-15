<template lang="html">
  <div class="qx_jianding">
    <div class="qixia_top">
      <div class="back" @click='back()'>
        <span class="qixia_back"></span>
        <span class="qixia_backtext">返回</span>
      </div>
      <span class="qixia_qx">鉴定中心</span>
    </div>
    <div class="jianding_texts">
      <p class="jianding_titles">鉴定中心简介</p>
      <p class="jianding_content">"对每一件奢侈品，我们都十足挑剔。"</p>
      <p class="jianding_content">全国权威奢侈品鉴定评估机构，全国寄卖工作委员会授权单位，为您带来奢侈品鉴定评估技术的专业服务。鉴定评估物品范围包括奢侈品皮具、腕表、珠宝饰品等。SECOO奢侈品鉴定评估技术中心的每一项鉴定工艺，都遵循严苛的标准和严谨的服务流程。</p>
      <p class="jianding_content">中国315电子商务诚信平台官方指定唯一奢侈品鉴定评估中心。</p>
      <p class="jianding_titles">鉴定评估范围</p>
      <p class="jianding_content">SECOO奢侈品鉴定评估技术中心主要提供皮具、腕表、珠宝玉器、艺术品等物品的鉴定评估服务和相应技术交流活动。</p>
      <p class="jianding_titles">资质</p>
      <p class="jianding_content">全国寄卖工作委员会授权合作单位</p>
      <p class="jianding_content">对外经济贸易大学奢侈品职业技能培训中心战略合作伙伴</p>
      <p class="jianding_titles">贵宾专线：400-658-6659</p>
      <p class="jianding_content">地址：中国北京市东城区金宝街18-8号</p>
      <p class="jianding_content">营业时间：早10：00--晚19：00（节假日不休）</p>
    </div>
    <div class="kong">

    </div>
    <div class="mine_footer">
      <router-link to="./home">
        <div class="footer_home foot">
  				<span class="home_ico"></span>
  				<p>首页</p>
  			</div>
      </router-link>
			<router-link to="./list">
        <div class="footer_pai foot">
  				<span class="pai_ico"></span>
  				<p>品牌</p>
  			</div>
			</router-link>
			<router-link to="./bag">
        <div class="footer_bag foot">
  				<span class="bag_ico"></span>
  				<p>购物袋</p>
  			</div>
			</router-link>
			<router-link to="./mine">
        <div class="footer_mine foot">
  				<span class="mine_ico"></span>
  				<p>我的寺库</p>
  			</div>
			</router-link>
		</div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      history.back()
    }
  }
}
</script>

<style lang="css">
@import "../../static/css/reset.css";
html {
	background: #F9F9F9;
}
.qixia_top {
	width: 20rem;
	height: 2.5rem;
	background: white;
	position: relative;
	font-size: .9rem;
}
.qixia_back {
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_01.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	position: absolute;
	top: .5rem;
	left: .5rem;
}
.qixia_backtext {
	position: absolute;
	top: .5rem;
	left: 1.7rem;
}
.qixia_qx {
	position: absolute;
	top: .5rem;
	left: 8rem;
}
.jianding_titles {
  font-size: .75rem;
  color: #000;
  margin-top: 1rem;
  margin-bottom: .5rem;
}
.jianding_content {
  width: 18rem;
  font-size: .6rem;
  color: #666;
  line-height: 1.2rem;
}
.jianding_texts {
  width: 18rem;
  background: white;
  padding: 1rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #cddde6;
}
.kong {
  width: 20rem;
  height: 1rem;
  border-bottom: 1px solid #cddde6;
}
.mine_footer {
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.foot {
	width: 4.5rem;
	height: 4.5rem;
	border: 1px solid #afe;
	font-size: .7rem;
	color: gray;
	margin-top: 1rem;
}
.home_ico {
	width: 2rem;
	height: 2rem;
	display: block;
	background: url(../../static/images/mine_imgs/mine01.png) no-repeat;
	background-size: 2rem 2rem;
	margin: 0 auto;
	margin-top: .6rem;
	margin-bottom: .2rem;
}
.pai_ico {
	width: 2rem;
	height: 2rem;
	display: block;
	background: url(../../static/images/mine_imgs/mine02.png) no-repeat;
	background-size: 2rem 2rem;
	margin: 0 auto;
	margin-top: .6rem;
	margin-bottom: .2rem;
}
.bag_ico {
	width: 2rem;
	height: 2rem;
	display: block;
	background: url(../../static/images/mine_imgs/mine03.png) no-repeat;
	background-size: 2rem 2rem;
	margin: 0 auto;
	margin-top: .6rem;
	margin-bottom: .2rem;
}
.mine_ico {
	width: 2rem;
	height: 2rem;
	display: block;
	background: url(../../static/images/mine_imgs/mine04.png) no-repeat;
	background-size: 2rem 2rem;
	margin: 0 auto;
	margin-top: .6rem;
	margin-bottom: .2rem;
}
.foot p {
  text-align: center;
}
</style>
