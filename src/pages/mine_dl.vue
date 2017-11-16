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
					<span class="dl_placeholders" :class="{'dl_placeholders1':isdl1}">手机号/用户名/邮箱</span>
					<input type="text" name="user" value="" class="dl_biaodans" v-model="userVal"  @focus="focus1()" @blur="blur1()">
				</div>
				<div class="dl_pass">
					<span class="dl_placeholders" :class="{'dl_placeholders2':isdl2}">密码</span>
					<input type="password" name="password" value="" class="dl_biaodans" v-model="passVal"  @focus="focus2()" @blur="blur2()">
					<!-- <img src="../../static/images/mine_imgs/dis_eye.png" alt="" class=""> -->
					<span :class="{'pass_show':isA,'pass_dis':isB}" @click="disorshow($event)"></span>
				</div>
				<div class="dl_yzm">
					<span class="dl_placeholders" :class="{'dl_placeholders3':isdl3}">图形验证码</span>
					<input type="text" name="" value="" class="dl_biaodans" v-model="yzmVal" @focus="focus3()" @blur="blur3()">
					<div class="dl_yzmimg" @click="changeyzm()">
						<span>{{ yzm }}</span>
					</div>
				</div>
				<button type="button" name="button" class="minedl_btn" @click="denglu()">登录</button>
				<div class="dl_foot">
					<span class="dlqq_icon"></span><span class="dlqq_text">QQ登录</span>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import setCookie from "../../static/js/setCookie"
import getCookie from "../../static/js/getCookie"
import delCookie from "../../static/js/delCookie"
export default {
	data() {
		return {
			userVal : '',
			passVal : '',
			yzm : '',
			yzmVal : '',
			isdl3 : false,
			isdl2 : false,
			isdl1 : false,
			isA : false,
			isB : true
		}

	},
	methods: {
    back() {
			this.$router.push({
				path:"/home"
			})
    },
		denglu(){
			if (this.userVal && this.passVal && this.yzmVal) {
				if (this.passVal.length < 6) {
					alert('密码不能小于六位字符')
				} else if (this.yzm.toUpperCase() == this.yzmVal.toUpperCase()) {
						setCookie('userVal',this.userVal,3);
						setCookie('passVal',this.passVal,3);
						console.log(getCookie('userVal'));
						console.log(getCookie('passVal'));
						this.$router.push({
	    				path:"/mine"
	    			})
					}else {
						alert('验证码输入错误')
					}
			}else {
				alert('用户名或密码不能为空')
			}
		},
		changeyzm() {
			var str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789';
			var code = '';
			for(var i = 0;i < 4;i++){
				var rand = parseInt(Math.random() * str.length)
				code += str[rand];
			}
			this.yzm = code
		},
		focus3() {
			this.isdl3 = true
		},
		blur3() {
			if (this.yzmVal) {
				this.isdl3 = true
			}else {
				this.isdl3 = false
			}
		},
		focus2() {
			this.isdl2 = true
		},
		blur2() {
			if (this.passVal) {
				this.isdl2 = true
			}else {
				this.isdl2 = false
			}
		},
		focus1() {
			this.isdl1 = true
		},
		blur1() {
			if (this.userVal) {
				this.isdl1 = true
			}else {
				this.isdl1 = false
			}
		},
		disorshow(ev) {
			if (this.isB) {
				ev.path[1].children[1].setAttribute('type','text')
				this.isA = true
				this.isB = false
			}else if (this.isA) {
				ev.path[1].children[1].setAttribute('type','password')
				this.isA = false
				this.isB = true
			}
		}
  },
	created() {
		var str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789';
		var code = '';
		for(var i = 0;i < 4;i++){
			var rand = parseInt(Math.random() * str.length)
			code += str[rand];
		}
		this.yzm = code
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
.dl_placeholders1 {
	font-size: .7rem !important;
	/*transform:scale(1,.5);*/
	transform: translate(0rem,-1.3rem);
	transition: all .5s;
}
.dl_placeholders2 {
	font-size: .7rem !important;
	/*transform:scale(1,.5);*/
	transform: translate(0rem,-1.3rem);
	transition: all .5s;
}
.dl_placeholders3 {
	font-size: .7rem !important;
	/*transform:scale(1,.5);*/
	transform: translate(0rem,-1.3rem);
	transition: all .5s;
}
.dl_placeholders {
	font-size: 1rem;
	color: #bbb;
	position: absolute;
	top: .9rem;
	/*left: 1rem;*/
}
.dl_biaodans {
	margin-top: .5rem;
	width: 15.5rem;
	height: 2rem;
	border: none;
	outline: none;
	font-size: 1rem;
}
.pass_show {
	display: inline-block;
	width: 1rem;
	height: 1rem;
	background: url(../../static/images/mine_imgs/show_eye.png);
	background-size: 1rem 1rem;
}
.pass_dis {
	display: inline-block;
	width: 1rem;
	height: 1rem;
	background: url(../../static/images/mine_imgs/dis_eye.png);
	background-size: 1rem 1rem;
}
.dl_yzmimg {
	width: 4rem;
	height: 1.5rem;
	border: 1px solid #000;
	font-weight: bold;
	text-align: center;
	line-height: 1.5rem;
	background: #ccc;
	letter-spacing: .1rem;
	/*color: white;*/

	position: absolute;
	right: 1rem;
	top: .8rem;

}
.minedl_btn {
	width: 18rem;
	height: 2.5rem;
	margin: 0 1rem;
	color: white;
	background: black;
	border: none;
	outline: none;
	position: fixed;
	top: 21rem;
	font-size: .9rem;
}
.dl_foot {
	width: 20rem;
	height: 6rem;
	text-align: center;
	line-height: 6rem;
	position: fixed;
	top: 23rem;
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
