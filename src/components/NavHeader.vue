<template>
    <header class="header">          
        <el-menu class="el-menu-demo bgcolor" mode="horizontal" @select="handleSelect" router>
          <el-row type="flex" class="headerFont" justify="center">
              <el-col :span="10">
                <el-menu-item index="NewDesign">新建设计</el-menu-item>              
                <el-menu-item index="MyDesign">我的设计</el-menu-item>
                <el-menu-item index="Document">帮助文档</el-menu-item>
                <el-menu-item index="Download">App下载</el-menu-item>
                <el-menu-item index="CustomDesign">定制设计</el-menu-item>
              </el-col>
              <el-col :span="4">
                <el-menu-item index="CustomerService"><img src="../assets/icon/chat.png" width="30"/>在线客服</el-menu-item>
                <el-menu-item index="Login" class="noCursor"><el-button size="small">登录/注册</el-button></el-menu-item>
              </el-col>
          </el-row>   
        </el-menu>       
    </header>
</template>

<script>
  export default {
    data() {
      return {
        
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
    /* 导航栏清除默认背景+设置高度 */
    .el-menu{
      background:transparent;
    }
    .el-menu-item{
      height: 40px;
    }
    /* 鼠标经过导航选项 */
    .el-menu-item:hover{
      /* height: 40px; */
      background-color: transparent !important;
    }
    /* 按钮颜色 */
    .el-button{
      font-size:18px;
      color: #2eb4e9;
      border: 1px solid #2eb4e9;
    }
    /* 鼠标经过按钮 */
    .el-button:hover{
      color: #FFF;
      background-color:transparent;
      border: 1px solid #FFF;
    }
    /* 最后一个按钮的样式 */
    .el-menu-item:last-child .el-button{
      color: #FFF;
      background-color:transparent;
      border: 1px solid #FFF;
    }
    /* 鼠标最后经过一个按钮的样式 */
    .el-menu-item:last-child .el-button:hover{
       background-color: #FFF;
       color: #2eb4e9;
    }
    /* 导航栏选项的样式 */
    .el-menu-item{
      font-size:18px;
      color: #FFF;
      height: 74px;
      line-height: 74px;
      padding: 0 12px;
    }
    .el-col:first-child .el-menu-item:nth-child(1){
      padding: 0 0px;
    }
    .el-col{
      border-bottom: 1px solid #aaaaaa;
    }
    /* 导航栏右边两个靠右 */
    .el-col:last-child{
      display: flex;
      justify-content: flex-end;
    }
    /* 取消登录按钮鼠标经过的效果 */
    .noCursor{
      cursor: default;
    }
    .headerFont .el-col{
      display: flex;
      align-items: center;
    }
</style>

