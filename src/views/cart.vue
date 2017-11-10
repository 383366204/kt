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
            <input type="checkbox" v-model="ischeckAll" @click="checkAll()">&nbsp;&nbsp;全选
          </div>
        </el-row>

        <good-floor v-for="(good,index) in goods" :key="index" :good="good" @checkGood="checkFloor" @delGood="delFloor" @changeGoodNum="changeNum"></good-floor>

        <!-- 底部 -->
        <el-row class="cart-tfoot">
          <el-col :span="4"><div>
            <el-row>
              <el-col :span="12"><input type="checkbox" v-model="ischeckAll" @click="checkAll()">&nbsp;&nbsp;全选</el-col>
              <el-col :span="6"><button>删除</button></el-col>
            </el-row>
          </div></el-col>
          <el-col :span="4" :offset="9"><div>已勾选<span class="important">{{checkNum}}</span>件</div></el-col>
          <el-col :span="4"><div>共计：<span class="important">{{checkSum}}</span>元</div></el-col>
          <el-col :span="3"><div><button class="btn-red">结算</button></div></el-col>
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
      listItems: ['buy food', 'play games', 'sleep'],
      num1: 1,
      goods:[{
        id:10001,
        page:1,
        type:1,
        status:1,
        name:'冬季男款卫衣',
        description:'红色',
        src:'../../static/clothes2.png',
        size:['S','M','L','XL','XXl'],
        num:[10,5,5,5,5],
        price:200,
        isCheck:false
      },{
        id:10002,
        page:1,
        type:2,
        status:2,
        name:'记忆协会海报',
        description:'',
        src:'../../static/poster2.png',
        size:['65*100cm'],
        num:[10],
        price:50,
        isCheck:false
      },{
        id:10003,
        page:1,
        type:3,
        status:3,
        name:'横幅',
        description:'',
        src:'../../static/banner2.jpg',
        size:['5m'],
        num:[10],
        price:50,
        isCheck:false
      },{
        id:10004,
        page:1,
        type:3,
        status:4,
        name:'横幅',
        description:'',
        src:'../../static/banner2.jpg',
        size:['5m'],
        num:[10],
        price:50,
        isCheck:false
      },{
        id:10005,
        page:1,
        type:3,
        status:5,
        name:'横幅',
        description:'',
        src:'../../static/banner2.jpg',
        size:['5m'],
        num:[10],
        price:50,
        isCheck:false
      }],
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
      this.$confirm('此商品将从购物车中删除?', '确认删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 查找要删除的元素位置
           let index = this.goods.findIndex((item)=>{ return item.id==id});
           if (this.goods[index].isCheck) {//判断是否选中
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
    changeNum(price){
      this.checkSum+=price;
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
  }
</style>