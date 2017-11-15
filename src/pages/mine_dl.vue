<template lang="html">
	<div class="denglu">
		<div class="denglu_top">
      <div class="back" @click='back()'>
        <span class="denglu_back"></span>
      </div>
      <span class="denglu_dl">登录</span>
			<span class="dl_r">快速注册</span>
    </div>
		<div class="dl_mian">
			<div class="dl_logos">
				<img src="../../static/images/mine_imgs/login_uri.png" alt="" class="dl_logo">
			</div>
			<div class="dl_biaodan">
				<div class="dl_user">
					<span class="dl_placeholders">手机号/用户名/邮箱</span>
					<input type="text" name="user" value="" class="dl_biaodans">
				</div>
				<div class="dl_pass">
					<span class="dl_placeholders">密码</span>
					<input type="text" name="password" value="" class="dl_biaodans">
				</div>
				<div class="dl_yzm">
					<span class="dl_placeholders">图形验证码</span>
					<input type="text" name="" value="" class="dl_biaodans">
				</div>
				<button type="button" name="button" class="dl_btn">登录</button>
				<div class="dl_foot">
					<span class="dlqq_icon"></span><span class="dlqq_text">QQ登录</span>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	methods: {
    back() {
			this.$router.push({
				path:"/home"
			})
    }
  }
}
</script>

<style lang="css" scoped>
html {
	background: #fff;
}
.denglu_top {
	width: 20rem;
	height: 2.2rem;
	background: white;
	position: relative;
	font-size: .9rem;
	border-bottom: 2px solid #cddde6;
}
.denglu_back {
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
.denglu_dl {
	position: absolute;
	top: .5rem;
	left: 8.5rem;
}
.dl_r {
	float: right;
	font-size: .65rem;
	color: #333;
	line-height: 2.2rem;
	margin-right: 1rem;
}
.dl_main {
	background: white;
}
.dl_logos {
	width: 20rem;
	height: 6rem;
	background: white;
}
.dl_logo {
	width: 3rem;
	height: 3rem;
	margin-left: 8.5rem;
	margin-top: 1rem;
}
.dl_user,.dl_pass,.dl_yzm {
	width: 18rem;
	height: 2.5rem;
	border-bottom: 1px solid #cddde6;
	margin: 1rem;
	position: relative;
}
.dl_placeholders {
	font-size: .8rem;
	color: #caaae1;
	position: absolute;
	top: .9rem;
	left: 1rem;
}
.dl_biaodans {
	margin-top: .5rem;
	width: 16rem;
	height: 2rem;
	border: none;
	/*outline: none;*/
	font-size: 1rem;
}
.dl_btn {
	width: 18rem;
	height: 2.5rem;
	margin: 0 1rem;
	color: white;
	background: black;
	border: none;
	outline: none;
}
.dl_foot {
	width: 20rem;
	height: 6rem;
	text-align: center;
	line-height: 6rem;
}
.dlqq_icon {
	display: inline-block;
	width: 1.2rem;
	height: 1.2rem;
	background: url(../../static/images/mine_imgs/qq_icon.png) no-repeat;
	background-size: 1.2rem 1.2rem;
	vertical-align: middle;
}
.dlqq_text {
	font-size: .8rem;
	margin-left: .5rem;
}
</style>
