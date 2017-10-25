import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    isIndex: false, //判断是否在首页
    isLogin: false //判断是否有登录
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
    setIsIndex(state) {
        state.index = true;
    },
    setIsLogin(state) {
        state.login = true;
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})