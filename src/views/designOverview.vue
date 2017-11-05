<template>
    <main class="main">
        <el-row :gutter="20">
            <el-col :span="6" class="nav-left">
                <p>我的设计</p>
                <div>
                    <img src="../assets/img/poster3.png" alt="">
                    <p>社团联合会</p>
                </div>
                <div>
                    <img src="../assets/img/poster3.png" alt="">
                    <p>社团联合会</p>
                </div>
                <button>查看全部</button>
            </el-col>
            <el-col :span="16" :offset="2">
                <el-row>
                    <el-col class="designType" :span="20" :offset="2">
                        <div class="card" :key="index" v-for="(dtype,index) in types">
                            <div class="bg-gray" :class="{'active':dtype.isActive}" @click="checkType(index)"><i class="iconfont" :class="dtype.iconClass"></i></div>
                            <h1>{{dtype.name}}</h1>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="center">
                        <h1>服装设计</h1>
                        <h2>Costume Designing</h2>
                        <div class="sliding"></div>
                        <div class="recommend">
                            <div class="show-cart">
                              <img src="../assets/img/clothes2.png">
                              <p>新款卫衣</p>
                            </div>
                            <div class="show-cart">
                              <img src="../assets/img/clothes2.png">
                              <p>新款卫衣</p>
                            </div>
                            <div class="show-cart">
                              <img src="../assets/img/clothes2.png">
                              <p>新款卫衣</p>
                            </div>
                            <div class="show-cart">
                              <img src="../assets/img/clothes2.png">
                              <p>新款卫衣</p>
                            </div>
                        </div>
                        <div class="more"><a href="">全部衣服></a></div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="center">
                        <h1>热门海报</h1>
                        <h2>Poster Design</h2>
                        <div class="sliding"></div>
                        <div class="recommend">
                            <div class="show-cart">
                              <img src="../assets/img/poster.png">
                              <p>十佳歌手大赛海报</p>
                            </div>
                            <div class="show-cart">
                              <img src="../assets/img/poster.png">
                              <p>十佳歌手大赛海报</p>
                            </div>
                            <div class="show-cart">
                              <img src="../assets/img/poster.png">
                              <p>十佳歌手大赛海报</p>
                            </div>
                            <div class="show-cart">
                              <img src="../assets/img/poster.png">
                              <p>十佳歌手大赛海报</p>
                            </div>
                        </div>
                        <div class="more"><a href="">全部海报></a></div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="center">
                        <h1>热门横幅</h1>
                        <h2>Banner Production</h2>
                        <div class="sliding"></div>
                        <div class="recommend banner">
                            <div class="show-cart">
                              <img src="../assets/img/banner2.jpg">
                              <p>英语演讲大赛</p>
                            </div>
                            <div class="show-cart">
                              <img src="../assets/img/banner2.jpg">
                              <p>英语演讲大赛</p>
                            </div>
                            <div class="show-cart">
                              <img src="../assets/img/banner2.jpg">
                              <p>英语演讲大赛</p>
                            </div>
                            <div class="show-cart">
                              <img src="../assets/img/banner2.jpg">
                              <p>英语演讲大赛</p>
                            </div>
                        </div>
                        <div class="more"><a href="">全部横幅></a></div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        
    </main>
</template>
<script>
  export default {
    data() {
      return {
        usage:'',
        types:[{name:'海报',iconClass:'icon-tupian2',isActive:true},{name:'横幅',iconClass:'icon-page',isActive:false},{name:'衣服',iconClass:'icon-weibiaoti101',isActive:false}]
        
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
        }
    }
  }
</script>

<style scoped>
    .main{
        width: 1200px;
        margin: 0 auto;
        font-size: 14px;
        color: #555;
    }
    /* 每一层的外边距 */
    .main .el-row{
        margin-bottom: 48px;
    }
    /* img的宽度 */
    .main .el-row:nth-child(1) img{
        width: 100%;
    }
    /* 选择定制种类布局 */
    .main .designType{
        display: flex;
        justify-content: space-between;
        padding-top: 40px;
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
        margin-bottom: 4px;
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
        font-size: 16px;
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
    
    
    /*左边我的设计*/
    .nav-left{
        background-color: #edeef2;
        padding: 30px 70px !important;
        text-align: center;
    }
    .nav-left > p{
        width: 100px;
        background-color: #fff;
        border-left: 3px solid #2eb4e9;
        padding: 4px;
        margin-right: 39px;
        text-align: center;
        margin-bottom: 20px;
    }
    .nav-left > div{
        width: 100%x;
        text-align: center;
        margin-bottom: 20px;
    }
    .nav-left > div p{
        margin-top: 4px;
    }
    .nav-left > button{
        border: 1px solid #aaa;
        color: #aaa;
        background-color: #edeef2;
        padding: 6px 16px;
        border-radius: 2px;
        cursor:pointer;
    }

    /*居中样式*/
    .center{
        text-align: center;
    }
    .center h1{
        font-size: 18px;
        color: #555;
        font-weight: 700;
    }
    .center h2{
        font-size: 16px;
        color: #797979;
        margin: 10px 0 4px;
    }
    /*标题下的蓝色方块*/
    .sliding{
        width: 24px;
        height: 2px;
        background-color: #3688fe;
        margin: 0 auto;
        margin-bottom: 30px;
    }
    /*跳转全部*/
    .more{
        text-align: right;
    }
    /*相应推荐*/
  .show-cart{
    border: 1px solid #aaa;
    padding: 15px;
    padding-bottom: 20px;
    border-radius: 5px;
  }
  .show-cart img{
    width: 100%;
  }
  .show-cart p{
    width: 100%;
    margin-top: 10px;
    text-align: left;
  }
  .recommend{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .recommend .show-cart{
    width: 20%;
    padding: 10px;
    margin-bottom: 20px;
    cursor:pointer;
  }
  .banner .show-cart{
    width: 46%;
  }
</style>