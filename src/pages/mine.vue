<template lang="html">
  <div class="mine">
		<div class="mine_top">
      <div class="back" @click='back()'>
        <span class="mine_back"></span>
  			<span class="mine_backtext">返回</span>
      </div>
			<span class="mine_siku">我的寺库</span>
			<span class="mine_close"></span>
	  </div>
    <router-link to="/mine_zh">
      <div class="mine_user">
  			<span class="user_ico"></span>
  			<span class="user_text">账户</span>
  			<span class="user_num"></span>
  			<span class="user_r"></span>
  		</div>
    </router-link>
    <router-link to="./mine_dd">
      <div class="mine_order">
  			<span class="order_ico"></span>
  			<span class="order_text">订单</span>
  			<span class="order_r"></span>
  		</div>
    </router-link>
    <router-link to="./mine_yhq">
      <div class="mine_red">
  			<span class="red_ico"></span>
  			<span class="red_text">红包、优惠券</span>
  			<span class="red_r"></span>
  		</div>
    </router-link>

    <router-link to="./mine_jp">
      <div class="mine_auction">
  			<span class="auction_ico"></span>
  			<span class="auction_text">我的竞拍</span>
  			<span class="auction_r"></span>
  		</div>
    </router-link>

		<div class="mine_money">
			<span class="money_ico"></span>
			<span class="money_text">我的拍卖券</span>
			<span class="money_r"></span>
		</div>
    <router-link to="/mine_about">
      <div class="mine_about">
  			<span class="about_ico"></span>
  			<span class="about_text">关于寺库</span>
  			<span class="about_r"></span>
  		</div>
    </router-link>

		<div class="mine_call">
			<span class="call_ico"></span>
			<span class="call_text">客服热线</span>
			<span class="call_num">400 875 6789</span>
			<span class="call_r"></span>
		</div>
		<div class="mine_seaout">
			<span class="seaout_ico"></span>
			<span class="seaout_text">海外站购买说明</span>
			<span class="seaout_r"></span>
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
		<p class="foot_text foot_text1">北京寺库商贸有限公司 联系电话：400 875 6789</p>
		<p class="foot_text">地址：北京市东城区朝阳门内大街银河SOHO C座15层</p>
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
  height: 120%;
}
.mine{
  font-size: .8rem;
  font-family: STHeiti,Helvetica Neue;
}
.mine_top {
	width: 20rem;
	height: 3.5rem;
	background: white;
	position: relative;
	border-bottom: 2px solid #cddde6;
}
.mine_back {
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
.mine_backtext {
  font-size: .9rem;
	position: absolute;
	left: 1.7rem;
  top: .6rem;
}
.mine_siku {
  font-size: .9rem;
	position: absolute;
	top: .5rem;
	left: 8rem;
}
.mine_close {
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_02.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	position: absolute;
	top: .5rem;
	right: .5rem;
}
.mine_user {
	width: 20rem;
	height: 2.3rem;
	margin-top: 1px;
	position: relative;
	background: white;
	border-bottom: 2px solid #cddde6;
}
.user_ico {
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_1.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	vertical-align: middle;
	position: absolute;
	left: .5rem;
	top: .5rem;
}
.user_text {
  line-height: 2.3rem;
	position: absolute;
	left: 2.5rem;
}
.user_r {
	float: right;
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_r.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	margin-top: .5rem;
}
.mine_order {
	width: 20rem;
	height: 2.3rem;
	margin-top: 1px;
	position: relative;
	background: white;
	border-bottom: 2px solid #cddde6;
}
.order_ico {
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_2.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	vertical-align: middle;
	position: absolute;
	left: .5rem;
	top: .5rem;
}
.order_text {
  line-height: 2.3rem;
	position: absolute;
	left: 2.5rem;
}
.order_r {
	float: right;
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_r.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	margin-top: .5rem;
}
.mine_red {
	width: 20rem;
	height: 2.3rem;
	margin-top: 2px;
	position: relative;
	background: white;
	border-bottom: 2px solid #cddde6;
}
.red_ico {
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_3.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	vertical-align: middle;
	position: absolute;
	left: .5rem;
	top: .5rem;
}
.red_text {
  line-height: 2.3rem;
	position: absolute;
	left: 2.5rem;
}
.red_r {
	float: right;
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_r.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	margin-top: .5rem;
}
.mine_auction {
	width: 20rem;
	height: 2.3rem;
	margin-top: 1rem;
	position: relative;
	background: white;
	border-bottom: 1px solid #cddde6;
	border-top: 1px solid #cddde6;
}
.auction_ico {
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_4.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	vertical-align: middle;
	position: absolute;
	left: .5rem;
	top: .5rem;
}
.auction_text {
  line-height: 2.3rem;
	position: absolute;
	left: 2.5rem;
}
.auction_r {
	float: right;
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_r.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	margin-top: .5rem;
}
.mine_money {
	width: 20rem;
	height: 2.3rem;
	position: relative;
	background: white;
	border-bottom: 1px solid #cddde6;
	border-top: 1px solid #cddde6;
}
.money_ico {
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_5.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	vertical-align: middle;
	position: absolute;
	left: .5rem;
	top: .5rem;
}
.money_text {
  line-height: 2.3rem;
	position: absolute;
	left: 2.5rem;
}
.money_r {
	float: right;
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_r.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	margin-top: .5rem;
}
.mine_about {
	width: 20rem;
	height: 2.3rem;
	margin-top: 1rem;
	position: relative;
	background: white;
	border-bottom: 1px solid #cddde6;
	border-top: 1px solid #cddde6;
}
.about_ico {
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_6.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	vertical-align: middle;
	position: absolute;
	left: .5rem;
	top: .5rem;
}
.about_text {
  line-height: 2.3rem;
	position: absolute;
	left: 2.5rem;
}
.about_r {
	float: right;
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_r.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	margin-top: .5rem;
}
.mine_call {
	width: 20rem;
	height: 2.3rem;
	position: relative;
	background: white;
	border-bottom: 1px solid #cddde6;
	border-top: 1px solid #cddde6;
}
.call_ico {
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_7.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	vertical-align: middle;
	position: absolute;
	left: .5rem;
	top: .5rem;
}
.call_text {
  line-height: 2.3rem;
	position: absolute;
	left: 2.5rem;
}
.call_num {
	position: absolute;
	right: 1.5rem;
	top: .7rem;
	font-weight: 600;
}
.call_r {
	float: right;
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_r.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	margin-top: .5rem;
}
.mine_seaout {
	width: 20rem;
	height: 2.3rem;
	position: relative;
	background: white;
	border-bottom: 1px solid #cddde6;
	border-top: 1px solid #cddde6;
}
.seaout_ico {
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_8.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	vertical-align: middle;
	position: absolute;
	left: .5rem;
	top: .5rem;
}
.seaout_text {
  line-height: 2.3rem;
	position: absolute;
	left: 2.5rem;
}
.seaout_r {
	float: right;
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_r.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	margin-top: .5rem;
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
	margin-top: 2rem;
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
.foot_text {
	font-size: .6rem;
	font-weight: 600;
  text-align: center;
}
.foot_text1 {
  margin-top: 1rem;
}
.mine_footer p {
  text-align: center;
}
</style>
