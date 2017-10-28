<template>
    <main class="main">
        <el-row type="flex" justify="center">
            <el-col :span="8">
              <el-row type="flex" justify="center" class="formZone">
                <el-col :span="3">
                  <img src="../assets/img/loginLogo.png" width="68">  
                </el-col>
                <el-col :span="15">
                    <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
                      <el-form-item label-width="0" prop="userId">
                          <el-input v-model="loginForm.userId" auto-complete="off" placeholder="手机号/邮箱"></el-input>
                      </el-form-item>
                      <el-form-item label-width="0" prop="password">
                          <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
                      </el-form-item>
                      <el-form-item label-width="0">
                        <el-button type="text">忘记密码</el-button>
                        <el-button type="text">立即注册</el-button>
                      </el-form-item>
                      <el-form-item label-width="0">
                          <el-button class="submitBtn" @click="submitForm('loginForm')">登录</el-button>
                      </el-form-item>
                    </el-form>
                  </el-col>
                  <el-col :span="15">
                    <h1 class="text-center">使用第三方帐号登录</h1>
                  </el-col>
                  <el-col :span="15">
                    <el-button><i class="iconfont icon-qq" style="color:#09a3dc"></i></el-button>
                    <el-button><i class="iconfont icon-weixin" style="color:#2dce8f"></i></el-button>
                    <el-button><i class="iconfont icon-weibo" style="color:#ea0c11"></i></el-button>
                  </el-col>
              </el-row>
            </el-col>
        </el-row>
    </main>    
</template>

<script>


export default {
  data() {
     let phoneOrEmail = (rule, value, callback) => {
       let phoneRex = /^1\d{10}$/;
       let emailRex = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (!value) {
          return callback(new Error('请输入手机号或邮箱'));
        }
        else if (phoneRex.test(value)||emailRex.test(value)) {
          callback();
        }
        else{
          callback(new Error('请输入正确的手机号或邮箱'));
        }
      };
      return {
        loginForm: {
          userId: '',
          password: ''
        },
        loginRules: {
          userId: [
            { validator: phoneOrEmail, trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
    /* 主体的布局和长宽 */
    .main{
        width: 100%;
        height: 655px;
        display: flex;
        align-items: center;
    }
    /* 设定宽度 */
    .main .el-row{
        flex-basis: 100%;
    }
    /* 外阴影 */
    .main  >.el-row > .el-col:first-child{
        height: 500px;;
        width: 640px;
        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
    }
    /* 表单+logo区域的布局 */
    .main .el-row.formZone{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }
    /* 第三方登录区域布局 */
    .main .el-row.formZone .el-col:last-child{
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
    }
    /* 第三方登录字体 */
    .main .el-row.formZone .el-col:nth-last-child(2) h1{
      font-size: 14px;
      color: #c0c0c0;
    }
    /* 第三方登录按钮样式 */
    .main .el-row.formZone .el-col:last-child .el-button{
      border-radius: 50%;
      width: 80px;
      height: 80px;
      padding: 0;
    }
    /* 第三方登录hover样式 */
    .main .el-row.formZone .el-col:last-child .el-button:hover,:focus{
       border-color: #C4C4C4;
    }
    /* 第三方登录icon */
    .main .el-row.formZone .el-col:last-child .el-button i{
      font-size: 46px;
    }
    /* 输入框样式 */
    .main .el-form-item .el-input{
      border-color: #c1c1c1;
    }
    /* 输入密码的下外边距 */
   .main .el-form .el-form-item:nth-child(2){
     margin-bottom:8px;
   }
   /* 忘记密码和立即注册的下外边距 */
   .main .el-form .el-form-item:nth-child(3){
     margin-bottom:2px;
   }
   /* 忘记密码按钮样式 */
   .main .el-form .el-form-item:nth-child(3) .el-button:nth-child(1){
     color: #c0c0c0;
   }
   /* 立即注册按钮样式 */
   .main .el-form .el-form-item:nth-child(3) .el-button:nth-child(2){
     float: right;
     color: #2eb4e9;
   }
    /* 提交按钮样式 */
    .main .submitBtn{
      width: 100%;
      background-color: #2eb4e9;
      color: #FFF;
      border: none;
    }
    /* 提交按钮hover样式 */
    .main .submitBtn:hover{
      border:1px solid #c1c1c1;
    }
</style>