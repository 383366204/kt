<template>
    <header class="header">          
         <el-row type="flex" justify="center">
          <el-col>
            <router-link to="/"><img src="../assets/img/logo.png" width="97" height="48"></router-link>         
              <router-link to="/Introduce">
                <el-button type="text">公司介绍</el-button>
              </router-link>
              <router-link to="/Contact">
              <el-button type="text">
                联系我们
              </el-button>
             </router-link>
             <el-input class="searchBox" placeholder="搜索" @keyup.enter.native="searchGoods()"  v-model="searchContent">
              <el-button slot="append" icon="el-icon-search" @click="searchGoods()"></el-button>
            </el-input>
          </el-col>
          <el-col>
              <el-dropdown v-if="getLogin" @command="handleCommand" trigger="click">
                <div class="headPic">
                  <el-badge :value="100" :max="99">
                    <el-button><img src="../assets/img/head-pic.png" width="52"></el-button>
                  </el-badge>
                  <h1>{{userInfo.nickName}}</h1>
                  <h2 v-if="userInfo.level==1">普通会员</h2>
                  <h2 v-else-if="userInfo.level==2">超级会员</h2>
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
        searchContent:''
      };
    },
    methods:{
      handleCommand(command){
        switch (command) {
          case 'accountSettings':
            this.$router.push({path:'/AccountSettings'});
            break;
          case 'inform':
            this.$router.push({path:'/Inform'});
            break;
          case 'orderList':
            this.$router.push({path:'/OrderList'});
            break;
          case 'cart':
            this.$router.push({path:'/Cart'});
            break;
          case 'logout':
            this.$store.commit('logout',this.$router);
            break;
          default:
            break;
        }
      },
      searchGoods(){
        this.$router.push({path:`/Search/${this.searchContent}`});
      }
    },
    computed:{
      getIndex(){
        return this.$store.state.isIndex;
      },
      getLogin(){
        return this.$store.state.isLogin;
      },
      userInfo(){
        return this.$store.state.userInfo;
      },
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
      flex-basis: 940px;
      align-items: center;
      padding-left: 20px;
    }
    .bottom-border{
      border-bottom: 1px solid #aaaaaa;
    }
    /* 左边Logo的布局 */
    .header .el-row .el-col:first-child img{
      margin-right: 20px;
    }
    /* 右两个按钮布局 */
    .header .el-row .el-col:last-child{
      justify-content: flex-start;
      flex-basis: 180px;
      padding-left: 0px;
    }
    /* 按钮样式 */
    .header .el-row a .el-button{
      width: 90px;
      height: 31px;
      line-height: 8px;
      font-size: 18px;
      color: #FFF;
      margin-right: 4px;
    }
    /* 有icon的按钮 */
    .header .el-row a .el-button.hasIcon{
      width: 110px;
      height: 32px;
    }
    /* 按钮hover样式 */
    .header .el-row a .el-button:hover{
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
       line-height: 8px;
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
      font-size: 16px;
    }
    .headPic h1{
      top: 11px;
      left: 64px;
      width: 100%;
      right: 16px;
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
    /* 搜索框的样式 */
    .searchBox{
      margin-left: 10px;
      width: 530px;
    }
    /* 搜索框左边输入框的样式 */
    .searchBox >>> .el-input__inner{
      border-color:#45c1ee;
      border-right: none;
      outline:none;
      width: 500px;
    }
    /* 搜索框右边按钮的样式 */
    .searchBox .el-button{
      width: 80px;
      background-color: inherit;
      color: #45c1ee;
    }
    .searchBox >>> .el-input-group__append{
       border-color: #45c1ee;
       border-left: 1px solid #dcdfe6;
       background-color: #fff;
    }
    .searchBox >>> .el-input__inner::-webkit-input-placeholder{
       font-size:16px;
    }
    .searchBox >>> .el-icon-search{
       position: absolute;
       top: 10px;
       left: 30px;
       font-size: 20px;
    }
</style>
