<template lang="html">
   <section>
<<<<<<< HEAD
      <Future></Future>
=======
      <Future v-for="listArr in result"  :obj="listArr"></Future>
>>>>>>> 22563648a027f4fda145a0a99954275594294dd5
   </section>
</template>

<script>

import Future from '../components/future'

export default {
   components:{
      Future
   }
}
</script>

<style lang="css">
section{
   margin-top: 2.7rem;
}
</style>
