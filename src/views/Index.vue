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
            <el-col :span="3" :push="2">
                <div class="carousel-bottom-content bg-gray">
                  <i class="iconfont icon-tupian2"></i>
                </div>         
              <div class="carousel-bottom-introduce">
                <h1>海报设计</h1>
                <h2>专为社团提供最快捷海报制作</h2>
              </div>            
            </el-col>
            <el-col :span="3">
              <div class="carousel-bottom-content bg-gray">
                <i class="iconfont icon-page"></i>
              </div>
              <div class="carousel-bottom-introduce">
                <h1>横幅制作</h1>
                <h2>横幅想要与众不同只在团图</h2>
              </div>  
            </el-col>
            <el-col :span="3" :pull="2">
              <div class="carousel-bottom-content bg-gray">
                <i class="iconfont icon-weibiaoti101"></i>
              </div>
              <div class="carousel-bottom-introduce">
                <h1>队服定制</h1>
                <h2>衣服在线设计印刷一步搞定</h2>
              </div>  
            </el-col>
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
              <i :class="item.src"></i>
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
        <el-row type="flex" justify="center">
          <el-col :span="7">
            <div class="chat-word" v-for="index in 3" :key="index">
                <img src="../assets/img/head-pic.png">
                <div class="chat-border">
                   <h1>机智少年  福师大信息学院足球协会</h1>
                   <h2>一杯敬故乡，一杯敬远方，守着我的善良， 催着我成长。</h2>
                </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="chat-word right" v-for="index in 3" :key="index">             
              <div class="chat-border right">
                 <h1>机智少年  福师大信息学院足球协会</h1>
                 <h2>一杯敬故乡，一杯敬远方，守着我的善良， 催着我成长。</h2>
              </div>
              <img src="../assets/img/head-pic.png">
            </div>
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
        <el-row type="flex" justify="center">
          <el-col :span="4">
            <img src="../assets/img/phone.png" width="283">
          </el-col>
          <el-col :span="4">
            <img src="../assets/img/QR-code.png" width="218">
            <h1>安卓</h1>
          </el-col>
          <el-col :span="4"> 
            <img src="../assets/img/QR-code.png" width="218">
            <h1>IOS</h1>
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
            {'id':'1','title':'①制作','src':'iconfont icon-tupian2','content':'在线制作海报'},
            {'id':'2','title':'②下单','src':'iconfont icon-qian','content':'填写收货地址并付款'},
            {'id':'3','title':'③安排','src':'iconfont icon-yinshua','content':'下单24小时内安排印刷'}
          ]
        },
        {
          id:2,
          cardContent:
          [
            {'id':'4','title':'④印刷','src':'iconfont icon-wancheng','content':'12小时内完成印刷'},
            {'id':'5','title':'⑤发货','src':'iconfont icon-fahuo','content':'印刷完成后12小时内安排发货'},
            {'id':'6','title':'⑥送达','src':'iconfont icon-cargo','content':'敬请耐心等待海报送达'}
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
    padding-bottom: 9px;
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
  /* 走马灯的宽度 */
  .carousel .el-row:first-child .el-col{
    width: 1268px;
  }
  .el-carousel{
    padding-bottom: 80px;
  }
  /* 设定最低宽度 */
  .carousel .el-row:nth-child(2) .el-col{
    flex-basis: 237px;
    align-items: center;
  }
  .carousel-bottom-content {
    height: 130px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* 图标大小 */
  .carousel-bottom-content i{
     color:#a4afb8;
      font-size: 60px;
  }

  /* 鼠标经过时背景变色 */
  .carousel-bottom-content:hover{
    background-color: #2eb4e9;
  }
   /* 鼠标经过时图标变色 */
  .carousel-bottom-content:hover i{
    color: #FFF;
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
  /* 走马灯样式结束 */

  /* 印刷流程层样式 */
  .printing{
    background-color: #f3f4f8;
  }
  /* 设定卡片的高度 */
  .printing-bottom-content{
    /* align-items: center; */
    height: 218px;
  }
  /* 中间icon大小 */
  .printing-bottom-content i{
    /* align-items: center; */
    font-size: 60px;
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
    justify-content: flex-start;
  }
  .chat .el-row:nth-child(2){
    margin-top: 32px;
  }
  .chat .el-row:nth-child(2) .el-col{
    width: 546px;
  }
  /* 聊天框加头像的布局 */
  .chat .chat-word{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* 右列向下偏移 */
  .chat .chat-word.right{
    margin-top:36px;
  }
  /* 对话框间距 */
  .chat .chat-word:not(:first-child){
    margin-top: 86px;
  }
  /* 左头像的位置 */
  .chat .chat-word img{
    margin-right: 20px;
  }
  /* 右头像的位置 */
  .chat .chat-word img{
    margin-left: 20px;
  }
  /* 对话框样式 */
  .chat .chat-border{
    width: 316px;
    height: 84px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding-left: 12px;
    position: relative;
  }
  /* 对话框左箭头 */
  .chat .chat-border:after{
    content: '';
    position: absolute;
    top: 24px;
    left: -20px;
    border: 10px solid ;
    border-color:  transparent #fff transparent transparent ;
  }
   /* 对话框左箭头 */
  .chat .chat-border.right:after{
    content: '';
    position: absolute;
    top: 24px;
    left: 328px;
    border: 10px solid;
    border-color:  transparent transparent transparent #fff;
  }
  .chat .chat-border h1{
    padding-top: 5px;
    font-size: 12px;
    font-weight: lighter;
  }
  .chat .chat-border h2{
    margin-top: 7px;
    font-size: 16px;
    font-weight: lighter;
  }

  /* App下载层 */
  .download{
    background-color: #f3f4f8;
  }
  /* 内部布局 */
  .download .el-row:nth-child(n+2) .el-col{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 286px;
  }
  /* 文字样式位置 */
  .download .el-row:nth-child(n+2) .el-col:nth-child(n+2) h1{
      margin-top: 26px;
      font-size: 22px;
  }
</style>