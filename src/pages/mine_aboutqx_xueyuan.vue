<template lang="html">
  <div class="qx_xueyuan">
    <div class="qixia_top">
      <div class="back" @click='back()'>
        <span class="qixia_back"></span>
        <span class="qixia_backtext">返回</span>
      </div>
      <span class="qixia_qx">寺库商学院</span>
    </div>
    <div class="xueyuan_texts">
      <p class="xueyuan_content">师资力量雄厚，由国内奢侈品领域权威性大学教授、行业专家、奢侈品品牌高管等担任。课程涉及奢侈品文化管理、鉴定、营销等方面</p>
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
      this.$router.push({
				path:"/mine_aboutqx"
			})
    }
  }
}
</script>

<style lang="css">
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
.xueyuan_texts {
  width: 18rem;
  background: white;
  padding: 1rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #cddde6;
}
.xueyuan_content {
  width: 18rem;
  font-size: .6rem;
  color: #666;
  line-height: 1.2rem;
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
