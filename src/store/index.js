import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
const state = {
  isIndex: true, //判断是否在首页
  isLogin: false, //判断是否有登录
  addresses: [], //收货地址
  cart:[{
    id: 10001,
    page: 1,
    status: 1,
    name: '冬季男款卫衣',
    description: '红色',
    src: '../../static/clothes2.png',
    size: '65*100cm',
    num: 1,
    price: 200
  }, {
    id: 10002,
    page: 1,
    status: 2,
    name: '记忆协会海报',
    description: '',
    src: '../../static/poster2.png',
    size: '65*100cm',
    num: 1,
    price: 50
  }, {
    id: 10003,
    page: 1,
    status: 3,
    name: '横幅',
    description: '',
    src: '../../static/banner2.jpg',
    size: '5m',
    num: 1,
    price: 50
  }, {
    id: 10004,
    page: 1,
    status: 4,
    name: '横幅',
    description: '',
    src: '../../static/banner2.jpg',
    size: '5m',
    num: 1,
    price: 50
  }, {
    id: 10005,
    page: 1,
    status: 5,
    name: '横幅',
    description: '',
    src: '../../static/banner2.jpg',
    size: '5m',
    num: 1,
    price: 50
  }],
  goods: [{
    id: 10001,
    page: 1,
    status: 1,
    name: '冬季男款卫衣',
    description: '红色',
    src: '../../static/clothes2.png',
    size: ['65*100cm'],
    num: [1],
    price: 200
  }, {
    id: 10002,
    page: 1,
    status: 2,
    name: '记忆协会海报',
    description: '',
    src: '../../static/poster2.png',
    size: ['65*100cm'],
    num: [1],
    price: 50
  }, {
    id: 10003,
    page: 1,
    status: 3,
    name: '横幅',
    description: '',
    src: '../../static/banner2.jpg',
    size: ['5m'],
    num: [1],
    price: 50
  }, {
    id: 10004,
    page: 1,
    status: 4,
    name: '横幅',
    description: '',
    src: '../../static/banner2.jpg',
    size: ['5m'],
    num: [1],
    price: 50
  }, {
    id: 10005,
    page: 1,
    status: 5,
    name: '横幅',
    description: '',
    src: '../../static/banner2.jpg',
    size: ['5m'],
    num: [1],
    price: 50
  }],
  checkOutGoods: [],
  token: null,
  userInfo: {
    nickName: '',
    level: '',
    email: '',
    phone: '',
    levelTime:Date,
    headPicUrl:''
  }
}

const getters = {

}

const actions = {
  // setUserInfo(context){
  //   context.commit('login');
  // }
}

const mutations = {
  setIndexTrue(state) {
    state.isIndex = true;
  },
  setIndexFalse(state) {
    state.isIndex = false;
  },
  setUserInfo(state, data){
    state.userInfo.nickName = data.nickName;
    state.userInfo.level = data.level;
    state.userInfo.email = data.email;
    state.userInfo.phone = data.phone;
    state.userInfo.levelTime = parseInt(Math.abs(new Date(data.levelTime)  - new Date())/ 1000 / 60 / 60 / 24)
    state.userInfo.headPicUrl = 'http://127.0.0.1:4040'+data.headPicUrl;
  },
  login(state, data) {
    //登录
    state.isLogin = true;
    state.token = data.token;
    state.userInfo.nickName = data.nickName;
    state.userInfo.level = data.level;
    state.userInfo.email = data.email;
    state.userInfo.phone = data.phone;
    state.userInfo.levelTime = parseInt(Math.abs(new Date(data.levelTime)  - new Date())/ 1000 / 60 / 60 / 24)
    state.userInfo.headPicUrl = 'http://127.0.0.1:4040'+data.headPicUrl;
    // 设置头部
    Vue.prototype.$ajax.defaults.headers.common['Authorization'] = state.token;
  }
  ,
  logout(state, router) {
    state.isLogin = false;
    state.token = null;
    router.push({
      path: '/'
    });
  },
  setAddress(state, address) {
    state.addresses = address;
  },
  setCheckOutGoods(state, checkOutGoods) {
    state.checkOutGoods = checkOutGoods;
  },
  getVeriCode(state, getVeriParams) {
    let param = {};
    let ajax = getVeriParams.ajax;
    if (getVeriParams.type == 'email') {
      param.email = getVeriParams.userId;
    } else if (getVeriParams.type == 'phone') {
      param.phone = getVeriParams.userId;
    }
    // 获取验证码
    ajax.put('/user/verification', param)
      .then(response => {
        if (response.data.success) {
          console.log(response.data.message);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
