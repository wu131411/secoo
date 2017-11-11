<template lang="html">
    <div class="hot_show_detail">
        <h1>{{ id }}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id : '',
        }
    },
    watch : {
        '$route'(newValue,oldValue){
            console.log(newValue);
            this.id = newValue.params.id
        }
    }
}
</script>

<style lang="css">
</style>
