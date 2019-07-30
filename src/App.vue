<template>
  <div id="app">
    <el-container class="divbg1-5 mainpos" style="">
      <el-header class="divbg0 shadow5">
        <vue-header></vue-header>
      </el-header>
      <el-container style="margin-top: 14px;padding: 0 20px;">
        <el-aside class="" style="width: 200px;">
          <vue-aside></vue-aside>
        </el-aside>

        <el-container style="margin-left: 32px;margin-top: 6px">
          <el-header class="divbg0 shadow3" style="height: 50px;">
            <item-header></item-header>
          </el-header>
          <el-main class="divbg0 shadow3 overflow mainstyle">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import VueHeader from "@comp/vueHeader";
  import ItemHeader from "@comp/system/itemHeader";
  import VueAside from "@comp/vueAside";
  import glb from "@comp/GLOBAL";

  export default {
    name: 'App',
    components: {VueHeader, VueAside, ItemHeader},

    data() {
      return {}
    },
    created() {
      this.dataInit()
    },
    mounted() {
    },
    methods: {
      dataInit() {
      },
    },
  }

</script>
<style>
  .mainpos {
    position: fixed;
    height: 100vh;
    width: 100vw;
  }

  .overflow {
    overflow: auto;
    width: calc(100vw - 20px - 20px - 200px - 12px - 20px);
    height: calc(100vh - 60px - 20px - 50px - 12px - 20px);
  }

  .mainstyle {
    margin-top: 12px;
    margin-bottom: 20px;
    padding: 20px;
  }
</style>
