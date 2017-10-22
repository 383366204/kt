<template>
  <el-row type="flex" justify="center">
      <el-col :span="3">
      <el-menu default-active="MyDesign/All" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
          <el-submenu index="Folder">
            <template slot="title"><i class="iconfont icon-folder"></i>文件夹</template>
            <el-menu-item-group>
              <el-menu-item index="MyDesign/All">全部设计</el-menu-item>
              <el-menu-item index="MyDesign/Clothes">服装</el-menu-item>
              <el-menu-item index="MyDesign/Poster">海报</el-menu-item>
              <el-menu-item index="MyDesign/Banner">横幅</el-menu-item>
              <el-menu-item index="MyDesign/Add" class="text-center">+</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="RecyleBin"><i class="iconfont icon-trash"></i>回收站</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="11">
        <router-view></router-view>
      </el-col>
  </el-row>
</template>


<script>
  export default {
    data() {
      return {
        
      };
    },methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>   
    .el-row .el-col:first-child{
        flex-basis: 222px;
    }
    .el-row .el-col:last-child{
        flex-basis: 980px;
    }
</style>
