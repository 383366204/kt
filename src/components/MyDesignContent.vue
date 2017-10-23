<template>
  <div class="content">
    <el-row type="flex">
      <el-col :span="6" v-for="index in 10 " :key="index">
        <el-card :body-style="{ padding: '12px 12px 0px 12px' }">
              <div class="operation">
                <el-button>编辑</el-button>
                <el-button>删除</el-button>
                <el-button>移动</el-button>
              </div>      
              <img src="../../static/poster.png" width="192">                
              <div style="padding: 4px; color:#6c6c6c">
                <span>十佳歌手海报</span>             
              </div>  
        </el-card>
      </el-col>
      <el-col>
        <el-card class="box-card text-center">
          <i class="el-icon-plus"></i>
        </el-card>
      </el-col>
    </el-row>
  </div>
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
  /* 上和左内间距 */
  .content{
    padding:45px 0 0 54px;
  }
  /* 换行及下外边距离 */
   .el-row {
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .el-col {
    margin-top: 20px;
    margin-right: 18px;   
    flex-basis: 216px;
  }
  /* 最右边的margin设为0 */
  .el-col:nth-child(4n) {
    margin-right: 0px;
  }
  /* 相对定位 */
  .el-card{
    position: relative;
  }
  /* hover后卡片里的操作 */
  .el-card .operation{
    position: absolute;   
    top: 26px;
    left: 35px;
    width: 146px;
    text-align: center;
  }
  /* 卡片里面隐藏的按钮 样式 */
  .el-card .operation .el-button{
    background-color: rgba(0, 0, 0, 0.8);
    height: 34px;
    width: 146px;
    margin-top: 30px;
    margin-left: 0;
    color: #FFF;
    border: none;
    font-size: 16px;
    visibility: hidden;
  }
  /* hover效果 */
  .el-card:hover{
    opacity: 0.7;
  }
  /* hover显示按钮 */
  .el-card:hover .operation .el-button{
    visibility: visible;
  }
   /* hover按钮 */
  .operation .el-button:hover{
    background-color: rgba(0, 0, 0, 0.9);
  }
  
</style>
