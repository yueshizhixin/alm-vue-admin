<template>
  <div style="width: 100%">
    <div v-for="item of 10" class="menu1 hvr-sweep-to-right">
      目录目录
    </div>
  </div>

</template>

<script>
    export default {
        name: "vueAside"
    }
</script>

<style scoped>
  .menu1{
    width: calc(100% - 60px);
    padding: 15px 30px ;
  }
  .menu1:hover{
  }

</style>
