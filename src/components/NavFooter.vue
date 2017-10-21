<template>
    <footer class="footer">
        <el-row type="flex" justify="center">
            <el-col :span="6">
                <div class="QR-code">
                    <div>
                        <img src="../assets/img/QR-code-small.png"/>
                        <h1>微信公众号</h1>
                    </div>
                    <div>
                        <img src="../assets/img/QR-code-small.png"/>
                        <h2>微博</h2>
                     </div>
                </div>
                <h1>Copyright©福州九八五信息科技有限公司</h1>
            </el-col>
            <el-col :span="6">
                <div class="list">
                    <ul v-for="list in lists" :key="list.id">
                        <li v-for="(content,index) in list.content" :key="index">
                            <a href="#">{{content}}</a>
                        </li>
                    </ul>
                </div>
                <h1>闽ICP备 13333333号-2</h1>
            </el-col>
        </el-row> 
    </footer>
</template>
   
<script>
    export default {
    data() {
      return {
        lists:[
            {'id':1,'content':['关于我们','免责声明','隐私协议','加入我们']},
            {'id':2,'content':['友情链接','联系我们','版权声明','帮助文档']}
        ]
      };
    }
  }
</script>

<style scoped>
    .footer{
        padding: 36px 0 0px 0;
        height: 198px;
        background-color: #333334;
        color: #FFFFFF;
        text-align: center;
        min-width: 1200px;
    }
    .footer .el-row .el-col{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .el-col{
        min-width: 600px;
    }
    .QR-code,.list{
        display: flex;
        justify-content: space-around; 
        padding: 0 46px 16px 46px;
    }
    .list{
        padding: 0px 106px 12px 106px;
    }
    .el-row:last-child .el-col:last-child h1{
        padding-top: 16px;
    }
    .list li:not(:first-child){
        margin-top: 7px;
    }
    .list li a{
        color:#FFF;
    }
    .list li a:hover{
        text-decoration: none;
        color:#999;
    }
</style>
