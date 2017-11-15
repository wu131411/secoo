<template lang="html">
	<div class="minezh">
		<div class="minezh_top">
			<div class="back" @click='back()'>
				<span class="minezh_back"></span>
				<span class="minezh_backtext">返回</span>
			</div>
			<span class="minezh_zh">账号</span>
	  </div>
		<div class="minezh_user">
			<div class="minezh_user2">
				<span class="user2_text">账户名</span>
				<span class="user2_num"></span>
			</div>
		</div>
		<div class="minezh_money">
			<div class="minezh_money2">
				<span class="money2_text">库币</span>
				<span class="money2_num">0库币</span>
			</div>
		</div>
		<router-link to="/mine_recommend">
			<div class="minezh_man">
				<span class="man_text">推荐人</span>
				<span class="man_r"></span>
			</div>
		</router-link>
		<router-link to="/mine_address">
			<div class="minezh_address">
				<span class="address_text">收货地址</span>
				<span class="address_r"></span>
			</div>
		</router-link>

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
.minezh_top {
	width: 20rem;
	height: 2.5rem;
	background: white;
	position: relative;
	border-bottom: 2px solid #cddde6;
}
.minezh_back {
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
.minezh_backtext {
	position: absolute;
	top: .5rem;
	left: 1.7rem;
}
.minezh_zh {
	position: absolute;
	top: .5rem;
	left: 9rem;
}
.minezh_user {
	width: 20rem;
	height: 2.3rem;
	margin-top: 1rem;
	position: relative;
	background: white;
	border-top: 2px solid #cddde6;
}
.minezh_user2 {
	width: 19rem;
	height: 2.2rem;
	border-bottom: 2px solid #cddde6;
	margin-left: 1rem;
}
.user2_text {
	line-height: 2.3rem;
	font-size: .8rem;
}
.user2_num {
	float: right;
	line-height: 2.3rem;
	margin-right: .4rem;
}
.minezh_money {
	width: 20rem;
	height: 2.3rem;
	margin-top: 1px;
	position: relative;
	background: white;
}
.minezh_money2 {
	width: 19rem;
	height: 2.2rem;
	border-bottom: 2px solid #cddde6;
	margin-left: 1rem;
}
.money2_text {
	line-height: 2.3rem;
	font-size: .8rem;
}
.money2_num {
	float: right;
	line-height: 2.3rem;
	margin-right: 1rem;
	font-size: .8rem;
}
.minezh_man {
	width: 20rem;
	height: 2.5rem;
	margin-top: 1px;
	position: relative;
	background: white;
	border-bottom: 2px solid #cddde6;
}
.man_text {
	line-height: 2.5rem;
	font-size: .8rem;
	margin-left: 1rem;
}
.man_r {
	float: right;
	display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/mine_r.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	margin-top: .5rem;
}
.minezh_address {
	width: 20rem;
	height: 2.5rem;
	margin-top: 1px;
	position: relative;
	background: white;
	margin-top: 1rem;
	border-bottom: 2px solid #cddde6;
	border-top: 2px solid #cddde6;
}
.address_text {
	line-height: 2.5rem;
	font-size: .8rem;
	margin-left: 1rem;
}
.address_r {
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
}
.mine_footer p {
  text-align: center;
}
</style>
