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
          <el-breadcrumb-item :to="{ path: '/' }">横幅</el-breadcrumb-item>
          <el-breadcrumb-item>横幅</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <!-- 海报展示及购买 -->
      <el-col :span="16" :offset="4">
        <el-row>
          <!-- 左边的海报图 -->
          <el-col :span="11">
            <div class="banner-show">
              <img src="../assets/img/banner2.jpg">
              <p>横幅展示图</p>
            </div>
          </el-col>
          <!-- 右边的选项及信息 -->
          <el-col :span="11" :offset="2">
            <div class="p-name">十佳歌手大赛海报</div>

            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" class="p-order">
              <el-form-item label="材料：">
                <p class="color-gray">灯布喷绘</p>
              </el-form-item>
              <el-form-item label="宽度：">
                <p class="color-gray">70cm</p>
              </el-form-item>
              <el-form-item label="长度：">
                <el-input-number :min="1" size="small" v-model="formLabelAlign.num"></el-input-number> 米
              </el-form-item>
              <el-form-item label="印刷单价：">
                <p><span class="important">5</span> 元/米</p>
              </el-form-item>
              <el-form-item label="总价：">
                <p><span class="important">25</span>元</p>
              </el-form-item>
            </el-form>

            <ul class="p-btn">
              <li><el-button type="primary">开启设计</el-button></li>
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
            <li>材料：灯布喷绘</li>
            <li>厚度：0.02cm</li>
          </ul>
        </div>
        <div>商品照片</div>
        <div>商品照片</div>
      </el-col>
      <!-- 模板推荐标题 -->
      <el-col :span="16" :offset="4">
        <div class="detial-title"><i class="iconfont icon-moban"></i>相关模板推荐</div>
      </el-col>
      <!-- 模板推荐 -->
      <el-col :span="16" :offset="4" class="recommend">
        <div class="post-lt">
          <img src="../assets/img/banner2.jpg">
          <p>英语演讲大赛</p>
        </div>
        <div class="post-lt">
          <img src="../assets/img/banner2.jpg">
          <p>英语演讲大赛</p>
        </div>
        <div class="post-lt">
          <img src="../assets/img/banner2.jpg">
          <p>英语演讲大赛</p>
        </div>
        <div class="post-lt">
          <img src="../assets/img/banner2.jpg">
          <p>英语演讲大赛</p>
        </div>
        <div class="post-lt">
          <img src="../assets/img/banner2.jpg">
          <p>英语演讲大赛</p>
        </div>
        <div class="post-lt">
          <img src="../assets/img/banner2.jpg">
          <p>英语演讲大赛</p>
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
  /*左边横幅图*/
  .banner-show{
    border: 1px solid #aaa;
    padding: 15px;
    padding-bottom: 20px;
    border-radius: 5px;
  }
  .banner-show img{
    width: 100%;
    margin: 80px 0;
  }
  .banner-show p{
    width: 100%;
    margin-top: 10px;
  }
  /*底部横幅推荐*/
  .post-lt{
    border: 1px solid #aaa;
    padding: 15px;
    padding-bottom: 20px;
    border-radius: 5px;
  }
  .post-lt img{
    width: 100%;
  }
  .post-lt p{
    width: 100%;
    margin-top: 10px;
  }
  /*相关海报推荐*/
  .recommend{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .recommend .post-lt{
    width: 44%;
    padding: 10px;
    margin-bottom: 20px;
    cursor:pointer;
  }


  /*右边订单选择*/
  .p-name{
    font-size: 18px;
    margin: 20px 0 20px 19px;
    font-weight: 700;
  }
  .p-size{
    color: #999;
    margin: 20px 19px;
  }
  .p-order .el-form-item{
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
  .detial div:first-of-type{
    border-bottom: 1px solid #aaa;
    padding: 20px;
  }
  .detial div:first-of-type li{
    margin-bottom: 10px;
  }
  .detial div:first-of-type li:last-of-type{
    margin-bottom: 0;
  }
  .detial div:nth-of-type(2){
    border-bottom: 1px dashed #aaa;
    height: 400px;
    text-align: center;
  }
  .detial div:nth-of-type(3){
    height: 400px;
    text-align: center;
  }
  .important{
    color: #e1321b;
    margin-right: 10px;
    font-size: 16px;
  }
  .auxiliary{
    color: #d1d1d1;
  }
  .color-gray{
    color: #aaa;
  }
</style>