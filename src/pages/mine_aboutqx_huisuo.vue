<template lang="html">
  <div class="qx_huisuo">
    <div class="qixia_top">
      <div class="back" @click='back()'>
        <span class="qixia_back"></span>
        <span class="qixia_backtext">返回</span>
      </div>
      <span class="qixia_qx">库会所</span>
    </div>
    <div class="huisuo_texts">
      <p class="huisuo_content indent">设立在全国一线城市顶级商业圈，开阔舒适的购物环境，别致的VIP包间，品鉴式服务，让您体验高端会所式服务模式</p>
      <p class="huisuo_titles">1、SECOO（寺库）金宝街奢侈品库会所</p>
      <p class="huisuo_content">地址：北京市东城区金宝街18-8号（金宝街与朝阳门南小街十字路口东南，香港马会东200米）</p>
      <p class="huisuo_content">电话：400-658-6659</p>
      <p class="huisuo_titles">2、SECOO（寺库）上海奢侈品库会所</p>
      <p class="huisuo_content">地址：上海市静安区南京西路758号博爱大厦三楼</p>
      <p class="huisuo_content">电话：400-658-6659</p>
      <p class="huisuo_titles">3、SECOO（寺库）成都奢侈品库会所</p>
      <p class="huisuo_content">地址：成都市人民南路111号航天科技大厦3层</p>
      <p class="huisuo_content">电话：400-658-6659</p>
      <p class="huisuo_content">028-62100285</p>
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
				path:"/mine_aboutqx"
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
.huisuo_texts {
  width: 18rem;
  background: white;
  padding: 1rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #cddde6;
}
.huisuo_content {
  width: 18rem;
  font-size: .6rem;
  color: #666;
  line-height: 1.2rem;
}
.indent {
  text-indent: 2rem;
}
.huisuo_titles {
  font-size: .7rem;
  color: #000;
  margin-top: 1rem;
  margin-bottom: .5rem;
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
  margin-bottom: 2rem;
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
