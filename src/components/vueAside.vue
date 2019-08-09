<template>
  <div style="width: calc(100%);">
    <div style="padding-right: 1px;">
      <ul class="ul-out">
        <li v-for="(item,index) of menu" :key="index">
          <div class="hvr-sweep-to-right divbg0 ul-out-parent" style="margin-bottom: 1px;">
            <i :class="item.icon"></i>&nbsp;
            <span style="">{{item.name}}</span>
          </div>
          <div v-for="c of item.children" :class="{'active':c.chosen===1}"
            class="hvr-sweep-to-right divbg0 ul-son" style="margin-bottom: 1px;">
            <div @click="routgo(c)" >
              <i></i>&nbsp;
              {{c.name}}
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
    color: #fff !important;
  }

  .ul-out {
    list-style-type: none;
    padding-left: 0;
    margin-top: 6px;
    /*margin-left: 3px;*/
    width: calc(100% - 0px);
    box-shadow: 0px 0 3px rgba(26, 26, 26, .1);
  }

  .ul-out li {
    /*margin-bottom: 3px*/
  }

  .ul-out-parent {
    width: calc(100% - 57px);
    font-size: 14px;
    /*font-weight: 100;*/
    line-height: 20px;
    padding: 10px 27px;
    /*margin-bottom: 3px;*/
    /*box-shadow: 0 0px 3px rgba(26, 26, 26, .1);*/
    color: #444;
  }

  .ul-son {
    list-style-type: none;
    font-size: 14px;
    width: calc(100% - 57px - 16px);
    display: block;
    /*font-weight: 100;*/
    line-height: 20px;
    padding: 10px 27px;
    padding-left: 43px;
    /*box-shadow: 0 0px 3px rgba(26, 26, 26, .1);*/
    color: #444;
  }
  .ul-out-parent:hover {
    color: #fff;
  }
  .ul-son:hover {
    color: #fff;
  }
</style>
