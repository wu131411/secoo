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

<style lang="css" scoped>
html {
	background: #efefef;
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
}
.tuijian_haoma {
	width: 9rem;
	height: 2.3rem;
	border: none;
	background: #fff;
	margin-left: 3rem;
}
</style>
