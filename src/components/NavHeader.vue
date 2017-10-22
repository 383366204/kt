<template>
    <header class="header">          
         <el-row type="flex" justify="center">
          <el-col :span="10">
            <router-link to="/"><img src="../assets/img/logo.png" width="97" height="48"></router-link>
             <router-link to="/NewDesign"><el-button type="text">新建设计</el-button></router-link>
             <router-link to="/MyDesign"><el-button type="text">我的设计</el-button></router-link>
             <router-link to="/Document"><el-button type="text">帮助文档</el-button></router-link>
             <router-link to="/Download"><el-button type="text">APP下载</el-button></router-link>
             <router-link to="/CustomDesign"><el-button type="text">定制设计</el-button></router-link>
          </el-col>
          <el-col :span="4">      
              <router-link to="/Service"><el-button type="text">在线客服</el-button></router-link>            
              <router-link to="/Login"><el-button type="text">登录/注册</el-button></router-link>
          </el-col>
        </el-row>
    </header>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    }
  }
</script>
<style scoped>
    /* 导航栏高度 */
    .header .el-row{
      height: 75px;
    }
    /* 黑色底边和布局 */
    .header .el-row .el-col{
      display: flex;
      flex-basis: 792px;
      align-items: center;
      border-bottom: 1px solid #aaaaaa;
    }
    /* 左边Log的布局 */
    .header .el-row .el-col:first-child img{
      margin-right: 30px;
    }
    /* 右两个按钮布局 */
    .header .el-row .el-col:last-child{
      justify-content: flex-end;
      flex-basis: 317px;
    }
    /* 按钮样式 */
    .header .el-row .el-button{
      width: 90px;
      height: 31px;
      line-height: 10px;
      font-size: 18px;
      color: #FFF;
    }
    /* 按钮hover样式 */
    .header .el-row .el-button:hover{
       color: #2eb4e9;
       background-color: #FFF;
    }
    /* 选中后的样式 */
     .header .el-row .el-col .router-link-active .el-button{
       color: #2eb4e9;
       background-color: #FFF;
     }
    /* 最后登录按钮样式 */
    .header .el-col:last-child a:last-child .el-button{
       border: 1px solid #FFF;
       margin-left: 10px;
       background-color: transparent;
    }
    /* 最后登录按钮hover样式 */
    .header .el-col:last-child a:last-child .el-button:hover{
       color: #45c1ee;
       background-color: #FFF;
    }
    /* 最后登录按钮选中样式 */
    .header .el-col:last-child a:last-child.router-link-active .el-button{
       color: #45c1ee;
       background-color: #FFF;
    }
    
</style>
