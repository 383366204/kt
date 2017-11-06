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
          <el-form :model="addressForm" :rules="addressRules" ref="addressForm" label-width="100px">
            <el-form-item label="所在地址" :gutter="20" required>
              <el-col :span="4">
                <el-form-item prop="province">
                    <el-select v-model="addressForm.province" @change="changeProvince($event)" placeholder="省份" size="small">
                      <el-option v-for="province in allProvinces" :key="province.id" :label="province.provinceName" :value="province.id"></el-option>
                    </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item prop="city">
                    <el-select v-model="addressForm.city"  @change="changeCity($event)" placeholder="城市" size="small">
                      <el-option v-for="city in cities" :key="city.id" :label="city.name" :value="city.id"></el-option>
                    </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item prop="area">
                    <el-select v-model="addressForm.area" placeholder="县区" size="small">
                      <el-option v-for="area in areas" :key="area.id" :label="area.areaName" :value="area.id"></el-option>
                    </el-select>
                </el-form-item>
              </el-col>
            </el-form-item>

            <el-form-item label="详细地址" prop="add_2">
              <el-input v-model="addressForm.detail" placeholder="例如：街道名称、门牌号码" size="small"></el-input>
            </el-form-item>

            <el-form-item label="邮政编码">
              <el-col :span="8">
                <el-form-item prop="postcode">
                  <el-input v-model="addressForm.postcode" placeholder="如果不清楚，可不填。" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
  
            <el-form-item label="收货人姓名" required>
              <el-col :span="8">
                <el-form-item prop="name">
                  <el-input v-model="addressForm.name" placeholder="长度不超过25个字符" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>

            <el-form-item label="手机号码" required>
              <!-- <el-col :span="3">
                <el-form-item prop="phone_local">
                    <el-select v-model="addressForm.phone_local" placeholder="中国" size="small">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
              </el-col> -->
              <el-col :span="8">
                <el-form-item prop="phone">
                  <el-input v-model="addressForm.phone" size="small" placeholder="请输入您的手机号码"></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
            
            <el-form-item required>
              <el-checkbox v-model="addressForm.setDefault" checked="checked">设置为默认地址</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="submitForm('addressForm')">保存</el-button>
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
          <el-row class="add-tbody" v-for="(address,index) in addresses" :key="index">
            <el-col :span="3"><div>{{address.name}}</div></el-col>
            <el-col :span="5"><div>{{address.region}}</div></el-col>
            <el-col :span="6"><div>{{address.detail}}</div></el-col>
            <el-col :span="2"><div>{{address.zipCode}}</div></el-col>
            <el-col :span="3"><div>{{address.phone}}</div></el-col>
            <el-col :span="3"><div><button class="add-btn">编辑</button>/<button class="add-btn">删除</button></div></el-col>
            <el-col :span="2"><div class="important" v-if="address.isDefault">默认地址</div></el-col>
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
        addressForm: {
          province:'',
          city:'',
          area:'',
          detail: '',
          postcode: '',
          name: '',
          phone_local: '',
          phone: '',
          setDefault: false
        },
        addressRules: {
          province: [
            { required: true, message: '请选择所在的省份', trigger: 'submit' }
          ],
          city: [
            { required: true, message: '请选择所在的城市', trigger: 'submit' }
          ],
          area: [
            { required: true, message: '请选择您所在的县或区', trigger: 'submit' }
          ],
          detail: [
            { required: true, message: '请输入您的详细地址', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入您的姓名', trigger: 'blur' },
            { max: 25, message: '长度不超过25个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入您的手机号码', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur' }
          ]
        },
        addresses:[
          {name:'团小图',region:'福建省福州市闽侯县上街镇',detail:'乌龙江街道高新小区 27号楼2单元101室',zipCode:'351000',phone:'15211110000',isDefault:false},
          {name:'孙先生',region:'福建省福州市闽侯县上街镇',detail:'乌龙江街道高新小区 27号楼2单元101室',zipCode:'351000',phone:'18928651029',isDefault:true},
          {name:'团小图',region:'福建省福州市闽侯县上街镇',detail:'乌龙江街道高新小区 27号楼2单元101室',zipCode:'351000',phone:'17704623483',isDefault:false}
        ],
        allProvinces:[],
        allCities:[],
        allAreas:[],
        cities:[],
        areas:[]
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
      },
      getProvince(){
        this.$ajax.get('../../static/json/queryAllProvinces.json',{

        })
        .then(function (response) {
          this.allProvinces = response.data.provinces;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        })
      },
      getCities(){
        this.$ajax.get('../../static/json/queryCities.json',{
        })
        .then(function (response) {
          this.allCities = response.data.cities;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        })
      },
       getAreas(){
        this.$ajax.get('../../static/json/queryAllAreas.json',{
        })
        .then(function (response) {
          this.allAreas = response.data.areas;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        })
      },
      changeProvince(provinceId){
        this.addressForm.city='';
        this.addressForm.area='';
        this.cities = [];
        this.allCities.forEach(function (city) {
           if (city.provinceId == provinceId) {
             this.cities.push(city);
           }
        },this)
      },
      changeCity(cityId){
        this.addressForm.area='';
        this.areas = [];
        this.allAreas.forEach(function (area) {
           if (area.cityId == cityId) {
             this.areas.push(area);
           }
        },this)
      }
    },
    mounted:function(){
      this.getProvince();
      this.getCities();
      this.getAreas();
    },
    computed:{
      
    }
}
</script>

<style scoped>
  main{
    width: 1200px;
    margin: 0 auto;
    color: #555;
    font-size: 14px;
  }
  img{
    width: 100%;
  }
  button{
    cursor: pointer;
  }
  /*标题*/
  .add-title,
  .add-title_bj{
    font-size: 18px;
    color: #555;
    margin-top: 40px;
  }
  .add-title > i{
    font-size: 20px;
    color: #2eb4e9;
    margin-right: 10px;
  }
  .add-title_bj > i{
    font-size: 24px;
    color: #2eb4e9;
    margin-right: 10px;
  }
  /*新增收货地址*/
  .el-form-item{
    margin-bottom: 20px;
  }
  .el-col > .el-form-item{
    margin-bottom: 0;
    margin-right: 10px;
  }
  /*编辑收货地址*/
  .add-thead,
  .add-tbody{
    text-align: center;
    display: flex;
    align-items: center;
    color: #555555;
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
  /*编辑、删除按钮*/
  .add-btn{
    background-color: #fff;
    border: none;
    color: #555;
    font-size: 16px;
  }
  .add-btn:hover{
    color: #2eb4e9;
  }
  /*默认地址*/
  .important{
    color: #ff4949;
  }
  
  .el-row {
    margin-bottom: 20px;
  }
</style>