<template>
  <main>
    <el-row>
      <!-- 搜索框 -->
      <el-col :span="12" :offset="6">
        <el-input placeholder="搜索模板" v-model="input" class="input-with-select serch">
          <el-button slot="append" icon="el-icon-search"><i class="iconfont icon-fangdajing"></i></el-button>
        </el-input>
      </el-col>
      <!-- 面包屑导航栏 -->
      <el-col :span="16" :offset="4">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">衣服</el-breadcrumb-item>
          <el-breadcrumb-item>卫衣</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <!-- 海报展示及购买 -->
      <el-col :span="16" :offset="4">
        <el-row>
          <!-- 左边的海报图 -->
          <el-col :span="11">
            <div class="clothes-lt">
              <img src="../assets/img/clothes2.png">
              <ul>
                <li>正面</li>
                <li>左侧面</li>
                <li>右侧面</li>
                <li>背面</li>
              </ul>
            </div>
          </el-col>
          <!-- 右边的选项及信息 -->
          <el-col :span="11" :offset="2">
            <div class="p-name">冬季男款卫衣</div>

            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" class="p-order">
              <el-form-item label="颜色：">
                <el-select size="small" v-model="value">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>

              <ul class="cloth-size">
                <li>
                  <ul>
                    <li>尺码</li>
                    <li>数量</li>
                    <li>有无货</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>S</li>
                    <li><el-input-number size="small" v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number></li>
                    <li>有</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>M</li>
                    <li><el-input-number size="small" v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number></li>
                    <li>有</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>L</li>
                    <li><el-input-number size="small" v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number></li>
                    <li>有</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>XL</li>
                    <li><el-input-number size="small" v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number></li>
                    <li>有</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>XXL</li>
                    <li><el-input-number size="small" v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number></li>
                    <li>有</li>
                  </ul>
                </li>
              </ul>

              <el-form-item label="价格：">
                <p><span class="important">70</span>元</p>
              </el-form-item>
              <p class="msg">(仅为当前设计价格，随设计的改变而改变)</p>
            </el-form>

            <ul class="p-btn">
              <li><el-button type="primary">开启设计</el-button></li>
              <li><el-button type="primary">直接下载</el-button></li>
              <li><el-button type="primary">加入购物车</el-button></li>
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
      options: [{
        value: '1',
        label: '白色'
      }, {
        value: '2',
        label: '红色'
      }],
      value: '',
      listItems: ['buy food', 'play games', 'sleep'],
      
      input: "",
      labelPosition: 'right',
      formLabelAlign: {
        num: 1,
      }
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>
<style>
  .serch .el-input__inner{
    border-right: none;
  }
  
</style>
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
  .el-col {
    margin-bottom: 20px;
  }
  .el-col .el-col{
    margin-bottom: 0;
  }


  /*搜索框*/
  .serch{
    margin-top: 20px;
  }
  .serch .el-button{
    padding: 0 10px;
  }
  .serch .el-button i{
    font-size: 24px;
    color: #707070;
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
  .clothes-lt ul{
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .clothes-lt ul li{
    width: 72px;
    height: 72px;
    border: 1px solid #aaa;
    text-align: center;
    line-height: 72px;
  }


  /*右边订单选择*/
  .p-name{
    font-size: 18px;
    margin: 20px 0 20px 19px;
    font-weight: 700;
  }
  .cloth-size > li{
    margin-bottom: 10px;
  }
  .cloth-size ul > li{
    display: inline-block;
    text-align: center;
    width: 32%;
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
  .detial div:nth-of-type(3){
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
    margin-right: 10px;
    font-size: 16px;
  }
  .msg{
    color: #e1321b;
    margin-bottom: 10px;
    margin-top: -10px;
  }
</style>