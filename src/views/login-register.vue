<template>
    <main class="main">
        <el-row type="flex" justify="center">
            <el-col :span="8">
              <el-row type="flex" justify="center" class="formZone">
                <el-col :span="3" class="logoCol">
                  <img src="../assets/img/loginLogo.png" width="68">  
                </el-col>
                <div class="login" v-show="login">
                    <el-col :span="15">
                    <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
                      <el-form-item label-width="0" prop="userId">
                          <el-input v-model="loginForm.userId" autofocus="autofocus" auto-complete="off" placeholder="手机号/邮箱"></el-input>
                      </el-form-item>
                      <el-form-item label-width="0" prop="password">
                          <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
                      </el-form-item>
                      <el-form-item label-width="0">
                        <el-button type="text">忘记密码</el-button>
                        <el-button type="text" @click="changeForm()">立即注册</el-button>
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
                </div>
                <div class="register" v-show="!login">
                    <el-col :span="15">
                      <el-form :model="registerForm" :rules="registerRules" ref="registerForm">
                        <el-form-item label-width="0" prop="userId">
                            <el-input v-model="loginForm.userId" autofocus="autofocus" auto-complete="off" placeholder="手机号/邮箱"></el-input>
                        </el-form-item>
                        <el-form-item label-width="0" prop="password">
                            <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="密码"></el-input>
                        </el-form-item>
                        <el-form-item label-width="0" prop="nickName">
                            <el-input v-model="registerForm.nickName" auto-complete="off" placeholder="昵称"></el-input>
                        </el-form-item>
                        <el-form-item label-width="0" prop="verification">
                            <el-input v-model="registerForm.verification" auto-complete="off" placeholder="验证码"></el-input>
                            <el-button type="primary" :class="{'verify':gettingVerification}" @click="getVerification()">获取验证码<span v-if="gettingVerification">({{timing}})</span></el-button>
                        </el-form-item>
                        <el-form-item label-width="0" prop="agree">
                          <el-checkbox-group v-model="registerForm.agree">
                            <el-checkbox label="阅读并接受《注册协议》"></el-checkbox>
                          </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label-width="0">
                          <el-button class="submitBtn" @click="submitForm('registerForm')">登录</el-button>
                      </el-form-item>
                      <el-col>
                        <el-button type="text" @click="changeForm()">已有帐号，点此登录</el-button>
                      </el-col>
                      </el-form>
                  </el-col>
                </div>
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
        login:true,
        timing:60,
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
        },
        registerForm: {
          userId: '',
          password: '',
          nickName:'',
          verification:'',
          agree:true
        },
        registerRules: {
          userId: [
            { validator: phoneOrEmail, trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        gettingVerification:false
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
      },
      changeForm(){
        this.login= !this.login;
        this.$refs['loginForm'].resetFields();
        this.$refs['registerForm'].resetFields();
      },
      // 获取验证码
      getVerification(){
        if(this.gettingVerification==true){
          return;
        }
        this.gettingVerification = true;
        let intervalId =  setInterval(()=>{
          if(this.timing==0){
            clearInterval(intervalId);
            this.gettingVerification = false;
            this.timing = 60;
          }
          else{
            this.timing--;
          }         
        },1000);
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
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    /* logo居中 */
    .logoCol{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    /* login窗口 */
    .login{
      width: 100%;
      height: 68%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    /* 第三方登录区域布局 */
    .main .el-row.formZone .login .el-col:last-child{
      display: flex;
      justify-content: space-between;
    }   
    /* 第三方登录字体 */
    .main .el-row.formZone .login .el-col:nth-last-child(2) h1{
      font-size: 14px;
      color: #c0c0c0;
    }
    /* 第三方登录按钮样式 */
    .main .el-row.formZone .login .el-col:last-child .el-button{
      border-radius: 50%;
      width: 80px;
      height: 80px;
      padding: 0;
    }
    /* 第三方登录hover样式 */
    .main .el-row.formZone .login .el-col:last-child .el-button:hover,:focus{
       border-color: #C4C4C4;
    }
    /* 第三方登录icon */
    .main .el-row.formZone .login .el-col:last-child .el-button i{
      font-size: 46px;
    }
    /* 输入框样式 */
    .main .login .el-form-item .el-input{
      border-color: #c1c1c1;
    }
    /* 输入密码的下外边距 */
   .main .login .el-form .el-form-item:nth-child(2){
     margin-bottom:8px;
   }
   /* 忘记密码和立即注册的下外边距 */
   .main .login .el-form .el-form-item:nth-child(3){
     margin-bottom:2px;
   }
   /* 忘记密码按钮样式 */
   .main .login .el-form .el-form-item:nth-child(3) .el-button:nth-child(1){
     color: #c0c0c0;
   }
   /* 立即注册按钮样式 */
   .main .login .el-form .el-form-item:nth-child(3) .el-button:nth-child(2){
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
    /* 注册区域布局 */
    .register{
      width: 100%;
      height: 75%;
      display:flex;
      justify-content: center;
      padding-top:20px;
    }
    /* 第四个输入框的下边距 */
    .register .el-form .el-form-item:nth-child(4){
      margin-bottom: 14px;
      
    }
    /* 第四个输入框的宽度 */
    .register .el-form-item:nth-child(4) .el-input{
      width: 70%;
    }
    /* 第四个输入框旁边的按钮 */
    .register .el-form-item:nth-child(4) .el-button{
      width: 29%;
      background-color: #2eb4e9;
      color:#FFF;
    }

    /* 最后的按钮居中 */
    .register .el-form .el-col:last-child{
      display: flex;
      justify-content: center;
    }
    
    /* 最后的按钮样式 */
    .register .el-form .el-col:last-child .el-button{
      color: #c1c1c1;
    }
    .verify{
      background-color: #c1c1c1 !important;
      cursor: not-allowed;
      border-color:#c1c1c1;
    }
    
</style>