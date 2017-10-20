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
        <el-row type="flex" justify="space-around">
            <el-col :span="2"></el-col>
            <el-col :span="3">
              <div class="carousel-bottom-content bg-blue">
                <img src="../assets/img/poster-white.png" />
              </div>
              <div class="carousel-bottom-introduce">
                <h1>海报设计</h1>
                <h2>专为社团提供最快捷海报制作</h2>
              </div>            
            </el-col>
            <el-col :span="3">
              <div class="carousel-bottom-content bg-gray">
                <img src="../assets/img/banner.png" />
              </div>
              <div class="carousel-bottom-introduce">
                <h1>横幅制作</h1>
                <h2>横幅想要与众不同只在团图</h2>
              </div>  
            </el-col>
            <el-col :span="3">
              <div class="carousel-bottom-content bg-gray">
                <img src="../assets/img/clothes.png" />
              </div>
              <div class="carousel-bottom-introduce">
                <h1>队服定制</h1>
                <h2>衣服在线设计印刷一步搞定</h2>
              </div>  
            </el-col>
            <el-col :span="2"></el-col>
        </el-row>
      </div>
      <div class="printing">
        <el-row type="flex" justify="center">
          <el-col :span="4">
            <h1>印刷流程</h1>
            <h2>Printing Sequence</h2>
            <div class="underLine"></div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="2">
            <div class="printing-bottom-content bg-blue">

            </div>
          </el-col>
          <el-col :span="2">
            <div class="printing-bottom-content bg-blue">

            </div>
          </el-col>
          <el-col :span="2">
            <div class="printing-bottom-content bg-blue">

            </div>
          </el-col>
          <el-col :span="2">
            <div class="printing-bottom-content bg-blue">

            </div>
          </el-col>
          <el-col :span="2">
            <div class="printing-bottom-content bg-blue">

            </div>
          </el-col>
          <el-col :span="2">
            <div class="printing-bottom-content bg-blue">

            </div>
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
      
    }
  }
}
</script>

<style>
/* 走马灯样式 */
  .carousel{
    padding-top: 114px;
    height: 821px;
  }
  .el-carousel{
    padding-bottom: 80px;
  }
  .carousel-bottom-content {
    width: 237px;
    height: 130px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel-bottom-introduce{
    margin-top: 20px;
    text-align: center;
  }
  .carousel-bottom-introduce h1{
    font-size: 20px;
    color:#393939;
  }
  .carousel-bottom-introduce h2{
    margin-top: 8px;
    font-size: 16px;
    color: #797979;
  }
  /* 印刷流程层样式 */
  .printing{
    height: 613px;
    padding: 76px 0; 
    background-color: #f3f4f8;
    text-align: center
  }
   /* 标题及副标题的字体和颜色 */
  .printing .el-row:first-child h1{
    font-size: 30px;
    color: #393939;
  }
  .printing .el-row:first-child h2{
    font-size: 20px;
    color: #797979;
  }
  .printing-bottom-content{
    width: 158px;
    height: 200px;
  }
  /*  */
  .printing .el-row:last-child{
    margin-top: 46px;
  }
</style>