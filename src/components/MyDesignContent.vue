<template>
  <div class="content">
    <el-row type="flex">
      <el-col :span="6" v-for="index in 10 " :key="index">
        <el-card :body-style="{ padding: '12px 12px 0px 12px' }">
          <img src="../assets/img/poster.png" width="192">
          <div style="padding: 4px;">
            <span>十佳歌手海报</span>
          </div>
        </el-card>
      </el-col>
      <el-col>
        <el-card class="box-card text-center">
          +
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
   .el-row {
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .el-col {
    margin-top: 20px;
    margin-right: 18px;   
    flex-basis: 216px;
    border-radius: 2px;
  }
  /* 最右边的margin设为0 */
  .el-col:nth-child(4n) {
    margin-right: 0px;
  }
</style>
