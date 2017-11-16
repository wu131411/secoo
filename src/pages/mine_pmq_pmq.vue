<template lang="html">
  <div class="mypmq_pmq">
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
		<div v-else style="height:30rem">
			<div class="buy_pmqs"><p class="quansimg">拍卖券</p><p class="quansmoney">金额</p></div>
			<div class="pmqone" @click="selectOne($event)" :class="{'unselect':isA,'select':isB}">
				<span class="pmq_imgl"></span>
				<b><span class="pmqonemoney">100元</span></b>
				<span class="pmq_moneyr">￥90</span>
			</div>
			<div class="pmqtwo" @click="selectTwo()" :class="{'unselect':isA,'select':isC}">
				<span class="pmq_imgl"></span>
				<b><span class="pmqtwomoney">500元</span></b>
				<span class="pmq_moneyr">￥460</span>
			</div>
			<div class="pmqthree" @click="selectThree()" :class="{'unselect':isA,'select':isD}">
				<span class="pmq_imgl"></span>
				<b><span class="pmqthreemoney">1000元</span></b>
				<span class="pmq_moneyr">￥950</span>
			</div>
			<div class="pmqfour" @click="selectFour()" :class="{'unselect':isA,'select':isE}">
				<span class="pmq_imgl"></span>
				<b><span class="pmqfourmoney">5000元</span></b>
				<span class="pmq_moneyr">￥4900</span>
			</div>
			<p class="pmq_tui">金额拍卖券在付款时可抵扣商品货款。金额拍卖券未使用或用券拍卖未成功，可按购买价退券。退券需在PC端操作。</p>
      <div class="pmq_price" v-if="isB || isC || isD || isE">
        <span class="pmq_pricetext">应付金额：</span>
        <span class="pmq_pricemoney">{{ price }}</span>
        <div class="pmq_pricejiesuan">
          去结算
        </div>
      </div>
		</div>
  </div>
</template>

<script>
export default {
	data(){
        return{
          id: 'my',
          isA:true,
          isB:false,
          isC:false,
          isD:false,
          isE:false,
          price:''
        }
    },
    methods: {
        back(){
          this.$router.push({
    				path:"/mine_pmq"
    			})
        },
        selectOne($event) {
          console.log(event.target);
          if (!this.isB) {
            this.isB = true
            this.isC = false
            this.isD = false
            this.isE = false
            console.log('1');
            this.price = '￥90'
          }else if (this.isB) {
            this.isB = false
          }

        },
        selectTwo($event) {
          if (!this.isC) {
            this.isC = true
            this.isD = false
            this.isE = false
            this.isB = false
            console.log('2');
            this.price = '￥460'
          } else if (this.isC) {
            this.isC = false
          }
        },
        selectThree($event) {
          if (!this.isD) {
            this.isD = true
            this.isE = false
            this.isB = false
            this.isC = false
            this.price = '￥950'
          } else if (this.isD) {
            this.isD = false
          }
        },
          selectFour($event) {
            if (!this.isE) {
              this.isE = true
              this.isB = false
              this.isC = false
              this.isD = false
              this.price = '￥4900'
            } else if (this.isE) {
              this.isE = false
            }
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
.mypmq_pmq {
  font-family: arial,"Lucida Grande",Verdana,"Microsoft YaHei",sans-serif;
}
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
	height: 30rem;
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
  position: relative;
}
.select::before{
  content: '';
  display: inline-block;
  width: .9rem;
  height: .9rem;
  overflow: hidden;
  background: url('../../static/images/mine_imgs/pay-select.png') no-repeat;
  background-size: .9rem;
  position: absolute;
  top: 1.1rem;
  left: .65rem;
  /*display: none;*/
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
  position: relative;
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
  position: relative;
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
  position: relative;
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
.pmq_price {
  position: fixed;
  bottom: 0;
  width: 20rem;
  height: 2rem;
  border-top: 1px solid #cddde6;
}
.pmq_pricetext {
  font-size: .7rem;
  color: #999999;
  position: absolute;
  bottom: 0.2rem;
  left: .6rem;
}
.pmq_pricejiesuan {
  display: inline-block;
  width: 5rem;
  height: 2rem;
  background: #f24413;
  font-size: .8rem;
  color: white;
  text-align: center;
  float: right;
  line-height: 2rem;
}
.pmq_pricemoney {
  position: absolute;
  left: 4.5rem;
  bottom: .2rem;
  color: #f24413;
  font-size: 1rem;
}
</style>
