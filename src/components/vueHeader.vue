<template>
  <div>
    <el-row>
      <el-col class="headtitle headtitle-img">
        <el-row style="position: relative">
          <img class="head-img hvr-grow-shadow"
               src="http://cdn.yueshizhixin.top/asset/head/82c85bc6469fb96715cee88fe461b6f7cfa5adb1.jpg?imageView2/1/w/300/h/300"
               alt="">
          <div class="name">
            aasdfasdfffffffffffffffffffffffffffff
          </div>
        </el-row>
      </el-col>
      <el-col v-for="(item,index) of menu"
              :class="{'active':item.chosen===1,'hvr-underline-from-center':item.chosen===0}"
              class="headtitle">
        <div @click="changeMenu(item)">{{item.name}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import glb from "@comp/GLOBAL"

  export default {
    name: "vueHeader",
    props: [
      'menu'
    ],
    data() {
      return {
        glb: glb,
      }
    },
    computed: {},
    methods: {
      //切换菜单
      changeMenu(item) {
        if (item.chosen === 1) {
          return
        }
        this.$emit("menuChange", item)
      },

      test() {
      }
    },
  }
</script>

<style scoped>
  /*头像*/
  .head-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    left: 10px;
    top: 5px;
    position: absolute;
  }

  .headtitle-img {
    width: 232px !important;
  }

  /*姓名*/
  .name {
    display: inline;
    color: grey;
    margin-left: 70px;
    float: left;
    white-space: nowrap;
    width: 128px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /*标题*/
  .headtitle {
    width: 110px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    cursor: pointer;
    color: #444;
  }

  .headtitle.active {
    border-bottom: 4px solid #4a4266;
  }

</style>
