<template lang="html">
	<div class="">
		<div v-if="id=='yhq'">
			<div class="yibai">
				<p class="yhq_money">100元</p>
				<p class="yhq_text">满499可用，有效期：2017-11-9至2017-12-9</p>
			</div>
			<div class="yibaiwu">
				<p class="yhq_money">150元</p>
				<p class="yhq_text">满999可用，有效期：2017-11-9至2017-12-9</p>
			</div>
			<div class="erbai">
				<p class="yhq_money">200元</p>
				<p class="yhq_text">满1999可用，有效期：2017-11-9至2017-12-9</p>
			</div>
			<div class="wubaiwu">
				<p class="yhq_money">550元</p>
				<p class="yhq_text">满4999可用，有效期：2017-11-9至2017-12-9</p>
			</div>
			<div class="haoma">
				<input type="text" name="" value="" placeholder="请输入优惠券号码" class="haoma_input">
				<button type="button" name="button" id="haoma_btn">添加</button>
			</div>
			<div class="mine_footer">
	      <router-link to="/home">
	        <div class="footer_home foot">
	  				<span class="home_ico"></span>
	  				<p>首页</p>
	  			</div>
	      </router-link>
				<router-link to="/list">
	        <div class="footer_pai foot">
	  				<span class="pai_ico"></span>
	  				<p>品牌</p>
	  			</div>
				</router-link>
				<router-link to="/bag">
	        <div class="footer_bag foot">
	  				<span class="bag_ico"></span>
	  				<p>购物袋</p>
	  			</div>
				</router-link>
				<router-link to="/mine">
	        <div class="footer_mine foot">
	  				<span class="mine_ico"></span>
	  				<p>我的寺库</p>
	  			</div>
				</router-link>
			</div>
		</div>
		<div v-else>
			<div class="hbhaoma">
				<input type="text" name="" value="" placeholder="请输入红包号码" class="hbhaoma_input">
				<button type="button" name="button" id="hbhaoma_btn">添加</button>
			</div>
			<div class="youhb">
				你还没有红包
			</div>
			<div class="mine_footer">
	      <router-link to="/home">
	        <div class="footer_home foot">
	  				<span class="home_ico"></span>
	  				<p>首页</p>
	  			</div>
	      </router-link>
				<router-link to="/list">
	        <div class="footer_pai foot">
	  				<span class="pai_ico"></span>
	  				<p>品牌</p>
	  			</div>
				</router-link>
				<router-link to="/bag">
	        <div class="footer_bag foot">
	  				<span class="bag_ico"></span>
	  				<p>购物袋</p>
	  			</div>
				</router-link>
				<router-link to="/mine">
	        <div class="footer_mine foot">
	  				<span class="mine_ico"></span>
	  				<p>我的寺库</p>
	  			</div>
				</router-link>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	data(){
        return{
          id: 'yhq'
        }
    },
    methods: {
        back(){
					this.$router.push({
						path:"/mine_yhq"
					})
        }
    },
    watch: {
        '$route'(newValue, oldValue){
            this.id = newValue.params.id
            console.log(this.id);
            console.log(newValue);
            console.log(oldValue);
        }
    }
}
</script>

<style lang="css">
@import "../../static/css/reset.css";
.yibai {
	width: 19rem;
	height: 5rem;
	background: white;
	margin-top: 2rem;
	border-bottom: 1px solid #cddde6;
	border-top: 1px solid #cddde6;
	margin-left: -1rem;
	padding-left: 1rem;
}
.yibaiwu,.erbai,.wubaiwu {
	width: 19rem;
	height: 5rem;
	background: white;
	margin-top: .5rem;
	border-bottom: 1px solid #cddde6;
	border-top: 1px solid #cddde6;
	margin-left: -1rem;
	padding-left: 1rem;
}
.yhq_money {
	font-size: 1.2rem;
	color: red;
	margin-top: 1rem;
}
.yhq_text {
	font-size: .7rem;
	color: gray;
	margin-top: .5rem;
}
.haoma {
	width: 19rem;
	height: 2rem;
	background: white;
	margin-top: .5rem;
	border-bottom: 1px solid #cddde6;
	border-top: 1px solid #cddde6;
	margin-left: -1rem;
	padding-left: 1rem;
	line-height: 2rem;

}
.haoma_input {
	width: 14rem;
	height: 1.8rem;
	border: none;
	outline: none;
	font-size: .8rem;
	line-height: 2rem;
}
#haoma_btn {
	width: 3rem;
	height: 1.6rem;
	background: white;
	border-radius: .3rem;
	border: none;
	border: 1px solid #99aa96;
	font-size: .8rem;
	color: gray;
	margin-top: .2rem;
	line-height: 1.6rem;
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

.hbhaoma {
	width: 19rem;
	height: 2rem;
	background: white;
	margin-top: 2rem;
	border-bottom: 1px solid #cddde6;
	border-top: 1px solid #cddde6;
	margin-left: -1rem;
	padding-left: 1rem;
	line-height: 2rem;
	position: relative;
}
.hbhaoma_input {
	width: 14rem;
	height: 1.8rem;
	border: none;
	outline: none;
	font-size: .8rem;
	line-height: 2rem;
	position: absolute;
}
#hbhaoma_btn {
	width: 3rem;
	height: 1.6rem;
	background: white;
	border-radius: .3rem;
	border: none;
	border: 1px solid #99aa96;
	font-size: .8rem;
	color: gray;
	position: absolute;
	top: .1rem;
	right: 1rem;
	line-height: 1.6rem;
}
.youhb {
	width: 18rem;
	height: 4rem;
	background: white;
	text-align: center;
	line-height: 5rem;
	font-size: .8rem;
	color: gray;
	margin: 0 auto;
	margin-top: 1rem;
	border: 1px solid #cddde6;
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
