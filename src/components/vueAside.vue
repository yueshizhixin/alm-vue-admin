<template>
  <div style="width: calc(100%);">
    <div style="width: calc(100%);">
      <div v-for="(item,index) of menu" :key="index" :class="{'active':item.chosen===1}"
           class="divbg0 menu1 hvr-sweep-to-right">
        <i :class="item.icon">&nbsp;</i>&nbsp;
        {{item.name}}
      </div>
    </div>

    <div style="width: calc(100%);">
      <ul class="divbg0 " style=" width: calc(100% - 60px);font-size: 18px;
        line-height: 20px;
        margin-bottom: 0px;
        margin-top: 6px;
        padding: 14px 0px;
        margin-left: 3px;
        font-weight: 100;list-style-type:none;
        box-shadow: 0 0px 3px rgba(26, 26, 26, .1);">
        <li v-for="(item,index) of menu" :key="index" :class="{'active':item.chosen===1}"
            class=" ">
          <div class="hvr-sweep-to-right"><i :class="item.icon">&nbsp;</i>&nbsp;
            {{item.name}}
          </div>
          <ul v-for="c of item.children" class="hvr-sweep-to-right" style="list-style-type:none;
              margin-top: 14px;">
            <li>
              {{c.name}}
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
  export default {
    name: "vueAside",
    props: ['menu'],
    data() {
      return {}
    },
    mounted() {
      // this.aniShow = true
      setTimeout(() => {

      }, 500)
    },
    activated() {
    },
    deactivated() {
    },
    methods: {
      //显示3级菜单
      showDepth3() {

      }
    }
  }
</script>

<style scoped>
  .menu1 {
    width: calc(100% - 60px);
    /*height: 20px;*/
    /*padding: 15px 30px ;*/
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 0px;
    margin-top: 6px;
    padding: 14px 27px;
    margin-left: 3px;
    font-weight: 100;
    box-shadow: 0 0px 3px rgba(26, 26, 26, .1);
  }

  .active {
    /*background-color: #4a4266;*/
    /*color: #fff;*/
  }

</style>
