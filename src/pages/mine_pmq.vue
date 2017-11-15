<template lang="html">
  <div class="pmq">
		<div class="pmq_top">
      <div class="back" @click='back()'>
        <span class="pmq_back"></span>
  			<span class="pmq_backtext">返回</span>
      </div>
			<span class="pmq_pmq">拍卖券</span>
	  </div>
		<div class="pmq_nav">
			<div class="mypmq pmqs" @click="change('my')" :class="{'hovers':isA,'haha':isB}">
				我的拍卖券
			</div>
			<div class="buypmq pmqs" @click="changes('buy')" :class="{'haha':isA,'hovers':isB}">
				购买拍卖券
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
		change(item) {
			this.$router.push({
				path:"/mine_pmq/" + item
			})
      if (this.isA) {
        this.isA = true
        this.isB = false
      }else if (this.isB) {
        this.isA = true
        this.isB = false
      }
		},
    changes(item) {
			this.$router.push({
				path:"/mine_pmq/" + item
			})
      if (this.isA) {
        this.isA = false
        this.isB = true
      }
		}


	}
}
</script>

<style lang="css">
.pmq_top {
	width: 20rem;
	height: 2.3rem;
	background: white;
	position: relative;
}
.pmq_back {
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
.pmq_backtext {
  font-size: .9rem;
	position: absolute;
	left: 1.7rem;
  top: .6rem;
}
.pmq_pmq {
	font-size: .9rem;
	position: absolute;
	top: .5rem;
	left: 8rem;
}
.pmq_nav {
	width: 20rem;
	margin: 0 auto;
	height: 2rem;
	padding-top: 1px;
}
.mypmq {
	border-right: 1px solid #cddde6;
}
.pmqs {
	width: 9.9rem;
	height: 1.9rem;
	float: left;
	display: inline-block;
	width: 9.9rem;
	height: 1.9rem;
	text-align: center;
	line-height: 2rem;
	font-size: .7rem;
}
.hovers {
	background-color: white;
  border-top: solid 1px #d5d5d5;
  border-bottom: none;
	width: 9.9rem;
	height: 1.9rem;
}
.haha {
	width: 9.9rem;
	height: 1.9rem;
  border-bottom: solid 1px #d5d5d5;
  background-color: #f9f9f9;
  border-top: solid 1px transparent;
  color: #737373;
}
</style>
