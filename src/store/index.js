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
    ]
}

const getters = {
    getIsIndex(state) {
        return state.isIndex;
    },
    getIsLogin(state) {
        return state.isLogin;
    }
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
    login(state) {
        state.isLogin = true;
    },
    logout(state) {
        state.isLogin = false;
    },
    setAddress(state, address) {
        state.addresses = address;
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})