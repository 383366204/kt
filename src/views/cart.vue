<template>
  <main>
    <el-row>
      <el-col :span="22" :offset="1">

        <!-- 标题 -->
        <el-row v-if="goods!=false">
          <el-col :span="24"><div class="cart-title"><i class="iconfont icon-gouwuche"></i>购物车</div></el-col>
        </el-row>

        <!-- 当购物车为空时显示的 -->
        <div class="cart-empty" v-if="goods==false">
          <el-row type="flex" >
            <el-col :span="24">
              <div class="empty">
                <i class="iconfont icon-cart-copy"></i>
                <h1>你的购物车里空空如也，请赶快去购物吧</h1>
              </div>          
            </el-col>         
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <div class="option">
                <router-link to="/Search">
                  <el-button size="large">再去逛逛</el-button>
                </router-link>
                <router-link to="/OrderList">
                  <el-button size="large">查看订单</el-button>
                </router-link>
              </div>
            </el-col>
          </el-row>
        </div>
        
        <!-- 头部 -->
        <el-row class="cart-thead" v-if="goods!=false">
          <el-col :span="11"><div>商品</div></el-col>
          <el-col :span="3"><div>规格</div></el-col>
          <el-col :span="3"><div>数量</div></el-col>
          <el-col :span="2"><div>单价</div></el-col>
          <el-col :span="2"><div>金额</div></el-col>
          <el-col :span="3"><div>操作</div></el-col>
        </el-row>

        <!-- 全选 -->
        <el-row v-if="goods!=false">
          <div id="checkbox-all">
            <input type="checkbox" id="selectAllTop" v-model="ischeckAll" @click="checkAll()">&nbsp;&nbsp;
            <label for="selectAllTop">全选</label> 
          </div>
        </el-row>
      
        <good-floor v-for="(good,index) in goods" :key="index" :good="good" :page="1" @checkGood="checkFloor" @delGood="delFloor" @changeGoodNum="changeNum"></good-floor>

        <!-- 底部 -->
        <el-row class="cart-tfoot" v-if="goods!=false">
          <el-col :span="4"><div>
            <el-row>
              <el-col :span="12"><input type="checkbox" id="selectAllBottom" v-model="ischeckAll" @click="checkAll()">&nbsp;&nbsp;
                <label for="selectAllBottom">全选</label>
              </el-col>
              <el-col :span="6"><button @click="delAllCheck()">删除</button></el-col>
            </el-row>
          </div></el-col>
          <el-col :span="4" :offset="9"><div>已勾选<span class="important">{{checkNum}}</span>件</div></el-col>
          <el-col :span="4"><div>共计：<span class="important">{{checkSum}}</span>元</div></el-col>
          <el-col :span="3"><div><button class="btn-red" @click="checkOut()">结算</button></div></el-col>
        </el-row>

      </el-col>
    </el-row>
  </main>
</template>

<script>
import goodFloor from '@/components/goodFloor';
export default {
  data () {
    return {
      goods:[],
      ischeckAll:false,//是否全选
      checkNum:0,//已选中的商品的总数
      checkSum:0//已选中商品的总价
    }
  },
  methods: {
    checkFloor(id){
      let index = this.goods.findIndex((item)=>{return item.id==id});
      this.goods[index].isCheck = !this.goods[index].isCheck;
      if (this.goods[index].isCheck) {
        this.checkNum++;
        this.checkSum += this.getSum(this.goods[index]);
      }
      else{
        this.checkNum--;
        this.checkSum -= this.getSum(this.goods[index]);
      }
      if(this.checkNum==this.goods.length){
        this.ischeckAll = true;
      }
      else{
        this.ischeckAll = false;
      }
    },
    delFloor(id){
      this.$confirm('删除此商品?', '确认删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 查找要删除的元素位置
           let index = this.goods.findIndex((item)=>{ return item.id==id});
           if (this.goods[index].isCheck) {//判断是否选中
              this.checkNum--;//总数减少
              this.checkSum -= this.getSum(this.goods[index]);//总价减少
           }
           this.goods.splice(index,1);
           this.$notify.success({
            title: '成功',
            message: '已从购物车中删除',
            offset:100
          });
        }).catch(() => {
          this.$notify.warning({
              title: '提示',
              message: '已取消删除',
              offset:100
            });        
        });  
    },
    delAllCheck(){
      if (this.checkNum==0) {//检查是否有选中商品
        this.$alert('请至少选中一个商品', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        });
        return;
      }
      // this.hasAnyCheck();
      this.$confirm('删除所选中的商品?', '确认删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            let newGoods = this.goods.filter((item)=>{//找出没有选中的商品
              return !item.isCheck;
            });
            this.goods = newGoods;//替换原来的数组
            this.checkNum = 0;
            this.checkSum = 0;
            this.$notify.success({
            title: '成功',
            message: '已从购物车中删除',
            offset:100
          });
        }).catch(() => {
          this.$notify.warning({
              title: '提示',
              message: '已取消删除',
              offset:100
            });        
        });
    },
    checkAll(){
      let self = this;
      if (this.goods.every((item)=>{ return item.isCheck})) {
        self.goods.forEach(item => {
          if (item.isCheck) {
            item.isCheck = false;
            self.checkSum -= self.getSum(item);
          }
        })
        this.checkNum = 0;
      }
      else{
        let self = this;
        this.goods.forEach(item => {
          if (!item.isCheck) {
            item.isCheck = true;
            self.checkSum += self.getSum(item);
          }
        })
        this.checkNum = this.goods.length;
      }
    },
    getSum(good){
        let numSum=0;
        for (let i = 0; i < good.num.length; i++) {
          numSum += good.num[i];
        }
        return numSum*good.price;
    },
    changeNum(price,good){
      let index = this.goods.findIndex((item)=>{return item.id == good.id});//找出good的index
      
      this.goods[index] = good;//替代原来的位置

      if(good.isCheck){//若是选中的话，将影响总价
        this.checkSum+=price;
      }
    },
    checkOut(){
      if (this.checkNum==0) {//检查是否有选中商品
        this.$alert('请至少选中一个商品', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        });
        return;
      }
      if(this.$store.state.addresses==false){
        this.$alert('您还没有收货地址', '提示', {
          confirmButtonText: '新增收货地址',
          type: 'warning'
        }).then(()=>{
          this.$router.push({path:'/Address'});
        }).catch(()=>{
          this.$notify.warning({
            title: "提示",
            message: "需要新增收货地址才能结算",
            offset: 100
          });
        });
      }
      else{
        let checkOutGoods =  this.goods.filter((item)=>{return item.isCheck});
        this.$store.commit('setCheckOutGoods',checkOutGoods);
        this.$router.push({path:'/Order'});
      } 
    }
  },
  components:{ 
    goodFloor
  },
  mounted:function(){
    this.goods = this.$store.state.goods;
    let self = this;
    this.goods.forEach((item)=>{
      self.$set(item,'isCheck',false);
    });
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
  /* 去掉最右边的border */
  .cart-thead div:last-child{
    border-right: none;
  }
  
  /*全选*/
  #checkbox-all{
    margin-left: 26px;
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
    outline: none;
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
  }
  label{
    cursor: pointer;
  }

  /* 购物车为空时的样式 */
    .cart-empty{
      padding-top: 200px;
      height: 410px;
    }
   .empty{
       display: flex;
       align-items: center;
       justify-content: center;
   }
   .empty h1{
       font-size: 20px;
       color:#555;
       padding-left: 18px;
   }
   .empty i{
       font-size: 60px;
       color: #2eb4e9;
   }
   .option{
       height: 80px;
       display: flex;
       align-items: center;
       justify-content: center;
   }
   .option .el-button{
       border-color: #2eb4e9;
       color: #2eb4e9;
       width: 144px;
       height: 58px;
       font-size: 20px;
       margin:0 20px;
   }
   .option .el-button:hover{
       background-color: #2eb4e9;
       color: #FFF;
   }
</style>