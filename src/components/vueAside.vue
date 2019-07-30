<template>
  <div class="" style="width: calc(100%);">
    <div v-for="(item,index) of 10" :class="{'active':index===0}" class="divbg0 menu1 hvr-sweep-to-right"
    style="box-shadow:-0px 1px 3px red;"
    >
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
    height: 20px;
    /*padding: 15px 30px ;*/
    /*margin-bottom: 3px;*/
    padding: 15px 27px 18px;
    margin-left: 3px;
  }

  .active{
    background-color: #4a4266;
    color: #fff;
  }

</style>
