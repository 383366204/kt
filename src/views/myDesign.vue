<template>
  <el-row type="flex" justify="center">
      <el-col :span="3">
      <el-menu default-active="0" @open="handleOpen" @close="handleClose">
          <el-submenu index="Folder">
            <template slot="title"><i class="el-icon-document"></i>文件夹</template>
            <el-menu-item-group>
              <el-menu-item index="0">全部设计</el-menu-item>
              <el-menu-item index="index" v-for="item in menus" :key="item.id">{{item.name}}</el-menu-item>
              <el-menu-item index="add" @click="addMenus()" class="text-center"><i class="el-icon-plus"></i></el-menu-item>             
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="RecyleBin"><i class="el-icon-delete"></i>回收站</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="11">
        <my-design-content></my-design-content>
      </el-col>
  </el-row>
</template>


<script>
  import MyDesignContent from '@/components/MyDesignContent';
  export default {
    data() {
      return {
        menus:[
          {id :'1',name:'服装'},
          {id :'2',name:'海报'},
          {id :'3',name:'横幅'}
        ]
      };
    },
    components:{
        MyDesignContent
    },
    methods: {
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
