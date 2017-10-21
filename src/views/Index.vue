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
      <div class="floor printing">
        <el-row type="flex" justify="center">
          <el-col :span="4" class="floor-title">
            <h1>印刷流程</h1>
            <h2>Printing Sequence</h2>
            <div class="underLine"></div>
          </el-col>
        </el-row>
        <!-- 两个for打印出6个卡片 -->
        <el-row type="flex" justify="space-around" v-for="cards in printingCard" :key="cards.id">
          <el-col :span="1"></el-col>
          <el-col :span="2" v-for="item in cards.cardContent" :key="item.id">
            <div class="printing-bottom-content bg-blue">
              <h1>{{item.title}}</h1>
              <img :src="item.src" width="80"/>
              <p>{{item.content}}</p>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
        </el-row>
      </div>
      <div class="floor chat">
        <el-row type="flex" justify="center">
          <el-col :span="4" class="floor-title">
            <h1>TA对我们说</h1>
            <h2>Evaluation</h2>
            <div class="underLine"></div>
          </el-col>
        </el-row>
      </div>
      <div class="floor download">
        <el-row type="flex" justify="center">
          <el-col :span="4" class="floor-title">
            <h1>App下载</h1>
            <h2>Download</h2>
            <div class="underLine"></div>
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
      printingCard:[
        {
          id:1,
          cardContent:
          [
            {'id':'1','title':'①制作','src':'static/img/poster-white.png','content':'在线制作海报'},
            {'id':'2','title':'②下单','src':'static/img/money.png','content':'填写收货地址并付款'},
            {'id':'3','title':'③安排','src':'static/img/printer.png','content':'下单24小时内安排印刷'}
          ]
        },
        {
          id:2,
          cardContent:
          [
            {'id':'4','title':'④印刷','src':'static/img/done.png','content':'12小时内完成印刷'},
            {'id':'5','title':'⑤发货','src':'static/img/car.png','content':'印刷完成后12小时内安排发货'},
            {'id':'6','title':'⑥送达','src':'static/img/package.png','content':'敬请耐心等待海报送达'}
          ]
        }        
      ]
    }
  }
}
</script>

<style scoped>
/* 共用部分 */
/* 标题及副标题的字体和颜色 */
  .floor {
    height: 613px;
    padding: 76px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .floor-title h1{
    text-align: center;
    font-size: 30px;
    color: #393939;
  }
  .floor-title h2{
    text-align: center;
    font-size: 20px;
    color: #797979;
  }
  /* 蓝色下划线 */
  .underLine {
    margin: 0 auto;
    margin-top: 20px;
    width: 48px;
    height: 6px;
    background-color: #3688fe;
}
/* 以上是共用部分 */

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
    background-color: #f3f4f8;
  }
  /* 设定卡片的高度 */
  .printing-bottom-content{
    height: 218px;
  }
  /* 设定卡片的长度 */
  .printing .el-row:nth-child(n+2) .el-col{
     flex-basis: 187px;
  }
  /* 卡片的字体样式 */
  .printing .el-row:nth-child(n+2) .el-col div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    text-align: center;
  }
  .printing .el-row:nth-child(n+2) .el-col h1{
    font-size: 18px;
  }
  .printing .el-row:nth-child(n+2) .el-col p{
    font-size: 14px;
    width: 80%;
  }
  /* TA要对我们说层 */
  .chat{
    background-color: #fff;
  }
  /* App下载层 */
  .download{
    background-color: #f3f4f8;
  }
</style>