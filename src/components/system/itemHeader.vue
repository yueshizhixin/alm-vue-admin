<template>
  <div class="header">
    <div v-for="(item,index) of menu" @click="routgo(item)" class="tab" :class="{'active':item.chosen===1}">
      {{item.name}}
      <i v-show="item.id>1" @click="close(item)" class="iconfont icon-close"></i>
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
        this.$router.push({path: item.url});
        this.$emit("sonMenuChange", item)
      },

      close(item) {
        this.$emit("itemMenuClose", item)
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
