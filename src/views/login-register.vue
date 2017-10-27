<template>
    <main class="main">
        <el-row type="flex" justify="center" align="middle">
            <el-col :span="8">
                <el-form :model="loginForm" status-icon :rules="rules2" ref="ruleForm2">
                    <el-form-item label-width="0" prop="pass">
                        <el-input v-model="loginForm.pass" auto-complete="off" placeholder="手机号/邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label-width="0" prop="checkPass">
                        <el-input type="password" v-model="loginForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item label-width="0">
                      <el-button type="text">文字按钮</el-button>
                      <el-button type="text">文字按钮</el-button>
                    </el-form-item>
                    <el-form-item label-width="0">
                        <el-button class="submitBtn" @click="submitForm('ruleForm2')">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </main>    
</template>

<script>


export default {
  name: 'Login',
  data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号或邮箱'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
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
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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

    .main .el-row .el-col:first-child{
        display: flex;
        height: 500px;;
        width: 640px;
        justify-content: center;
        align-items: center;
    }
    .main .el-form{
      width: 384px;
    }
    /* 输入框样式 */
    .main .el-form-item .el-input{
      border-color: #c1c1c1;
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