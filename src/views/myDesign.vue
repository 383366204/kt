<template>
  <el-row type="flex" justify="center">
      <el-col :span="3">
      <el-menu default-active="Folder" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
          <el-submenu index="Folder">
            <template slot="title"><i class="iconfont icon-folder"></i>文件夹</template>
            <el-menu-item-group>
              <el-menu-item index="AllDesign">全部设计</el-menu-item>
              <el-menu-item index="Clothes">服装</el-menu-item>
              <el-menu-item index="Poster">海报</el-menu-item>
              <el-menu-item index="Banner">横幅</el-menu-item>
              <el-menu-item index="Add" class="text-center">+</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="RecyleBin"><i class="iconfont icon-trash"></i>回收站</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8">
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
    .text-center{
      text-align: center;
    }
</style>
