<template lang="html">
  <div class="">
  	<div v-if="id=='my'">
  		<div class="myquan">
  			<div class="quanquan quanquan1">
  				<span>未使用</span>
  			</div>
				<div class="quanquan quanquan2">
					<span>使用中</span>
				</div>
				<div class="quanquan quanquan3">
					<span>已作废</span>
				</div>
  		</div>
			<div class="my_texts">
				<p>金额拍卖券付款时可抵扣货款，未使用或用券拍卖未成功，可按购买价退券。</p>
			</div>
  	</div>
		<div v-else>
			<div class="buy_pmqs"><p class="quansimg">拍卖券</p><p class="quansmoney">金额</p></div>
			<div class="pmqone">
				<span class="pmq_imgl"></span>
				<b><span class="pmqonemoney">100元</span></b>
				<span class="pmq_moneyr">￥90</span>
			</div>
			<div class="pmqtwo">
				<span class="pmq_imgl"></span>
				<b><span class="pmqtwomoney">500元</span></b>
				<span class="pmq_moneyr">￥460</span>
			</div>
			<div class="pmqthree">
				<span class="pmq_imgl"></span>
				<b><span class="pmqthreemoney">1000元</span></b>
				<span class="pmq_moneyr">￥950</span>
			</div>
			<div class="pmqfour">
				<span class="pmq_imgl"></span>
				<b><span class="pmqfourmoney">5000元</span></b>
				<span class="pmq_moneyr">￥4900</span>
			</div>
			<p class="pmq_tui">金额拍卖券在付款时可抵扣商品货款。金额拍卖券未使用或用券拍卖未成功，可按购买价退券。退券需在PC端操作。</p>
		</div>
  </div>
</template>

<script>
export default {
	data(){
        return{
          id: 'my'
        }
    },
    methods: {
        back(){
          history.back()
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
.myquan {
	width: 19.9rem;
	height: 2rem;
	border: 1px solid #cddde6;
	border-top: 1px solid rgba(0,0,0,0);
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: white;
}
.quanquan {
	color: #ababab;
	width: 6rem;
	height: 1rem;
	border-left: 1px solid #cddde6;
	font-size: .7rem;
	text-align: center;
}
.quanquan:first-child {
	border: none;
}
.my_texts {
	width: 19rem;
	height: 45rem;
	background: white;
}
.my_texts p {
	width: 19rem;
	padding: .5rem;
	font-size: .7rem;
	color: #ababab;
}
.quanquan1:hover,.quanquan2:hover,.quanquan3:hover {
	color: #000;
}
.buy_pmqs {
	width: 19rem;
	height: 1rem;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-top: 1rem;
}
.quansimg {
	display: inline-block;
	width: 9.5rem;
	height: 1rem;
	font-size: .7rem;
	text-align: right;
	padding-right: 3.5rem;
}
.quansmoney {
	display: inline-block;
	width: 9.5rem;
	height: 1rem;
	font-size: .7rem;
	text-align: right;
}
.pmqone {
	margin-top: 1rem;
}
.pmq_imgl {
	display: inline-block;
	width: .9rem;
	height: .9rem;
	background: url('../../static/images/mine_imgs/pay-unselect.png') no-repeat;
	background-size: .9rem;
	margin-left: .7rem;
}
.pmqone .pmqonemoney {
	display: inline-block;
	width: 8rem;
	height: 3rem;
	background: url('../../static/images/mine_imgs/100bg.png');
	background-size: 9rem 3rem;
	font-size: 1.5rem;
	color: white;
	line-height: 3rem;
	padding-left: 1rem;
	margin-left: .7rem;
}
.pmq_moneyr {
	display: inline-block;
	width: 7.5rem;
	height: 1rem;
	color: red;
	text-align: right;
	line-height: 1rem;
}
.pmqtwo {
	margin-top: 1rem;
}
.pmqtwo .pmqtwomoney {
	display: inline-block;
	width: 8rem;
	height: 3rem;
	background: url('../../static/images/mine_imgs/500bg.png');
	background-size: 9rem 3rem;
	font-size: 1.5rem;
	color: white;
	line-height: 3rem;
	padding-left: 1rem;
	margin-left: .7rem;
}
.pmqthree {
	margin-top: 1rem;
}
.pmqthree .pmqthreemoney {
	display: inline-block;
	width: 8rem;
	height: 3rem;
	background: url('../../static/images/mine_imgs/1000bg.png');
	background-size: 9rem 3rem;
	font-size: 1.5rem;
	color: white;
	line-height: 3rem;
	padding-left: 1rem;
	margin-left: .7rem;
}
.pmqfour {
	margin-top: 1rem;
}
.pmqfour .pmqfourmoney {
	display: inline-block;
	width: 8rem;
	height: 3rem;
	background: url('../../static/images/mine_imgs/5000bg.png');
	background-size: 9rem 3rem;
	font-size: 1.5rem;
	color: white;
	line-height: 3rem;
	padding-left: 1rem;
	margin-left: .7rem;
}
.pmq_tui {
	width: 19rem;
	height: 1rem;
	margin: 1rem auto;
	font-size: .7rem;
	color: #ababab;
}
</style>
