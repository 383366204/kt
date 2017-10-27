<template>
  <main>
    <el-row>
      <el-col :span="22" :offset="1">
        <!-- 导航栏 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部订单" name="first">
            
            <!-- 头部 -->
            <el-row class="cart-thead">
              <el-col :span="11"><div>商品</div></el-col>
              <el-col :span="3"><div>规格</div></el-col>
              <el-col :span="3"><div>数量</div></el-col>
              <el-col :span="2"><div>实付款</div></el-col>
              <el-col :span="2"><div>状态</div></el-col>
              <el-col :span="3"><div>操作</div></el-col>
            </el-row>

            <!-- 列表框 -->
            <el-row class="cart-tbody">
              <el-col :span="11"><div>
                <el-row class="cart-tbody_first">
                  <el-col :span="3"></el-col>
                  <el-col :span="5"><div><img src="../assets/img/clothes2.png" alt=""></div></el-col>
                  <el-col :span="9"><div>冬季男款卫衣</div></el-col>
                  <el-col :span="7"><div>红色</div></el-col>
                </el-row>
              </div></el-col>
              <el-col :span="3"><div class="cart-tbody_second">
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
                <p>XXL</p>
              </div></el-col>
              <el-col :span="3"><div class="cart-tbody_third">
                <p>10</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
              </div></el-col>
              <el-col :span="2"><div>200元</div></el-col>
              <el-col :span="2"><div>待付款</div></el-col>
              <el-col :span="3">
                <div><button class="btn btn-blue">付款</button></div>
                <div><button class="btn btn-gray">删除</button></div>
              </el-col>
            </el-row>

            <!-- 列表框 -->
            <el-row class="cart-tbody">
              <el-col :span="11"><div>
                <el-row class="cart-tbody_first">
                  <el-col :span="3"></el-col>
                  <el-col :span="5"><div><img src="../assets/img/poster2.png" alt=""></div></el-col>
                  <el-col :span="9"><div>记忆协会海报</div></el-col>
                  <!-- <el-col :span="7"><div>红色</div></el-col> -->
                </el-row>
              </div></el-col>
              <el-col :span="3"><div class="cart-tbody_second">
                <p>65*100cm</p>
              </div></el-col>
              <el-col :span="3"><div class="cart-tbody_third">
                <p>10</p>
              </div></el-col>
              <el-col :span="2"><div>50元</div></el-col>
              <el-col :span="2"><div>待制作</div></el-col>
              <el-col :span="3">
                <div><button class="btn btn-blue">退换货</button></div>
                <div><button class="btn btn-gray">提醒制作</button></div>
              </el-col>
            </el-row>

            <!-- 列表框 -->
            <el-row class="cart-tbody">
              <el-col :span="11"><div>
                <el-row class="cart-tbody_first">
                  <el-col :span="3"></el-col>
                  <el-col :span="5"><div><img src="../assets/img/banner2.jpg" alt=""></div></el-col>
                  <el-col :span="9"><div>横幅</div></el-col>
                  <!-- <el-col :span="7"><div>红色</div></el-col> -->
                </el-row>
              </div></el-col>
              <el-col :span="3"><div class="cart-tbody_second">
                <p>5米</p>
              </div></el-col>
              <el-col :span="3"><div class="cart-tbody_third">
                <p>10</p>
              </div></el-col>
              <el-col :span="2"><div>50元</div></el-col>
              <el-col :span="2"><div>待发货</div></el-col>
              <el-col :span="3">
                <div><button class="btn btn-blue">提醒发货</button></div>
              </el-col>
            </el-row>

            <!-- 列表框 -->
            <el-row class="cart-tbody">
              <el-col :span="11"><div>
                <el-row class="cart-tbody_first">
                  <el-col :span="3"></el-col>
                  <el-col :span="5"><div><img src="../assets/img/banner2.jpg" alt=""></div></el-col>
                  <el-col :span="9"><div>横幅</div></el-col>
                  <!-- <el-col :span="7"><div>红色</div></el-col> -->
                </el-row>
              </div></el-col>
              <el-col :span="3"><div class="cart-tbody_second">
                <p>5米</p>
              </div></el-col>
              <el-col :span="3"><div class="cart-tbody_third">
                <p>10</p>
              </div></el-col>
              <el-col :span="2"><div>50元</div></el-col>
              <el-col :span="2"><div>待收货</div></el-col>
              <el-col :span="3">
                <div><button class="btn btn-blue">查看物流</button></div>
              </el-col>
            </el-row>

            <!-- 列表框 -->
            <el-row class="cart-tbody">
              <el-col :span="11"><div>
                <el-row class="cart-tbody_first">
                  <el-col :span="3"></el-col>
                  <el-col :span="5"><div><img src="../assets/img/banner2.jpg" alt=""></div></el-col>
                  <el-col :span="9"><div>横幅</div></el-col>
                  <!-- <el-col :span="7"><div>红色</div></el-col> -->
                </el-row>
              </div></el-col>
              <el-col :span="3"><div class="cart-tbody_second">
                <p>5米</p>
              </div></el-col>
              <el-col :span="3"><div class="cart-tbody_third">
                <p>10</p>
              </div></el-col>
              <el-col :span="2"><div>50元</div></el-col>
              <el-col :span="2"><div>已完成</div></el-col>
              <el-col :span="3">
                <div></div>
              </el-col>
            </el-row>
            <!-- 分页 -->
            <el-pagination
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>

          </el-tab-pane>


          <el-tab-pane label="待付款" name="second"></el-tab-pane>
          <el-tab-pane label="待制作" name="third"></el-tab-pane>
          <el-tab-pane label="待发货" name="fourth"></el-tab-pane>
          <el-tab-pane label="待收货" name="fifth"></el-tab-pane>
          <el-tab-pane label="已完成" name="sixth"></el-tab-pane>
        </el-tabs>

        
      </el-col>
    </el-row>
  </main>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      listItems: ['buy food', 'play games', 'sleep'],
      num1: 1,
      activeName: 'first'
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style>
  /*导航栏样式修改*/
  .el-tabs__header{
    border-bottom: none !important;
  }
  .el-tabs__item{
    font-size: 16px;
  }
  .el-tabs__nav-wrap{
    margin: 30px 0 20px;
  }
  .el-tabs__item{
    font-weight: 700;
  }
  .el-tabs__item.is-active{
    color: #555;
  }
  .el-tabs__active-bar{
    background-color: #2eb4e9;
  }

  /*分页样式修改*/
  .el-pagination{
    text-align: center;
    margin-bottom: 20px;
  }
  .el-pagination button,
  .el-pagination span, 
  .el-pager li{
    min-width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .el-pager li.btn-quicknext, 
  .el-pager li.btn-quickprev{
    line-height: 40px;
  }
  .el-pagination .btn-prev,
  .el-pagination .el-pager li{
    margin-right: 10px;
  }
  .el-pagination button,
  .el-pagination .el-pager li{
    border-radius: 4px !important;
    border: 1px solid #d1dbe5 !important;
  }
</style>
<style scoped>
  main{
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
  }
  img{
    width: 100%;
  }
  button{
    cursor: pointer;
  }


  /*标题*/
  .cart-title{
    font-size: 20px;
    color: #555;
    margin-top: 40px;
  }
  .cart-title > i{
    font-size: 26px;
    color: #2eb4e9;
    margin-right: 10px;
  }


  /*头部*/
  .cart-thead div{
    background-color: #e6eaeb;
    text-align: center;
    color: #666;
    padding: 4px 0;
    border-right: 1px solid #d7dadb;
  }
  

  /*列表框*/
  .cart-tbody{
    border: 2px solid #e6eaeb;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 20px 0;
  }

  .cart-tbody_first{
    margin: 0 !important;
    padding: 20px 0;
    display: flex;
    align-items: center;
  }
  .cart-tbody_first .el-col:nth-of-type(2){
    border: 1px dotted #c2c2c2;
    padding: 4px;
  }
  .cart-tbody_first .el-col:nth-of-type(4){
    color: #aaa;
  }
  
  .cart-tbody_second > p,
  .cart-tbody_third > p{
    height: 30px;
    line-height: 30px;
    margin-bottom: 8px;
  }
  .cart-tbody_second > p:last-of-type,
  .cart-tbody_third > p:last-of-type{
    margin-bottom: 0;
  }

  .cart-tbody_third > .el-input-number{
    margin-bottom: 8px;
  }
  .cart-tbody_third > .el-input-number:last-of-type{
    margin-bottom: 0;
  }

  .cart-tbody > .el-col:nth-of-type(4){
    color: #ff0000;
  }
  .cart-tbody > .el-col:nth-of-type(5){
    color: #aaa;
  }
  
  /*按钮*/
  .btn{
    border: none;
    color: #535353;
    padding: 4px 0;
    width: 70px;
    border-radius: 2px;
  }
  .btn-blue{
    background-color: #00b7ff;
    color: #fff;
  }
  .btn-gray{
    background-color: #e6eaeb;
    margin-top: 10px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>