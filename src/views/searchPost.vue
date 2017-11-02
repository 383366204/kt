<template>
  <main>
    <el-row>
      <!-- 搜索框 -->
      <el-col :span="12" :offset="6">
        <el-input placeholder="搜索模板" v-model="input" class="input-with-select serch">
          <el-button slot="append" icon="el-icon-search"><i class="iconfont icon-fangdajing"></i></el-button>
        </el-input>
        <!-- 热门搜索 -->
        <div class="serch-hot">热门搜索：
          <ul>
            <li>印刷</li>
            <li>上传图片</li>
            <li>下载</li>
          </ul>
        </div>
      </el-col>
      <!-- 条件选择 -->
      <el-col :span="16" :offset="4" class="recommend">
        <div class="serch-condition">类别：
          <ul>
            <li>全部</li>
            <li>体育竞技</li>
            <li>纳新</li>
            <li class="active">班级活动</li>
            <li>党团活动</li>
            <li>游戏娱乐</li>
            <li>益智</li>
            <li>产品宣传</li>
          </ul>
        </div>
        <div class="serch-condition">标签：
          <ul>
            <li class="active">全部</li>
            <li>十佳歌手</li>
            <li>足球大赛</li>
            <li>篮球大赛</li>
            <li>团立项</li>
            <li>创业大赛</li>
            <li>文学创作</li>
          </ul>
        </div>
        <div class="serch-condition">
          <ul>排序：            
            <li>热门推荐</li>
            <li>最多使用</li>
            <li>最多印刷</li>
          </ul>
        </div>
      </el-col>
      <!-- 模板推荐 -->
      <el-col :span="16" :offset="4" class="recommend">
        <div class="post-lt">
          <img src="../assets/img/poster.png">
          <p>十佳歌手大赛海报</p>
        </div>
        <div class="post-lt">
          <img src="../assets/img/poster.png">
          <p>十佳歌手大赛海报</p>
        </div>
        <div class="post-lt">
          <img src="../assets/img/poster.png">
          <p>十佳歌手大赛海报</p>
        </div>
        <div class="post-lt">
          <img src="../assets/img/poster.png">
          <p>十佳歌手大赛海报</p>
        </div>
        <div class="post-lt">
          <img src="../assets/img/poster.png">
          <p>十佳歌手大赛海报</p>
        </div>
        <div class="post-lt">
          <img src="../assets/img/poster.png">
          <p>十佳歌手大赛海报</p>
        </div>
        <div class="post-lt">
          <img src="../assets/img/poster.png">
          <p>十佳歌手大赛海报</p>
        </div>
        <div class="post-lt">
          <img src="../assets/img/poster.png">
          <p>十佳歌手大赛海报</p>
        </div>
      </el-col>
      <!-- 分页 -->
      <el-col :span="16" :offset="4" class="recommend">
        <el-pagination
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </el-col>
    </el-row>
  </main>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      listItems: ['buy food', 'play games', 'sleep'],
      
      input: "",
      labelPosition: 'right',
      formLabelAlign: {
        num: 1,
      }
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>
<style>
  .serch .el-input__inner{
    border-right: none;
  }
  
</style>
<style scoped>
  main{
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    color: #555;
  }
  img{
    width: 100%;
  }
  button{
    cursor: pointer;
  }
  .el-col {
    margin-bottom: 20px;
  }
  .el-col .el-col{
    margin-bottom: 0;
  }


  /*搜索框*/
  .serch{
    margin-top: 20px;
  }
  .serch .el-button{
    padding: 0 10px;
  }
  .serch .el-button i{
    font-size: 24px;
    color: #707070;
  }
  /*热门搜索/条件选择*/
  .serch-hot, 
  .serch-condition{
    width: 100%;
    cursor: default;
  }
  .serch-hot ul, 
  .serch-condition ul{
    display: inline-block;
  }
  .serch-hot li, 
  .serch-condition li{
    display: inline-block;
    margin-right: 10px;
    padding: 2px 6px;
    cursor:pointer;
    margin-bottom: 4px;
  }
  .serch-hot li{
    background-color: #2eb4e9;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    margin-top: 15px;
  }
  .serch-condition .active{
    color: #2eb4e9;
  }
  /*海报推荐*/
  .post-lt{
    border: 1px solid #aaa;
    padding: 15px;
    padding-bottom: 20px;
    border-radius: 5px;
  }
  .post-lt img{
    width: 100%;
  }
  .post-lt p{
    width: 100%;
    margin-top: 10px;
  }
  .recommend{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .recommend .post-lt{
    width: 20%;
    padding: 10px;
    margin-bottom: 20px;
    cursor:pointer;
  }

</style>