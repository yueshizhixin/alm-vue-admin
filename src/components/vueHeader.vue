<template>
  <div >
    <el-row>
      <el-col v-for="(item,index) of 5" :span="2">
        目录{{index}}
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import glb from "@comp/GLOBAL"

  export default {
    name: "vueHeader",
    data() {
      return {
        glb: glb,
      }
    },
    computed: {},
    methods: {
      test() {
      }
    },
  }
</script>

<style scoped>
</style>
