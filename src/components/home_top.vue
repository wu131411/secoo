<template lang="html">
    <div v-show="isShow" class="home_top">
        <a href="#">
            <img src="../../static/images/home-img/top1.png" alt="">
        </a>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow : false
        }
    },
    methods:{
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 600) {
                this.isShow = true;
            }
            if(scrollTop < 600) {
                this.isShow = false
            }
        },

    },
    mounted () {
        window.addEventListener('scroll',this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="css">
    .home_top{
        position: fixed;
        right:0;
        bottom:5rem;
    }
</style>
