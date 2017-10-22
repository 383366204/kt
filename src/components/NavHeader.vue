<template>
    <header class="header">          
         <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="10">
            <router-link to="/"><img src="../assets/img/logo.png" width="97" height="48"></router-link>
             <el-button type="text"><router-link to="/NewDesign">新建设计</router-link></el-button>
             <el-button type="text"><router-link to="/MyDesign">我的设计</router-link></el-button>
             <el-button type="text"><router-link to="/Document">帮助文档</router-link></el-button>
             <el-button type="text"><router-link to="/Download">APP下载</router-link></el-button>
             <el-button type="text"><router-link to="/CustomDesign">定制设计</router-link></el-button>
          </el-col>
          <el-col :span="4">
            <img src="../assets/icon/chat.png" width="30">
            <el-button type="text">
              <router-link to="/Service">在线客服</router-link>             
            </el-button>
            <el-button type="text"><router-link to="/Login">登录/注册</router-link></el-button>
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
    /* 覆盖默认的router-link样式 */
    .header .el-row .el-col a{
      font-size: 18px;
      color: #FFF;
    }
    /* 黑色底边和布局 */
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
    }
    /* 按钮hover样式 */
    .header .el-row .el-button:hover{
       background-color: #FFF;
    }
    /* 按钮hover样式 */
    .header .el-row .el-button:hover a{
       color:#2eb4e9;
       text-decoration: none;
    }
    /* 最后一个,登录按钮样式 */
    .header .el-col:last-child .el-button:last-child{
       border: 1px solid #FFF;
       background-color: transparent;
    }
    /* 最后一个,登录按钮hover样式 */
    .header .el-col:last-child .el-button:last-child:hover{
       color: #45c1ee;
       background-color: #FFF;
    }
</style>
