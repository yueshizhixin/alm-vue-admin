<template>
  <div class="header">
    <div v-for="(item,index) of menu"  class="tab" :class="{'active':item.chosen===1}">
      <span style="cursor: pointer" @click="routgo(item)">{{item.name}}</span>
      <i v-show="item.id>1" @click="close(item)" class="iconfont icon-close" style="cursor: pointer"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "itemHeader",
    props: ['menu'],
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      //跳转
      routgo(item) {
        this.$emit("sonMenuChange", item)
      },

      close(item) {
        this.$emit("historyMenuClose", item)
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

  .tab:hover {
    border: 2px rgba(74, 66, 102, 0.85) solid;
    color: rgba(74, 66, 102, 0.85);
    transition-duration: 0.5s;
  }

</style>
