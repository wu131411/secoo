<template lang="html">
	<div class="qiyuan">
		<div class="qiyuan_top">
      <div class="back" @click='back()'>
        <span class="qiyuan_back"></span>
        <span class="qiyuan_backtext">返回</span>
      </div>
      <span class="qiyuan_gy">寺库起源</span>
    </div>
		<div class="qiyuan_text">
			<p class="text_title">寺库起源</p>
			<p class="indent">礼宾之寺，天府之库，时尚寺库。</p>
			<p class="text_title">关于我们</p>
			<p class="indent">寺库致力打造全球最大奢侈品交流平台。总部位于中国北京，高端库会所设于北京、上海、成都、香港、东京等繁华之都，并筹建全球最大奢侈品养护工厂。</p>
			<p class="indent">寺库业务涉及：奢侈品鉴定、销售、养护及线下交流会所。</p>
			<p class="text_title">寺库文化</p>
			<p>寺库本业——做109年以上的企业；</p>
			<p>品牌标准——正人、正品、正思；</p>
			<p>企业精神——诚信为先，让资源价值得到最大化利用；</p>
		</div>
		<div class="aboutqy_line">

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
.qiyuan_top {
	width: 20rem;
	height: 2.5rem;
	background: white;
	position: relative;
	border-bottom: 2px solid #cddde6;
	font-size: .9rem;
}
.qiyuan_back {
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
.qiyuan_backtext {
	position: absolute;
	top: .5rem;
	left: 1.7rem;
}
.qiyuan_gy {
	position: absolute;
	top: .5rem;
	left: 8rem;
}
.qiyuan_text {
	font-size: .7rem;
	padding: 0 1rem;
	background: white;
	overflow: hidden;
	padding-bottom: 1.5rem;
	border-bottom: 2px solid #cddde6;
}
.qiyuan_text p {
	line-height: 1.32rem;
	color: #555;
}
.text_title {
	font-size: .8rem;
	font-weight: bold;
	margin-top: 1rem;
}
.indent {
	text-indent: 1.4rem;
}
.aboutqy_line {
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
