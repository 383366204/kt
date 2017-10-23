<template>
  <el-row type="flex" justify="center">
      <el-col :span="3">
      <el-menu default-active="All" @open="handleOpen" @close="handleClose" :router="true">
          <el-submenu index="Folder">
            <template slot="title"><i class="el-icon-document"></i>文件夹</template>
            <el-menu-item-group>
              <el-menu-item index="All">全部设计</el-menu-item>
              <el-menu-item v-for="(item,index) in menus" :key="index" :index="item.category">{{item.name}}</el-menu-item>
              <el-menu-item @click="addMenus()" index="" class="text-center"><i class="el-icon-plus"></i></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="RecyleBin"><i class="el-icon-delete"></i>回收站</el-menu-item>
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
        menus:[
          {category:'Clothes',name:'服装'},
          {category:'Poster',name:'海报'},
          {category:'Banner',name:'横幅'}
        ]
      };
    },methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      addMenus() {
        this.$prompt('新建文件夹', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^.{1,6}$/,
          inputErrorMessage: '名称长度应为1-6个字符'
        }).then(({ value }) => {
          this.menus.push({'category':'DIY','name':value});
          this.$notify.success({
            title: '成功',
            message: '新建文件夹成功',
            offset:100
          });
        }).catch(() => {
            this.$notify.warning({
            title: '提示',
            message: '已取消输入',
            offset:100
          });      
        });
      }
    }
  }
</script>
<style scoped>
    /* 左边导航栏高度 */
    .el-menu{
      height: calc(100% - 50px);
      padding-top: 50px;
    }
    /* 左边宽度 */
    .el-row .el-col:first-child{
        flex-basis: 222px;
    }
    /* 右边宽度 */
    .el-row .el-col:last-child{
        flex-basis: 980px;
    }
</style>
