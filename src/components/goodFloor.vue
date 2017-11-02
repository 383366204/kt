<template>
    <!-- 列表框 -->
    <el-row class="cart-tbody">
        <el-col :span="11">
            <el-row class="cart-tbody_first">
                 <!-- 購物車或者訂單列表會出現checkbox -->
                <el-col :span="3" v-if="good.page==1"><input type="checkbox"></el-col>
                <!-- 訂單消息頁沒有checkbox -->
                <el-col :span="3" v-else-if="good.page==2||good.page==3"></el-col>
                <el-col :span="5"><div><img :src="good.src"></div></el-col>
                <el-col :span="9"><div>{{good.name}}</div></el-col>
                <el-col :span="7" v-if="good.type==1"><div>{{good.description}}</div></el-col>
            </el-row>
        </el-col>

        <el-col :span="3">
            <div class="cart-tbody_second">
                <p v-for="(size,index) in good.size" :key="index">{{size}}</p>
            </div>
        </el-col>

        <el-col :span="3" v-if="good.page==1">
          <div class="cart-tbody_third">
            <el-input-number v-for="(num,index) in good.num" :key="index" v-model="good.num[index]" @change="handleChange" :min="1" :max="99" size="small"></el-input-number>
          </div>
        </el-col>

        <el-col :span="3" v-else>
            <div class="cart-tbody_third">
                <p v-for="(num,index) in good.num" :key="num">{{num}}</p>
            </div>
        </el-col>


        <!-- page =1 或 2代表是在購物車或者訂單 -->
        <el-col :span="2" v-if="good.page==1||good.page==2" class="colorRed"><div>{{good.price}}</div></el-col>
        <el-col :span="2" v-if="good.page==1||good.page==2" class="colorRed"><div>{{getSum(good)}}</div></el-col>
        <el-col :span="3" v-if="good.page==1||good.page==2">
          <div><button class="cart-remove">删除</button></div>
        </el-col>

        <!-- page = 3代表是在訂單列表 -->
        <el-col :span="2" v-if="good.page==3" class="colorRed"><div>{{getSum(good)}}</div></el-col>
        <el-col :span="2" v-if="good.page==3" class="colorGray"><div>{{getStatus(good.status)}}</div></el-col>
        <el-col :span="3" v-if="good.page==3 && good.status==1">
            <div><button class="btn btn-blue">付款</button></div>
            <div><button class="btn btn-gray">删除</button></div>
        </el-col>

        <el-col :span="3" v-else-if="good.page==3 && good.status==2">
            <div><button class="btn btn-blue">退换货</button></div>
            <div><button class="btn btn-gray">提醒制作</button></div>
        </el-col>

        <el-col :span="3" v-else-if="good.page==3 && good.status==3">
            <div><button class="btn btn-blue">提醒发货</button></div>
        </el-col>

        <el-col :span="3" v-else-if="good.page==3 && good.status==4">
            <div><button class="btn btn-blue">查看物流</button></div>
        </el-col>

        <el-col :span="3" v-else-if="good.page==3 && good.status==5">
            <div><button class="btn btn-gray" style="margin-top:0">删除</button></div>
        </el-col>

    </el-row>
</template>

<script>
export default {
  data () {
    return {
        status:['','待付款','待制作','待发货','待收货','已完成'],
        // page代表頁面 1：購物車 2：訂單 3：訂單列表
        // type代表商品种类 1：服装 2:海报 3:横幅
        // status代表商品状态 1:待付款 2:待制作 3:待发货 4:待收货 5:已完成
        // name代表商品名称
        // description代表描述
        // src代表商品图片的链接
        // price代表价钱
        // size代表规格
        // num代表数量
    }
  },
  props:{
      good:{
          type:Object,
          default:function(){
              return {
                page:3,
                type:1,
                status:1,
                name:'冬季男款卫衣',
                description:'红色',
                src:'../../static/clothes2.png',
                size:['S','M','L','XL','XXl'],
                num:[10,5,5,5,5],
                price:200
              }
          }
      }
  },
  computed:{
    
  },
  methods: {
      getStatus: function(status) {
        return this.status[status];
      },
      getSum(good){
      let numSum=0;
      for (let i = 0; i < good.num.length; i++) {
         numSum += good.num[i];
      }
      return numSum*good.price;
    }
  }
}
</script>

<style scoped>

  img{
    width: 100%;
  }
  button{
    cursor: pointer;
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
    margin-bottom: 0px;
  }

  .cart-tbody > .el-col:nth-of-type(4){
    color: #ff0000;
  }
 
  .colorGray{
    color: #aaa;
  }
  .colorRed{
    color: #ff0000;
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
  }
  /*删除按钮*/
  .cart-remove{
    background-color: #e6eaeb;
    border: none;
    color: #535353;
    padding: 4px 20px;
    border-radius: 4px;
  }
</style>