<template lang="html">
  <div class="mine_jp">
		<div class="minejp_top">
			<div class="back" @click='back()'>
				<span class="minejp_back"></span>
				<span class="minejp_backtext">返回</span>
			</div>
			<span class="minejp_jp">我的拍卖</span>
	  </div>
		<div class="jp">
			没有记录
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
.minejp_top {
	width: 20rem;
	height: 2.5rem;
	background: white;
	position: relative;
	border-bottom: 2px solid #cddde6;
}
.minejp_back {
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
.minejp_backtext {
	position: absolute;
	top: .5rem;
	left: 1.7rem;
}
.minejp_jp {
	position: absolute;
	top: .5rem;
	left: 8rem;
}
.jp {
	text-align: center;
	font-size: .7rem;
	margin-top: 1rem;
}
</style>
