<template>
  <main>
    <el-row>
      <el-col :span="22" :offset="1">
        <!-- 导航栏 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部订单" name="first">

            <!-- 头部 -->
            <el-row class="cart-thead">
              <el-col :span="11"><div>商品</div></el-col>
              <el-col :span="2"><div>数量</div></el-col>
              <el-col :span="3"><div>价格</div></el-col>
              <el-col :span="3"><div>总价格</div></el-col>
              <el-col :span="2"><div>状态</div></el-col>
              <el-col :span="3"><div>操作</div></el-col>
            </el-row>

            <div v-for="(order,index) in order" :key="index">
              <el-row class="orderHead">
                <el-col :span="3"><b>{{order.date | prettyDate}}</b></el-col>
                <el-col :span="6"><div>订单号：{{order.orderId}}</div></el-col>
              </el-row>

              <el-row class="goodFloor" type="flex">
                <el-col :span="16">
                  <good-floor v-for="(good,index) in order.goods" :key="index" :good="good" :page="3"></good-floor>
                </el-col>
                <el-col :span="3"><div class="colorRed">{{sumPrice(order.goods)}}</div></el-col>
                <el-col :span="2"><div><el-tag :type="statusType(order.status)">{{order.status | prettyStatus}}</el-tag></div></el-col>
                <el-col :span="3">
                  <div v-if="order.status==1">
                    <div><button class="btn btn-blue">付款</button></div>
                    <div><button class="btn btn-gray" @click="delOrder(order.orderId)">删除</button></div>
                  </div>
                  <div v-else-if="order.status==2">
                    <div><button class="btn btn-blue" @click="remindOrder(order.orderId)">提醒发货</button></div>
                  </div>
                  <div v-else-if="order.status==3">
                    <div><button class="btn btn-blue" @click="comfirmOrder(order.orderId)">确认收货</button></div>
                  </div>
                  <div v-else-if="order.status==4">
                    <button class="btn btn-gray" style="margin-top:0" @click="delOrder(order.orderId)">删除</button>
                  </div>
                </el-col>
              </el-row>
            </div>
            
            <!-- 分页 -->
            <el-pagination
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>

          </el-tab-pane>


          <el-tab-pane label="待付款" name="second"></el-tab-pane>
          <el-tab-pane label="待发货" name="fourth"></el-tab-pane>
          <el-tab-pane label="待收货" name="fifth"></el-tab-pane>
          <el-tab-pane label="已完成" name="sixth"></el-tab-pane>
        </el-tabs>

        
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
      listItems: ["buy food", "play games", "sleep"],
      num1: 1,
      activeName: "first",
      order: [
        {
          orderId: '143194578926284844',
          status: 1,
          price: 10000,
          goods: [
            {
              page: 1,
              status: 1,
              grand: "美的",
              category: "热水器",
              name: "JSQ22-12HWA(T)",
              tag: ["强排式", "恒温式", "防冻型"],
              src: "http://127.0.0.1:4040/productPic/JSQ22-12HWA(T)/1.jpg",
              size: "895x647x517",
              num: 1,
              price: 1199,
              isCheck: false
            },
            {
              page: 1,
              status: 1,
              grand: "康宝",
              category: "消毒碗柜",
              name: "ZTP380H-1",
              tag: ["柜式", "双门"],
              src: "http://127.0.0.1:4040/productPic/ZTP380H-1/1.jpg",
              size: "555x410x1630",
              num: 2,
              price: 999,
              isCheck: false
            },
            {
              page: 1,
              status: 1,
              grand: "能率",
              category: "热水器",
              name: "JSQ31-E3",
              tag: ["强排式", "防冻型", "恒温式"],
              src: "http://127.0.0.1:4040/productPic/JSQ31-E3/1.jpg",
              size: "895x647x517",
              num: 4,
              price: 3098,
              isCheck: false
            }
          ],
          address: {},
          message: "",
          date:Date.now()
        },
        {
          orderId: '143194578926284845',
          status: 2,
          price: 10000,
          goods: [
            {
              page: 1,
              status: 1,
              grand: "美的",
              category: "热水器",
              name: "JSQ22-12HWA(T)",
              tag: ["强排式", "恒温式", "防冻型"],
              src: "http://127.0.0.1:4040/productPic/JSQ22-12HWA(T)/1.jpg",
              size: "895x647x517",
              num: 1,
              price: 1199,
              isCheck: false
            },
            {
              page: 1,
              status: 1,
              grand: "康宝",
              category: "消毒碗柜",
              name: "ZTP380H-1",
              tag: ["柜式", "双门"],
              src: "http://127.0.0.1:4040/productPic/ZTP380H-1/1.jpg",
              size: "555x410x1630",
              num: 2,
              price: 999,
              isCheck: false
            },
            {
              page: 1,
              status: 1,
              grand: "能率",
              category: "热水器",
              name: "JSQ31-E3",
              tag: ["强排式", "防冻型", "恒温式"],
              src: "http://127.0.0.1:4040/productPic/JSQ31-E3/1.jpg",
              size: "895x647x517",
              num: 4,
              price: 3098,
              isCheck: false
            }
          ],
          address: {},
          message: "",
          date:Date.now()
        },
        {
          orderId: '143194578926284846',
          status: 3,
          price: 10000,
          goods: [
            {
              page: 1,
              status: 1,
              grand: "美的",
              category: "热水器",
              name: "JSQ22-12HWA(T)",
              tag: ["强排式", "恒温式", "防冻型"],
              src: "http://127.0.0.1:4040/productPic/JSQ22-12HWA(T)/1.jpg",
              size: "895x647x517",
              num: 1,
              price: 1199,
              isCheck: false
            },
            {
              page: 1,
              status: 1,
              grand: "康宝",
              category: "消毒碗柜",
              name: "ZTP380H-1",
              tag: ["柜式", "双门"],
              src: "http://127.0.0.1:4040/productPic/ZTP380H-1/1.jpg",
              size: "555x410x1630",
              num: 2,
              price: 999,
              isCheck: false
            },
            {
              page: 1,
              status: 1,
              grand: "能率",
              category: "热水器",
              name: "JSQ31-E3",
              tag: ["强排式", "防冻型", "恒温式"],
              src: "http://127.0.0.1:4040/productPic/JSQ31-E3/1.jpg",
              size: "895x647x517",
              num: 4,
              price: 3098,
              isCheck: false
            }
          ],
          address: {},
          message: "",
          date:Date.now()
        },
        {
          orderId: '143194578926284847',
          status: 4,
          price: 10000,
          goods: [
            {
              page: 1,
              status: 1,
              grand: "美的",
              category: "热水器",
              name: "JSQ22-12HWA(T)",
              tag: ["强排式", "恒温式", "防冻型"],
              src: "http://127.0.0.1:4040/productPic/JSQ22-12HWA(T)/1.jpg",
              size: "895x647x517",
              num: 1,
              price: 1199,
              isCheck: false
            },
            {
              page: 1,
              status: 1,
              grand: "康宝",
              category: "消毒碗柜",
              name: "ZTP380H-1",
              tag: ["柜式", "双门"],
              src: "http://127.0.0.1:4040/productPic/ZTP380H-1/1.jpg",
              size: "555x410x1630",
              num: 2,
              price: 999,
              isCheck: false
            },
            {
              page: 1,
              status: 1,
              grand: "能率",
              category: "热水器",
              name: "JSQ31-E3",
              tag: ["强排式", "防冻型", "恒温式"],
              src: "http://127.0.0.1:4040/productPic/JSQ31-E3/1.jpg",
              size: "895x647x517",
              num: 4,
              price: 3098,
              isCheck: false
            }
          ],
          address: {},
          message: "",
          date:Date.now()
        }
      ]
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    sumPrice(goods) {
      let s = goods.reduce((sum, good) => {
        return sum + good.price * good.num;
      }, 0);
      return s;
    },
    statusType(status){
      let type = ['','info','warning','','success'];
      return type[status];
    },
    comfirmOrder(orderId){
      this.$confirm('已确认收货?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      }).then(() => {
          this.$notify.success({
          title: '成功',
          message: '订单已确认收货',
          offset:100
        });
      }).catch(() => {
        this.$notify.warning({
            title: '提示',
            message: '已取消确认收货',
            offset:100
          });        
      });
    },
    delOrder(orderId){
      this.$confirm('删除所选中的订单?', '确认删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
          this.$notify.success({
          title: '成功',
          message: '订单已删除',
          offset:100
        });
      }).catch(() => {
        this.$notify.warning({
            title: '提示',
            message: '已取消删除',
            offset:100
          });        
      });
    }
  },
  components: { goodFloor },
  filters:{
    prettyDate(val){
      let orderDate = new Date(val);
      return `${orderDate.getFullYear()}年${orderDate.getMonth()}月${orderDate.getDay()}日`;
    },
    prettyStatus(val){
      let status = ['','待付款','待发货','待收货','已完成'];
      return status[val];
    }
  }
};
</script>
<style>
/*导航栏样式修改*/
.el-tabs__header {
  border-bottom: none !important;
}
.el-tabs__item {
  font-size: 16px;
}
.el-tabs__nav-wrap {
  margin: 30px 0 20px;
}
.el-tabs__item {
  font-weight: 700;
}
.el-tabs__item.is-active {
  color: #555;
}
.el-tabs__active-bar {
  background-color: #2eb4e9;
}

/*分页样式修改*/
.el-pagination {
  text-align: center;
  margin-bottom: 20px;
}
.el-pagination button,
.el-pagination span,
.el-pager li {
  min-width: 40px;
  height: 40px;
  line-height: 40px;
}
.el-pager li.btn-quicknext,
.el-pager li.btn-quickprev {
  line-height: 40px;
}
.el-pagination .btn-prev,
.el-pagination .el-pager li {
  margin-right: 10px;
}
.el-pagination button,
.el-pagination .el-pager li {
  border-radius: 4px !important;
  border: 1px solid #d1dbe5 !important;
}
</style>
<style scoped>
main {
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
}
img {
  width: 100%;
}
button {
  cursor: pointer;
}

/*标题*/
.cart-title {
  font-size: 20px;
  color: #555;
  margin-top: 40px;
}
.cart-title > i {
  font-size: 26px;
  color: #2eb4e9;
  margin-right: 10px;
}

/*头部*/
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
.el-row {
  margin-bottom: 20px;
}
.orderHead {
  margin-bottom: 0px;
  background-color: #e6eaeb;
  height: 34px;
  line-height:34px;
  padding-left:30px;
}

.goodFloor .el-col:not(:first-child) {
  color: #666;
  border-right: 1px solid #e6eaeb;
  border-bottom: 1px solid #e6eaeb;
  display: flex;
  justify-content: center;
  align-items: center;
}
.colorRed {
  color: #ff0000;
}
/*按钮*/
.btn{
  margin:2px 0px;
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
}
</style>