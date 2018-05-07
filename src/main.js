// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import App from './App';
import router from './router';
import axios from 'axios';
import config from './config/config';

Vue.config.productionTip = false

Vue.use(ElementUI)

//设置api路径
axios.defaults.baseURL = config.baseURL;
axios.defaults.withCredentials=true;

axios.interceptors.request.use(
    config => {
        if (store.getters.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `${store.getters.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit("logout",router);
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

Vue.prototype.$ajax = axios;


router.beforeEach((to,from,next) => {
    //网页跳转到最顶
    window.scrollTo(0, 0);
    //不是从购物车转到订单页的都转到购物车
    if(to.name=='Order'&&from.name!='Cart'){
        next({
            path:'/Cart'
        })
    }
    if (to.meta.requireAuth) {
        if (store.state.token) {
            next();
        } else {
            next({
                path:'/login',
                query:{
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})