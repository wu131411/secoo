<template lang="html">
  <div class="qx_yanghu">
    <div class="qixia_top">
      <div class="back" @click='back()'>
        <span class="qixia_back"></span>
        <span class="qixia_backtext">返回</span>
      </div>
      <span class="qixia_qx">养护中心</span>
    </div>
    <div class="yanghu_texts">
      <p class="yanghu_titles">售后服务中心养护工厂简介</p>
      <p class="yanghu_content indent">SECOO奢侈品售后服务养护工厂是与日本最大奢侈品腕表维修工厂五十君合作成立，位于中国北京，占地3000平米，是目前国内功能最全、规格最高、面积最大的高档箱包、腕表和宝石维修保养工厂，可为100多个品牌做全套基础及深度售后服务，其高、精、尖的技术达国际专业水准。实力强大的团队与领先的技术，是售后服务中心最具影响力的基础核心。</p>
      <p class="yanghu_titles">团队阵容</p>
      <p class="yanghu_content indent">由国内外各专业领域最具实力的专业高级技师组成，拥有人数超过23人，其中国家级高级工程师5人、奢侈品皮具养护高级技师6人、国际名表维修高级技师7人。售后服务中心设皮具养护事业部、名表维修事业部、宝石养护事业部三大事业部，采用国际专业售后精细分类处理方式，保障最高品质服务质量。</p>
      <p class="yanghu_content indent">创新传统技术、引进一流设备，在高级皮具、腕表、珠宝等售后服务方面的技术达国际一线水准。皮具奢护，独家采用专业测色、调色仪、蒸汽去污机、日本进口手动缝制工具等先进设备，解决深层清洁、喷色且保留原线等多种难度大的问题，达到“还原性”养护效果；名表维修事业部，采用进口专业精密仪器，潜水表测试仪、防磁实验仪、防震实验仪、pc500较钟仪等进口设备，无尘维修车间。</p>
      <p class="yanghu_content indent">完美来源于专业，感动来源于真诚！SECOO奢侈品售后服务中心以专业的技艺、真诚的服务为您珍爱的每一件皮具、每一块腕表、每一枚钻饰提供专业化、精细化、个性化养护等一站式服务。</p>
      <p class="yanghu_titles">荣誉</p>
      <p class="yanghu_content">中国钟表协会会员单位</p>
      <p class="yanghu_content">中国皮革协会会员</p>
      <p class="yanghu_content">北京洗染行业协会会员单位</p>
      <p class="yanghu_content">RCLUX-SECOO奢侈品职业技能培训中心合作单位</p>
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
				path:"/mine_aboutqx"
			})
    }
  }
}
</script>

<style lang="css">
html {
	background: #F9F9F9;
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
	top: .6rem;
	left: 1.7rem;
}
.qixia_qx {
	position: absolute;
	top: .5rem;
	left: 8rem;
}
.yanghu_titles {
  font-size: .75rem;
  color: #000;
  margin-top: 1rem;
  margin-bottom: .5rem;
}
.yanghu_content {
  width: 18rem;
  font-size: .6rem;
  color: #666;
  line-height: 1.2rem;
}
.yanghu_texts {
  width: 18rem;
  background: white;
  padding: 1rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #cddde6;
}
.indent {
  text-indent: 1.5rem;
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
	margin-top: 1rem;
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
.foot p {
  text-align: center;
}
</style>
