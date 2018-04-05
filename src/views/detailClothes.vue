<template>
  <main>
    <el-row>
      <!-- 面包屑导航栏 -->
      <el-col :span="16" :offset="4" class="margin-top">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: `/Search` }">燃气灶</el-breadcrumb-item>
          <el-breadcrumb-item>开田燃气灶</el-breadcrumb-item>
          <el-breadcrumb-item>H82</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <!-- 海报展示及购买 -->
      <el-col :span="16" :offset="4">
        <el-row>
          <!-- 左边的海报图 -->
          <el-col :span="11">
            <div class="clothes-lt">
              <img src="../assets/img/clothes2.png">
            </div>
          </el-col>
          <!-- 右边的选项及信息 -->
          <el-col :span="11" :offset="2">
            <div class="p-name">开田燃气灶H82</div>
            <div class="p-size">开孔尺寸：98.7*109.18</div>
            <div class="p-size">面板材料：钢化玻璃</div>
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" class="p-order">
              <el-form-item label="气源：">
                <el-radio-group v-model="fireType" size="small" class="mainColor">
                  <el-radio-button :label="1">天然气</el-radio-button>
                  <el-radio-button :label="2">液化气</el-radio-button>
                </el-radio-group>
              </el-form-item>

              <ul class="count">
                <li>数量：</li>
                <li><el-input-number size="small" v-model="num1" @change="handleChange" :min="1" :max="10" controls-position="right"></el-input-number></li>
                <li>库存<span class="stock">100</span>件</li>
              </ul>

              <el-form-item label="价格：">
                <p><span class="important">70</span>元</p>
              </el-form-item>

              <el-form-item label="运费：" class="transPrice">
                <p><span class="important">10</span>元</p>
              </el-form-item>

            </el-form>

            <ul class="p-btn">
              <li><el-button type="primary">立即购买</el-button></li>
              <li><el-button type="primary" @click="addToCart()">加入购物车</el-button></li>
            </ul>
            
          </el-col>
        </el-row>
      </el-col>
      <!-- 详细信息标题 -->
      <el-col :span="16" :offset="4">
        <div class="detial-title"><i class="iconfont icon-detail"></i>详细信息</div>
      </el-col>
      <!-- 详细信息 -->
      <el-col :span="16" :offset="4" class="detial">
        <div>
          <ul>
            <li>详情</li>
            <li>参数规格</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>品牌名称：Teamto/团图</li>
            <li>上市时间：2017年冬季</li>
            <li>材料成分：纯棉</li>
            <li>货号：tt40090909</li>
            <li>风格：嘻哈风</li>
          </ul>
        </div>
        <div>
          <p><i class="iconfont icon-zhuyi"></i>注意</p>
          <p>尊敬的客户，凡在我平台直接购买<span class="msg">无修改</span>原有设计可以在<span class="msg">10天内退换货</span>。</p>
          <p>凡是<span class="msg">个性设计后</span>购买的衣服，由于无法转售给他人，所以本站<span class="msg">不支持退换货</span>，给您造成的不便尽请谅解</p>
        </div>
        <div>
          <ul>
            <li>正面图</li>
            <li>侧面图</li>
            <li>背面图</li>
            <li>效果图</li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </main>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      num1:1,
      fireType: 1,
      value: '',
      listItems: ['buy food', 'play games', 'sleep'], 
      input: '',
      labelPosition: 'right',
      formLabelAlign: {
        num: 1,
      }
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    addToCart(){

    }
  },
  mounted:function(){
    console.log(this.$route.params);
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
  .margin-top{
    margin-top:20px;
  }
  img{
    width: 100%;
  }
  button{
    cursor: pointer;
  }
  .el-col {
    margin-bottom: 20px;
  }
  .el-col .el-col{
    margin-bottom: 0;
  }

  /*左边海报图*/
  .clothes-lt{
    border: 1px solid #aaa;
    padding: 15px;
    padding-bottom: 20px;
    border-radius: 5px;
  }
  .clothes-lt img{
    width: 100%;
    margin: 20px 0;
  }

  /*右边订单选择*/
  .p-name{
    font-size: 18px;
    margin: 20px 0 20px 44px;
    font-weight: 700;
  }
  .p-size{
    color: #999;
    margin: 0px 0px 14px 46px;
  }
  /* 数量 */
  .count{
    margin-top: 18px;
  }
  .count > li{
    margin-bottom: 10px;
    display: inline-block;
    text-align: center;
  }
  /* 数量左边的字体 */
   .count > li:first-child{
    margin-left: 47px;
  }
  /* 数量右边的计数器 */
   .count > li >>> .el-input-number{
    margin-left: 8px;
    margin-right: 8px;
  }
  .count .stock{
    color: #e1321b;
  }
  .el-form-item{
    margin-bottom: 4px;
  }

  /*尺寸选择按钮*/
  .spe-btn li{
    display: inline-block;
    width: 50%;
  }
  .spe-btn li .el-button{
    width: 124px;
    margin-bottom: 10px;
    border-radius: 3px;
  }
  .spe-btn li .el-button:hover,
  .spe-btn li .active{
    background-color: #2eb4e9;
    color: #fff;
    border: 1px solid #fff;
  }
  /*跳转按钮*/
  .p-btn li{
    text-align: center;
  }
  .p-btn li .el-button{
    width: 280px;
    margin-bottom: 16px;
    border-radius: 4px;
    background-color: #2eb4e9;
    border-color: #2eb4e9;
  }
  .p-btn li .el-button:hover{
    color: #000;
  }


  /*详细信息*/
  .detial-title{
    font-size: 18px;
    color: #555;
    margin-top: 40px;
  }
  .detial-title > i{
    font-size: 20px;
    color: #2eb4e9;
    margin-right: 10px;
  }

  .detial{
    border: 1px solid #aaa;
    border-radius: 5px;
  }
  .detial > div{
    border-bottom: 1px solid #aaa;
    padding: 20px;
  }
  .detial > div:last-of-type{
    border-bottom: none;
  }

  .detial div:first-of-type{
    padding: 8px 0;
    font-weight: 700;
  }
  .detial div:first-of-type li{
    border-right: 1px solid #aaa;
    display: inline-block;
    padding: 12px 20px;
  }
  .detial div:first-of-type li:last-of-type{
    margin-bottom: 0;
    border-right: none;
  }

  .detial div:nth-of-type(2){
    
  }
  .detial div:nth-of-type(2) li{
    margin-bottom: 15px;
    display: inline-block;
    width: 32%;
  }
  .detial div:nth-of-type(2) li:first-of-type{
    width: 100%;
  }
  .detial div:nth-of-type(2) li:last-of-type{
    margin-bottom: 0;
  }

  .icon-zhuyi{
    color: #ffc876;
    margin-right: 4px;
    font-size: 14px;
  }

  .detial div:nth-of-type(3) p{
    margin-bottom: 10px;
  }
  .detial div:nth-of-type(3) p:last-of-type{
    margin-bottom: 0;
  }
  .detial div:nth-of-type(4) li{
    border: 1px dashed #aaa;
    margin-bottom: 10px;
    height: 400px;
    text-align: center;
  }
  .detial div:nth-of-type(4) li:last-of-type{
    margin-bottom: 0;
  }
  
  .important{
    color: #e50000;
    margin-right: 8px;
    font-size: 16px;
  }
  .msg{
    color: #e1321b;
    margin-bottom: 10px;
    margin-top: -10px;
  }
  /* 运费 */
  .transPrice >>> label,.transPrice >>> p{
    height: 30px;
    line-height: 15px;
  }
  /* 主色调 */
  /* 起源按钮颜色 */
  .mainColor >>> .is-active  .el-radio-button__inner {
    background-color: #2eb4e9;
    border-color: #2eb4e9;
  }
  .mainColor >>> :not(.is-active) .el-radio-button__inner:hover{
    color: #2eb4e9
  }
</style>