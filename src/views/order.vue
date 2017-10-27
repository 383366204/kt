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
      
        <!-- 订单列表框 -->
        <el-row class="cart-tbody">
          <el-col :span="11"><div>
            <el-row class="cart-tbody_first">
              <el-col :span="3"><input type="checkbox"></el-col>
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
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
          </div></el-col>
          <el-col :span="2"><div>20元</div></el-col>
          <el-col :span="2"><div>300元</div></el-col>
          <el-col :span="3"><div><button class="cart-remove">删除</button></div></el-col>
        </el-row>
        <!-- 订单列表框 -->
        <el-row class="cart-tbody">
          <el-col :span="11"><div>
            <el-row class="cart-tbody_first">
              <el-col :span="3"><input type="checkbox"></el-col>
              <el-col :span="5"><div><img src="../assets/img/poster2.png" alt=""></div></el-col>
              <el-col :span="9"><div>记忆协会海报</div></el-col>
              <!-- <el-col :span="7"><div>红色</div></el-col> -->
            </el-row>
          </div></el-col>
          <el-col :span="3"><div class="cart-tbody_second">
            <p>65*100cm</p>
          </div></el-col>
          <el-col :span="3"><div class="cart-tbody_third">
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
          </div></el-col>
          <el-col :span="2"><div>20元</div></el-col>
          <el-col :span="2"><div>300元</div></el-col>
          <el-col :span="3"><div><button class="cart-remove">删除</button></div></el-col>
        </el-row>
        <!-- 订单列表框 -->
        <el-row class="cart-tbody">
          <el-col :span="11"><div>
            <el-row class="cart-tbody_first">
              <el-col :span="3"><input type="checkbox"></el-col>
              <el-col :span="5"><div><img src="../assets/img/banner2.jpg" alt=""></div></el-col>
              <el-col :span="9"><div>横幅</div></el-col>
              <!-- <el-col :span="7"><div>红色</div></el-col> -->
            </el-row>
          </div></el-col>
          <el-col :span="3"><div class="cart-tbody_second">
            <p>5米</p>
          </div></el-col>
          <el-col :span="3"><div class="cart-tbody_third">
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
          </div></el-col>
          <el-col :span="2"><div>20元</div></el-col>
          <el-col :span="2"><div>300元</div></el-col>
          <el-col :span="3"><div><button class="cart-remove">删除</button></div></el-col>
        </el-row>

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
export default {
  name: 'cart',
  data () {
    return {
      listItems: ['buy food', 'play games', 'sleep'],
      num1: 1,
      liuyan: ''
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
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

  /*订单列表框*/
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
  
  .cart-tbody_second > p{
    height: 30px;
    line-height: 30px;
    margin-bottom: 8px;
  }
  .cart-tbody_second > p:last-of-type{
    margin-bottom: 0;
  }
  .cart-tbody_third > .el-input-number{
    margin-bottom: 8px;
  }
  .cart-tbody_third > .el-input-number:last-of-type{
    margin-bottom: 0;
  }

  .cart-tbody > .el-col:nth-of-type(4),
  .cart-tbody > .el-col:nth-of-type(5){
    color: #ff0000;
  }

  /*删除按钮*/
  .cart-remove{
    background-color: #e6eaeb;
    border: none;
    color: #535353;
    padding: 4px 20px;
    border-radius: 4px;
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
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>