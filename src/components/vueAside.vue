<template>
  <div style="width: calc(100%);">
    <transition name="el-zoom-in-top">
      <div class="transition-box ">
        <div v-for="(item,index) of 10" v-show="aniShow" :class="{'active':index===0}"
             class="divbg0 menu1 hvr-sweep-to-right">
          目录目录
        </div>
      </div>
    </transition>

  </div>

</template>

<script>
  export default {
    name: "vueAside",
    data() {
      return {
        // css
        aniShow: false,

      }
    },
    mounted() {
      // this.aniShow = true
      setTimeout(()=>{
        this.aniShow = true

      },500)
    },
    activated() {
      this.aniShow = true
    },
    deactivated() {
      this.aniShow = false
    },
    methods: {

    }
  }
</script>

<style scoped>
  .menu1 {
    width: calc(100% - 60px);
    /*height: 20px;*/
    /*padding: 15px 30px ;*/
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 6px;
    margin-top: 6px;
    padding: 15px 27px;
    margin-left: 3px;

    /*box-shadow:-0px 0px 10px red;*/
    box-shadow: 0 0px 3px rgba(26, 26, 26, .1);
  }

  .active {
    background-color: #4a4266;
    color: #fff;
  }

</style>
