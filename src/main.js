// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import App from './App';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(ElementUI)

//设置api路径
axios.defaults.baseURL = "http://127.0.0.1:4040/api";
axios.defaults.withCredentials=true;

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