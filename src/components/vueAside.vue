<template>
  <div style="width: calc(100%);">
    <!--<div style="width: calc(100%);">-->
    <!--<div v-for="(item,index) of menu" :key="index" :class="{'active':item.chosen===1}"-->
    <!--class="divbg0 menu1 hvr-sweep-to-right">-->
    <!--<i :class="item.icon">&nbsp;</i>&nbsp;-->
    <!--{{item.name}}-->
    <!--</div>-->
    <!--</div>-->

    <div>
      <ul class="ul-out">
        <li v-for="(item,index) of menu" :key="index">
          <div class="hvr-sweep-to-right divbg0 ul-out-parent">
            <i :class="item.icon">&nbsp;</i>&nbsp;
            {{item.name}}
          </div>
          <div v-for="c of item.children" :class="{'active':c.chosen===1}"
            class="hvr-sweep-to-right divbg0 ul-son">
            <div @click="routgo(c)" >
              &nbsp;{{c.name}}
            </div>
          </div>
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
      //跳转
      routgo(item) {
        this.$emit("sonMenuChange", item)
      },
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
    background-color: #4a4266;
    color: #fff;
  }

  .ul-out {
    list-style-type: none;
    padding-left: 0;
    margin-top: 6px;
    margin-left: 3px;
    width: calc(100% - 3px);
  }

  .ul-out li {
    margin-bottom: 3px
  }

  .ul-out-parent {
    width: calc(100% - 57px);
    font-size: 18px;
    font-weight: 100;
    line-height: 20px;
    padding: 14px 27px;
    margin-bottom: 3px;
    box-shadow: 0 0px 3px rgba(26, 26, 26, .1);
  }

  .ul-son {
    list-style-type: none;
    font-size: 16px;
    width: calc(100% - 57px - 27px);
    display: block;
    font-weight: 100;
    /*line-height: 20px;*/
    padding: 6px 27px;
    padding-left: 54px;
    box-shadow: 0 0px 3px rgba(26, 26, 26, .1);
  }
</style>
