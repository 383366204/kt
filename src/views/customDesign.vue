<template>
    <main class="main">
        <el-row type="flex" justify="center">
            <el-col>
                <img src="../assets/img/yellowBg.jpg">
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col class="title">
                <h1 class="text-center">选择你要的定制</h1>
            </el-col>
            <el-col class="designType">
                <div class="card" :key="index" v-for="(dtype,index) in types">
                    <div class="bg-gray" :class="{'active':dtype.isActive}" @click="checkType(index)"><i class="iconfont" :class="dtype.iconClass"></i></div>
                    <h1>{{dtype.name}}</h1>
                </div>        
            </el-col>
            <el-col class="usage" :push="4">
                <h1>用途：</h1>
                <el-input v-model="usage" placeholder="例如：情侣装、个人休闲装、班级活动等"></el-input>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
            <el-col class="title">
                <h1 class="text-center">选择你喜欢的风格</h1>
            </el-col>
            <el-col class="designStyle">
                <div class="circle" :class="{'active':style.isActive}" :key="index" v-for="(style,index) in styles"  @click="checkStyle(index)">{{style.name}}</div>
            </el-col>
            <el-col class="other">
                <h1>备注：</h1>
                <div class="textarea">
                    <el-input
                    type="textarea"
                    placeholder="请填写您的其他需求"
                    v-model="other"
                    :autosize="{ minRows: 14, maxRows: 28}"
                    >
                    </el-input>
                </div>                             
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
           <el-col class="title">
                <h1 class="text-center">您的联系方式</h1>
            </el-col>
            <el-col class="information">
                <el-form :inline="true" :model="information" :rules="infoRules" ref="information" label-width="80px">
                    <el-form-item label="姓名：" prop="name">
                        <el-input v-model="information.name" placeholder="怎么称呼您"></el-input>
                    </el-form-item>
                    <el-form-item label="手机：" prop="phone">
                        <el-input v-model="information.phone" placeholder="我们会第一时间联络您"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱：" prop="email">
                        <el-input v-model="information.email" placeholder="样式效果将以邮件方式发送给您"></el-input>
                    </el-form-item>
                    <el-form-item label="QQ号：">
                        <el-input v-model="information.QQ" placeholder="可通过QQ在线交流"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('information')">提交定制</el-button>
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
        usage:'',
        types:[{name:'海报',iconClass:'icon-tupian2',isActive:true},{name:'横幅',iconClass:'icon-page',isActive:false},{name:'衣服',iconClass:'icon-weibiaoti101',isActive:false}],
        designType:'',
        styles:[{name:'简约',isActive:true},{name:'酷炫',isActive:false},{name:'扁平',isActive:false},{name:'可爱',isActive:false},{name:'纯色',isActive:false}],
        designStyle:'',
        other:'',
        information:{
            name:'',
            phone:'',
            email:'',
            QQ:''
        },
        infoRules: {
          name: [
            { required: true, message: '请输入您的姓名', trigger: 'blur' }
          ],
          phone:[
              {required:true,message: '请输入您的手机号码',trigger :'blur'},
              {pattern:'/^1\d{10}$/',message:'请输入正确的手机号码',trigger :'blur'}
          ],
          email:[
              {required:true,message: '请输入您的邮箱',trigger :'blur'},
              {type:'email',message: '请输入正确的邮箱',trigger: 'blur'}
          ],
        }
      };
    },
    computed:{
      
    },
    methods:{
        checkType(index){
            for (let i = 0; i < this.types.length; i++) {
                if (this.types[i].isActive) {
                     this.types[i].isActive = !this.types[i].isActive;
                }             
            }
            this.types[index].isActive = !this.types[index].isActive;
            this.designStyle = this.types[index].name;
        },
        checkStyle(index){           
            for (let i = 0; i < this.styles.length; i++) {
                if (this.styles[i].isActive) {
                     this.styles[i].isActive = !this.styles[i].isActive;
                }             
            }
            this.styles[index].isActive = !this.styles[index].isActive;
            this.designStyle = this.styles[index].name;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$router.push({path:'/CustomDesignSubmit'})
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
    }
    /* 每一层的外边距 */
    .main .el-row{
        margin-bottom: 48px;
    }
    /* 背景img的外框 */
    .main .el-row:nth-child(1) .el-col{
        flex-basis: 1200px;
    }
    /* img的宽度 */
    .main .el-row:nth-child(1) img{
        width: 100%;
    }
    /* 每一floor的flex布局 */
     .main .el-row:not(:first-child){
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
        margin-bottom: 60px;
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
    .main .el-row:nth-child(2){
        width: 1200px;
    }
    /* 选择定制种类布局 */
    .main .designType{
        display: flex;
        justify-content: space-between;
        margin-bottom:46px;
        width: 810px;
    }
    /* 卡片的布局 */
    .main .designType .card{
        width: 156px;
    }
    /* 选择定制种类 */
    .main .designType .card div.bg-gray{
        color:#A4AFB8;
        width: 100%;
        height: 82px;
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
    }   
    .main .designType .card div.bg-gray:hover,.active{
         color: #FFF !important;
         background-color: #2eb4e9;
     }
    /* icon样式 */
    .main .designType .card div i{
        font-size: 40px;
    }
    /* 卡片的h1 */
    .main .designType .card h1{
        text-align: center;
        color: #555;
        font-size: 18px;
    }
    /* 用途选入框 */
    .main .usage{
        display: flex;
        width: 810px;
        justify-content: flex-start;
        align-self: flex-start;
    }
    /* 用途h1 */
    .main .usage h1{
        width: 60px;
        font-size: 16px;
        color:#555;
        line-height: 36px;
    }
    .main .designStyle{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 810px;
        margin-bottom:40px;
    }
    /* 圆圈的布局及样式 */
    .main .designStyle .circle{
        width: 90px;
        height: 90px;
        background-color: #edeef2;
        color:#555;
        font-size: 18px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    /* 选项hover后的样式 */
    .main .circle:hover{
        background-color: #2eb4e9;
        color:#FFF;
    }
    
    /* 选项激活后的样式 */
    .main .circle.active{
        background-color: #2eb4e9;
        color:#FFF;
    }
    
    /* 备注 */
    .main .other {
        display: flex;
    }
    .main .other .textarea{
        width: 762px;        
    }
    .main .information{
        width: 810px;
    }
    /* 联系方式 */
    .main .information{
        margin-bottom: 120px;
    }
    .main .information .el-form .el-form-item{
        width: 48%;
    }
    .main .information .el-form .el-form-item .el-input{
        width: 308px;
    }
    .main .information .el-form .el-form-item:last-child{
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 54px;
    }
    .main .information .el-form .el-form-item:last-child .el-button{
        width: 238px;
        height: 50px;
        background-color: #2eb4e9;
        color: #fff;
        font-size: 20px;
    }
</style>
