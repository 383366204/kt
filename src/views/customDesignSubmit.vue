<template>
    <main class="main">
        <div class="title">
            <i class="iconfont icon-wancheng"></i>
            <h1>我们已收到您的需求，会尽快为您安排设计，感谢您对我们的支持</h1>
        </div>
        <div class="option">
            <el-button size="large">再去逛逛</el-button>
            <el-badge value="V">
                <el-button size="large">一对一设计</el-button>
            </el-badge>
        </div>
    </main>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    },
  }
</script>
<style scoped>
/* 主布局 */
   .main{
       height: 655px;
       background-color: #fff;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
   }
   .main .title{
       display: flex;
       align-items: center;
   }
   .main .title h1{
       font-size: 20px;
       color:#555;
       padding-left: 18px;
   }
   .main .title i{
       font-size: 60px;
       color: #2eb4e9;
   }
   /* 选择按钮 */
   .option{
       height: 80px;
       display: flex;
       margin-top:50px;
       width: 460px;
       justify-content: space-around;
   }
   .option .el-button{
       border-color: #2eb4e9;
       color: #2eb4e9;
       width: 144px;
       height: 58px;
       font-size: 20px;
   }
   .option .el-button:hover{
       background-color: #2eb4e9;
       color: #FFF;
   }
</style>
