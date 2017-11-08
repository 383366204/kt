import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    isIndex: true, //判断是否在首页
    isLogin: true //判断是否有登录
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
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})