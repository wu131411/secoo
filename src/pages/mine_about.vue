<template lang="html">
  <div class="about">
    <div class="minegy_top">
      <div class="back" @click='back()'>
        <span class="minegy_back"></span>
        <span class="minegy_backtext">返回</span>
      </div>
      <span class="minegy_gy">关于寺库</span>
    </div>
    <router-link to="/mine_aboutqy">
      <div class="gy_qx">
        <div class="gy_qx2">
          <span>寺库起源</span>
          <span class="gy_r"></span>
        </div>
      </div>
    </router-link>
    <router-link to="/mine_aboutqx">
      <div class="gy_qx">
        <div class="gy_qx2">
          <span>旗下品牌</span>
          <span class="gy_r"></span>
        </div>
      </div>
    </router-link>
    <router-link to="/mine_aboutry">
      <div class="gy_ry">
        <span class="gy_text">集团荣誉</span>
        <span class="gy_r"></span>
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
				path:"/mine"
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
.about{
  font-size: .8rem;
  font-family: STHeiti,Helvetica Neue;
}
.minegy_top {
	width: 20rem;
	height: 2.5rem;
	background: white;
	position: relative;
	border-bottom: 2px solid #cddde6;
  font-size: .9rem;
}
.minegy_back {
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
.minegy_backtext {
	position: absolute;
	top: .6rem;
	left: 1.7rem;
}
.minegy_gy {
	position: absolute;
	top: .5rem;
	left: 8rem;
}
.gy_qy {
  width: 20rem;
	height: 2.3rem;
	position: relative;
	background: white;
  margin-top: 2px;
}
.gy_qy2 {
  width: 19rem;
  height: 2.3rem;
  margin-left: 1rem;
  border-bottom: 2px solid #cddde6;
  line-height: 2.3rem;
}
.gy_qx {
  width: 20rem;
	height: 2.3rem;
	position: relative;
	background: white;
}
.gy_qx2 {
  width: 19rem;
  height: 2.3rem;
  margin-left: 1rem;
  border-bottom: 2px solid #cddde6;
  line-height: 2.3rem;
  margin-top: 2px;
}
.gy_ry {
  width: 20rem;
  height: 2.3rem;
  margin-top: 2px;
  position: relative;
  background: white;
  line-height: 2.3rem;
  border-bottom: 2px solid #cddde6;
}
.gy_text {
  margin-left: 1rem;
}
.gy_r {
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
