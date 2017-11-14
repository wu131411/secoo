<template lang="html">
  <div class="mine_yhq">
		<div class="mineyhq_top">
			<div class="back" @click='back()'>
				<span class="mineyhq_back"></span>
				<span class="mineyhq_backtext">返回</span>
			</div>
			<span class="mineyhq_yhq">优惠券列表</span>
	  </div>
		<div class="yhq_nav">
			<div class="yhq heigh" @click="chang('yhq')" :class="{'hover':isA,'haha':isB}">
				优惠券
			</div>
			<div class="hb heigh" @click="chang('hb')" :class="{'haha':isA,'hover':isB}">
				红包
			</div>

			<router-view></router-view>
		</div>
  </div>
</template>

<script>

export default {
  data() {
    return{
      isA:true,
      isB:false
    }
  },
	methods: {
    back() {
      this.$router.push({
				path:"/mine"
			})
    },
		chang(item) {
			this.$router.push({
				path:"/mine_yhq/" + item
			})
      if (this.isA) {
        this.isA = false
        this.isB = true
      }else if (this.isB) {
        this.isA = true
        this.isB = false
      }
		}

		}
	}
</script>

<style lang="css">
@import "../../static/css/reset.css";
html {
	background: #F9F9F9;
}
.mineyhq_top {
	width: 20rem;
	height: 2.5rem;
	background: white;
	position: relative;
	border-bottom: 2px solid #cddde6;
}
.mineyhq_back {
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
.mineyhq_backtext {
  font-size: 1rem;
	position: absolute;
	top: .5rem;
	left: 1.7rem;
}
.mineyhq_yhq {
	position: absolute;
	top: .5rem;
	left: 8rem;
}
.yhq_nav {
	width: 18rem;
	margin: 0 auto;
	height: 1.5rem;
	border: 1px solid #7148bf;

}
.yhq,.hb {
	width: 9rem;
	text-align: center;
	height: 1.5rem;
	line-height: 1.5rem;
	font-size: .7rem;
}
/*.yhq {
  background: red;
}*/
.heigh {
	float: left;
	display: inline-block;
	width: 9rem;
	height: 1.5rem;
}
.hover {
  background: red;
  color: white;
}
</style>
