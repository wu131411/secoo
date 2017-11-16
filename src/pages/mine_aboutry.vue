<template lang="html">
  <div class="rongyu">
		<div class="rongyu_top">
      <div class="back" @click='back()'>
        <span class="rongyu_back"></span>
        <span class="rongyu_backtext">返回</span>
      </div>
      <span class="rongyu_ry">集团荣誉</span>
    </div>
		<div class="rongyu_text">
			<p>⊙寺库中国荣膺2012（第十二届）中国企业“未来之星”！（2012中国企业家杂志社评选</p>
			<p>⊙全国寄卖工作委员会会长单位《全国寄卖行业管理规范（审议草案）》起草单位</p>
			<p>⊙对外经贸大学奢侈品研究中心战略合作伙伴</p>
			<p>⊙2012年，与新浪奢品达成战略合作，成为新浪奢侈品指定奢侈品售后服务中心</p>
			<p>⊙2012年，成为中国315电子商务诚信平台官方指定唯一奢侈品鉴定评估中心</p>
			<p>⊙2011年，YOKA奢侈品商城官方奢侈品鉴定指定机构</p>
			<p>⊙2011年，与中国青少年发展基金会管理的大型公益慈善活动"爱心衣橱"结成战略合作伙伴，并与新浪、凡客、远东一起被选为四大荣誉理事单位。携百位明星参与，倾注对弱势群体的仁爱之心。</p>
			<p>⊙2011年时尚大典主赞助商、星光大典特别赞助商、凤凰网2011年会高级赞助商</p>
			<p>⊙搜房网高端市场活动战略合作伙伴</p>
			<p>⊙中国互联网络信息中心可信网站示范单位</p>
			<p>⊙"最受风险投资青睐的创业项目"称号（2010年国际人力资源协会等联合评选）</p>
			<p>⊙中国最具成长魅力企业30强（2009清华大学媒介调查实验室）</p>
			<p>⊙"中国企业未来之星"百强（2010中国企业家杂志社）</p>
			<p>⊙最受关注创新商业模式电商（《中国经营报》2011年中小企业高峰论坛）</p>
			<p>⊙保利拍卖奢侈品专场主要委托人</p>
			<p>⊙中国互联网络信息中心可信网站示范单位</p>
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
.rongyu_top {
	width: 20rem;
	height: 2.5rem;
	background: white;
	position: relative;
	font-size: .9rem;
}
.rongyu_back {
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
.rongyu_backtext {
	position: absolute;
	top: .6rem;
	left: 1.7rem;
}
.rongyu_ry {
	position: absolute;
	top: .5rem;
	left: 8rem;
}
.rongyu_text {
	background: #fff;
	font-size: .6rem;
	padding: 1rem .8rem;
	border-bottom: 2px solid #cddde6;
}
.rongyu_text p {
	line-height: 1.25rem;
	color: #666;
}
.mine_footer {
	display: flex;
	justify-content: space-around;
	align-items: center;
  margin-bottom: 2rem;
}
.foot {
	width: 4.5rem;
	height: 4.5rem;
	border: 1px solid #afe;
	font-size: .7rem;
	color: gray;
	margin-top: 2rem;
	background: #fff;
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
</style>
