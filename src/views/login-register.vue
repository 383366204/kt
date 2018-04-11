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
                          <el-input type="password" v-model="loginForm.password" @keyup.enter.native="submitForm('loginForm')" auto-complete="off" placeholder="密码"></el-input>
                      </el-form-item>
                      <el-form-item label-width="0">
                        <el-button type="text" @click="forgetPassword()">忘记密码</el-button>
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
                            <el-input v-model="registerForm.userId" auto-complete="off" placeholder="手机号/邮箱"></el-input>
                        </el-form-item>
                        <el-form-item label-width="0" prop="password">
                            <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="密码"></el-input>
                        </el-form-item>
                        <el-form-item label-width="0" prop="nickName">
                            <el-input v-model="registerForm.nickName" auto-complete="off" placeholder="昵称"></el-input>
                        </el-form-item>
                        <el-form-item label-width="0" prop="verification">
                            <el-input v-model="registerForm.verification" @keyup.enter.native="submitForm('registerForm')" auto-complete="off" placeholder="验证码"></el-input>
                            <el-button type="primary" :class="{'verify':registerVerification}" @click="getVerification('registerForm')"><span v-if="registerVerification">重发({{registerTiming}})</span><span v-else>获取验证码</span></el-button>
                        </el-form-item>
                        <el-form-item label-width="0" prop="agree">
                          <el-checkbox-group v-model="registerForm.agree">
                            <el-checkbox label="阅读并接受《注册协议》"></el-checkbox>
                          </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label-width="0">
                          <el-button class="submitBtn" @click="submitForm('registerForm')">注册</el-button>
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
        <!-- 忘记密码的模式窗 -->
        <el-dialog title="忘记密码" :visible.sync="forgetPasswordShow" width="30%" top="10%" @close="cancelForgetPassword('forgetPasswordForm')">
          <el-form :model="forgetPasswordForm" :rules="forgetPasswordRules" ref="forgetPasswordForm" label-width="100px">
            <el-form-item label="手机或邮箱" prop="userId">
              <el-input v-model="forgetPasswordForm.userId" auto-complete="off"></el-input>
            </el-form-item>           
            <el-form-item label="新密码" prop="newPassword">
              <el-input type="password" v-model="forgetPasswordForm.newPassword" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
              <el-input type="password" v-model="forgetPasswordForm.confirmPassword" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="verification">
                <el-input class="forgetVerification" v-model="forgetPasswordForm.verification" @keyup.enter.native="submitForm('forgetPasswordForm')" auto-complete="off" placeholder="验证码"></el-input>
                <el-button class="forgetVerification" type="primary" :class="{'verify':forgetPasswordVerification}" @click="getVerification('forgetPasswordForm')"><span v-if="forgetPasswordVerification">重发({{forgetPasswordTiming}})</span><span v-else>获取验证码</span></el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('forgetPasswordForm')">提交</el-button>
              <el-button @click="forgetPasswordShow = false">取消</el-button>
            </el-form-item>           
          </el-form>
        </el-dialog>
    </main>    
</template>

<script>
export default {
  data() {
    //验证手机或邮箱
    let phoneOrEmail = (rule, value, callback) => {
      let phoneRex = /^1\d{10}$/;
      let emailRex = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
      if (!value) {
        return callback(new Error("请输入手机号或邮箱"));
      } else if (phoneRex.test(value) || emailRex.test(value)) {
        callback();
      } else {
        callback(new Error("请输入正确的手机号或邮箱"));
      }
    };
    //验证确认密码
    var confirmPassword = (rule, value, callback) => {
      if (value !== this.forgetPasswordForm.newPassword) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
      login: true,
      registerTiming: 60,
      forgetPasswordTiming: 60,
      loginForm: {
        userId: "",
        password: ""
      },
      loginRules: {
        userId: [{ validator: phoneOrEmail, trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ]
      },
      registerForm: {
        userId: "",
        password: "",
        nickName: "",
        verification: "",
        agree: true
      },
      registerRules: {
        userId: [{ validator: phoneOrEmail, trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ],
        nickName: [
          {
            pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9_]{2,10}$/,
            message: "昵称为 2 到 10 个中英文字符组成",
            trigger: "blur"
          }
        ],
        verification: [
          {
            required: true,
            len: 6,
            message: "请输入6位数字的验证码",
            trigger: "blur"
          }
        ]
      },
      registerVerification: false,
      forgetPasswordShow: false,
      forgetPasswordForm: {
        userId: "",
        newPassword: "",
        confirmPassword: "",
        verification: ""
      },
      forgetPasswordRules: {
        userId: [
          { required: true, message: "请输入您的手机或邮箱", trigger: "blur" },
          { validator: phoneOrEmail, trigger: "blur" }
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
        confirmPassword: [
          { required: true, message: "请再次输入新密码", trigger: "blur" },
          { validator: confirmPassword, trigger: "blur" }
        ],
        verification: [
          {
            required: true,
            len: 6,
            message: "请输入6位数字的验证码",
            trigger: "blur"
          }
        ]
      },
      forgetPasswordVerification: false
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (formName == "loginForm") {
            this.signin();
          } else if (formName == "registerForm") {
            let self = this;
            let regisData = {
              nickName: this.registerForm.nickName,
              password: this.registerForm.password,
              verification: this.registerForm.verification
            };
            //判断是用手机还是邮箱注册
            if (this.registerForm.userId.match(/^1\d{10}$/)) {
              regisData.phone = this.registerForm.userId;
            } else if (
              this.registerForm.userId.match(
                /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
              )
            ) {
              regisData.email = this.registerForm.userId;
            }
            this.$ajax
              .post("user/signup", regisData)
              .then(function(response) {
                console.log(response);
                if (response.data.success) {
                  self.$notify.success({
                    title: "成功",
                    message: response.data.message,
                    offset: 100
                  });
                  self.changeForm();
                } else {
                  self.$notify.error({
                    title: "失败",
                    message: response.data.message,
                    offset: 100
                  });
                }
              })
              .catch(function(err) {
                console.log(err);
              });
          } else if (formName == "forgetPasswordForm") {
            //判断是用手机还是邮箱验证
            let forgetData = {
              password: this.forgetPasswordForm.newPassword,
              verification: this.forgetPasswordForm.verification
            };
            if (this.forgetPasswordForm.userId.match(/^1\d{10}$/)) {
              forgetData.phone = this.forgetPasswordForm.userId;
            } else if (
              this.forgetPasswordForm.userId.match(
                /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
              )
            ) {
              forgetData.email = this.forgetPasswordForm.userId;
            }
            this.$ajax.post("/user/forget", forgetData)
            .then(response => {             
              if (response.data.success) {
                this.$alert(response.data.message, "注意", {
                  confirmButtonText: "确定",
                  callback:action=>{
                    this.cancelForgetPassword('forgetPasswordForm');
                  }
                })
              }
              else{
                this.$alert(response.data.message, "注意", {
                  confirmButtonText: "确定"
                })
              }
            })
            .catch(err=>{
              console.log(err);
            })
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    changeForm() {
      this.login = !this.login;
      this.$refs["loginForm"].resetFields();
      this.$refs["registerForm"].resetFields();
    },
    // 获取验证码
    getVerification(verifiForm) {
      //先验证userId再发送验证码
      this.$refs[verifiForm].validateField("userId", err => {
        //没有错误时才进行下一步
        if (!err) {
          if (verifiForm == "registerForm") {
            if (this.registerVerification == true) {
              return;
            }
            this.registerVerification = true;
            let intervalId = setInterval(() => {
              if (this.registerTiming == 0) {
                clearInterval(intervalId);
                this.registerVerification = false;
                this.registerTiming = 60;
              } else {
                this.registerTiming--;
              }
            }, 1000);

            let getVeriParams = {
              type: "",
              ajax: this.$ajax,
              userId: this.registerForm.userId
            };

            //判断是用手机还是邮箱获取
            if (this.registerForm.userId.match(/^1\d{10}$/)) {
              getVeriParams.type = "phone";
            } else if (
              this.registerForm.userId.match(
                /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
              )
            ) {
              getVeriParams.type = "email";
            }
            this.$store.commit("getVeriCode", getVeriParams);
          } else if (verifiForm == "forgetPasswordForm") {
            if (this.forgetPasswordVerification == true) {
              return;
            }
            this.forgetPasswordVerification = true;
            let intervalId = setInterval(() => {
              if (this.forgetPasswordTiming == 0) {
                clearInterval(intervalId);
                this.forgetPasswordVerification = false;
                this.forgetPasswordTiming = 60;
              } else {
                this.forgetPasswordTiming--;
              }
            }, 1000);

            let getVeriParams = {
              type: "",
              ajax: this.$ajax,
              userId: this.forgetPasswordForm.userId
            };
            //判断是用手机还是邮箱获取
            if (this.forgetPasswordForm.userId.match(/^1\d{10}$/)) {
              getVeriParams.type = "phone";
            } else if (
              this.forgetPasswordForm.userId.match(
                /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
              )
            ) {
              getVeriParams.type = "email";
            }
            this.$store.commit("getVeriCode", getVeriParams);
          }
        }
      });
    },
    signin() {
      let self = this;
      let loginData = {
        password: this.loginForm.password
      };
      //判断是用手机还是邮箱注册
      if (this.loginForm.userId.match(/^1\d{10}$/)) {
        loginData.phone = this.loginForm.userId;
      } else if (
        this.loginForm.userId.match(
          /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        )
      ) {
        loginData.email = this.loginForm.userId;
      }
      this.$ajax
        .post("user/signin", loginData)
        .then(response => {
          console.log(response);
          if (response.data.success) {
            this.$store.commit("login", response.data);
            //登录后跳转
            let redirect = decodeURIComponent(
              this.$route.query.redirect || "/"
            );
            this.$router.push({
              path: redirect
            });
            this.$notify.success({
              title: "成功",
              message: response.data.message,
              offset: 100
            });
          } else {
            this.$notify.error({
              title: "失败",
              message: response.data.message,
              offset: 100
            });
          }
        })
        .catch(error => {
          console.log(error);
          this.$notify.error({
            title: "登录失败",
            message: "密码错误或用户名不存在",
            offset: 100
          });
        });
    },
    forgetPassword() {
      this.forgetPasswordShow = true;
    },
    cancelForgetPassword(formName) {
      this.forgetPasswordShow = false;
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
/* 主体的布局和长宽 */
.main {
  width: 100%;
  height: 655px;
  display: flex;
  align-items: center;
}
/* 设定宽度 */
.main .el-row {
  flex-basis: 100%;
}
/* 外阴影 */
.main > .el-row > .el-col:first-child {
  height: 500px;
  width: 640px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
}
/* 表单+logo区域的布局 */
.main .el-row.formZone {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
/* logo居中 */
.logoCol {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* login窗口 */
.login {
  width: 100%;
  height: 68%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
/* 第三方登录区域布局 */
.main .el-row.formZone .login .el-col:last-child {
  display: flex;
  justify-content: space-between;
}
/* 第三方登录字体 */
.main .el-row.formZone .login .el-col:nth-last-child(2) h1 {
  font-size: 14px;
  color: #c0c0c0;
}
/* 第三方登录按钮样式 */
.main .el-row.formZone .login .el-col:last-child .el-button {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  padding: 0;
}
/* 第三方登录hover样式 */
.main .el-row.formZone .login .el-col:last-child .el-button:hover,
:focus {
  border-color: #c4c4c4;
}
/* 第三方登录icon */
.main .el-row.formZone .login .el-col:last-child .el-button i {
  font-size: 46px;
}
/* 输入框样式 */
.main .login .el-form-item .el-input {
  border-color: #c1c1c1;
}
/* 输入密码的下外边距 */
.main .login .el-form .el-form-item:nth-child(2) {
  margin-bottom: 8px;
}
/* 忘记密码和立即注册的下外边距 */
.main .login .el-form .el-form-item:nth-child(3) {
  margin-bottom: 2px;
}
/* 忘记密码按钮样式 */
.main .login .el-form .el-form-item:nth-child(3) .el-button:nth-child(1) {
  color: #c0c0c0;
  border: none;
}
/* 立即注册按钮样式 */
.main .login .el-form .el-form-item:nth-child(3) .el-button:nth-child(2) {
  float: right;
  color: #2eb4e9;
  border: none;
}
/* 提交按钮样式 */
.main .submitBtn {
  width: 100%;
  background-color: #2eb4e9;
  color: #fff;
  border: none;
}
/* 注册区域布局 */
.register {
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
/* 第四个输入框的下边距 */
.register .el-form .el-form-item:nth-child(4) {
  margin-bottom: 14px;
}
/* 第四个输入框的宽度 */
.register .el-form-item:nth-child(4) .el-input {
  width: 70%;
}
/* 第四个输入框旁边的按钮 */
.register .el-form-item:nth-child(4) .el-button {
  width: 29%;
  background-color: #2eb4e9;
  color: #fff;
}
.register .el-checkbox-group {
  height: 30px;
}
/* 最后的已有帐号按钮居中 */
.register .el-form .el-col:last-child {
  display: flex;
  justify-content: center;
}

/* 最后的已有帐号按钮样式 */
.register .el-form .el-col:last-child .el-button {
  color: #c1c1c1;
  border: none;
}
.verify {
  background-color: #c1c1c1 !important;
  cursor: not-allowed;
  border-color: #c1c1c1;
}
/* 忘记密码模式窗口的验证码输入框的样式 */
.forgetVerification.el-input {
  width: 70%;
}
/* 忘记密码模式窗口的验证码按钮的样式 */
.forgetVerification.el-button {
  width: 29%;
}
</style>