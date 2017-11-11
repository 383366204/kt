<template>
  <main>
    <el-row>
      <!-- 新增收货地址 -->
      <el-col :span="22" :offset="1">
        <el-row>
          <el-col :span="24"><div class="add-title"><i class="iconfont icon-add"></i><span v-if="addMode">新增</span><span v-else>修改</span>收货地址</div></el-col>
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

            <el-form-item label="详细地址" prop="detail">
              <el-input v-model="addressForm.detail" placeholder="例如：街道名称、门牌号码" size="small"></el-input>
            </el-form-item>

            <el-form-item label="邮政编码">
              <el-col :span="8">
                <el-form-item prop="zipCode">
                  <el-input v-model="addressForm.zipCode" placeholder="如果不清楚，可不填。" size="small"></el-input>
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
              <el-col :span="8">
                <el-form-item prop="phone">
                  <el-input v-model="addressForm.phone" size="small" placeholder="请输入您的手机号码"></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
            
            <el-form-item required>
              <el-checkbox v-model="addressForm.setDefault">设置为默认地址</el-checkbox>
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
            <el-col :span="3">
                <button class="add-btn" @click="editAddress(index)">编辑</button>/<button class="add-btn" @click="delAddress(index)">删除</button>
            </el-col>
            <el-col :span="2">
              <div class="default" v-if="address.isDefault">默认地址</div>
              <el-button v-else class="default setDefault" @click="setDefault(index)" type="text">设为默认地址</el-button>
            </el-col>
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
        addMode:true,
        addressForm: {
          province:'',
          city:'',
          area:'',
          detail: '',
          zipCode: '',
          name: '',
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
          {name:'团小图',region:'福建省/福州市/闽侯县',detail:'上街镇乌龙江街道高新小区 27号楼2单元101室',zipCode:'351000',phone:'15211110000',isDefault:false},
          {name:'孙先生',region:'福建省/福州市/闽侯县',detail:'乌龙江街道高新小区 27号楼2单元101室',zipCode:'351000',phone:'18928651029',isDefault:true},
          {name:'团小图',region:'福建省/福州市/闽侯县',detail:'乌龙江街道高新小区 27号楼2单元101室',zipCode:'351000',phone:'17704623483',isDefault:false}
        ],
        allProvinces:[],
        allCities:[],
        allAreas:[],
        cities:[],
        areas:[],
        provinceName:'',
        cityName:'',
        areaName:''
      };
    },
    
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //新增状态
            if (this.addMode) {
              let address={name:'',region:'',detail:'',zipCode:'',phone:'',isDefault:false};
              address.name = this.addressForm.name;
              // 找出省市区的Id
              var self = this;//外面的this
              let provinceTemp = this.allProvinces.find((province)=>{
                return province.id == self.addressForm.province;
              });
              let cityTemp = this.cities.find((city)=>{
                return city.id == self.addressForm.city;
              });
              let areaTemp = this.areas.find((area)=>{
                return area.id == self.addressForm.area;
              });

              address.region = provinceTemp.provinceName  + '/' + cityTemp.name + '/' +areaTemp.areaName;
              address.detail = this.addressForm.detail;
              address.zipCode = this.addressForm.zipCode;
              address.phone= this.addressForm.phone;
              address.isDefault =  this.addressForm.setDefault;
              this.addresses.unshift(address);
              if (address.isDefault) {
                this.setDefault(0);
              }
            }
            //编辑状态
            else{
              this.addMode = true;
            }
          }
          else {
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
        },this);

        if (!this.addMode) {//编辑模式下
          for (let i = 0; i < this.cities.length; i++) {//找出城市Id
            if (this.cities[i].name == this.cityName){
              this.addressForm.city = this.cities[i].id;
              break;
            }
          }
        }
      },
      changeCity(cityId){
        this.addressForm.area='';
        this.areas = [];
        this.allAreas.forEach(function (area) {
            if (area.cityId == cityId) {
              this.areas.push(area);
            }
        },this);

        if (!this.addMode) {//编辑模式下
          for (let i = 0; i < this.areas.length; i++) {//找出区Id
            if (this.areas[i].areaName == this.areaName){
              this.addressForm.area = this.areas[i].id;
              break;
            }
          }
        }
      },
      setDefault(index){
        for (let i = 0; i < this.addresses.length; i++) {
          if (i!=index) {
            this.addresses[i].isDefault =  false;
          }
          else{
            this.addresses[index].isDefault = true;
          }
        }
      },
      delAddress(index){
        this.$confirm('将删除该收货地址, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //如果删除的是默认地址
          if (this.addresses[index].isDefault) {
            this.addresses.splice(index,1);
            //如果还有地址，将第一个设为默认地址
            if (this.addresses[0]) {
              this.addresses[0].isDefault = true;
            }
          }
          else{
            this.addresses.splice(index,1);
          }         
          this.$notify.success({
            title: '成功',
            message: '删除地址成功',
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
      editAddress(index){
        this.addMode = false;

        this.addressForm.detail = this.addresses[index].detail;
        this.addressForm.zipCode = this.addresses[index].zipCode;
        this.addressForm.name = this.addresses[index].name;
        this.addressForm.phone = this.addresses[index].phone;
        this.addressForm.setDefault = this.addresses[index].isDefault;

        let region = this.addresses[index].region.split('/');//省市区

        this.provinceName = region[0];//省份
        this.cityName = region[1];//城市
        this.areaName = region[2];//区县

         
        for (let i = 0; i < this.allProvinces.length; i++) {//找出省份Id
          if (this.allProvinces[i].provinceName == this.provinceName) {
            this.addressForm.province = this.allProvinces[i].id;
            break;
          }
        }

        // for (let i = 0; i < this.cities.length; i++) {//找出城市Id
        //   if (this.cities[i].name == city){
        //     this.addressForm.city = this.cities[i].id;
        //     break;
        //   }
        // }

        // for (let i = 0; i < this.areas.length; i++) {//找出区Id
        //   if (this.areas[i].name == area){
        //     this.addressForm.area = this.areas[i].id;
        //     break;
        //   }
        // }

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
main {
  width: 1200px;
  margin: 0 auto;
  color: #555;
  font-size: 14px;
}
img {
  width: 100%;
}
button {
  cursor: pointer;
}
/*标题*/
.add-title,
.add-title_bj {
  font-size: 18px;
  color: #555;
  margin-top: 40px;
}
.add-title > i {
  font-size: 20px;
  color: #2eb4e9;
  margin-right: 10px;
}
.add-title_bj > i {
  font-size: 24px;
  color: #2eb4e9;
  margin-right: 10px;
}
/*新增收货地址*/
.el-form-item {
  margin-bottom: 20px;
}
.el-col > .el-form-item {
  margin-bottom: 0;
  margin-right: 10px;
}
/*编辑收货地址*/
.add-thead,
.add-tbody {
  text-align: center;
  display: flex;
  align-items: center;
  color: #555555;
  padding: 8px 0;
  margin-bottom: 0 !important;
}
.add-thead {
  background-color: #e5e5e5;
  border: 1px solid #cbcbcb;
  font-weight: 700;
}
.add-tbody {
  border: 1px solid #cbcbcb;
  border-top: none;
}
.add-tbody .el-col div {
  padding: 0 8px;
}
/*编辑、删除按钮*/
.add-btn {
  background-color: #fff;
  border: none;
  color: #555;
  font-size: 16px;
  outline: none;
}
.add-btn:hover {
  color: #2eb4e9;
}
/*默认地址*/
.add-tbody .default {
  color: #ff4949;
}
.add-tbody .default.setDefault {
  display: none;
}

.add-tbody:hover .default.setDefault {
  display: block;
}
.el-row {
  margin-bottom: 20px;
}
</style>