<template>
  <div class="header">
    <div v-for="(item,index) of 5" class="tab" :class="{'active':index===0}">
      阿斯顿发
      <i @click="close(item)" class="iconfont icon-close"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "itemHeader",
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      close(item) {
        console.log(item);
      },

    }
  }
</script>

<style scoped>
  .header {
    padding: 6px;
  }

  .tab {
    display: inline;
    line-height: 38px;
    border: 2px rgba(74, 66, 102, 0.35) solid;
    padding: 4px 5px 4px 10px;
    margin-right: 10px;
    color: rgba(74, 66, 102, 0.35);
    font-size: 14px;

  }
  .tab.active {
    border: 2px rgba(74, 66, 102, 0.85) solid;
    color: rgba(74, 66, 102, 0.85);
  }
  .tab:hover{
    border: 2px rgba(74, 66, 102, 0.85) solid;
    color: rgba(74, 66, 102, 0.85);
    transition-duration: 0.5s;
  }

</style>
