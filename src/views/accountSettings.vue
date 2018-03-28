<template>
  <main>
    <div class="nav">
      <div class="nav-head">
        <div class="nav-head_img">
          <img src="../assets/img/head-pic.png">
        </div>
        <div class="nav-head_msg">
          <p class="name">团小图</p>
          <p class="vip">超级会员<i class="iconfont icon-huiyuan1"></i></p>
        </div>
      </div>
      <ul>
        <li :class="{active:activeNum==1}" @click="activeTab(1)"><a><i class="iconfont icon-zhanghao"></i>账号设置</a></li>
        <li :class="{active:activeNum==2}" @click="activeTab(2)"><a><i class="iconfont icon-yanjing"></i>当前权限</a></li>
        <li :class="{active:activeNum==3}" @click="activeTab(3)"><a><i class="iconfont icon-shengji"></i>会员升级</a></li>
      </ul>
    </div>
    <!-- 账号设置 -->
    <div class="view" v-if="activeNum==1">
      <div class="view-title">
        <p>账号设置</p>
      </div>
      <div class="view-content">
        <ul>
          <li><i class="iconfont icon-youxiang"></i>邮箱：<span>{{userInfo.email}}</span><a @click="changeEmail()">更改</a></li>
          <li><i class="iconfont icon-shouji"></i>手机：<span>{{userInfo.phone}}</span><a @click="changePhone()">更改</a></li>
          <li><i class="iconfont icon-mima"></i>密码：*********<a @click="changePassword()">修改</a></li>
          <li><i class="iconfont icon-lianjie"></i>分享给好友</li>
        </ul>
      </div>
    </div>
    <!-- 账号设置END -->
    <!-- 当前权限 -->
    <div class="view" v-else-if="activeNum==2">
      <div class="view-banner">
        <img src="../assets/img/yellowBg.jpg">
      </div>
      <div class="view-title">
        <p>当前权限</p>
      </div>
      <div class="view-content">
        <ul class="parallelogram">
          <li><p>海量原创海报模板</p></li>
          <li><p>海量原创衣服模板</p></li>
          <li><p>海量原创横幅模板</p></li>
          <li><p>无限下载海量素材</p></li>
          <li><p>专属个性定制</p></li>
        </ul>
      </div>
    </div>
    <!-- 当前权限END -->

    <!-- 升级VIP会员 -->
    <div class="view" v-if="activeNum==3">
      <div class="view-title">
        <p>会员升级</p>
      </div>
      <div class="view-content" style="padding-left:0">
        <el-row type="flex" justify="space-around">
          <el-col :span="6" v-for="(prices,index) in vipPrices" :key="index" @click.native="selectVIP(index)">
            <el-card :class="{'select':selectVIPType==index}" :body-style="[{ 'padding':'4px 8px 16px 8px'},{'text-align':'center'}]">                    
              <div style="font-size:24px; padding: 4px; color:#2eb4e9">
                ¥{{prices.price}}
              </div>
              <div style="font-size:18px;padding: 2px; color:#aaaaaa">
                {{prices.time}}个月（{{prices.price/prices.time}}元/月）
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row type="flex">
          <el-col :span="24">
              <h1 class="payOption">支付方式</h1>
              <div class="payOptionIcon">
                <div @click="payOption=0" :class="{'select':payOption==0}"><i class="iconfont icon-WePayLogo"></i></div>
                <div @click="payOption=1" :class="{'select':payOption==1}"><i class="iconfont icon-weixinzhifu"></i></div>              
              </div>             
          </el-col>      
        </el-row>
        <el-row type="flex">
          <el-col :span="24" class="checkOut">
            <div><h1>共计：</h1><span>{{vipPrices[selectVIPType].price}}</span><h1>元</h1></div>       
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button class="payButton" type="primary" @click="pay()">支付</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 升级VIP会员END -->

    <!-- 修改密码的模式窗 -->
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="30%" top="15%" @close="cancelMoPassword('modifyForm')">
      <el-form :model="modifyForm" :rules="modifyRules" ref="modifyForm" label-width="100px">
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input type="password" v-model="modifyForm.oldPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input type="password" v-model="modifyForm.newPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input type="password" v-model="modifyForm.confirmPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('modifyForm')">提交</el-button>
          <el-button @click="cancelMoPassword('modifyForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </main>
</template>

<script>
export default {
  data() {
    var confirmPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.modifyForm.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      activeNum: 3,
      userInfo: {
        email: "383366204@qq.com",
        phone: "18928651029"
      },
      dialogFormVisible: false,
      modifyForm: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      },
      modifyRules: {
        oldPassword: [
          { required: true, message: "请输入您的旧密码", trigger: "blur" }
        ],
        newPassword: [
          { required: true, message: "请输入您的新密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "密码长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ],
        confirmPassword: [{ validator: confirmPassword, trigger: "blur" }]
      },
      vipPrices:[{'price':20,'time':1},{'price':90,'time':6},{'price':120,'time':12}],
      //0代表第一种vip方案
      selectVIPType:0,
      payOption:0
    };
  },
  methods: {
    activeTab(activeNum) {
      this.activeNum = activeNum;
    },
    changeEmail() {
      this.$prompt("请输入新邮箱", "修改邮箱", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "邮箱格式不正确"
      })
        .then(({ value }) => {
          this.$notify.success({
            title: "成功",
            message: "邮箱修改成功",
            offset: 100
          });
        })
        .catch(() => {
          this.$notify.error({
            title: "失败",
            message: "邮箱修改失败",
            offset: 100
          });
        });
    },
    changePhone() {
      this.$prompt("请输入新手机", "修改手机", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^1\d{10}$/,
        inputErrorMessage: "手机格式不正确"
      })
        .then(({ value }) => {
          this.$notify.success({
            title: "成功",
            message: "手机修改成功",
            offset: 100
          });
        })
        .catch(() => {
          this.$notify.error({
            title: "失败",
            message: "手机修改失败",
            offset: 100
          });
        });
    },
    changePassword() {
      this.dialogFormVisible = true;
    },
    cancelMoPassword(formName) {
      this.dialogFormVisible = false;
      this.$refs[formName].resetFields();
      this.$notify.error({
        title: "失败",
        message: "密码修改失败",
        offset: 100
      });
    },
    selectVIP(index){
      this.selectVIPType=index;
    },
    pay(){
      console.log('pay');
    }
  }
};
</script>
<style>
body {
  background-color: #f4f8fb !important;
}
</style>
<style scoped>
body {
  background-color: #f4f8fb !important;
}
main {
  width: 1040px;
  margin: 80px auto;
  color: #555;
  font-size: 14px;
}
main:after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
img {
  width: 100%;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}
.iconfont {
  margin-right: 10px;
  color: #41b9ea;
}
/*左边灰色框*/
.nav {
  width: 240px;
  background-color: #ebf0f4;
  height: 600px;
  float: left;
}
/*左边灰色框头像及信息*/
.nav-head {
  border-bottom: 1px solid #fff;
  margin: 0 20px;
  padding: 30px 0 15px;
}
.nav-head:after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.nav-head_img {
  float: left;
  width: 69px;
  height: 69px;
  margin-left: 20px;
  border-radius: 50%;
}
.nav-head_msg {
  float: left;
  height: 69px;
  margin-left: 14px;
}
.nav-head_msg .name {
  margin-top: 14px;
}
.nav-head_msg .vip {
  margin-top: 6px;
  color: #f2a018;
}
.icon-huiyuan1 {
  font-size: 18px;
  color: #f2a018;
}
/*左边灰色框跳转按钮*/
.nav ul {
  margin: 15px 0;
}
.nav ul li {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 8px;
}
.nav ul li.active a {
  background-color: #fff;
  color: #2eb4e9;
}
.nav ul li a {
  padding-left: 40px;
  display: block; /*给a标签设置成块级元素*/
  width: 100%;
  height: 100%;
}
.nav ul li .iconfont {
  font-size: 18px;
}

/*右边视图框*/
.view {
  position: relative;
  width: 800px;
  background-color: #fff;
  height: 586px;
  float: left;
  margin-top: 14px;
}
.view:before {
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  top: -14px;
  border-bottom: 14px solid #cfd4d8;
  border-right: 14px solid transparent;
}
/*视图框标题*/
.view-title {
  margin: 30px;
  border-bottom: 2px solid #ebf0f4;
}
.view-title p {
  width: 70px;
  font-size: 16px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  position: relative;
}
.view-title p:after {
  content: "";
  width: 70px;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: -2px;
  border-bottom: 2px solid #2eb4e9;
}
/*视图框内容*/
.view-content {
  margin: 40px 30px;
  padding-left: 50px;
}
.view-content ul li {
  margin-bottom: 30px;
}
.view-content ul li a {
  margin-left: 40px;
  color: #2eb4e9;
  cursor: pointer;
}
/*视图框banner*/
.view-banner {
  padding: 20px;
  padding-bottom: 0;
}
.view-banner img {
  width: 760;
  height: 260px;
}
/*视图框平行四边形权限*/
.parallelogram li {
  width: 160px;
  text-align: center;
  transform: skew(-30deg);
  padding: 6px 10px;
  margin-bottom: 20px !important;
  display: inline-block;
  color: #fff;
}
.parallelogram li p {
  transform: skew(30deg);
}
.parallelogram li:nth-of-type(odd) {
  margin-left: 20px;
}
.parallelogram li:nth-of-type(even) {
  margin-left: 100px;
}
.parallelogram li:nth-of-type(1) {
  background-color: #8fc320;
}
.parallelogram li:nth-of-type(2) {
  background-color: #6d9bcf;
}
.parallelogram li:nth-of-type(3) {
  background-color: #e65399;
}
.parallelogram li:nth-of-type(4) {
  background-color: #f39801;
}
.parallelogram li:nth-of-type(5) {
  background-color: #2eb4e9;
}
.el-dialog{
  width:30%;
}
.el-card{
  cursor: pointer;
}
.el-card:hover,.el-card.select{
  box-shadow:none;
  border:2px solid rgba(46, 180, 233,0.8);
}
.payOption{
  font-size:16px;
  color:#555;
  margin-top:32px;
  margin-left:30px;
}
.payOptionIcon div{
  position: relative;
  overflow: hidden;
  width:170px;
  height: 66px;
  display: inline-block;
  border-radius:3px;
  margin-left:30px;
  margin-top:20px;
}
.payOptionIcon div:hover,.payOptionIcon div.select{
  box-shadow:none;
  border:2px solid rgba(46, 180, 233,0.8);
}
.payOptionIcon div:first-child i{
  position: absolute;
  top: -7px;
  left:-16px;
  font-size:80px;
  color:#00a7ef;
  cursor: pointer;
}
.payOptionIcon div:last-child i{
  position: absolute;
  top:-50px;
  left:6px;
  font-size:160px;
  color:#14b83b;
  cursor: pointer;
}
.checkOut{
  font-size:16px;
  color:#555;
  margin-top:50px;
  margin-left:30px;
}
.checkOut h1{
  display: inline-block;
}
.checkOut div span{
  color:#2eb4e9;
  font-size:24px;
  display: inline-block;
  padding:0px 10px 0px 0px;
}
.payButton{
  width:120px;
  margin-left:30px;
  margin-top:40px;
  background-color: rgba(46, 180, 233,1);
}
</style>