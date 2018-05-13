<template>
  <main>
    <div class="nav">

      <div v-for="(inform,index) in informs" :key="index" class="list" @click="informDetail(index)">
        <div class="list-head">
          <p>【通知】{{inform.msgTitle}}</p>
          <p>{{inform.date|prettyDate}}</p>
        </div>
        <div class="list-body">
          <p>{{inform.msgContent}}</p>
        </div>
      </div>


    </div>
    <div class="view">
      <div class="view-head">
        <p>【通知】{{msgTitle}}</p>
        <p>{{date|prettyDate}}</p>
      </div>
      <div class="view-body">
        <p>{{msgContent}}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return{
      informs:[],
      msgTitle:'',
      msgContent:'',
      date:''
    }
  },
  filters:{
    prettyDate(val) {
      let orderDate = new Date(val);
      return `${orderDate.getFullYear()}年${orderDate.getMonth() +
        1}月${orderDate.getDate()}日`;
    }
  },
  methods:{
    informDetail(index){
      this.msgTitle = this.informs[index].msgTitle;
      this.msgContent = this.informs[index].msgContent;
      this.date = this.informs[index].date;
    }
  },
  mounted:function(){
    this.$ajax.get('/inform')
    .then(response=>{
      if (response.data.success) {
        this.informs = response.data.informs;
        this.informDetail(0);
      }
    })
    .catch(err=>{
      console.log(err);
    })

    if (this.informs!=false) {
      this.msgTitle = this.informs[0].msgTitle;
      this.msgContent = this.informs[0].msgContent;
      this.date = this.informs[0].date; 
    }
  }
}
</script>

<style scoped>
main {
  background-color: #f4f8fb !important;
  min-height: 685px;
  color: #555;
  font-size: 14px;
  display: flex;
  justify-content:center;
  align-items:center;
}
main:after {
  content:"";
  height:0;
  line-height:0;
  display:block;
  visibility:hidden;
  clear: both;
}
img {
  width: 100%;
}
button {
  cursor: pointer;
}
a{
  text-decoration:none;
}
.iconfont{
  margin-right: 10px;
  color: #41b9ea;
}
.nav{
  width: 360px;
  background-color: #ebf0f4;
  height: 560px;
  float: left;
  padding: 10px 0;
  overflow: auto;
}
.list{
  border-bottom: 1px solid #fff;
  margin: 0 30px;
  padding: 15px 0;
  cursor:pointer;
}

/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar{
    width: 3px;
    height: 16px;
    background-color: #eee;
}
/*定义滚动条的轨道，内阴影及圆角*/
::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    border-radius: 5px;
    background-color: #eee;
}
/*定义滑块，内阴影及圆角*/
::-webkit-scrollbar-thumb{
    /*width: 10px;*/
    height: 20px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #2eb4e9;
}

.list-head p{
  display: inline-block;
  margin-bottom: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list-head p:first-of-type{
  width: 220px;
  font-size: 16px;
}
.list-head p:last-of-type{
  width: 100px;
  text-align: right;
  color: #aaa;
}
.list-body{
  color: #aaa;
  display: -webkit-box !important;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.view{
  position: relative;
  width: 620px;
  background-color: #fff;
  height: 526px;
  float: left;
  margin-top: 14px;
  padding: 30px;
}
.view:before{
  content:" ";
  height: 0;
  width: 0;
  position: absolute;
  top: -14px;
  left: 0;
  border-bottom: 14px solid #cfd4d8;
  border-right: 14px solid transparent;
}
.view-head p{
  display: inline-block;
  margin-bottom: 15px;
}
.view-head p:first-of-type{
  font-size: 18px;
  width: 510px;
}
.view-head p:last-of-type{
  width: 100px;
  text-align: right;
  color: #aaa;
}
.view-body{
  color: #aaa;
  font-size: 16px;
}
</style>