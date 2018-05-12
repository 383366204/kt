<template>
    <main class="main">
        <div class="title">
            <i class="iconfont icon-wancheng"></i>
            <h1>我们已收到您的付款，非常感谢您对我们的支持</h1>
        </div>
        <div class="option">
            <router-link to="/Search">
                <el-button size="large">再去逛逛</el-button>
            </router-link>
            <router-link to="/OrderList">
                <el-button size="large">查看订单</el-button>
            </router-link>
        </div>
    </main>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  mounted:function(){
    this.$ajax.get('/api/user/info')
    .then(response=>{
      if (response.data.success) {
        this.$store.commit('setUserInfo',response.data);
        console.log(response.data);
      }else{

      }
    })
    .catch(err=>{
      console.log(err);
    })
  }
};
</script>
<style scoped>
/* 主布局 */
.main {
  min-height: 685px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main .title {
  display: flex;
  align-items: center;
}
.main .title h1 {
  font-size: 20px;
  color: #555;
  padding-left: 18px;
}
.main .title i {
  font-size: 60px;
  color: #2eb4e9;
}
/* 选择按钮 */
.option {
  height: 80px;
  display: flex;
  margin-top: 50px;
  width: 370px;
  justify-content: space-around;
}
.option .el-button {
  border-color: #2eb4e9;
  color: #2eb4e9;
  width: 144px;
  height: 58px;
  font-size: 20px;
}
.option .el-button:hover {
  background-color: #2eb4e9;
  color: #fff;
}
</style>
