import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    isIndex: true, //判断是否在首页
    isLogin: true, //判断是否有登录
    addresses: [ //收货地址
        { name: '团小图', region: '福建省/福州市/闽侯县', detail: '上街镇乌龙江街道高新小区 27号楼2单元101室', zipCode: '351000', phone: '15211110000', isDefault: false },
        { name: '孙先生', region: '福建省/福州市/闽侯县', detail: '乌龙江街道高新小区 27号楼2单元101室', zipCode: '351000', phone: '18928651029', isDefault: true },
        { name: '团小图', region: '福建省/福州市/闽侯县', detail: '乌龙江街道高新小区 27号楼2单元101室', zipCode: '351000', phone: '17704623483', isDefault: false }
    ],
    goods: [{
        id: 10001,
        page: 1,
        type: 1,
        status: 1,
        name: '冬季男款卫衣',
        description: '红色',
        src: '../../static/clothes2.png',
        size: ['S', 'M', 'L', 'XL', 'XXl'],
        num: [1, 1, 1, 1, 1],
        price: 200
    }, {
        id: 10002,
        page: 1,
        type: 2,
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
        type: 3,
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
        type: 3,
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
        type: 3,
        status: 5,
        name: '横幅',
        description: '',
        src: '../../static/banner2.jpg',
        size: ['5m'],
        num: [1],
        price: 50
    }],
    checkOutGoods: [],
    token:null,
    userInfo: {
        nickName:'孙先生',
        level:'普通会员',
        email: "383366204@qq.com",
        phone: "18928651029"
    }
}

const getters = {

}

const actions = {

}

const mutations = {
    setIndexTrue(state) {
        state.isIndex = true;
    },
    setIndexFalse(state) {
        state.isIndex = false;
    },
    login(state,token) {
        state.isLogin = true;
        state.token = token;
    },
    logout(state,router) {
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
    }
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})