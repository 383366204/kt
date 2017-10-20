<template>
    <header class="header">          
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo bgcolor" mode="horizontal" @select="handleSelect" router>
          <el-row type="flex" class="headerFont" justify="center">
              <el-col :span="8">
                <el-menu-item index="NewDesign"><el-button size="small">新建设计</el-button></el-menu-item>              
                <el-menu-item index="MyDesign"><el-button size="small">我的设计</el-button></el-menu-item>
                <el-menu-item index="Help">处理中心</el-menu-item>
                <el-menu-item index="Download">App下载</el-menu-item>
                <el-menu-item index="CustomDesign">定制设计</el-menu-item>
              </el-col>
              <el-col :span="6">
                <el-menu-item index="CustomerService"><img src="../assets/icon/chat.png" width="30"/>在线客服</el-menu-item>
                <el-menu-item index="MyDesign"><el-button size="small">登录/注册</el-button></el-menu-item>
              </el-col>
              </el-row>   
        </el-menu>       
    </header>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 'help'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>   
    .bgcolor{
     background:  linear-gradient(to bottom right,#2eb4e9, #5fcff3);
    }
    .el-menu{
      height: 74px;
    }
    .el-button{
      font-size:18px;
      color: #2eb4e9;
      border: 1px solid #2eb4e9;
    }
    .el-button:hover{
      color: #FFF;
      background-color: #5fcff3;
      border: 1px solid #FFF;
    }
    .el-menu-item{
      font-size:18px;
      color: #FFF;
      height: 74px;
      line-height: 74px;
      padding: 0 12px;
    }
</style>

