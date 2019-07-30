<template>
  <div class="header">
    <div v-for="(item,index) of 5" class="tab" :class="{'active':index===0}">
      第{{index}}页
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
    padding: 5px;
  }

  .tab {
    display: inline;
    line-height: 40px;
    border: 3px rgba(74, 66, 102, 0.35) solid;
    padding: 5px 5px 5px 10px;
    margin-right: 10px;
    color: rgba(74, 66, 102, 0.35);
  }
  .tab.active {
    border: 3px rgba(74, 66, 102, 0.85) solid;
    color: rgba(74, 66, 102, 0.85);
  }
  .tab:hover{
    border: 3px rgba(74, 66, 102, 0.85) solid;
    color: rgba(74, 66, 102, 0.85);
    transition-duration: 0.4s;
  }

</style>
