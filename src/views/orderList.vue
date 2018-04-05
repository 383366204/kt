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

            <good-floor v-for="(good,index) in goods" :key="index" :good="good" :page="3"></good-floor>

            <!-- 分页 -->
            <el-pagination
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>

          </el-tab-pane>


          <el-tab-pane label="待付款" name="second"></el-tab-pane>
          <el-tab-pane label="待发货" name="fourth"></el-tab-pane>
          <el-tab-pane label="待收货" name="fifth"></el-tab-pane>
          <el-tab-pane label="已完成" name="sixth"></el-tab-pane>
        </el-tabs>

        
      </el-col>
    </el-row>
  </main>
</template>

<script>
import goodFloor from '@/components/goodFloor';
export default {
  name: 'cart',
  data () {
    return {
      listItems: ['buy food', 'play games', 'sleep'],
      num1: 1,
      activeName: 'first',
      goods:[{
        id:10001,
        type:1,
        status:1,
        name:'冬季男款卫衣',
        description:'红色',
        src:'../../static/clothes2.png',
        size:['S','M','L','XL','XXl'],
        num:[10,5,5,5,5],
        price:200
      },{
        id:10002,
        type:2,
        status:2,
        name:'记忆协会海报',
        description:'',
        src:'../../static/poster2.png',
        size:['65*100cm'],
        num:[10],
        price:50
      },{
        id:10003,
        type:3,
        status:3,
        name:'横幅',
        description:'',
        src:'../../static/banner2.jpg',
        size:['5m'],
        num:[10],
        price:50
      },{
        id:10004,
        type:3,
        status:4,
        name:'横幅',
        description:'',
        src:'../../static/banner2.jpg',
        size:['5m'],
        num:[10],
        price:50
      },{
        id:10005,
        type:3,
        status:5,
        name:'横幅',
        description:'',
        src:'../../static/banner2.jpg',
        size:['5m'],
        num:[10],
        price:50
      }]
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components:{goodFloor}
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
  /* 去掉最右边的border */
  .cart-thead div:last-child{
    border-right: none;
  }
  .el-row {
    margin-bottom: 20px;
  }
</style>