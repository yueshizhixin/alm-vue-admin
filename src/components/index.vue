<template>
  <div style="">
    <el-row :gutter="20">
      <el-col :span="6" v-for="item of tips" style="height: 80px;">
        <div class="tip-div">
          <i :class="item.icon" class="tip-icon"></i>
          <span class=""
                style="font-size: 16px;position: absolute; line-height:40px;padding-top:5px;top:0;height:40px;left:90px;color: grey;">
            {{item.name}}</span>
          <span class=""
                style="color: #444; font-size: 20px;position: absolute; line-height:40px;top:30px;height:40px;left:90px;">{{item.value}}</span>

        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px;height: 200px;">
      <el-col :span="6">
        <div style="box-shadow: 0 0 5px rgba(26, 26, 26, .3);padding-bottom: 10px;">
          <img style="width: 100%;height: auto;z-index: -1;opacity: .8"
               src="http://cdn.yueshizhixin.top/asset/bg/1920x1080%20(1).jpg?imageView2/1/w/960/h/760">
          <div v-for="(item,index) of noteMotest" class="container" style="margin-top: 10px;">
            <div style="color:#444; font-style: italic;padding-left: 10px;padding-bottom: 3px; background-color: white">
              {{item.name}}
            </div>
            <div class="skills" :style="{width:item.percent*100+'%',backgroundColor:noteMotestColor[index]}"
                 style="border-radius:5px">
              <!--<div style="float: left;margin-left: 10px;">{{item.name}}</div>-->
              <div>{{item.count}} 次</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        tips: [{
          id: 1, icon: 'iconfont icon-baocun-copy-copy-copy', name: '新增笔记', value: '1篇',
        }, {
          id: 2, icon: 'iconfont icon-refresh', name: '最近更新', value: '5篇',
        }, {
          id: 3, icon: 'iconfont icon-iccomm', name: '最近访问', value: '12篇',
        }, {
          id: 4, icon: 'iconfont icon-pic', name: '新增图片', value: '2张',
        },],//统计
        noteMotest: [
          {id: 1, name: 'js学习1', count: 342},
          {id: 1, name: 'C++从入门到放弃', count: 865},
          {id: 1, name: 'go 360天入门', count: 452},
        ],//最多访问笔记
        //最多访问笔记颜色
        noteMotestColor: [
          '#4CAF50B3', '#2196F3B3', '#f44336B3',
        ]
      }

    },
    mounted() {
      this.initNoteData()
    },
    methods: {
      //处理笔记最多访问数据
      initNoteData() {
        this.noteMotest.sort((x, y) => {
          if (x.count < y.count) {
            return 1;
          }
          return -1;
        })
        let max = this.noteMotest[0].count
        max = max === 0 ? 1 : max;
        this.noteMotest.forEach(x => {
          x.percent = Number(x.count / max).toFixed(2)
        });
        console.log(this.noteMotest)
      },
    }


  }
</script>

<style scoped>

  /**
    统计
   */
  .tip-div {
    box-shadow: 0 0 5px rgba(26, 26, 26, .3);
    height: 100%;
    position: relative;
    border-radius: 10px
  }

  .tip-icon {
    line-height: 80px;
    margin-left: 20px;
    font-size: 45px;
    opacity: .5;
  }

  .tip-name {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    font-weight: 100;
    top: 0;
    left: calc(20px + 50px + 20px);
    position: absolute;
  }

  .tip-name2 {
    height: 50px;
    line-height: 50px;
    font-size: 22px;
    font-weight: 100;
    /*top: 0;*/
    /*left: calc(20px + 50px + 20px);*/
    /*position: absolute;*/
  }

  /**
    最多访问
   */

  * {
    box-sizing: border-box
  }

  .container {
    width: 100%;
    background-color: #f4f4f4;
  }

  .skills {
    text-align: right;
    padding-right: 10px;
    line-height: 40px;
    color: white;
  }

</style>
