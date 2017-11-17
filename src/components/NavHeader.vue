<template>
    <header class="header">          
         <el-row type="flex" justify="center">
          <el-col :span="10">
            <router-link to="/"><img src="../assets/img/logo.png" width="97" height="48"></router-link>
             <router-link to="NewDesign"><el-button type="text">新建设计</el-button></router-link>
             <router-link to="MyDesign"><el-button type="text">我的设计</el-button></router-link>
             <router-link to="Document"><el-button type="text">帮助文档</el-button></router-link>
             <router-link to="Download"><el-button type="text">APP下载</el-button></router-link>
             <router-link to="CustomDesign"><el-button type="text">定制设计</el-button></router-link>
          </el-col>
          <el-col :span="4">      
              <router-link to="/Service">             
              <el-button type="text" class="hasIcon">
               <i class="iconfont icon-duihuakuang"></i>
                在线客服
                </el-button>
              </router-link>
              <router-link to="/Message" class="message" v-if="getLogin">                 
                  <el-button type="text" class="hasIcon">
                    <i class="iconfont icon-xinfeng" style="font-size:18px;"></i>
                  你的通知
                  </el-button>
              </router-link>
              <el-dropdown v-if="getLogin" @command="handleCommand" trigger="click">
                <div class="headPic">
                  <el-badge :value="100" :max="99">
                    <el-button><img src="../assets/img/head-pic.png" width="52"></el-button>
                  </el-badge>
                  <h1>团小图</h1>
                  <h2>超级会员</h2>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="accountSettings">
                    <span class="icon"><i class="iconfont icon-zhanghao"></i></span>
                    帐号设置
                  </el-dropdown-item>
                  <el-dropdown-item command="inform">
                    <span class="icon"><i class="iconfont icon-tongzhi"></i></span>
                    信息中心
                  </el-dropdown-item>
                  <el-dropdown-item command="orderList">
                    <span class="icon"><i class="iconfont icon-page"></i></span>
                    订单管理
                  </el-dropdown-item>                 
                  <el-dropdown-item command="cart">
                    <span class="icon"><i class="iconfont icon-gouwuche"></i></span>
                    购物车
                  </el-dropdown-item>
                  <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <router-link to="/Login" v-else><el-button type="text">登录/注册</el-button></router-link>
          </el-col>
        </el-row>
    </header>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods:{
      handleCommand(command){
        switch (command) {
          case 'accountSettings':
            this.$router.push({path:'AccountSettings'});
            break;
          case 'inform':
            this.$router.push({path:'Inform'});
            break;
          case 'orderList':
            this.$router.push({path:'/OrderList'});
            break;
          case 'cart':
            this.$router.push({path:'/Cart'});
            break;
          case 'logout':
            this.$store.commit('logout');
            break;
          default:
            break;
        }
      }
    },
    computed:{
      getIndex(){
        return this.$store.state.isIndex;
      },
      getLogin(){
        return this.$store.state.isLogin;
      }
    }
  }
</script>
<style scoped>
    /* 导航栏高度 */
    .header .el-row{
      height: 75px;
    }
    /* 黑色底边和布局 */
    .header .el-row .el-col{
      display: flex;
      flex-basis: 850px;
      align-items: center;
    }
    .bottom-border{
      border-bottom: 1px solid #aaaaaa;
    }
    /* 左边Logo的布局 */
    .header .el-row .el-col:first-child img{
      margin-right: 30px;
    }
    /* 右两个按钮布局 */
    .header .el-row .el-col:last-child{
      justify-content: flex-end;
      flex-basis: 360px;
    }
    /* 按钮样式 */
    .header .el-row .el-button{
      width: 90px;
      height: 31px;
      line-height: 12px;
      font-size: 18px;
      color: #FFF;
    }
    /* 有icon的按钮 */
    .header .el-row .el-button.hasIcon{
      width: 110px;
      height: 32px;
    }
    /* 按钮hover样式 */
    .header .el-row .el-button:hover{
       color: #2eb4e9;
       background-color: #FFF;
    }
    /* 选中后的样式 */
     .header .el-row .el-col .router-link-active .el-button{
       color: #2eb4e9;
       background-color: #FFF;
     }
    /* 最后登录按钮样式 */
    .header .el-col:last-child a:last-child .el-button{
       border: 1px solid #FFF;
       margin-left: 10px;
       line-height: 10px;
       background-color: transparent;
    }
    /* 最后登录按钮hover样式 */
    .header .el-col:last-child a:last-child .el-button:hover{
       color: #45c1ee;
       background-color: #FFF;
    }
    /* 最后登录按钮选中样式 */
    .header .el-col:last-child a:last-child.router-link-active .el-button{
       color: #45c1ee;
       background-color: #FFF;
    }
  
    .message{
      width: 90px;
    }
    /* 登录后右边的头像 */
    .headPic{
      position: relative;
      width: 126px;
      margin-left: 26px;
    }
    /* 头像按钮 */
    .headPic .el-badge .el-button{
      position: relative;
      width: 55px !important;
      height: 55px !important;
      border-radius: 50%;    
    }
    /* 头像hover效果*/
    .headPic .el-badge .el-button:hover{
      border: 1px solid #EEE;
    }
    /* 头像照片 */
    .headPic .el-badge .el-button img{
      position: absolute;
      top: 1px;
      left: 1px;
    }
    /* 名字和会员等级 */
    .headPic h1,h2{
      position: absolute;
      color: #FFF;
      top: 9px;
      right: 16px;
      font-size: 16px;
    }
    .headPic h2{
      top:32px;
      right:0px;
    }
    .el-dropdown-menu{
      width: 170px;
      border-radius: 4px;
      text-align: center;
    }
    .icon{
      color:#2eb4e9;
      padding-right: 6px;
    }
</style>
