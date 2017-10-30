<template>
  <el-row type="flex" justify="center">
      <el-col :span="3" class="nav">
        <el-menu default-active="0" @open="handleOpen" @close="handleClose">
          <el-submenu index="Folder">
            <template slot="title"><i class="el-icon-document"></i>文件夹</template>
            <el-menu-item-group>
              <el-menu-item index="0">全部设计</el-menu-item>
              <el-menu-item :index="item.folderId" v-for="item in menus" :key="item.folderId">{{item.name}}</el-menu-item>
              <el-menu-item index="-1" @click="addMenus()" class="text-center"><i class="el-icon-plus"></i></el-menu-item>             
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="RecyleBin"><i class="el-icon-delete"></i>回收站</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="11">
        <div class="content">
          <el-row type="flex">
            <el-col :span="6" v-for="(design,index) in designs" :key="index">
              <el-card :body-style="{ padding: '12px 12px 0px 12px' }">
                <div class="operation">
                  <el-button>编辑</el-button>
                  <el-button @click="delComfirm(design.id)">删除</el-button>
                  <el-button @click="move(design.id)">移动</el-button>
                </div>      
                <img :src="design.src" width="192">                
                <div style="padding: 4px; color:#6c6c6c">
                  <span>{{design.description}}123</span>             
                </div>  
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card class="addCard text-center">
                <i class="el-icon-plus"></i>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-dialog title="移入文件夹" :visible.sync="moveFormVisible" size="tiny" top="40%" @close="cancelMove()">
        <el-form>
          <el-form-item label="移动至" :label-width="formLabelWidth">
            <el-select v-model="moveSelect" placeholder="请选择文件夹">
              <el-option label="全部设计" value="0"></el-option>
              <el-option v-for="menu in menus" :key="menu.folderId" :label="menu.name" :value="menu.folderId"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button @click="cancelMove()">取 消</el-button>
          <el-button type="primary" @click="confirmMove()">确 定</el-button>
        </div>
      </el-dialog>
  </el-row>
</template>


<script>
  export default {
    data() {
      return {
        menus:[
          {folderId :'1',name:'服装'},
          {folderId :'2',name:'海报'},
          {folderId :'3',name:'横幅'}
        ],
        designs:[
          {id:'1',src:'../../static/poster.png',description:'十佳歌手海报',folder:'0'},
          {id:'168',src:'../../static/poster.png',description:'十佳歌手海报',folder:'1'},
          {id:'45',src:'../../static/poster.png',description:'十佳歌手海报',folder:'1'},
          {id:'99',src:'../../static/poster.png',description:'十佳歌手海报',folder:'2'},
          {id:'13',src:'../../static/poster.png',description:'十佳歌手海报',folder:'2'},
          {id:'2',src:'../../static/poster.png',description:'十佳歌手海报',folder:'3'},
          {id:'5',src:'../../static/poster.png',description:'十佳歌手海报',folder:'-1'},
          {id:'10',src:'../../static/poster.png',description:'十佳歌手海报',folder:'-1'}
        ],
        moveSelect:'',
        moveFormVisible: false,
        formLabelWidth: '140px',
        moveItemId:''
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      addMenus() {
        this.$prompt('新建文件夹', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^.{1,6}$/,
          inputErrorMessage: '名称长度应为1-6个字符'
        }).then(({ value }) => {
          let newFolderId = this.menus.length+1;
          this.menus.push({'folderId': newFolderId.toString() ,'name':value});
          this.$notify.success({
            title: '成功',
            message: '新建文件夹成功',
            offset:100
          });
        }).catch(() => {
            this.$notify.warning({
            title: '提示',
            message: '已取消输入',
            offset:100
          });      
        });
      },
      delComfirm(id){
        this.$confirm('删除后将移至回收站, 可在回收站中彻底删除或恢复?', '确认删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 查找要删除的元素位置
           let i = this.designs.findIndex((item)=>item.id==id);
           this.designs.splice(i,1);
           this.$notify.success({
            title: '成功',
            message: '删除设计成功',
            offset:100
          });
        }).catch(() => {
          this.$notify.warning({
              title: '提示',
              message: '已取消删除',
              offset:100
            });        
        });
      },
      move(id){
        // 查找要移动的元素位置
        this.moveItemId = this.designs.findIndex((item)=>item.id==id);
        this.moveFormVisible = true;
      },
      cancelMove(){
        this.moveFormVisible = false;
        this.moveSelect = '';
        this.moveItemId = '';
      },
      confirmMove(){
        if(this.moveItemId>=0){
          this.designs[this.moveItemId].folderId = this.moveSelect;
          this.cancelMove();
          console.log(this.designs);
        }
      }
    }
  }
</script>
<style scoped>
    /* 左边导航栏高度 */
    .nav .el-menu{
      height: calc(100% - 50px);
      padding-top: 50px;
    }
     /* 左边宽度 */
    .nav.el-col{
        flex-basis: 222px;
    }
    /* 右边宽度 */
   .el-row > .el-col:nth-child(2){
        flex-basis: 980px;
    }

    /* 这里开始是右边的样式 */

    /* 上和左内间距 */
  .content{
    padding:45px 0 0 54px;
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
  /* 最右边的margin设为0 */
  .content .el-col:nth-child(4n) {
    margin-right: 0px;
  }
  /* 相对定位 */
  .content .el-card{
    position: relative;
  }
  /* hover后卡片里的操作 */
  .content .el-card .operation{
    position: absolute;   
    top: 26px;
    left: 35px;
    width: 146px;
    text-align: center;
  }
  /* 卡片里面隐藏的按钮 样式 */
  .content .el-card .operation .el-button{
    background-color: rgba(0, 0, 0, 0.8);
    height: 34px;
    width: 146px;
    margin-top: 30px;
    margin-left: 0;
    color: #FFF;
    border: none;
    font-size: 16px;
    visibility: hidden;
  }
  /* hover效果 */
  .content .el-card:hover{
    opacity: 0.7;
  }
  /* hover显示按钮 */
  .content .el-card:hover .operation .el-button{
    visibility: visible;
  }
   /* hover按钮 */
  .content .operation .el-button:hover{
    background-color: rgba(0, 0, 0, 0.9);
  }
  /* 最后一个添加的样式 */
  .addCard{
    border: 2px dashed;
    cursor: pointer;
  }
</style>
