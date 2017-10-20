<template>
  <main>
      <div class="carousel">
        <el-row type="flex" justify="center">
          <el-col :span="16">
            <el-carousel :interval="5000" type="card" height="414px">
            <el-carousel-item v-for="item in 5" :key="item">
               <img src="../assets/img/banner.jpg" width="636">
            </el-carousel-item>
           </el-carousel>
          </el-col>
        </el-row>      
      </div>
  </main>
</template>

<script>


export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  .indexTopBgColor{
    height: 568px;
    background:  linear-gradient(to bottom right,#2eb4e9, #5fcff3);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); 
  } 
  .carousel{
    padding-top: 114px;
    height: 821px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
