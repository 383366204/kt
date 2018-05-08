<template>
  <main>
    <el-row>
      <!-- 编辑收货地址 -->
      <el-col :span="22" :offset="1">
        <el-row>
          <el-col :span="21"><div class="cart-title"><i class="iconfont icon-shouhuo1"></i>收货地址</div></el-col>
          <el-col :span="3"><router-link to="Address"><div class="cart-title addressManager">收货地址管理</div></router-link></el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1">
            <el-row v-for="(address,index) in addresses" :key="index">
              <el-col :span="2">
                <div class="address-title" v-if="index==addressIndex"><i class="iconfont icon-dingwei"></i>寄送至</div>
                <div class="address-title" v-else>&nbsp;</div>
              </el-col>
              <el-col :span="22">
                <ul class="address">
                  <li><input type="radio" :id="index" v-model="addressIndex" :value="index" :checked="address.isDefault"></li>
                  <label :for="index">
                    <li>{{address.region}}</li>
                    <li>{{address.detail}}</li>
                    <li>（<span>{{address.name}}</span> 收）</li>
                    <li>{{address.phone}}</li>
                    <li v-if="address.isDefault"><b>默认地址</b></li>
                  </label>
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
      
        <good-floor v-for="(good,index) in goods" :key="index" :good="good" :page="2" @delGood="delFloor"></good-floor>

        <!-- 留言框 -->
        <el-row>
        留言：<el-input size="small" placeholder="例如：燃气灶和热水器的适用气源（天然气或液化气）" v-model="message"></el-input>
        </el-row>
        <!-- 详细信息 -->
        <el-row class="detail">
          <ul>
            <li>总金额：<span class="important">{{checkSum}}</span>元</li>
            <li>寄送至：{{selectAddress.region}}</li>
            <li>{{selectAddress.detail}}</li>
            <li>收货人：{{selectAddress.name}} {{selectAddress.phone}}</li>
          </ul>
        </el-row>
        <!-- 提交按钮 -->
        <el-row class="order-tj">
          <button class="btn btn-red" @click="addOrder">提交订单</button>
        </el-row>
      </el-col>
    </el-row>
  </main>
</template>

<script>
import goodFloor from "@/components/goodFloor";
export default {
  name: "cart",
  data() {
    return {
      message: "",
      goods: [],
      addressIndex: "",
      checkSum: 0, //已选中商品的总价
      selectAddress: []
    };
  },
  methods: {
    delFloor(name) {
      // 至少有一件商品
      if (this.goods.length == 1) {
        this.$alert("至少要有一件商品", "提示", {
          confirmButtonText: "确定"
        });
      } else {
        this.$confirm("删除此商品?", "确认删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            // 查找要删除的元素位置
            let index = this.goods.findIndex(item => {
              return item.name == name;
            });
            this.checkSum -= this.getSum(this.goods[index]); //总价减少
            this.goods.splice(index, 1);
            this.$notify.success({
              title: "成功",
              message: "已从订单中删除",
              offset: 100
            });
          })
          .catch(err => {
            console.log(err);
            this.$notify.warning({
              title: "提示",
              message: "已取消删除",
              offset: 100
            });
          });
      }
    },
    getSum(good) {
      return good.num * good.price;
    },
    addOrder(){
      // this.$ajax.post('/admin/product/Order')
    }
  },
  components: {
    goodFloor
  },
  computed: {
    addresses() {
      return this.$store.state.addresses;
    }
  },
  mounted: function() {
    //选择默认地址
    this.addressIndex = this.$store.state.addresses.findIndex(item => {
      return item.isDefault;
    });
    this.goods = this.$store.state.checkOutGoods;
    //计算总金额
    for (let i = 0; i < this.goods.length; i++) {
      this.checkSum += this.getSum(this.goods[i]);
    }
  },
  watch: {
    addressIndex: {
      handler: function(val, OldVal) {
        //获取当前选中的地址
        this.selectAddress = this.$store.state.addresses[this.addressIndex];
        //处理地址中的省市区
        this.selectAddress.region = this.selectAddress.region
          .split("/")
          .join(" ");
      }
    }
  }
};
</script>

<style scoped>
main {
  width: 1200px;
  margin: 0 auto;
  color: #555;
  font-size: 14px;
}
img {
  width: 100%;
}
button {
  cursor: pointer;
}

/*收货地址选择*/
.address-title {
  color: #de1100;
  font-weight: 700;
}
.address-title i {
  margin-right: 10px;
}
.address li {
  display: inline-block;
  margin-left: 10px;
  color: #666;
}
.address li:nth-of-type(5),
.address li:nth-of-type(6) {
  color: #aaa;
}

/*确认订单*/
/*标题*/
.cart-title {
  font-size: 18px;
  color: #555;
  margin-top: 40px;
}
.cart-title > i {
  font-size: 22px;
  color: #2eb4e9;
  margin-right: 10px;
}
/*订单头部*/
.cart-thead div {
  background-color: #e6eaeb;
  text-align: center;
  color: #666;
  padding: 4px 0;
  border-right: 1px solid #d7dadb;
}
/* 去掉最右边的border */
.cart-thead div:last-child {
  border-right: none;
}

/*留言框*/
.el-input {
  width: 500px;
}

/*详细信息*/
.detail {
  font-size: 16px;
}
.detail ul {
  float: right;
  text-align: right;
  width: 500px;
  border: 1px solid #de1100;
  padding: 14px 20px;
  border-radius: 4px;
}
.detail li {
  margin-bottom: 10px;
}
.detail li:last-of-type {
  margin-bottom: 0;
}
.important {
  color: #ff0000;
  padding: 0 10px;
  font-size: 18px;
}
/*提交订单按钮*/
.order-tj {
  float: right;
}
.btn {
  border: none;
  padding: 6px 20px;
  border-radius: 4px;
}
.btn-red {
  background-color: #de1100;
  color: #fff;
  font-size: 14px;
}

.el-row {
  margin-bottom: 20px;
}
label {
  cursor: pointer;
}
.addressManager {
  color: #de1100;
  text-align: center;
}
a {
  text-decoration: none;
}
</style>