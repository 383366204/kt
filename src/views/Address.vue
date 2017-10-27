<template>
  <main>
    <el-row>
      <!-- 新增收货地址 -->
      <el-col :span="22" :offset="1">
        <el-row>
          <el-col :span="24"><div class="add-title"><i class="iconfont icon-add"></i>新增收货地址</div></el-col>
        </el-row>

        <el-row>
          <el-col :span="20" :offset="1">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="所在地址" :gutter="20" required>
              <el-col :span="4">
                <el-form-item prop="add_1">
                    <el-select v-model="ruleForm.add_1.add1[0]" placeholder="省份" size="small">
                      <el-option :label="ruleForm.add_1.add1[0]" value="shanghai"></el-option>
                      <el-option :label="ruleForm.add_1.add1[0]" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item prop="add_1">
                    <el-select v-model="ruleForm.add_1.add2[0]" placeholder="城市" size="small">
                      <el-option :label="ruleForm.add_1.add2[0]" value="shanghai"></el-option>
                      <el-option :label="ruleForm.add_1.add2[0]" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item prop="add_1">
                    <el-select v-model="ruleForm.add_1.add3[0]" placeholder="县区" size="small">
                      <el-option :label="ruleForm.add_1.add3[0]" value="shanghai"></el-option>
                      <el-option :label="ruleForm.add_1.add3[0]" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item prop="add_1">
                    <el-select v-model="ruleForm.add_1.add4[0]" placeholder="街道" size="small">
                      <el-option :label="ruleForm.add_1.add4[0]" value="shanghai"></el-option>
                      <el-option :label="ruleForm.add_1.add4[0]" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
              </el-col>
            </el-form-item>

            <el-form-item label="详细地址" prop="add_2">
              <el-input v-model="ruleForm.add_2" placeholder="例如：街道名称、门牌号码" size="small"></el-input>
            </el-form-item>

            <el-form-item label="邮政编码">
              <el-col :span="8">
                <el-form-item prop="postcode">
                  <el-input v-model="ruleForm.postcode" placeholder="如果不清楚，可不填。" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
  
            <el-form-item label="收货人姓名" required>
              <el-col :span="8">
                <el-form-item prop="name">
                  <el-input v-model="ruleForm.name" placeholder="长度不超过25个字符" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>

            <el-form-item label="手机号码" required>
              <el-col :span="3">
                <el-form-item prop="phone_local">
                    <el-select v-model="ruleForm.phone_local" placeholder="中国" size="small">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item prop="phone">
                  <el-input v-model="ruleForm.phone" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
            
            <el-form-item required>
              <input type="checkbox">设置为默认地址
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="submitForm('ruleForm')">保存</el-button>
            </el-form-item>

          </el-form>
          </el-col>
        </el-row>

      </el-col>

      <!-- 编辑收货地址 -->
      <el-col :span="22" :offset="1">

        <el-row>
          <el-col :span="24"><div class="add-title_bj"><i class="iconfont icon-bianji"></i>编辑收货地址</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1">
          <el-row class="add-thead">
            <el-col :span="3"><div>收货人</div></el-col>
            <el-col :span="5"><div>所在地区</div></el-col>
            <el-col :span="6"><div>详细地址</div></el-col>
            <el-col :span="2"><div>邮编</div></el-col>
            <el-col :span="3"><div>电话号码/手机</div></el-col>
            <el-col :span="3"><div>操作</div></el-col>
          </el-row>
          </el-col>

          <el-col :span="22" :offset="1">
          <el-row class="add-tbody">
            <el-col :span="3"><div>团小图</div></el-col>
            <el-col :span="5"><div>福建省福州市闽侯县上街镇</div></el-col>
            <el-col :span="6"><div>乌龙江街道高新小区 27号楼2单元101室</div></el-col>
            <el-col :span="2"><div>351000</div></el-col>
            <el-col :span="3"><div>15211110000</div></el-col>
            <el-col :span="3"><div><button class="add-btn">编辑</button>/<button class="add-btn">删除</button></div></el-col>
            <el-col :span="2"><div class="important">默认地址</div></el-col>
          </el-row>
          </el-col>

          <el-col :span="22" :offset="1">
          <el-row class="add-tbody">
            <el-col :span="3"><div>团小图</div></el-col>
            <el-col :span="5"><div>福建省福州市闽侯县上街镇</div></el-col>
            <el-col :span="6"><div>乌龙江街道高新小区 27号楼2单元101室</div></el-col>
            <el-col :span="2"><div>351000</div></el-col>
            <el-col :span="3"><div>15211110000</div></el-col>
            <el-col :span="3"><div><button class="add-btn">编辑</button>/<button class="add-btn">删除</button></div></el-col>
            <el-col :span="2"><div></div></el-col>
          </el-row>
          </el-col>
        </el-row>
      </el-col>


    </el-row>

  </main>
</template>

<script>
export default {
  name: 'Address',
  data() {
      return {
        ruleForm: {
          add_1: {
            add1:["福建省"],
            add2:["福州市"],
            add3:["闽侯县"],
            add4:["上街镇"]
          },
          add_2: '',
          postcode: '',
          name: '',
          phone_local: '',
          phone: ''          
        },
        rules: {
          add_1: [
            { required: true, message: '请选择您的地址', trigger: 'change' }
          ],
          add_2: [
            { required: true, message: '请输入您的详细地址', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入您的姓名', trigger: 'blur' },
            { max: 25, message: '长度不超过25个字符', trigger: 'blur' }
          ],
          phone_local: [
            { required: true, trigger: 'change' }
          ],
          phone: [
            { required: true, message: '请输入您的手机号码', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped>
  main{
    width: 1200px;
    margin: 0 auto;
    color: #555;
  }
  img{
    width: 100%;
  }
  button{
    cursor: pointer;
  }
  .add-title,
  .add-title_bj{
    font-size: 20px;
    color: #555;
    margin-top: 40px;
  }
  .add-title > i{
    font-size: 22px;
    color: #2eb4e9;
    margin-right: 10px;
  }
  .add-title_bj > i{
    font-size: 28px;
    color: #2eb4e9;
    margin-right: 10px;
  }
  .el-form-item{
    margin-bottom: 20px;
  }
  .el-col > .el-form-item{
    margin-bottom: 0;
    margin-right: 10px;
  }

  .add-thead,
  .add-tbody{
    text-align: center;
    display: flex;
    align-items: center;
    color: #555555;
    font-size: 14px;
    padding: 8px 0;
    margin-bottom: 0 !important;
  }
  .add-thead{
    background-color: #e5e5e5;
    border: 1px solid #cbcbcb;
    font-weight: 700;
  }
  .add-tbody{
    border: 1px solid #cbcbcb;
    border-top: none;
  }
  .add-tbody .el-col div{
    padding: 0 8px;
  }
  .add-btn{
    background-color: #fff;
    border: none;
    color: #555;
    font-size: 16px;
  }
  .add-btn:hover{
    color: #2eb4e9;
  }
  .important{
    color: #ff4949;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>