<template>
    <main class="main">
        <el-row type="flex" justify="space-around">
           <el-col class="title">
                <h1 class="text-center">联系方式</h1>
            </el-col>
        </el-row>
        <el-row type="flex" class="contactInfo">
           <el-col v-for="(way,index) in contactWay" :key="index">
               <el-card class="box-card">
                <div slot="header">
                    <i v-if="index==0" class="el-icon-location"></i>
                    <i v-if="index==1" class="el-icon-service"></i>
                    <i v-if="index==2" class="el-icon-phone-outline"></i>
                    <i v-if="index==3" class="el-icon-message"></i>
                    <span>{{way.title}}</span>
                </div>
                <div v-for="(con,index) in way.content" :key="index" class="text item">
                    {{con}}
                </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
           <el-col class="title">
                <h1 class="text-center">留下您的意见</h1>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
            <el-col class="information">
                <el-form :inline="true" :model="information" :rules="infoRules" ref="information" label-width="80px">
                    <el-form-item label="姓名：" prop="name">
                        <el-input v-model="information.name" placeholder="怎么称呼您"></el-input>
                    </el-form-item>
                    <el-form-item label="手机：" prop="phone">
                        <el-input v-model="information.phone" placeholder="您的手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱：" prop="email">
                        <el-input v-model="information.email" placeholder="您的电子邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="QQ号：" prop="qq">
                        <el-input v-model="information.qq" placeholder="您的QQ号码"></el-input>
                    </el-form-item>
                    <el-form-item label="留言：" prop="message">
                        <el-input type="textarea" v-model="information.message" placeholder="您的留言"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('information')">提交留言</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </main>
</template>

<script>
  export default {
    data() {
      return {
        information:{
            name:'',
            phone:'',
            email:'',
            qq:'',
            message:''
        },
        infoRules: {
          name: [
            { required: true, message: '请输入您的姓名', trigger: 'blur' }
          ],
          phone:[
              {required:true,message: '请输入您的手机号码',trigger :'blur'},
              {pattern:/^1\d{10}$/,message:'请输入正确的手机号码',trigger :'blur'}
          ],
          email:[
              {required:true,message: '请输入您的邮箱',trigger :'blur'},
              {type:'email',message: '请输入正确的邮箱',trigger: 'blur'}
          ],
          qq:[
              
          ],
          message: [
            { required: true, message: '请输入您的留言', trigger: 'blur' }
          ]
        },
        contactWay:[
            {
                title:'开田厨卫有限责任公司',
                content:[
                    '地址：广东省佛山市南海区大沥镇南国小商城13街6号',
                    '邮编：528247',
                    '电话：0757-85731029'
                ]
            },
            {
                title:'客服服务',
                content:[
                    '联系电话：400-100-1234',
                    '微信号码：q383366204',
                    '电子邮箱：383366204@qq.com'
                ]
            },
            {
                title:'商务合作',
                content:[
                    '联系人：孙先生',
                    '手机号码：18928651029',
                    '电子邮箱：383366204@qq.com'
                ]
            },
            {
                title:'其他咨询',
                content:[
                    '联系电话：400-100-1234',
                    '微信号码：q383366204',
                    '电子邮箱：383366204@qq.com'
                ]
            }
        ]
      };
    },
    computed:{
      
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$ajax.post('/message',this.information)
                .then(response=>{
                    if (response.data.success) {
                        this.$notify.success({
                            title: "成功",
                            message: response.data.message,
                            offset: 100
                        });
                        this.$refs[formName].resetFields();
                    }else{
                        this.$notify.error({
                            title: "失败",
                            message: response.data.message,
                            offset: 100
                        });
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
    }
  }
</script>
<style scoped>
    .main{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top:32px;
    }
     .main .el-row{
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    /* 标题 */
    .main .title{
        font-size: 20px;
        color: #555;
        position: relative;
        width: 160px;
    }
    /* 标题的装饰（左小） */
    .main .title::before{
        position: absolute;
        top: 10px;
        left: -52px;
        width: 9px;
        height: 9px;
        content: "";
        display: block;
        background-color: #2eb4e9;
        border-radius: 50%;
    }
    /* 标题的装饰（右小） */
    .main .title::after{
        position: absolute;
        top: 10px;
        right: -52px;
        width: 9px;
        height: 9px;
        content: "";
        display: block;
        background-color: #2eb4e9;
        border-radius: 50%;
    }
    /* 标题的装饰（左大） */
    .main .title h1::before{
        position: absolute;
        top: 8px;
        left: -38px;
        width: 13px;
        height: 13px;
        content: "";
        display: block;
        background-color: #2eb4e9;
        border-radius: 50%;
    }
    /* 标题的装饰（右大） */
    .main .title h1::after{
        position: absolute;
        top: 8px;
        right: -38px;
        width: 13px;
        height: 13px;
        content: "";
        display: block;
        background-color: #2eb4e9;
        border-radius: 50%;
    }
    /* 联系方式 */
    .main .text {
        font-size: 14px;
    }

    .main .item {
        margin-bottom: 18px;
    }

    .main .clearfix:before,
    .main .clearfix:after {
        display: table;
        content: "";
    }
    .main .clearfix:after {
        clear: both
    }

    .main .box-card {
        width: 480px;
        margin-top: 20px;
    }
    .main .box-card i{
        color:#2eb4e9;
    }
    .main .contactInfo{
        flex-direction: row;
        width: 1000px;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .main .contactInfo .el-col{
        flex-basis: 483px;
    }
    /* 留言 */
    .main .information{
        width: 810px;
        margin-bottom: 110px;
    }
    .main .information .el-form .el-form-item .el-input{
        width: 308px;
    }
    .main .information .el-form .el-form-item:nth-last-child(2) >>> .el-textarea__inner{
        width: 710px;
        height: 200px;
    }

     /* 最后的按钮 */
    .main .information .el-form .el-form-item:nth-last-child(1){
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 30px;
    }
    .main .information .el-form .el-form-item:last-child .el-button{
        width: 238px;
        height: 50px;
        background-color: #2eb4e9;
        border-color: #2eb4e9;
        color: #fff;
        font-size: 20px;
    }
</style>
