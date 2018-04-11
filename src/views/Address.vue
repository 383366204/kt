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
            <el-col :span="2"><div>邮政编码</div></el-col>
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
                <div v-else-if="!address.isDefault&&addMode" class="default setDefault" @click="setDefaultAddress(index)" type="text">设为默认地址</div>
              </el-col>
            </el-row>
            <el-row class="add-tbody" v-if="isAddressEmpty">
              <el-col :span="24">
                <div class="noAddress">
                  您现在暂时没有收货地址哦，请在上方新增一个吧
                </div>
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
  name: "Address",
  data() {
    return {
      addMode: true,
      addressForm: {
        province: "",
        city: "",
        area: "",
        detail: "",
        zipCode: "",
        name: "",
        phone: "",
        setDefault: false
      },
      addressRules: {
        province: [
          { required: true, message: "请选择所在的省份", trigger: "submit" }
        ],
        city: [
          { required: true, message: "请选择所在的城市", trigger: "submit" }
        ],
        area: [
          { required: true, message: "请选择您所在的县或区", trigger: "submit" }
        ],
        detail: [
          { required: true, message: "请输入您的详细地址", trigger: "blur" }
        ],
        zipCode: [
          {
            pattern: /^\d{6}$/,
            message: "请输入正确的邮政编码",
            trigger: "blur"
          }
        ],
        name: [
          { required: true, message: "请输入您的姓名", trigger: "blur" },
          { max: 25, message: "长度不超过25个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入您的手机号码", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确的手机号码", trigger: "blur" }
        ]
      },
      addresses: [],
      allProvinces: [],
      allCities: [],
      allAreas: [],
      cities: [],
      areas: [],
      provinceName: "",
      cityName: "",
      areaName: "",
      editIndex: -1 //正在编辑地址的index
    };
  },
  computed: {
    isAddressEmpty: function() {
      return this.addresses == false;
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let address = {
            name: "",
            region: "",
            detail: "",
            zipCode: "",
            phone: "",
            isDefault: !this.addresses
          };
          address.name = this.addressForm.name;
          // 找出省市区的Id
          var self = this; //外面的this
          let provinceTemp = this.allProvinces.find(province => {
            return province.id == self.addressForm.province;
          });
          let cityTemp = this.cities.find(city => {
            return city.id == self.addressForm.city;
          });
          let areaTemp = this.areas.find(area => {
            return area.id == self.addressForm.area;
          });

          address.region =
            provinceTemp.provinceName +
            "/" +
            cityTemp.name +
            "/" +
            areaTemp.areaName;
          address.detail = this.addressForm.detail;
          address.zipCode = this.addressForm.zipCode;
          address.phone = this.addressForm.phone;        
          address.isDefault = this.addressForm.setDefault;
           // 若原本没有地址则设为默认地址
          if(this.addresses==false){
            address.isDefault = true;
          }

          //新增状态
          if (this.addMode) {
            this.$ajax
              .post("/user/address", address)
              .then(response => {
                if (response.data.success) {
                  this.$notify.success({
                    title: "成功",
                    message: response.data.message,
                    offset: 100
                  });
                  // 添加时成功后，将新增的地址unshift到前面
                  this.addresses.unshift(response.data.address);
                  //若设为默认或地址只有一个时
                  if (address.isDefault||this.addresses.length==1) {
                    this.setDefault(0);
                  }
                } else {
                  this.$notify.error({
                    title: "失败",
                    message: response.data.message,
                    offset: 100
                  });
                }
              })
              .catch(err => {
                if (err.response.status == 401) {
                  this.$alert("登录状态已失效，请重新登录", "注意", {
                    confirmButtonText: "确定",
                    callback: action => {
                      this.$store.commit("logout", this.$router);
                    }
                  });
                }
              });
          } else {
            //编辑状态

            // 编辑状态要带上id
            address._id = this.addresses[this.editIndex]._id;
            this.$ajax
              .put("/user/address", address)
              .then(response => {
                if (response.data.success) {
                  this.$notify.success({
                    title: "成功",
                    message: response.data.message,
                    offset: 100
                  });

                  //修改成功后的处理
                  this.addresses[this.editIndex] = address;
                  if (address.isDefault) {
                    this.setDefault(this.editIndex);
                  }
                  //保存后变回新增模式
                  this.addMode = true;
                  //如果把默认地址改为了非默认地址，则将第一个设为默认地址
                  if (
                    !this.addresses.some(item => {
                      return item.isDefault;
                    })
                  ) {
                    this.setDefault(0);
                  }
                } else {
                  this.$notify.error({
                    title: "失败",
                    message: response.data.message,
                    offset: 100
                  });
                }
              })
              .catch(err => {
                if (err.response.status == 401) {
                  this.$alert("登录状态已失效，请重新登录", "注意", {
                    confirmButtonText: "确定",
                    callback: action => {
                      this.$store.commit("logout", this.$router);
                    }
                  });
                }
              });
          }
          this.resetForm("addressForm"); //清空表单
          this.addressForm.setDefault = false; //清空设为默认
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getProvince() {
      this.$ajax
        .get("../json/queryAllProvinces.json")
        .then(
          function(response) {
            this.allProvinces = response.data.provinces;
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    getCities() {
      this.$ajax
        .get("../json/queryCities.json")
        .then(
          function(response) {
            this.allCities = response.data.cities;
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    getAreas() {
      this.$ajax
        .get("../json/queryAllAreas.json")
        .then(
          function(response) {
            this.allAreas = response.data.areas;
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    changeProvince(provinceId) {
      this.addressForm.city = "";
      this.addressForm.area = "";
      this.cities = [];
      this.allCities.forEach(function(city) {
        if (city.provinceId == provinceId) {
          this.cities.push(city);
        }
      }, this);

      if (!this.addMode) {
        //编辑模式下
        for (let i = 0; i < this.cities.length; i++) {
          //找出城市Id
          if (this.cities[i].name == this.cityName) {
            this.addressForm.city = this.cities[i].id;
            break;
          }
        }
      }
    },
    changeCity(cityId) {
      this.addressForm.area = "";
      this.areas = [];
      this.allAreas.forEach(function(area) {
        if (area.cityId == cityId) {
          this.areas.push(area);
        }
      }, this);

      if (!this.addMode) {
        //编辑模式下
        for (let i = 0; i < this.areas.length; i++) {
          //找出区Id
          if (this.areas[i].areaName == this.areaName) {
            this.addressForm.area = this.areas[i].id;
            break;
          }
        }
      }
    },
    setDefault(index) {
      for (let i = 0; i < this.addresses.length; i++) {
        if (i != index) {
          this.addresses[i].isDefault = false;
        } else {
          this.addresses[index].isDefault = true;
        }
      }
    },
    delAddress(index) {
      this.$confirm("将删除该收货地址, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$ajax
            .delete("/user/address", {
              // delete方法要加data
              data: {
                _id: this.addresses[index]._id
              }
            })
            .then(response => {
              if (response.data.success) {
                this.$notify.success({
                  title: "成功",
                  message: response.data.message,
                  offset: 100
                });

                this.addresses.splice(index, 1);
                ////如果删除的是默认地址,而且还有地址，将第一个设为默认地址
                if (this.addresses[0]) {
                  this.addresses[0].isDefault = true;
                }
              } else {
                this.$notify.error({
                  title: "失败",
                  message: response.data.message,
                  offset: 100
                });
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          this.$notify.warning({
            title: "提示",
            message: "已取消删除",
            offset: 100
          });
        });
    },
    editAddress(index) {
      this.addMode = false; //设定为编辑模式
      this.editIndex = index; //正在编辑的地址名单

      this.addressForm.detail = this.addresses[index].detail;
      this.addressForm.zipCode = this.addresses[index].zipCode;
      this.addressForm.name = this.addresses[index].name;
      this.addressForm.phone = this.addresses[index].phone;
      this.addressForm.setDefault = this.addresses[index].isDefault;

      let region = this.addresses[index].region.split("/"); //省市区

      this.provinceName = region[0]; //省份
      this.cityName = region[1]; //城市
      this.areaName = region[2]; //区县

      for (let i = 0; i < this.allProvinces.length; i++) {
        //找出省份Id
        if (this.allProvinces[i].provinceName == this.provinceName) {
          this.addressForm.province = this.allProvinces[i].id;
          this.changeProvince(this.addressForm.province);
          break;
        }
      }
      for (let i = 0; i < this.cities.length; i++) {
        //找出城市Id
        if (this.cities[i].name == this.cityName) {
          this.addressForm.city = this.cities[i].id;
          this.changeCity(this.addressForm.city);
          break;
        }
      }
      for (let i = 0; i < this.areas.length; i++) {
        //找出区县Id
        if (this.areas[i].areaName == this.areaName) {
          this.addressForm.area = this.areas[i].id;
          break;
        }
      }
    },
    setDefaultAddress(index) {
      let address = {
        _id : this.addresses[index]._id,
        isDefault: true
      };
      this.$ajax
        .put("/user/address", address)
        .then(response => {
          if (response.data.success) {
            this.$notify.success({
              title: "成功",
              message: response.data.message,
              offset: 100
            });
            this.setDefault(index);
          } else {
            this.$notify.error({
              title: "失败",
              message: response.data.message,
              offset: 100
            });
          }
        })
        .catch(err => {
          if (err.response.status == 401) {
            this.$alert("登录状态已失效，请重新登录", "注意", {
              confirmButtonText: "确定",
              callback: action => {
                this.$store.commit("logout", this.$router);
              }
            });
          }
        });
    }
  },
  mounted: function() {
    this.$ajax
      .get("/user/address")
      .then(response => {
        if (response.data.success) {
          this.addresses = response.data.address;
        }
      })
      .catch(err => {
        if (err.response.status == 401) {
          this.$alert("登录状态已失效，请重新登录", "注意", {
            confirmButtonText: "确定",
            callback: action => {
              this.$store.commit("logout", this.$router);
            }
          });
        }
      });
    this.getProvince();
    this.getCities();
    this.getAreas();
  },
  watch: {
    addresses: {
      handler: function(val, OldVal) {
        this.$store.commit("setAddress", this.addresses);
      },
      deep: true
    }
  }
};
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
  background-color: transparent;
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
  cursor: pointer;
  display: none;
  width: 100px;
  padding-left: 0;
  margin-left: -10px;
}

.add-tbody:hover .default.setDefault {
  display: block;
}
.el-row {
  margin-bottom: 20px;
}
</style>