<template lang="html">
  <div class="tuijian">
		<div class="qixia_top">
      <div class="back" @click='back()'>
        <span class="qixia_back"></span>
        <span class="qixia_backtext">返回</span>
      </div>
      <span class="qixia_qx">推荐人</span>
    </div>
		<div class="tuijian_biaodan">
			<span class="haoma_text">推荐人号码：</span>
			<input type="text" name="" value="" placeholder='请填写推荐人手机号' class="tuijian_haoma"><br>
			<button type="button" name="button" class="tuijian_tijiao">提交</button>
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
				path:"/mine_zh"
			})
    }
  }
}
</script>

<style lang="css">
.tuijian {
	background: #e6f6f6;
  height: 36rem;
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
.tuijian_biaodan {
	margin-top: 1rem;
	padding: 0 .6rem;
}
.haoma_text {
	font-size: .86rem;
  text-align: center;
}
.tuijian_haoma {
	width: 10rem;
	height: 2.3rem;
	border: none;
  font-size: .9rem;
	background: #fff;
	margin-left: 3rem;
  text-align: center;
}
.tuijian_tijiao {
  width: 18rem;
  height: 2.5rem;
  border: none;
  outline: none;
  background: #7148bf;
  margin-left: .4rem;
  margin-top: 1.3rem;
  color: #fff;
  font-size: 1rem;
}
.mine_footer {
	display: flex;
	justify-content: space-around;
	align-items: center;
  background: #fcfcfc;
  padding-bottom: 1rem;
  margin-top: 1rem;
}
.foot {
	width: 4.5rem;
	height: 4.5rem;
	border: 1px solid #afe;
	font-size: .7rem;
	color: gray;
	margin-top: .5rem;
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
}
.mine_footer p {
  text-align: center;
}
</style>
