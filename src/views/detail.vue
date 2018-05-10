<template>
  <main>
    <el-row>
      <!-- 面包屑导航栏 -->
      <el-col :span="16" :offset="3" class="margin-top">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: `/Search/${this.$route.params.Category}` }">{{this.$route.params.Category}}</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/Search/${this.$route.params.Grand}` }">{{this.$route.params.Grand}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{this.$route.params.Name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <!-- 海报展示及购买 -->
      <el-col :span="18" :offset="3">
        <el-row>
          <!-- 左边的海报图 -->
          <el-col :span="11">
            <div class="clothes-lt">
              <img v-if="imgSrc.length!=0" :src="config.baseURL+'productPic/'+ this.$route.params.Name +'/'+imgSrc[0]">
            </div>
          </el-col>
          <!-- 右边的选项及信息 -->
          <el-col :span="11" :offset="2">
            <div class="p-name">{{this.$route.params.Grand}}{{this.$route.params.Category}}{{this.$route.params.Name}}</div>
            <div class="p-size">商品尺寸：{{productInfo.size}}mm</div>
            <div class="p-size">包装尺寸：{{productInfo.size}}mm</div>
            <div class="p-size">商品重量：{{productInfo.weight}}kg</div>
            <div class="p-size">商品功率：{{productInfo.power}}kg</div>
            <div class="p-size">商品销量：{{productInfo.sales}}</div>
            <div class="p-size tag">
              <el-tag v-for="(tag,index) in productInfo.tag" :key="index">{{tag}}</el-tag>
            </div>
            <el-form label-position="right" label-width="100px">

              <ul class="count">
                <li>数量：</li>
                <li><el-input-number size="small" v-model="productNum" @change="handleChange" :min="1" :max="10" controls-position="right"></el-input-number></li>
              </ul>

              <el-form-item label="价格：">
                <p><span class="important">{{productInfo.price}}</span>元</p>
              </el-form-item>

            </el-form>

            <ul class="p-btn">
              <li>
                <el-button class="blue" v-show="!isAdded" type="primary" @click="addToCart(productInfo,productNum,imgSrc)">加入购物车</el-button>
                <el-button v-show="isAdded" @click="deleteFromCart(productInfo)" type="info">取消加入购物车</el-button>
                <router-link to="/Cart">
                  <el-button class="blue" type="primary">跳转到购物车</el-button>
                </router-link>               
              </li>
            </ul>
            
          </el-col>
        </el-row>
      </el-col>
      <!-- 详细信息标题 -->
      <el-col :span="16" :offset="3">
        <div class="detail-title"><i class="iconfont icon-detail"></i>详细信息</div>
      </el-col>
      <!-- 详细信息 -->
      <el-col :span="18" :offset="3" class="detail">
        <div>
          <ul>
            <li>详情</li>
            <li>参数规格</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>品牌名称：{{this.$route.params.Grand}}</li>
            <li>产品分类：{{this.$route.params.Category}}</li>
            <li>型号：{{this.$route.params.Name}}</li>
            <li v-for="(property,index) in productInfo.property" :key="index">{{property.proName+'：'}}{{property.proValue}}</li>
          </ul>
        </div>
        <div>
          <p><i class="iconfont icon-zhuyi"></i>注意</p>
          <p>尊敬的客户，凡在我平台直接购买到任何因<span class="msg">质量问题</span>而无法正常使用的商品可以在<span class="msg">本店可在10天内退换货</span>。</p>
          <p>凡是<span class="msg">私自拆卸、组装后</span>的商品，因有可能造成内部重要零件的损坏，本站<span class="msg">不支持退换货</span>，给您造成的不便尽请谅解</p>
          <p>凡是购买<span class="msg">热水器、燃气灶</span>的客户，请在订单页面留言适用气源<span class="msg">（天然气或液化气）</span>，如没有注明则一律发送天然气</p>
        </div>
        <div>
          <ul>
            <li v-for="(imgSrc,index) in imgSrc" :key="index"><img :src="config.baseURL+'productPic/'+ productInfo.name +'/'+imgSrc"></li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </main>
</template>

<script>
import config from '../config/config';
export default {
  name: 'cart',
  data () {
    return {
      productNum:1,
      fireType: 1,
      productInfo:{
        name:'',
        packageSize:'',
        power:0,
        price:0,
        property:[],
        sales:0,
        size:'',
        tag:[],
        weight:'',
        _id:''
      },
      imgSrc:[],
      config:config
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    addToCart(productInfo,productNum,imgSrc){
      if (!this.$store.getters.isLogin) {
        this.$router.push({
            path:'/login',
            query:{
              redirect: this.$route.path
            }
        })
      }else{
        let product = {
          page:1,
          grand:productInfo.grand,
          category:productInfo.category,
          name:productInfo.name,
          tag:productInfo.tag,
          src:config.baseURL+'productPic/'+ productInfo.name +'/'+imgSrc[0],
          size:productInfo.size,
          num:productNum,
          price:productInfo.price,
          _id:productInfo._id
        }
        this.$store.commit('addToCart',product);
      }
    },
    deleteFromCart(productInfo){
      let index = this.$store.getters.cart.findIndex((item)=>{ return item.name==name});
      this.$store.commit('deleteFromCart',index);
    }
  },
  mounted:function(){
      this.$ajax
        .get("/admin/product/detail", { params: {name:this.$route.params.Name} })
        .then(response => {
          if (response.data.success) {
            this.productInfo = response.data.product;
          }
        })
        .then(() => {
          return this.$ajax.get('/admin/product/img',{params:{name:this.productInfo.name}})
        })
        .then(response=>{
          if (response.data.success) {
            this.imgSrc = response.data.fileList;
          }
        })
        .catch(err => {
          console.log(err);
        });
  },
  computed:{
    isAdded(){
      return this.$store.getters.cart.some(product=>{
        return product.name == this.productInfo.name;
      })
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
    background-color: #fff;
  }
  .clothes-lt img{
    width: 100%;
    margin: 20px 0;
  }

  /*右边订单选择*/
  .p-name{
    font-size: 24px;
    margin: 2px 0 20px 44px;
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
    margin-left:-40px;
    margin-bottom: 16px;
    border-radius: 4px;
  }
  .p-btn li .el-button.blue{
    background-color: #2eb4e9;
    border-color: #2eb4e9;
  }
  .p-btn li .el-button.blue:hover{
    opacity: 0.9;
  }


  /*详细信息*/
  .detail-title{
    font-size: 18px;
    color: #555;
    margin-top: 40px;
  }
  .detail-title > i{
    font-size: 20px;
    color: #2eb4e9;
    margin-right: 10px;
  }

  .detail{
    border: 1px solid #aaa;
    border-radius: 5px;
  }
  .detail > div{
    border-bottom: 1px solid #aaa;
    padding: 20px;
  }
  .detail > div:last-of-type{
    border-bottom: none;
  }

  .detail div:first-of-type{
    padding: 8px 0;
    font-weight: 700;
  }
  .detail div:first-of-type li{
    border-right: 1px solid #aaa;
    display: inline-block;
    padding: 12px 20px;
  }
  .detail div:first-of-type li:last-of-type{
    margin-bottom: 0;
    border-right: none;
  }

  .detail div:nth-of-type(2) li{
    margin-bottom: 15px;
    display: inline-block;
    width: 32%;
  }
  .detail div:nth-of-type(2) li:first-of-type{
    width: 100%;
  }
  .detail div:nth-of-type(2) li:last-of-type{
    margin-bottom: 0;
  }

  .icon-zhuyi{
    color: #ffc876;
    margin-right: 4px;
    font-size: 14px;
  }

  .detail div:nth-of-type(3) p{
    margin-bottom: 10px;
  }
  .detail div:nth-of-type(3) p:last-of-type{
    margin-bottom: 0;
  }
  .detail div:nth-of-type(4) li{
    border: 1px dashed #aaa;
    margin-bottom: 10px;
    text-align: center;
  }
  .detail div:nth-of-type(4) li:last-of-type{
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
  /* 标签样式 */
  .tag .el-tag{
    margin-right: 5px;
  }
</style>