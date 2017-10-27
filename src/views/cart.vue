<template>
  <main>
    <el-row>
      <el-col :span="22" :offset="1">

        <!-- 标题 -->
        <el-row>
          <el-col :span="24"><div class="cart-title"><i class="iconfont icon-gouwuche"></i>全部商品</div></el-col>
        </el-row>

        <!-- 头部 -->
        <el-row class="cart-thead">
          <el-col :span="11"><div>商品</div></el-col>
          <el-col :span="3"><div>规格</div></el-col>
          <el-col :span="3"><div>数量</div></el-col>
          <el-col :span="2"><div>单价</div></el-col>
          <el-col :span="2"><div>金额</div></el-col>
          <el-col :span="3"><div>操作</div></el-col>
        </el-row>

        <!-- 全选 -->
        <el-row>
          <div id="checkbox-all">
            <input type="checkbox">&nbsp;&nbsp;全选
          </div>
        </el-row>
        <!-- 列表框 -->
        <el-row class="cart-tbody">
          <!-- 商品列 -->
          <el-col :span="11"><div>
            <el-row class="cart-tbody_first">
              <el-col :span="3"><input type="checkbox"></el-col>
              <el-col :span="5"><div><img src="../assets/img/clothes2.png" alt=""></div></el-col>
              <el-col :span="9"><div>冬季男款卫衣</div></el-col>
              <el-col :span="7"><div>红色</div></el-col>
            </el-row>
          </div></el-col>
          <!-- 规格列 -->
          <el-col :span="3"><div class="cart-tbody_second">
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XXL</p>
          </div></el-col>
          <!-- 数量列 -->
          <el-col :span="3"><div class="cart-tbody_third">
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
          </div></el-col>
          <!-- 单价列 -->
          <el-col :span="2"><div>20元</div></el-col>
          <!-- 金额列 -->
          <el-col :span="2"><div>300元</div></el-col>
          <!-- 操作列 -->
          <el-col :span="3"><div><button class="cart-remove">删除</button></div></el-col>
        </el-row>

        <el-row class="cart-tbody">
          <!-- 商品列 -->
          <el-col :span="11"><div>
            <el-row class="cart-tbody_first">
              <el-col :span="3"><input type="checkbox"></el-col>
              <el-col :span="5"><div><img src="../assets/img/poster2.png" alt=""></div></el-col>
              <el-col :span="9"><div>记忆协会海报</div></el-col>
              <!-- <el-col :span="7"><div>红色</div></el-col> -->
            </el-row>
          </div></el-col>
          <!-- 规格列 -->
          <el-col :span="3"><div class="cart-tbody_second">
            <p>65*100cm</p>
          </div></el-col>
          <!-- 数量列 -->
          <el-col :span="3"><div class="cart-tbody_third">
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
          </div></el-col>
          <!-- 单价列 -->
          <el-col :span="2"><div>20元</div></el-col>
          <!-- 金额列 -->
          <el-col :span="2"><div>300元</div></el-col>
          <!-- 操作列 -->
          <el-col :span="3"><div><button class="cart-remove">删除</button></div></el-col>
        </el-row>
        
        <el-row class="cart-tbody">
          <!-- 商品列 -->
          <el-col :span="11"><div>
            <el-row class="cart-tbody_first">
              <el-col :span="3"><input type="checkbox"></el-col>
              <el-col :span="5"><div><img src="../assets/img/banner2.jpg" alt=""></div></el-col>
              <el-col :span="9"><div>横幅</div></el-col>
              <!-- <el-col :span="7"><div>红色</div></el-col> -->
            </el-row>
          </div></el-col>
          <!-- 规格列 -->
          <el-col :span="3"><div class="cart-tbody_second">
            <p>5米</p>
          </div></el-col>
          <!-- 数量列 -->
          <el-col :span="3"><div class="cart-tbody_third">
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
          </div></el-col>
          <!-- 单价列 -->
          <el-col :span="2"><div>20元</div></el-col>
          <!-- 金额列 -->
          <el-col :span="2"><div>300元</div></el-col>
          <!-- 操作列 -->
          <el-col :span="3"><div><button class="cart-remove">删除</button></div></el-col>
        </el-row>
        
        <!-- 底部 -->
        <el-row class="cart-tfoot">
          <el-col :span="4"><div>
            <el-row>
              <el-col :span="12"><input type="checkbox">&nbsp;&nbsp;全选</el-col>
              <el-col :span="6"><button>删除</button></el-col>
            </el-row>
          </div></el-col>
          <el-col :span="4" :offset="9"><div>已勾选<span class="important">12</span>件</div></el-col>
          <el-col :span="4"><div>共计：<span class="important">1000</span>元</div></el-col>
          <el-col :span="3"><div><button class="btn-red">结算</button></div></el-col>
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
    font-size: 14px;
    color: #555;
  }
  img{
    width: 100%;
  }
  button{
    cursor: pointer;
  }


  /*标题*/
  .cart-title{
    font-size: 18px;
    color: #555;
    margin-top: 40px;
  }
  .cart-title > i{
    font-size: 24px;
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


  /*全选*/
  #checkbox-all{
    margin-left: 26px;
  }


  /*列表框*/
  .cart-tbody{
    border: 2px solid #e6eaeb;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 20px 0;
  }
  /*商品列*/
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
  /*规格列 数量列*/
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
  /*单价列 总价列*/
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


  /*底部*/
  .cart-tfoot{
    background-color: #e6eaeb;
    text-align: center;
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
  .cart-tfoot .el-row{
    margin: 0 !important;
  }
  .cart-tfoot .el-row button{
    border: none;
    border-bottom: 1px solid #e6eaeb;
    background-color: #e6eaeb;
    color: #555;
  }
  .cart-tfoot .el-row button:hover{
    border-bottom: 1px solid #555;
  }
  /*红色按钮*/
  .btn-red{
    background-color: #de1100;
    border: none;
    color: #535353;
    padding: 4px 20px;
    color: #fff;
    border-radius: 4px;
  }
  /*着重变红*/
  .important{
    color: #ff0000;
    padding: 0 10px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>