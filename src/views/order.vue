<template>
  <main>
    <el-row>

      <!-- 编辑收货地址 -->
      <el-col :span="22" :offset="1">

        <el-row>
          <el-col :span="24"><div class="cart-title"><i class="iconfont icon-shouhuo1"></i>收货地址</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1">
            <el-row>
              <el-col :span="2">
                <div class="address-title"><i class="iconfont icon-dingwei"></i>寄送至</div>
              </el-col>
              <el-col :span="22">
                <ul class="address">
                  <li><input type="checkbox"></li>
                  <li>福建省福州市闽侯县上街镇</li>
                  <li>乌龙江大道高新区27号楼2单元101室</li>
                  <li>（<span>团小图</span> 收）</li>
                  <li>12345678901</li>
                  <li>默认地址</li>
                </ul>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="2"><div>&nbsp;</div></el-col>
              <el-col :span="22">
                <ul class="address">
                  <li><input type="checkbox"></li>
                  <li>福建省福州市闽侯县上街镇</li>
                  <li>乌龙江大道高新区27号楼2单元101室</li>
                  <li>（<span>团小图</span> 收）</li>
                  <li>12345678901</li>
                  <li></li>
                </ul>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="2"><div>&nbsp;</div></el-col>
              <el-col :span="22">
                <ul class="address">
                  <li><input type="checkbox"></li>
                  <li>福建省福州市闽侯县上街镇</li>
                  <li>乌龙江大道高新区27号楼2单元101室</li>
                  <li>（<span>团小图</span> 收）</li>
                  <li>12345678901</li>
                  <li></li>
                </ul>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>


      <el-col :span="22" :offset="1">
        <!-- 标题 -->
        <el-row>
          <el-col :span="24"><div class="cart-title"><i class="iconfont icon-queren2"></i>确认订单信息</div></el-col>
        </el-row>
        <!-- 订单头部 -->
        <el-row class="cart-thead">
          <el-col :span="11"><div>商品</div></el-col>
          <el-col :span="3"><div>规格</div></el-col>
          <el-col :span="3"><div>数量</div></el-col>
          <el-col :span="2"><div>单价</div></el-col>
          <el-col :span="2"><div>金额</div></el-col>
          <el-col :span="3"><div>操作</div></el-col>
        </el-row>
      
        <good-floor v-for="(good,index) in goods" :key="index" :good="good"></good-floor>

        <!-- 留言框 -->
        <el-row>
        留言：<el-input size="small" placeholder="例如：要求哪家快递公司配送" v-model="liuyan"></el-input>
        </el-row>
        <!-- 详细信息 -->
        <el-row class="detail">
          <ul>
            <li>总金额：<span class="important">66666</span>元</li>
            <li>寄送至：福建省 福州市 闽侯县 上街镇 乌龙江大道</li>
            <li>高新区27号楼2单元101室</li>
            <li>收货人：团小图 12345678901</li>
          </ul>
        </el-row>
        <!-- 提交按钮 -->
        <el-row class="order-tj">
          <button class="btn btn-red">提交订单</button>
        </el-row>
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
      liuyan: '',
      goods:[{
        id:10001,
        page:2,
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
        page:2,
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
        page:2,
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
        page:2,
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
        page:2,
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
    }
  },
  components:{
    goodFloor
  }
}
</script>

<style scoped>
  main{
    width: 1200px;
    margin: 0 auto;
    color: #555;
    font-size: 14px;
  }
  img{
    width: 100%;
  }
  button{
    cursor: pointer;
  }

  /*收货地址选择*/
  .address-title{
    color: #de1100;
    font-weight: 700;
  }
  .address-title i{
    margin-right: 10px;
  }
  .address li{
    display: inline-block;
    margin-left: 10px;
    color: #666;
  }
  .address li:nth-of-type(5),
  .address li:nth-of-type(6){
    color: #aaa;
  }


  /*确认订单*/
  /*标题*/
  .cart-title{
    font-size: 18px;
    color: #555;
    margin-top: 40px;
  }
  .cart-title > i{
    font-size: 22px;
    color: #2eb4e9;
    margin-right: 10px;
  }
  /*订单头部*/
  .cart-thead div{
    background-color: #e6eaeb;
    text-align: center;
    color: #666;
    padding: 4px 0;
    border-right: 1px solid #d7dadb;
  }

  /*留言框*/
  .el-input{
    width: 500px;
  }

  /*详细信息*/
  .detail{
    font-size: 16px;
  }
  .detail ul{
    float: right;
    text-align: right;
    width: 500px;
    border: 1px solid #de1100;
    padding: 14px 20px;
    border-radius: 4px;
  }
  .detail li{
    margin-bottom: 10px;
  }
  .detail li:last-of-type{
    margin-bottom: 0;
  }
  .important{
    color: #ff0000;
    padding: 0 10px;
    font-size: 18px;
  }
  /*提交订单按钮*/
  .order-tj{
    float: right;
  }
  .btn{
    border: none;
    padding: 6px 20px;
    border-radius: 4px;
  }
  .btn-red{
    background-color: #de1100;
    color: #fff;
    font-size: 14px;
  }


  .el-row {
    margin-bottom: 20px;
  }
</style>