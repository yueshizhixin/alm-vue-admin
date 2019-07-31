<template>
  <div id="app">
    <el-container class="divbg1-5 mainpos" style="">
      <el-header class="divbg0 shadow5">
        <vue-header :menu="menu"></vue-header>
      </el-header>
      <el-container style="margin-top: 14px;padding: 0 20px;">
        <el-aside class="" style="width: 200px;">
          <vue-aside :menu="itemMenu"></vue-aside>
        </el-aside>

        <el-container style="margin-left: 32px;margin-top: 6px">
          <el-header class="divbg0 shadow3 itemheaderstyle" style="height: 50px;">
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
      return {
        menu: [],

      }
    },
    created() {
      console.log('app-created')
    },
    mounted() {
      console.log('app-mounted')
      this.getMenu()
    },
    computed: {
      itemMenu() {
        let item = (this.menu.find(x => x.chosen === 1) || {children: []})
        // console.log(item)
        return item.children;
      }
    },
    methods: {
      //获取菜单
      getMenu() {
        this.menu = [{
          id: 1, name: '笔记', chosen: 1, depth: 1, children: [{
            id: 11, name: '笔记管理', chosen: 1, depth: 2, icon: 'iconfont icon-calendar', children: [
              {id: 111, name: '新建', chosen: 0, depth: 3},
              {id: 112, name: '列表', chosen: 0, depth: 3}
            ]
          }, {
            id: 12, name: '标签管理', chosen: 0, depth: 2, icon: 'iconfont icon-discount', children: [
              {id: 121, name: '新建', chosen: 0, depth: 3},
              {id: 122, name: '列表', chosen: 0, depth: 3}
            ]
          }]
        }, {
          id: 2, name: '资源', chosen: 0, depth: 1, children: [{}]
        }, {
          id: 3, name: '设置', chosen: 0, depth: 1, children: [{}]
        }]
      }
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
    margin-top: 3px;
    margin-bottom: 20px;
    padding: 20px;
  }

  .itemheaderstyle {
    /*border-bottom: 2px rgba(74, 66, 102, 0.25) solid;*/
  }
</style>
