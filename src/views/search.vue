<template>
  <main>
    <el-row>
      <el-col :span="12" :offset="1">
        <!-- 热门搜索 -->
        <div class="search-hot">热门搜索：
          <ul>
            <li v-for="(hot,index) in searchHot" :key="index" @click="searchByHot(index)">
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
            <li :class="{'active':selectTag==index}" @click="searchByTag(index,tag)" v-for="(tag,index) in tags" :key="index">
              {{tag}}
            </li>
          </ul>
        </div>
      </el-col>
      <!-- 产品 -->
      <el-col class="content" v-loading="loading">
        <el-row type="flex">
            <el-col :span="6" v-for="(product,index) in products" :key="index" @click.native="toDetail(product)">
              <el-card :body-style="{ padding: '12px 12px 0px 12px'}">
                <div class="img">
                  <img :src="config.baseURL+'productPic/'+ product.name+'/'+product.imgSrc" :onerror="errImg">
                </div>
                <div class="clearfix description" style="width:100%; padding: 4px; color:#6c6c6c">
                  <span>{{product.grand}}</span>
                  <span>{{product.category}}</span>
                  <span>{{product.name}}</span>
                </div>
                <div class="clearfix price" style="padding: 4px; color:#6c6c6c">
                  <i class="iconfont icon-rmb"></i><span>{{product.price}}</span>             
                </div>
              </el-card>
            </el-col>
            <el-col class="searchNull" v-if="total==0">
              <div class="searchNull">
                  <i class="iconfont icon-cry"></i>
                  <h1>查询结果为空</h1>
              </div>
            </el-col>
          </el-row>
      </el-col>
      <!-- 分页 -->
      <el-col :span="16" :offset="4" class="recommend">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="limit"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </el-col>
    </el-row>
  </main>
</template>

<script>
import config from '../config/config';
export default {
  data() {
    return {
      loading: true,
      products: [],
      searchHot: ["触控式", "嵌入式", "防冻型"],
      productInfos: [
        {
          category: "抽油烟机",
          tag: ["侧吸式", "欧式", "中式", "壁挂式"]
        },
        {
          category: "燃气灶",
          tag: ["嵌入式", "台式", "玻璃面板", "不锈钢面板", "台嵌两用","猛火"]
        },
        {
          category: "消毒碗柜",
          tag: ["柜式","双门"]
        },
        {
          category: "热水器",
          tag: ["强排式", "电热式","恒温式","防冻型"]
        }
      ],
      tags: [],
      selectCategory: -1,
      selectTag: -1,

      searchFilter: "",
      selectFilter: "",

      limit: 12,
      total: 100,
      currentPage: 1,

      errImg:'this.src="' + require('../assets/img/err.png') + '"',

      config:config
    };
  },
  methods: {
    searchByCategory(index) {
      this.selectFilter = 'category';
      this.selectCategory = index;
      this.selectTag = -1;
      if (index!=-1) {
        this.tags = this.productInfos[index].tag;
        this.$router.push({path:`/Search/${this.productInfos[index].category}`});
      }else{
        this.getAllTags();
        this.$router.push({path:`/Search/`});
      }
    },
    searchByTag(index,tag) {
      this.selectTag = index;
      this.selectFilter = 'tag';
      this.currentPage = 1;
      // 若还没选类别
      if (this.selectCategory==-1) {
        if (tag) {
          this.$router.push({path:`/Search/${tag}`})
        }
        // 若tag选了全部
        else{
          this.$router.push({path:`/Search/`});
        }
      }
      // 若已选类别
      else{
        if (tag) {
          this.$router.push({path:`/Search/${tag}`})
        }
        // 若tag选了全部
        else{
          this.selectFilter = 'category';
          this.$router.push({path:`/Search/${this.productInfos[this.selectCategory].category}`});
        }
      }
    },
    searchByHot(index){
      this.currentPage = 1;
      this.$router.push({path:`/Search/${this.searchHot[index]}`});
    },
    getAllTags() {
      this.tags = [];
      this.productInfos.forEach((productInfo, index, array) => {
        this.tags.push(...productInfo.tag.slice(0, 2));
      });
    },
    toDetail(product) {
      this.$router.push({ path: `/Detail/${product.category}/${product.grand}/${product.name}` });
    },
    loadProductData() {
      let params = {
        limit: this.limit,
        currentPage: this.currentPage,
        searchFilter: this.searchFilter,
        selectFilter: this.selectFilter
      };
      this.$ajax
        .get("/admin/product", { params: params })
        .then(response => {
          if (response.data.success) {
            this.total = response.data.total;
            
            // 若查询总数为0
            if (this.total==0) {
              this.products = [];
              this.loading = false; // 若是产品列表为空，不显示加载中
              return;
            }

            let outProduct = response.data.product;

            let getAllImgSrc = outProduct.map((value) => {
              return this.$ajax.get('/admin/product/img',{ params: {name:value.name} });
            })

            Promise.all(getAllImgSrc).then(response=>{
              response.forEach((value,index,array) => {
                if (value.data.fileList) {
                  outProduct[index].imgSrc = value.data.fileList[0];
                  this.loading = false;
                }
                if (index==array.length-1) {
                  this.products = outProduct;
                }
              })
            })
            .catch(err=>{
              console.table(err);
            })
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.loadProductData();
    },
    searchParams(){
      this.searchFilter = this.$route.params.Filters;
      this.loadProductData();
      this.selectFilter = '';
    }
  },
  mounted: function() {
    this.getAllTags();
    this.searchFilter = this.$route.params.Filters;
    this.loadProductData();
  },
  watch: {
      "$route.path": "searchParams"
  }
};
</script>

<style scoped>
main {
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  color: #555;
}
img {
  width: 100%;
}
button {
  cursor: pointer;
}
.el-row{
  min-height: 504px;
}
.el-col .el-col {
  margin-bottom: 0;
}
/*搜索框*/
.search {
  margin-top: 20px;
}
.search .el-button {
  padding: 0 10px;
}
.search .el-button i {
  font-size: 24px;
  color: #707070;
}
/*热门搜索/条件选择*/
.search-hot {
  margin-bottom: 4px;
}
.search-hot,
.search-condition {
  width: 100%;
  cursor: default;
}
.search-hot ul,
.search-condition ul {
  display: inline-block;
}
.search-hot li,
.search-condition li {
  display: inline-block;
  margin-right: 10px;
  padding: 2px 6px;
  cursor: pointer;
  margin-bottom: 4px;
}
.search-hot li {
  background-color: #2eb4e9;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  margin-top: 15px;
}
.search-condition .active {
  color: #2eb4e9;
}
/*海报推荐*/
.post-lt {
  border: 1px solid #aaa;
  padding: 15px;
  padding-bottom: 20px;
  border-radius: 5px;
}
.post-lt img {
  width: 100%;
}
.post-lt p {
  width: 100%;
  margin-top: 10px;
}
.recommend {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.recommend .post-lt {
  width: 20%;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}
/* 换行及下外边距离 */
.content .el-row {
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.content .el-row .el-col {
  margin-top: 20px;
  margin-right: 20px;
  flex-basis: 274px;
}
/* 最左边的margin */
.content .el-col:nth-child(4n + 1) {
  margin-left: 10px;
}
/* 相对定位 */
.content .el-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
/* img */
.content .el-card .img {
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
}
/* hover效果 */
.content .el-card:hover {
  opacity: 0.9;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.price i {
  color: #de1100;
}
.price span {
  font-size: 20px;
  color: #de1100;
}
/* 搜索结果为空时 */
.searchNull{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 1200px !important;
}
.searchNull h1 {
  font-size: 20px;
  color: #555;
  padding-left: 18px;
}
.searchNull i {
  font-size: 60px;
  color: #2eb4e9;
}
</style>