<template>
  <main>
    <div class="nav">
      <div class="list">
        <div class="list-head">
          <p>【通知】我是标题啊标题啊......</p><!-- 
           --><p>2017-10-27</p>
        </div>
        <div class="list-body">
          <p>红鲤鱼与绿鲤鱼与驴，红鲤鱼与绿鲤鱼与驴红鲤鱼
          与绿鲤鱼与驴。红鲤鱼与绿鲤鱼与驴红鲤鱼与绿鲤
          鱼与驴。</p>
        </div>
      </div>
      <div class="list">
        <div class="list-head">
          <p>【通知】我是标题啊标题啊......</p><!-- 
           --><p>2017-10-27</p>
        </div>
        <div class="list-body">
          <p>红鲤鱼与绿鲤鱼与驴，红鲤鱼与绿鲤鱼与驴红鲤鱼
          与绿鲤鱼与驴。红鲤鱼与绿鲤鱼与驴红鲤鱼与绿鲤
          鱼与驴。</p>
        </div>
      </div>
      <div class="list">
        <div class="list-head">
          <p>【通知】我是标题啊标题啊......</p><!-- 
           --><p>2017-10-27</p>
        </div>
        <div class="list-body">
          <p>红鲤鱼与绿鲤鱼与驴，红鲤鱼与绿鲤鱼与驴红鲤鱼
          与绿鲤鱼与驴。红鲤鱼与绿鲤鱼与驴红鲤鱼与绿鲤
          鱼与驴。</p>
        </div>
      </div>
      <div class="list">
        <div class="list-head">
          <p>【通知】我是标题啊标题啊......</p><!-- 
           --><p>2017-10-27</p>
        </div>
        <div class="list-body">
          <p>红鲤鱼与绿鲤鱼与驴，红鲤鱼与绿鲤鱼与驴红鲤鱼
          与绿鲤鱼与驴。红鲤鱼与绿鲤鱼与驴红鲤鱼与绿鲤
          鱼与驴。</p>
        </div>
      </div>
      <div class="list">
        <div class="list-head">
          <p>【通知】我是标题啊标题啊......</p><!-- 
           --><p>2017-10-27</p>
        </div>
        <div class="list-body">
          <p>红鲤鱼与绿鲤鱼与驴，红鲤鱼与绿鲤鱼与驴红鲤鱼
          与绿鲤鱼与驴。红鲤鱼与绿鲤鱼与驴红鲤鱼与绿鲤
          鱼与驴。</p>
        </div>
      </div>
    </div>
    <div class="view">
      <div class="view-head">
        <p>【通知】我是标题啊标题啊......</p><!-- 
         --><p>2017-10-27</p>
      </div>
      <div class="view-body">
        <p>红鲤鱼与绿鲤鱼与驴，红鲤鱼与绿鲤鱼与驴红鲤鱼
        与绿鲤鱼与驴。红鲤鱼与绿鲤鱼与驴红鲤鱼与绿鲤
        鱼与驴。</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Address',
  data() {

  }
}
</script>
<style>
body{
  background-color: #f4f8fb !important;
}
</style>
<style scoped>
body{
  background-color: #f4f8fb !important;
}
main {
  width: 1040px;
  margin: 80px auto;
  color: #555;
  font-size: 14px;
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
  padding: 20px 0;
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
  width: 77px;
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