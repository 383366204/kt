<template>
    <div class="indexBackground">
        <el-row type="flex" justify="center">
            <el-col :span="8">
                <div class="words">
                    <img src="../assets/img/KATEN.png">
                    <h1>令你生活更满意的厨卫专家</h1>
                </div>
                <el-button type="primary" id="startToDesign">开始选购</el-button>  
            </el-col>
            <el-col :span="7">
                <img src="../assets/img/computer.png" width="600">
            </el-col>
        </el-row>
    </div>
    
</template>
   
<script>
    export default {
    data() {
      return {
        
      };
    }
  }
</script>

<style scoped>
    /* 上边的空位 */
    .indexBackground{
        padding-top: 66px;
    }
    /* 左边区域的布局 */
    .indexBackground .el-row .el-col{
        flex-basis: 600px;
    }
    /* 左边区域的布局 */
    .indexBackground .el-row .el-col:first-child{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;   
    }
    /* 左边的按钮 */
    #startToDesign{
        width: 155px;
        height: 55px;
        font-size: 29px;
        font-weight: lighter;
        border: 1px solid #FFF;
        background-color: transparent;
        align-self: flex-start;
        margin-top: -100px;
        margin-left: 84px;
    }
    #startToDesign:hover{
        background-color: #FFF;
        color: #3abaeb;
    }
    .words{
        position: relative;
    }
    .words h1{
        position: absolute;
        top: 12px;
        left: 60px;
        font-size: 36px;
        color: #FFF;
        font-weight: lighter;
    }
</style>
