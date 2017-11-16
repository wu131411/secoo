<template lang="html">
  <div class="dizhi">
    <div class="dizhi_top">
      <div class="back" @click='back()'>
        <span class="dizhi_back"></span>
        <span class="dizhi_backtext">返回</span>
      </div>
      <span class="dizhi_dz">地址本</span>
      <span class="dizhi_r"></span>
    </div>
    <div class="dizhi_main">
      <span class="add_info">你还没有地址信息</span>
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
				path:"/mine_zh"
			})
	  }
	}
}
</script>

<style lang="css" scoped>
.dizhi {
  background: #f6f6f6;
}
.dizhi_top {
	width: 20rem;
	height: 2.5rem;
	background: white;
	position: relative;
	font-size: .9rem;
}
.dizhi_back {
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
.dizhi_backtext {
	position: absolute;
	top: .6rem;
	left: 1.7rem;
}
.dizhi_dz {
	position: absolute;
	top: .65rem;
	left: 8rem;
}
.dizhi_r {
  display: inline-block;
	overflow: hidden;
	width: 1.5rem;
	height: 1.5rem;
	background: url(../../static/images/mine_imgs/add.png) no-repeat;
	background-size: 1.5rem 1.5rem;
	position: absolute;
	top: .5rem;
	right: .5rem;
}
.dizhi_main {
  width: 20rem;
  height: 7rem;
  background: #f6f6f6;
  text-align: center;
  line-height: 5rem;
}
.add_info {
  color: #666;
  font-size: .9rem;
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
