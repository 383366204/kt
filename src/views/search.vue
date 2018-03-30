<template>
  <main v-loading="loading">
    <el-row>
      <el-col :span="12" :offset="1">
        <!-- 热门搜索 -->
        <div class="search-hot">热门搜索：
          <ul>
            <li v-for="(hot,index) in searchHot" :key="index">
              {{hot}}
            </li>
          </ul>
        </div>
      </el-col>
      <!-- 条件选择 -->
      <el-col :span="16" :offset="1" class="recommend">
        <div class="search-condition">类别：
          <ul>
            <li :class="{'active':selectCategory==-1}" @click="searchByCategory(-1)">全部</li>
            <li :class="{'active':selectCategory==index}" @click="searchByCategory(index)" v-for="(productInfo,index) in productInfos" :key="index">
                {{productInfo.category}}
            </li>
          </ul>
        </div>
        <div class="search-condition">标签：
          <ul>
            <li :class="{'active':selectTag==-1}" @click="searchByTag(-1)">全部</li>
            <li :class="{'active':selectTag==index}" @click="searchByTag(index)" v-for="(tag,index) in tags" :key="index">
              {{tag}}
            </li>
          </ul>
        </div>
      </el-col>
      <!-- 产品 -->
      <el-col class="content">
        <el-row type="flex">
            <el-col :span="6" v-for="(product,index) in products" :key="index">
              <el-card :body-style="{ padding: '12px 12px 0px 12px' }">
                <div class="img">
                  <img :src="product.src"> 
                </div>                              
                <div style="padding: 4px; color:#6c6c6c">
                  <span>{{product.description}}</span>             
                </div>  
              </el-card>
            </el-col>
          </el-row>
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
  data () {
    return {
      loading:false,
      products:[
        {id:'168',src:'../../static/poster.png',description:'十佳歌手海报',folder:'1'},
        {id:'45',src:'../../static/poster.png',description:'十佳歌手海报',folder:'1'},
        {id:'99',src:'../../static/poster.png',description:'十佳歌手海报',folder:'2'},
        {id:'13',src:'../../static/poster.png',description:'十佳歌手海报',folder:'2'},
        {id:'2',src:'../../static/poster.png',description:'十佳歌手海报',folder:'3'},
        {id:'5',src:'../../static/poster.png',description:'十佳歌手海报',folder:'-1'},
        {id:'10',src:'../../static/poster.png',description:'十佳歌手海报',folder:'-1'},
        {id:'2',src:'../../static/poster.png',description:'十佳歌手海报',folder:'3'},
        {id:'5',src:'../../static/poster.png',description:'十佳歌手海报',folder:'-1'},
        {id:'5',src:'../../static/poster.png',description:'十佳歌手海报',folder:'-1'}
      ],
      searchHot:['自动清洗','天然气','双涡轮'],
      productInfos:[
        {
          category:'抽油烟机',
          tag:['侧吸式','自动清洗','T型机','双涡轮']
        },
        {
          category:'燃气灶',
          tag:['嵌入式','台式','玻璃面板','不锈钢面板','猛火']
        },
        {
          category:'消毒柜',
          tag:['高温','臭氧','大容量','嵌入式','柜式','壁挂式']
        }
      ],
      tags:[],
      selectCategory:-1,
      selectTag:-1
    }
  },
  methods: {
    searchByCategory(index) {
      this.selectCategory = index;
      if(index==-1){
        this.getAllTags();
        this.selectTag = -1;//若类别点击了全部，则标签也变为全部
      }
      else{
        this.tags = this.productInfos[index].tag;
      } 
    },
    searchByTag(index){
      this.selectTag = index;
    },
    getAllTags(){
      this.tags = [];
      this.productInfos.forEach((productInfo,index,array)=>{
        this.tags.push(...productInfo.tag.slice(0,2));
      })
    }
  },
  mounted:function(){
    this.getAllTags();
  }
}
</script>

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
  .el-col .el-col{
    margin-bottom: 0;
  }
  /*搜索框*/
  .search{
    margin-top: 20px;
  }
  .search .el-button{
    padding: 0 10px;
  }
  .search .el-button i{
    font-size: 24px;
    color: #707070;
  }
  /*热门搜索/条件选择*/
  .search-hot{
    margin-bottom:4px;
  }
  .search-hot, 
  .search-condition{
    width: 100%;
    cursor: default;
  }
  .search-hot ul, 
  .search-condition ul{
    display: inline-block;
  }
  .search-hot li, 
  .search-condition li{
    display: inline-block;
    margin-right: 10px;
    padding: 2px 6px;
    cursor:pointer;
    margin-bottom: 4px;
  }
  .search-hot li{
    background-color: #2eb4e9;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    margin-top: 15px;
  }
  .search-condition .active{
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
  /* 换行及下外边距离 */
  .content .el-row {
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .content .el-row .el-col {
    margin-top: 20px;
    margin-right: 18px;   
    flex-basis: 217px;
  }
  /* 最左边的margin */
  .content .el-col:nth-child(5n+1) {
    margin-left: 18px;
  }
  /* 相对定位 */
  .content .el-card{
    position: relative;
    cursor: pointer;
  }
    /* img */
  .content .el-card .img{
    width: 192px;
    height: 266px;
    display: flex;
    align-items: center;
  }
  .content .el-card .img img{
    width: 100%;
  }
  /* hover效果 */
  .content .el-card:hover{
    opacity: 0.9;
  }
</style>