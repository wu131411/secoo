<template lang="html">
  <div class="qixia">
		<div class="qixia_top">
      <div class="back" @click='back()'>
        <span class="qixia_back"></span>
        <span class="qixia_backtext">返回</span>
      </div>
      <span class="qixia_qx">旗下品牌</span>
    </div>
		<div class="wangshang">
			<div class="wangshang2">
				<span>网上商城</span>
				<span class="qx_r"></span>
			</div>
		</div>
    <router-link to="/mine_aboutqx_huisuo">
      <div class="huisuo">
  			<div class="huisuo2">
  				<span>库会所</span>
  				<span class="qx_r"></span>
  			</div>
  		</div>
    </router-link>
		<router-link to="/mine_aboutqx_jianding">
      <div class="jianding">
  			<div class="jianding2">
  				<span>鉴定中心</span>
  				<span class="qx_r"></span>
  			</div>
  		</div>
		</router-link>
		<router-link to="/mine_aboutqx_yanghu">
      <div class="yanghu">
  			<div class="yanghu2">
  				<span>养护中心</span>
  				<span class="qx_r"></span>
  			</div>
  		</div>
		</router-link>
		<router-link to="/mine_aboutqx_xueyuan">
      <div class="xueyuan">
  			<div class="xueyuan2">
  				<span>寺库商学院</span>
  				<span class="qx_r"></span>
  			</div>
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
      this.$router.push({
				path:"/mine_about"
			})
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
	top: .6rem;
	left: 1.7rem;
}
.qixia_qx {
	position: absolute;
	top: .5rem;
	left: 8rem;
}
.wangshang {
	width: 20rem;
	height: 2.3rem;
	background: white;
}
.wangshang2 {
	width: 19rem;
	height: 2.3rem;
	border-bottom: 2px solid #cddde6;
	margin-left: 1rem;
	line-height: 2.3rem;
	font-size: .8rem;
}
.huisuo {
	width: 20rem;
	height: 2.3rem;
	background: white;
	margin-top: 2px;
}
.huisuo2 {
	width: 19rem;
	height: 2.3rem;
	border-bottom: 2px solid #cddde6;
	margin-left: 1rem;
	line-height: 2.3rem;
	font-size: .8rem;
}
.jianding {
	width: 20rem;
	height: 2.3rem;
	background: white;
	margin-top: 2px;

}
.jianding2 {
	width: 19rem;
	height: 2.3rem;
	border-bottom: 2px solid #cddde6;
	margin-left: 1rem;
	line-height: 2.3rem;
	font-size: .8rem;
}
.yanghu {
	width: 20rem;
	height: 2.3rem;
	background: white;
	margin-top: 2px;

}
.yanghu2 {
	width: 19rem;
	height: 2.3rem;
	border-bottom: 2px solid #cddde6;
	margin-left: 1rem;
	line-height: 2.3rem;
	font-size: .8rem;
}
.xueyuan {
	width: 20rem;
	height: 2.3rem;
	background: white;
	margin-top: 2px;
	border-bottom: 2px solid #cddde6;
}
.xueyuan2 {
	width: 19rem;
	height: 2.3rem;
	margin-left: 1rem;
	line-height: 2.3rem;
	font-size: .8rem;
}
.qx_r {
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
	background: white;
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
