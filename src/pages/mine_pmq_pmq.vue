<template lang="html">
  <div class="">
  	<div v-if="id=='my'">
  		<h1>我的拍卖券</h1>
  	</div>
		<div v-else-if="id=='buy'">
			<h1>购买拍卖券</h1>
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
</style>
